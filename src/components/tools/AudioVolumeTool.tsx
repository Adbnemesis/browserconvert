"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { Volume2, Download, AlertCircle, Loader2, UploadCloud, CheckCircle2, VolumeX, Volume1 } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";

export function AudioVolumeTool() {
  const [file, setFile] = useState<File | null>(null);
  const [volume, setVolume] = useState<number>(1.5);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    { label: "Quiet (-50%)", value: 0.5 },
    { label: "Slight Soften (-25%)", value: 0.75 },
    { label: "Original (100%)", value: 1.0 },
    { label: "Boost (+25%)", value: 1.25 },
    { label: "Louder (+50%)", value: 1.5 },
    { label: "Maximum Boost (+100%)", value: 2.0 },
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
    } catch (err: any) {
      setError(err?.message || "Volume adjustment failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-300 rounded-xl hover:bg-slate-50">
          <UploadCloud className="h-10 w-10 text-brand-600 mb-3" />
          <h3 className="text-base font-semibold text-slate-800">Select an audio file to adjust volume</h3>
          <p className="text-xs text-slate-500 mt-1">Supports MP3, WAV, M4A, FLAC, OGG, OPUS, AAC</p>
          <label className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-xs cursor-pointer hover:bg-brand-700">
            <span>Browse Audio</span>
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
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 truncate max-w-md">{file.name}</h4>
              <p className="text-xs text-slate-500">{formatBytes(file.size)}</p>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setOutputResult(null);
              }}
              className="text-xs text-slate-500 hover:text-red-600 underline"
            >
              Choose different file
            </button>
          </div>

          {/* Volume Slider & Percent Display */}
          <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-brand-600" />
                Target Volume Level:
              </span>
              <span className="text-sm font-extrabold text-brand-700 font-mono">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-3">
              <VolumeX className="h-4 w-4 text-slate-400" />
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-brand-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <Volume2 className="h-5 w-5 text-brand-600" />
            </div>

            {/* Quick Presets */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-2">
              {presets.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setVolume(p.value)}
                  className={`rounded py-1 px-2 text-[11px] font-medium transition-colors ${
                    volume === p.value
                      ? "bg-brand-600 text-white font-bold"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {Math.round(p.value * 100)}%
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleProcess}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white hover:bg-brand-700 disabled:opacity-50 active:scale-98 transition-all"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Adjusting volume ({progress}%)...</span>
              </>
            ) : (
              <>
                <Volume1 className="h-4 w-4" />
                <span>Apply {Math.round(volume * 100)}% Volume & Save</span>
              </>
            )}
          </button>

          {/* Result */}
          {outputResult && (
            <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4 border border-emerald-200">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Volume Adjusted Successfully!</span>
                </div>
                <div className="text-xs text-emerald-700 mt-1">
                  {outputResult.name} • {formatBytes(outputResult.blob.size)}
                </div>
              </div>
              <a
                href={outputResult.url}
                download={outputResult.name}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 shadow-xs"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
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
      )}
    </div>
  );
}
