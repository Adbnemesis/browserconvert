"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { Volume2, Download, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";
import { triggerSmartlink } from "@/lib/ads/smartlink";
import { trackEvent, getFileSizeBucket } from "@/lib/utils/analytics";

export function AudioVolumeTool() {
  const [file, setFile] = useState<File | null>(null);
  const [volume, setVolume] = useState<number>(1.5);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    { label: "Quiet (50%)", value: 0.5 },
    { label: "Soften (75%)", value: 0.75 },
    { label: "Original (100%)", value: 1.0 },
    { label: "Boost (125%)", value: 1.25 },
    { label: "Louder (150%)", value: 1.5 },
    { label: "Maximum (200%)", value: 2.0 },
  ];

  const handleProcess = async () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(10);
    setError(null);

    const ext = getFileExtension(file.name);
    const outFormat = ext === "wav" ? "wav" : "mp3";

    const item: ConversionItem = {
      id: `vol_${Date.now()}`,
      file,
      name: file.name,
      originalSize: file.size,
      inputFormat: ext,
      category: "audio",
      settings: {
        outputFormat: outFormat,
        volume,
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
      const outName = `${getFileBaseName(file.name)}_vol_${Math.round(volume * 100)}pct.${outFormat}`;
      setOutputResult({ blob: result.blob, url, name: outName });

      trackEvent("tool_used", {
        tool: "audio_volume",
        inputFormat: ext,
        outputFormat: outFormat,
        fileSizeBucket: getFileSizeBucket(result.blob.size),
      });
    } catch (err: any) {
      setError(err?.message || "Volume adjustment failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 sm:p-6">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 sm:p-10 text-center border border-dashed border-slate-300 dark:border-white/10 rounded-xl hover:border-slate-400 dark:hover:border-white/20 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 mb-3">
            <Volume2 className="h-5 w-5" />
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

          {/* Volume Presets */}
          <div className="space-y-2.5">
            <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300">Volume level</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {presets.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setVolume(p.value)}
                  className={`rounded-lg border p-3 text-left transition-colors ${
                    volume === p.value
                      ? "border-brand-500 bg-brand-50/50 dark:bg-brand-950/20 text-brand-900 dark:text-brand-300 font-medium"
                      : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20 text-slate-800 dark:text-zinc-200"
                  }`}
                >
                  <div className="font-mono text-xs">{p.label}</div>
                </button>
              ))}
            </div>

            {/* Custom slider */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-600 dark:text-zinc-400">Custom level:</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-medium tabular-nums">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-brand-600 cursor-pointer"
              />
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
                <span>Adjusting volume ({progress}%)...</span>
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4" />
                <span>Apply {Math.round(volume * 100)}% volume</span>
              </>
            )}
          </button>

          {/* Result */}
          {outputResult && (
            <div className="rounded-lg bg-slate-50 dark:bg-white/5 p-3.5 border border-slate-200/80 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-900 dark:text-zinc-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Volume adjusted successfully</span>
                </div>
                <a
                  href={outputResult.url}
                  download={outputResult.name}
                  onClick={() => {
                    triggerSmartlink();
                    trackEvent("file_downloaded", {
                      tool: "audio_volume",
                      outputFormat: getFileExtension(outputResult.name) || "mp3",
                      fileSizeBucket: getFileSizeBucket(outputResult.blob.size),
                    });
                  }}
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
