"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes } from "@/lib/utils/formatters";
import { Layers, ArrowUp, ArrowDown, Trash2, Download, AlertCircle, Loader2, Plus, Music } from "lucide-react";

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
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-6">
        {/* Upload Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Audio Track Sequence</h3>
            <p className="text-xs text-slate-500">Tracks will be merged in the order listed below.</p>
          </div>

          <label className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs cursor-pointer hover:bg-brand-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Audio Tracks</span>
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
          <div className="py-12 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
            <Music className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            No audio tracks added yet. Click &ldquo;Add Audio Tracks&rdquo; to begin.
          </div>
        ) : (
          <div className="space-y-2">
            {files.map((f, i) => (
              <div
                key={`${f.name}_${i}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 p-3 text-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-[11px] shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 truncate max-w-sm sm:max-w-md">{f.name}</div>
                    <div className="text-[11px] text-slate-500">{formatBytes(f.size)}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => moveUp(i)}
                    disabled={i === 0 || isMerging}
                    className="p-1 text-slate-500 hover:text-slate-800 disabled:opacity-30"
                    title="Move Up"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    disabled={i === files.length - 1 || isMerging}
                    className="p-1 text-slate-500 hover:text-slate-800 disabled:opacity-30"
                    title="Move Down"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => removeFile(i)}
                    disabled={isMerging}
                    className="p-1 text-slate-400 hover:text-red-600 disabled:opacity-30 ml-2"
                    title="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Output Format Options & Action */}
        {files.length > 0 && (
          <div className="pt-2 space-y-4">
            <div className="flex items-center gap-3">
              <label className="text-xs font-semibold text-slate-700">Output Format:</label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value as "mp3" | "wav" | "m4a")}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
              >
                <option value="mp3">MP3 (Universal 192k)</option>
                <option value="wav">WAV (Lossless Studio Quality)</option>
                <option value="m4a">M4A (Apple AAC)</option>
              </select>
            </div>

            <button
              onClick={handleMerge}
              disabled={isMerging || files.length < 2}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white hover:bg-brand-700 disabled:opacity-50 active:scale-98 transition-all"
            >
              {isMerging ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Merging tracks ({progress}%) - {stage}...</span>
                </>
              ) : (
                <>
                  <Layers className="h-4 w-4" />
                  <span>Merge {files.length} Audio Tracks</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Result Download */}
        {outputResult && (
          <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4 border border-emerald-200">
            <div>
              <div className="text-xs font-bold text-emerald-900">Audio Tracks Merged Successfully!</div>
              <div className="text-xs text-emerald-700 mt-0.5">
                {outputResult.name} • {formatBytes(outputResult.blob.size)}
              </div>
            </div>
            <a
              href={outputResult.url}
              download={outputResult.name}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 shadow-xs"
            >
              <Download className="h-4 w-4" />
              <span>Download Merged Audio</span>
            </a>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-xs text-red-700 bg-red-50 p-3 rounded-lg border border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
