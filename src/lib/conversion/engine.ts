"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL, fetchFile } from "@ffmpeg/util";
import { ConversionItem, ConversionSettings, ConversionStage } from "./types";
import { buildFFmpegArgs } from "./pipeline";
import { SUPPORTED_OUTPUT_FORMATS } from "../config/formats";
import { getFileBaseName, sanitizeFilename } from "../utils/formatters";

class ConversionEngine {
  private ffmpeg: FFmpeg | null = null;
  private isLoaded: boolean = false;
  private isLoading: boolean = false;
  private loadPromise: Promise<void> | null = null;
  private currentItemId: string | null = null;
  private isCancelled: boolean = false;

  public async getFFmpeg(): Promise<FFmpeg> {
    if (this.isLoaded && this.ffmpeg) {
      return this.ffmpeg;
    }

    if (this.isLoading && this.loadPromise) {
      await this.loadPromise;
      if (this.ffmpeg) return this.ffmpeg;
    }

    this.isLoading = true;
    this.loadPromise = (async () => {
      try {
        const instance = new FFmpeg();

        // Attach logger
        instance.on("log", ({ message }) => {
          console.log("[FFmpeg Log]", message);
        });

        // Use self-hosted local core assets from /ffmpeg/
        const coreURL = await toBlobURL("/ffmpeg/ffmpeg-core.js", "text/javascript");
        const wasmURL = await toBlobURL("/ffmpeg/ffmpeg-core.wasm", "application/wasm");

        await instance.load({
          coreURL,
          wasmURL,
        });

        this.ffmpeg = instance;
        this.isLoaded = true;
      } catch (err) {
        console.error("Failed to load FFmpeg engine:", err);
        throw new Error(
          "Failed to initialize conversion engine in this browser. Please make sure your browser is up to date."
        );
      } finally {
        this.isLoading = false;
        this.loadPromise = null;
      }
    })();

    await this.loadPromise;
    if (!this.ffmpeg) {
      throw new Error("FFmpeg could not be initialized");
    }
    return this.ffmpeg;
  }

  public async convertFile(
    item: ConversionItem,
    onProgress: (progress: number, stage: ConversionStage) => void
  ): Promise<{ blob: Blob; filename: string }> {
    this.currentItemId = item.id;
    this.isCancelled = false;

    onProgress(5, "Loading conversion engine");
    const ffmpeg = await this.getFFmpeg();

    if (this.isCancelled) {
      throw new Error("Conversion cancelled by user.");
    }

    onProgress(15, "Reading input file");
    const ext = item.inputFormat.toLowerCase();
    const safeInputName = `in_${item.id}.${ext}`;
    const outFormat = item.settings.outputFormat;
    const safeOutputName = `out_${item.id}.${outFormat}`;

    try {
      // 1. Write file to FFmpeg virtual file system
      const fileData = await fetchFile(item.file);
      await ffmpeg.writeFile(safeInputName, fileData);

      if (this.isCancelled) {
        throw new Error("Conversion cancelled by user.");
      }

      onProgress(30, "Processing audio stream");

      // 2. Set up progress listener
      const progressHandler = ({ progress, time }: { progress: number; time: number }) => {
        if (this.currentItemId === item.id) {
          // progress is a float from 0 to 1
          let percent = 30 + Math.min(60, Math.max(0, Math.round(progress * 60)));
          if (progress > 0.8) {
            onProgress(percent, "Encoding output format");
          } else {
            onProgress(percent, "Processing audio stream");
          }
        }
      };

      ffmpeg.on("progress", progressHandler);

      // 3. Build optimized arguments
      const args = buildFFmpegArgs({
        inputFileName: safeInputName,
        outputFileName: safeOutputName,
        settings: item.settings,
        isVideoInput: item.category === "video",
      });

      // 4. Execute FFmpeg
      const exitCode = await ffmpeg.exec(args);

      // Remove progress handler
      ffmpeg.off("progress", progressHandler);

      if (exitCode !== 0) {
        throw new Error(`FFmpeg exited with error code ${exitCode}. The audio stream could not be converted.`);
      }

      onProgress(95, "Finalizing file");

      // 5. Read output file from virtual FS
      const outputData = await ffmpeg.readFile(safeOutputName);

      // 6. Generate output Blob with correct MIME type
      const mimeType = SUPPORTED_OUTPUT_FORMATS[outFormat]?.mimeType || "application/octet-stream";
      
      // Node / browser Uint8Array buffer handling
      const uint8Array = typeof outputData === "string" ? new TextEncoder().encode(outputData) : outputData;
      const blob = new Blob([uint8Array as unknown as BlobPart], { type: mimeType });

      if (blob.size === 0) {
        throw new Error("Generated audio file is empty (0 bytes). Conversion failed.");
      }

      // 7. Cleanup virtual FS
      try {
        await ffmpeg.deleteFile(safeInputName);
      } catch (e) {}
      try {
        await ffmpeg.deleteFile(safeOutputName);
      } catch (e) {}

      // 8. Generate friendly output filename
      const baseName = item.settings.customFilename
        ? sanitizeFilename(item.settings.customFilename)
        : getFileBaseName(item.name);
      const finalFilename = `${baseName}.${outFormat}`;

      onProgress(100, "Ready to download");
      return { blob, filename: finalFilename };
    } catch (err: any) {
      // Clean up on failure
      try {
        await ffmpeg.deleteFile(safeInputName);
      } catch (e) {}
      try {
        await ffmpeg.deleteFile(safeOutputName);
      } catch (e) {}

      throw err;
    } finally {
      this.currentItemId = null;
    }
  }

