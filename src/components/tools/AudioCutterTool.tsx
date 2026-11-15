"use client";

import React, { useState, useRef, useEffect } from "react";
import { conversionEngine } from "@/lib/conversion/engine";
import { formatBytes, formatSeconds, getFileBaseName, getFileExtension } from "@/lib/utils/formatters";
import { Scissors, Play, Pause, Download, AlertCircle, Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { ConversionItem } from "@/lib/conversion/types";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { triggerSmartlink } from "@/lib/ads/smartlink";

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
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 sm:p-6">
      {!file ? (
        <div className="flex flex-col items-center justify-center p-8 sm:p-10 text-center border border-dashed border-slate-300 dark:border-white/10 rounded-xl hover:border-slate-400 dark:hover:border-white/20 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 mb-3">
            <Scissors className="h-5 w-5" />
          </div>
          <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-zinc-100">Select an audio file to trim</h3>
          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 font-mono">Supports MP3 · WAV · M4A · FLAC · OGG · AAC</p>
          <label className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white cursor-pointer hover:bg-brand-700 transition-colors">
            <span>Browse audio</span>
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
        <div className="space-y-5">
          {/* File Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-3">
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 truncate max-w-md">{file.name}</h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono mt-0.5">
                {formatBytes(file.size)} · Duration: {formatSeconds(duration)}
              </p>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setAudioUrl(null);
              }}
              className="text-xs text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Choose different file
            </button>
          </div>

          {/* Audio Player */}
          {audioUrl && (
            <audio
              ref={audioRef}
              src={audioUrl}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
          )}

          {/* Controls */}
          <div className="rounded-xl bg-slate-50 dark:bg-white/5 p-4 border border-slate-200/80 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-brand-700 btn-tactile shadow-xs"
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-white" />}
                  <span>{isPlaying ? "Pause" : "Play preview"}</span>
                </button>
                <AudioVisualizer bars={5} active={isPlaying} className="h-4 gap-0.5" barWidth="w-0.5" />
              </div>

              <div className="text-xs font-mono text-slate-600 dark:text-zinc-400 tabular-nums">
                {formatSeconds(currentTime)} / {formatSeconds(duration)}
              </div>
            </div>

            {/* Visual Waveform Timeline Track with Playhead & Active Trim Region */}
            {duration > 0 && (
              <div className="relative h-6 w-full rounded-md bg-slate-200/70 dark:bg-white/10 overflow-hidden">
                {/* Active Trim Window */}
                <div
                  className="absolute top-0 bottom-0 bg-brand-500/25 border-x border-brand-500"
                  style={{
                    left: `${(startTime / duration) * 100}%`,
                    width: `${((endTime - startTime) / duration) * 100}%`,
                  }}
                />
                {/* Gliding Playhead Needle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-red-500 shadow-xs transition-all duration-100 ease-linear z-10"
                  style={{
                    left: `${(currentTime / duration) * 100}%`,
                  }}
                />
              </div>
            )}

            {/* Range controls */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-medium text-slate-700 dark:text-zinc-300 block mb-1">
                    Start time ({formatSeconds(startTime)})
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
                    className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-2 py-1 text-xs text-slate-800 dark:text-zinc-200 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-700 dark:text-zinc-300 block mb-1">
                    End time ({formatSeconds(endTime)})
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
                    className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-2 py-1 text-xs text-slate-800 dark:text-zinc-200 font-mono"
                  />
                </div>
              </div>

              <div className="text-center font-mono text-[11px] text-slate-500 dark:text-zinc-400 tabular-nums">
                Trimmed length: {formatSeconds(Math.max(0, endTime - startTime))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={handleCutAudio}
              disabled={isProcessing}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50 transition-colors btn-tactile shadow-xs"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <AudioVisualizer bars={3} active={true} className="h-3 gap-0.5" barWidth="w-0.5" />
                  <span>Trimming audio ({progress}%)...</span>
                </>
              ) : (
                <>
                  <Scissors className="h-4 w-4" />
                  <span>Cut & save audio</span>
                </>
              )}
            </button>
          </div>

          {/* Output Download Section */}
          {outputResult && (
            <div className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-white/5 p-3.5 border border-slate-200/80 dark:border-white/10 animate-in fade-in-50">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-900 dark:text-zinc-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Audio trimmed successfully</span>
                </div>
                <div className="font-mono text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">
                  {outputResult.name} · {formatBytes(outputResult.blob.size)}
                </div>
              </div>
              <a
                href={outputResult.url}
                download={outputResult.name}
                onClick={triggerSmartlink}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700 btn-tactile shadow-xs"
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
      )}
    </div>
  );
}
