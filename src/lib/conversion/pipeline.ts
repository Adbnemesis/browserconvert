import { OutputFormat, SUPPORTED_OUTPUT_FORMATS } from "../config/formats";
import { ConversionSettings } from "./types";

export interface PipelineConfig {
  inputFileName: string;
  outputFileName: string;
  settings: ConversionSettings;
  isVideoInput?: boolean;
}

export function buildFFmpegArgs(config: PipelineConfig): string[] {
  const { inputFileName, outputFileName, settings, isVideoInput } = config;
  const args: string[] = [];

  // 1. Seek start time (if trimming from beginning)
  if (settings.startTime !== undefined && settings.startTime > 0) {
    args.push("-ss", settings.startTime.toString());
  }

  // 2. Input file
  args.push("-i", inputFileName);

  // 3. End time / duration (if trimming end)
  if (settings.endTime !== undefined && settings.endTime > 0) {
    if (settings.startTime !== undefined && settings.startTime > 0) {
      const duration = settings.endTime - settings.startTime;
      if (duration > 0) {
        args.push("-t", duration.toString());
      }
    } else {
      args.push("-to", settings.endTime.toString());
    }
  }

  // 4. Disable video stream explicitly (ensure audio-only output)
  args.push("-vn");

  // 5. Build audio filters (volume, speed, etc.)
  const audioFilters: string[] = [];

  if (settings.volume !== undefined && settings.volume !== 1.0) {
    audioFilters.push(`volume=${settings.volume.toFixed(2)}`);
  }

  if (settings.speed !== undefined && settings.speed !== 1.0) {
    // FFmpeg atempo must be between 0.5 and 2.0
    let speed = Math.max(0.25, Math.min(settings.speed, 4.0));
    while (speed > 2.0) {
      audioFilters.push("atempo=2.0");
      speed /= 2.0;
    }
    while (speed < 0.5) {
      audioFilters.push("atempo=0.5");
      speed /= 0.5;
    }
    audioFilters.push(`atempo=${speed.toFixed(3)}`);
  }

  if (audioFilters.length > 0) {
    args.push("-filter:a", audioFilters.join(","));
  }

  // 6. Codec selection based on output format
  const outFormat = settings.outputFormat;
  switch (outFormat) {
    case "mp3":
      args.push("-c:a", "libmp3lame");
      if (settings.bitrate) {
        args.push("-b:a", settings.bitrate);
      } else {
        args.push("-b:a", SUPPORTED_OUTPUT_FORMATS.mp3.defaultBitrate || "192k");
      }
      break;

    case "wav":
      args.push("-c:a", "pcm_s16le");
      break;

    case "m4a":
      args.push("-c:a", "aac");
      if (settings.bitrate) {
        args.push("-b:a", settings.bitrate);
      } else {
        args.push("-b:a", SUPPORTED_OUTPUT_FORMATS.m4a.defaultBitrate || "192k");
      }
      break;

    case "aac":
      args.push("-c:a", "aac");
      if (settings.bitrate) {
        args.push("-b:a", settings.bitrate);
      } else {
        args.push("-b:a", SUPPORTED_OUTPUT_FORMATS.aac.defaultBitrate || "192k");
      }
      break;

    case "flac":
      args.push("-c:a", "flac", "-compression_level", "5");
      break;

    case "ogg":
      args.push("-c:a", "libvorbis");
      if (settings.bitrate) {
        args.push("-b:a", settings.bitrate);
      } else {
        args.push("-b:a", SUPPORTED_OUTPUT_FORMATS.ogg.defaultBitrate || "160k");
      }
      // Vorbis encoder requires standard rate (e.g. 44100 Hz) for standard bitrates
      if (!settings.sampleRate || settings.sampleRate === "original") {
        args.push("-ar", "44100");
      }
      break;

    case "opus":
      args.push("-c:a", "libopus");
      if (settings.bitrate) {
        args.push("-b:a", settings.bitrate);
      } else {
        args.push("-b:a", SUPPORTED_OUTPUT_FORMATS.opus.defaultBitrate || "128k");
      }
      // Opus standard internal rate is 48000 Hz
      if (!settings.sampleRate || settings.sampleRate === "original") {
        args.push("-ar", "48000");
      }
      break;

    default:
      args.push("-c:a", "libmp3lame", "-b:a", "192k");
      break;
  }

  // 7. Sample Rate
  if (settings.sampleRate && settings.sampleRate !== "original") {
    args.push("-ar", settings.sampleRate);
  }

  // 8. Channels (mono/stereo)
  if (settings.channels && settings.channels !== "original") {
    args.push("-ac", settings.channels);
  }

  // 9. Output overwrite & filename
  args.push("-y", outputFileName);

  return args;
}
