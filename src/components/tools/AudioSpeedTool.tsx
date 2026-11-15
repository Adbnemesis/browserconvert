"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { FastForward, Download, AlertCircle, Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";

export function AudioSpeedTool() {
  const [file, setFile] = useState<File | null>(null);
  const [speed, setSpeed] = useState<number>(1.25);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const speedOptions = [
    { label: "0.5x (Slow Half-Speed)", value: 0.5 },
    { label: "0.75x (Slightly Slower)", value: 0.75 },
    { label: "1.0x (Normal)", value: 1.0 },
    { label: "1.25x (Fast - Podcast Speed)", value: 1.25 },
    { label: "1.5x (Speedy)", value: 1.5 },
    { label: "1.75x (Very Fast)", value: 1.75 },
    { label: "2.0x (Double Speed)", value: 2.0 },
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
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-300 rounded-xl hover:bg-slate-50">
          <UploadCloud className="h-10 w-10 text-brand-600 mb-3" />
          <h3 className="text-base font-semibold text-slate-800">Select an audio file to change speed</h3>
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

          {/* Speed Presets */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">Select Desired Playback Speed</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {speedOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSpeed(opt.value)}
                  className={`rounded-lg border p-3 text-center transition-all ${
                    speed === opt.value
                      ? "border-brand-600 bg-brand-50/70 font-bold text-brand-900 ring-1 ring-brand-500"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs"
                  }`}
                >
                  <div className="text-sm font-bold">{opt.value}x</div>
                  <div className="text-[10px] text-slate-500">{opt.label.split(" ")[1]}</div>
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
                <span>Processing speed change ({progress}%)...</span>
              </>
            ) : (
              <>
                <FastForward className="h-4 w-4" />
                <span>Apply {speed}x Playback Speed</span>
              </>
            )}
          </button>

          {/* Result */}
          {outputResult && (
            <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4 border border-emerald-200">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Audio Speed Adjusted Successfully!</span>
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