  public async mergeFiles(
    files: File[],
    outputFormat: "mp3" | "wav" | "m4a",
    onProgress: (progress: number, stage: ConversionStage) => void
  ): Promise<{ blob: Blob; filename: string }> {
    onProgress(5, "Loading conversion engine");
    const ffmpeg = await this.getFFmpeg();

    onProgress(15, "Reading input file");
    const safeInputs: string[] = [];
    let concatListContent = "";

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const ext = file.name.substring(file.name.lastIndexOf(".") + 1).toLowerCase();
        const safeName = `merge_in_${i}.${ext}`;
        safeInputs.push(safeName);
        await ffmpeg.writeFile(safeName, await fetchFile(file));
      }

      onProgress(40, "Processing audio stream");
      const safeOutputName = `merged_output.${outputFormat}`;

      // Build filter complex for concatenating N audio streams
      // e.g. -i file0 -i file1 -filter_complex "[0:a][1:a]concat=n=2:v=0:a=1[out]" -map "[out]"
      const ffmpegArgs: string[] = [];
      for (const input of safeInputs) {
        ffmpegArgs.push("-i", input);
      }

      let filterString = "";
      for (let i = 0; i < files.length; i++) {
        filterString += `[${i}:a]`;
      }
      filterString += `concat=n=${files.length}:v=0:a=1[out]`;

      ffmpegArgs.push("-filter_complex", filterString, "-map", "[out]");

      if (outputFormat === "mp3") {
        ffmpegArgs.push("-c:a", "libmp3lame", "-b:a", "192k");
      } else if (outputFormat === "wav") {
        ffmpegArgs.push("-c:a", "pcm_s16le");
      } else if (outputFormat === "m4a") {
        ffmpegArgs.push("-c:a", "aac", "-b:a", "192k");
      }

      ffmpegArgs.push("-y", safeOutputName);

      onProgress(70, "Encoding output format");
      const exitCode = await ffmpeg.exec(ffmpegArgs);

      if (exitCode !== 0) {
        throw new Error(`Merge operation failed with exit code ${exitCode}.`);
      }

      onProgress(95, "Finalizing file");
      const outputData = await ffmpeg.readFile(safeOutputName);
      const mimeType = SUPPORTED_OUTPUT_FORMATS[outputFormat]?.mimeType || "audio/mpeg";
      const uint8Array = typeof outputData === "string" ? new TextEncoder().encode(outputData) : outputData;
      const blob = new Blob([uint8Array as unknown as BlobPart], { type: mimeType });

      // Clean up
      for (const input of safeInputs) {
        try {
          await ffmpeg.deleteFile(input);
        } catch (e) {}
      }
      try {
        await ffmpeg.deleteFile(safeOutputName);
      } catch (e) {}

      onProgress(100, "Ready to download");
      return { blob, filename: `merged_audio_${Date.now()}.${outputFormat}` };
    } catch (err: any) {
      for (const input of safeInputs) {
        try {
          await ffmpeg.deleteFile(input);
        } catch (e) {}
      }
      throw err;
    }
  }

  public cancelCurrent(): void {
    this.isCancelled = true;
    if (this.ffmpeg) {
      try {
        // If terminate is supported:
        this.ffmpeg.terminate();
        this.ffmpeg = null;
        this.isLoaded = false;
      } catch (e) {
        console.warn("Could not terminate FFmpeg instance:", e);
      }
    }
  }
}

export const conversionEngine = new ConversionEngine();
