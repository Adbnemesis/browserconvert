"use client";

import React, { useState, useRef, useEffect } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, formatSeconds, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { Scissors, Play, Pause, Download, AlertCircle, Loader2, UploadCloud } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";

export function AudioCutterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputResult, setOutputResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setOutputResult(null);
      setError(null);
      // Sensible initial defaults so trimming is immediately valid even in headless or slow audio environments
      setStartTime(0);
      setEndTime(1);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const d = audioRef.current.duration;
      if (d && !isNaN(d) && d > 0) {
        setDuration(d);
        setStartTime(0);
        setEndTime(Math.floor(d) > 0 ? Math.floor(d) : Math.min(1, d));
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.currentTime >= endTime && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current.currentTime < startTime || audioRef.current.currentTime >= endTime) {
        audioRef.current.currentTime = startTime;
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleCutAudio = async () => {
    if (!file) return;
    if (startTime >= endTime) {
      setError("End time must be greater than start time.");
      return;
    }

    setIsProcessing(true);
    setProgress(10);
    setError(null);

    const ext = getFileExtension(file.name) || "mp3";
    const outFormat = ext === "wav" ? "wav" : ext === "m4a" ? "m4a" : "mp3";

    const item: ConversionItem = {
      id: `cut_${Date.now()}`,
      file,
      name: file.name,
      originalSize: file.size,
      inputFormat: ext,
      category: "audio",
      settings: {
        outputFormat: outFormat,
        startTime,
        endTime,
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
      const cutName = `${getFileBaseName(file.name)}_cut.${outFormat}`;
      setOutputResult({ blob: result.blob, url, name: cutName });
    } catch (err: any) {
      setError(err?.message || "Failed to cut audio file.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-300 rounded-xl hover:bg-slate-50">
          <UploadCloud className="h-10 w-10 text-brand-600 mb-3" />
          <h3 className="text-base font-semibold text-slate-800">Select an audio file to cut</h3>
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
                }
              }}
            />
          </label>
        </div>
      ) : (
        <div className="space-y-6">
          {/* File Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 truncate max-w-md">{file.name}</h4>
              <p className="text-xs text-slate-500">
                {formatBytes(file.size)} • Total duration: {formatSeconds(duration)}
              </p>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setAudioUrl(null);
              }}
              className="text-xs text-slate-500 hover:text-red-600 underline"
            >
              Choose different file
            </button>
          </div>

          {/* Hidden Audio Player */}
          {audioUrl && (
            <audio
              ref={audioRef}
              src={audioUrl}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
          )}

          {/* Player Controls & Visual Time Display */}
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={togglePlay}
                className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                <span>{isPlaying ? "Pause Preview" : "Play Selection"}</span>
              </button>

              <div className="text-xs font-mono text-slate-600">
                {formatSeconds(currentTime)} / {formatSeconds(duration)}
              </div>
            </div>

            {/* Range controls */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Start Time ({formatSeconds(startTime)})
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.5"
                    value={startTime}
                    onChange={(e) => setStartTime(Math.min(parseFloat(e.target.value), endTime - 0.5))}
                    className="w-full accent-brand-600 cursor-pointer"
                  />
                  <input
                    type="number"
                    min="0"
                    max={duration}
                    step="0.5"
                    value={startTime}
                    onChange={(e) => setStartTime(Math.max(0, Math.min(parseFloat(e.target.value) || 0, endTime - 0.5)))}
                    className="mt-1 w-full rounded border border-slate-300 px-2 py-1 text-xs"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    End Time ({formatSeconds(endTime)})
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.5"
                    value={endTime}
                    onChange={(e) => setEndTime(Math.max(parseFloat(e.target.value), startTime + 0.5))}
                    className="w-full accent-brand-600 cursor-pointer"
                  />
                  <input
                    type="number"
                    min="0"
                    max={duration}
                    step="0.5"
                    value={endTime}
                    onChange={(e) => setEndTime(Math.min(duration, Math.max(parseFloat(e.target.value) || 0, startTime + 0.5)))}
                    className="mt-1 w-full rounded border border-slate-300 px-2 py-1 text-xs"
                  />
                </div>
              </div>

              <div className="text-center text-xs text-brand-700 font-medium">
                Trimmed Segment Duration: {formatSeconds(Math.max(0, endTime - startTime))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={handleCutAudio}
              disabled={isProcessing}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white hover:bg-brand-700 disabled:opacity-50 active:scale-98 transition-all"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Trimming audio ({progress}%)...</span>
                </>
              ) : (
                <>
                  <Scissors className="h-4 w-4" />
                  <span>Cut & Save Audio</span>
                </>
              )}
            </button>
          </div>

          {/* Output Download Section */}
          {outputResult && (
            <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4 border border-emerald-200">
              <div>
                <div className="text-xs font-bold text-emerald-900">Audio Trimmed Successfully!</div>
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
