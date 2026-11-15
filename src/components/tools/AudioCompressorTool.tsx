"use client";

import React, { useState } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { Minimize2, Download, AlertCircle, Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";

export function AudioCompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [targetBitrate, setTargetBitrate] = useState<string>("96k");
  const [targetFormat, setTargetFormat] = useState<"mp3" | "opus" | "m4a">("mp3");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    { label: "High Compression (64 kbps)", value: "64k", desc: "Best for voice, speech, low bandwidth (~70% reduction)" },
    { label: "Medium Compression (96 kbps)", value: "96k", desc: "Good balance of speech and basic music (~50% reduction)" },
    { label: "Balanced Audio (128 kbps)", value: "128k", desc: "Standard web streaming quality (~35% reduction)" },
    { label: "Mild Compression (160 kbps)", value: "160k", desc: "Near transparent music compression (~20% reduction)" },
  ];

  const handleCompress = async () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(10);
    setError(null);

    const ext = getFileExtension(file.name);
    const item: ConversionItem = {
      id: `compress_${Date.now()}`,
      file,
      name: file.name,
      originalSize: file.size,
      inputFormat: ext,
      category: "audio",
      settings: {
        outputFormat: targetFormat,
        bitrate: targetBitrate,
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
      const outName = `${getFileBaseName(file.name)}_compressed.${targetFormat}`;
      setOutputResult({ blob: result.blob, url, name: outName });
    } catch (err: any) {
      setError(err?.message || "Audio compression failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  const sizeDelta =
    outputResult && file
      ? outputResult.blob.size - file.size
      : null;

  const percentReduction =
    outputResult && file && sizeDelta !== null && sizeDelta < 0
      ? Math.round((Math.abs(sizeDelta) / file.size) * 100)
      : null;

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-300 rounded-xl hover:bg-slate-50">
          <UploadCloud className="h-10 w-10 text-brand-600 mb-3" />
          <h3 className="text-base font-semibold text-slate-800">Select an audio file to compress</h3>
          <p className="text-xs text-slate-500 mt-1">Supports WAV, FLAC, AIFF, MP3, M4A, OGG</p>
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
              <p className="text-xs text-slate-500">Current file size: {formatBytes(file.size)}</p>
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

          {/* Compression Level Presets */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-800">Select Target Compression Level</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {presets.map((p) => (
                <div
                  key={p.value}
                  onClick={() => setTargetBitrate(p.value)}
                  className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                    targetBitrate === p.value
                      ? "border-brand-600 bg-brand-50/70 shadow-xs ring-1 ring-brand-500"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{p.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Output Format Picker */}
          <div className="flex items-center gap-3">
            <label className="text-xs font-semibold text-slate-700">Output Container:</label>
            <select
              value={targetFormat}
              onChange={(e) => setTargetFormat(e.target.value as "mp3" | "opus" | "m4a")}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
            >
              <option value="mp3">MP3 (Universal compatibility)</option>
              <option value="m4a">M4A (Apple AAC - High efficiency)</option>
              <option value="opus">OPUS (Modern high efficiency)</option>
            </select>
          </div>

          {/* Action Button */}
          <button
            onClick={handleCompress}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white hover:bg-brand-700 disabled:opacity-50 active:scale-98 transition-all"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Compressing audio ({progress}%)...</span>
              </>
            ) : (
              <>
                <Minimize2 className="h-4 w-4" />
                <span>Compress Audio File</span>
              </>
            )}
          </button>

          {/* Result */}
          {outputResult && (
            <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-900">Compression Complete!</span>
                </div>
                <a
                  href={outputResult.url}
                  download={outputResult.name}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Compressed File</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-lg bg-white/80 p-3 text-center text-xs">
                <div>
                  <div className="text-[10px] uppercase text-slate-400">Original</div>
                  <div className="font-bold text-slate-700">{formatBytes(file.size)}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400">Compressed</div>
                  <div className="font-bold text-slate-900">{formatBytes(outputResult.blob.size)}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400">Difference</div>
                  <div
                    className={`font-bold ${
                      sizeDelta && sizeDelta < 0 ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {percentReduction ? `-${percentReduction}%` : formatBytes(Math.abs(sizeDelta || 0))}
                  </div>
                </div>
              </div>
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
