"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { FastForward, Download, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";
import { triggerSmartlink } from "@/lib/ads/smartlink";

export function AudioSpeedTool() {
  const [file, setFile] = useState<File | null>(null);
  const [speed, setSpeed] = useState<number>(1.25);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const speedOptions = [
    { label: "0.5x", desc: "Half speed", value: 0.5 },
    { label: "0.75x", desc: "Slightly slower", value: 0.75 },
    { label: "1.0x", desc: "Normal speed", value: 1.0 },
    { label: "1.25x", desc: "Podcast speed", value: 1.25 },
    { label: "1.5x", desc: "Fast", value: 1.5 },
    { label: "2.0x", desc: "Double speed", value: 2.0 },
  ];

  const handleProcess = async () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(10);
    setError(null);

    const ext = getFileExtension(file.name);
    const outFormat = ext === "wav" ? "wav" : "mp3";

    const item: ConversionItem = {
      id: `speed_${Date.now()}`,
      file,
      name: file.name,
      originalSize: file.size,
      inputFormat: ext,
      category: "audio",
      settings: {
        outputFormat: outFormat,
        speed,
      },
      status: "processing",
      stage: "Processing audio stream",
      progress: 0,
      createdAt: Date.now(),
    };

    try {
      const result = await conversionEngine.convertFile(item, (p) => {
        setProgress(p);
      });

      const url = URL.createObjectURL(result.blob);
      const outName = `${getFileBaseName(file.name)}_${speed}x.${outFormat}`;
      setOutputResult({ blob: result.blob, url, name: outName });
    } catch (err: any) {
      setError(err?.message || "Speed adjustment failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 sm:p-6">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 sm:p-10 text-center border border-dashed border-slate-300 dark:border-white/10 rounded-xl hover:border-slate-400 dark:hover:border-white/20 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 mb-3">
            <FastForward className="h-5 w-5" />
          </div>
          <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-zinc-100">Select an audio file</h3>
          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 font-mono">Supports MP3 · WAV · M4A · FLAC · OGG · OPUS</p>
          <label className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white cursor-pointer hover:bg-brand-700 transition-colors">
            <span>Browse audio</span>
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                  setOutputResult(null);
                  setError(null);
                }
              }}
            />
          </label>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-3">
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 truncate max-w-md">{file.name}</h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono mt-0.5">{formatBytes(file.size)}</p>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setOutputResult(null);
              }}
              className="text-xs text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Choose different file
            </button>
          </div>

          {/* Speed Presets */}
          <div className="space-y-2.5">
            <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300">Target playback rate</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {speedOptions.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => setSpeed(opt.value)}
                  className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                    speed === opt.value
                      ? "border-brand-500 bg-brand-50/50 dark:bg-brand-950/20 text-brand-900 dark:text-brand-300"
                      : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="font-mono text-xs font-medium">{opt.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">{opt.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleProcess}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Adjusting speed ({progress}%)...</span>
              </>
            ) : (
              <>
                <FastForward className="h-4 w-4" />
                <span>Apply {speed}x playback speed</span>
              </>
            )}
          </button>

          {/* Result */}
          {outputResult && (
            <div className="rounded-lg bg-slate-50 dark:bg-white/5 p-3.5 border border-slate-200/80 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-900 dark:text-zinc-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Playback speed adjusted</span>
                </div>
                <a
                  href={outputResult.url}
                  download={outputResult.name}
                  onClick={triggerSmartlink}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-slate-600 dark:text-zinc-400 pt-1 border-t border-slate-200/60 dark:border-white/5">
                <span>Output: {outputResult.name}</span>
                <span>·</span>
                <span>Size: {formatBytes(outputResult.blob.size)}</span>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-xs text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-900/60">
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
