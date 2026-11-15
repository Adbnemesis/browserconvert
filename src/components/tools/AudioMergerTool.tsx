"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes } from "@/lib/utils/formatters";
import { ArrowUp, ArrowDown, Trash2, Download, AlertCircle, Loader2, Plus, Music, CheckCircle2 } from "lucide-react";

export function AudioMergerTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [outputFormat, setOutputFormat] = useState<"mp3" | "wav" | "m4a">("mp3");
  const [isMerging, setIsMerging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<string>("");
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      setOutputResult(null);
      setError(null);
    }
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setFiles((prev) => {
      const copy = [...prev];
      const temp = copy[index - 1];
      copy[index - 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const moveDown = (index: number) => {
    if (index === files.length - 1) return;
    setFiles((prev) => {
      const copy = [...prev];
      const temp = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please add at least 2 audio tracks to merge.");
      return;
    }

    setIsMerging(true);
    setError(null);
    setProgress(5);

    try {
      const result = await conversionEngine.mergeFiles(
        files,
        outputFormat,
        (p, s) => {
          setProgress(p);
          setStage(s);
        }
      );

      const url = URL.createObjectURL(result.blob);
      setOutputResult({ blob: result.blob, url, name: result.filename });
    } catch (err: any) {
      setError(err?.message || "Failed to merge audio files.");
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 sm:p-6">
      <div className="space-y-5">
        {/* Header & Add Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-white/5 pb-3">
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100">Audio track sequence</h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400">Tracks will be joined in this exact order.</p>
          </div>

          <label className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs font-medium text-white cursor-pointer hover:bg-brand-700 transition-colors">
            <Plus className="h-3.5 w-3.5" />
            <span>Add audio tracks</span>
            <input
              type="file"
              multiple
              accept="audio/*,.mp3,.wav,.m4a,.aac,.flac,.ogg"
              className="hidden"
              onChange={handleAddFiles}
            />
          </label>
        </div>

        {/* Track List */}
        {files.length === 0 ? (
          <div className="py-10 text-center text-xs text-slate-400 dark:text-zinc-500 border border-dashed border-slate-200 dark:border-white/10 rounded-xl">
            <Music className="h-6 w-6 text-slate-300 dark:text-zinc-600 mx-auto mb-2" />
            No audio tracks added yet. Click &ldquo;Add audio tracks&rdquo; to begin.
          </div>
        ) : (
          <div className="space-y-2">
            {files.map((f, i) => (
              <div
                key={`${f.name}_${i}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-2.5 text-xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-zinc-300 font-mono text-[10px] shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="font-medium text-slate-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-md">
                      {f.name}
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">
                      {formatBytes(f.size)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => moveUp(i)}
                    disabled={i === 0}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 disabled:opacity-30 transition-colors"
                    title="Move up"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    disabled={i === files.length - 1}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 disabled:opacity-30 transition-colors"
                    title="Move down"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => removeFile(i)}
                    className="p-1 rounded text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ml-1"
                    title="Remove track"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Controls */}
        {files.length > 0 && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">Target output format:</label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value as "mp3" | "wav" | "m4a")}
                className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 focus:border-brand-500 focus:outline-none"
              >
                <option value="mp3">MP3 (Universal compatibility)</option>
                <option value="wav">WAV (Lossless 16-bit PCM)</option>
                <option value="m4a">M4A (Apple AAC)</option>
              </select>
            </div>

            <button
              onClick={handleMerge}
              disabled={isMerging || files.length < 2}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              {isMerging ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Merging tracks ({progress}%)...</span>
                </>
              ) : (
                <span>Merge {files.length} audio tracks</span>
              )}
            </button>
          </div>
        )}

        {/* Output */}
        {outputResult && (
          <div className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-white/5 p-3.5 border border-slate-200/80 dark:border-white/10">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-900 dark:text-zinc-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Audio tracks merged successfully</span>
              </div>
              <div className="font-mono text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">
                {outputResult.name} · {formatBytes(outputResult.blob.size)}
              </div>
            </div>
            <a
              href={outputResult.url}
              download={outputResult.name}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-xs text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-900/60">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
