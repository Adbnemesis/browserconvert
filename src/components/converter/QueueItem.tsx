"use client";

import React from "react";
import { ConversionItem } from "@/lib/conversion/types";
import { formatBytes } from "@/lib/utils/formatters";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import {
  FileAudio,
  Film,
  Download,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ArrowRight,
} from "lucide-react";

interface QueueItemProps {
  item: ConversionItem;
  onRemove: (id: string) => void;
  onDownload: (item: ConversionItem) => void;
}

export function QueueItem({ item, onRemove, onDownload }: QueueItemProps) {
  const isVideo = item.category === "video";
  const isProcessing =
    item.status === "loading_engine" ||
    item.status === "reading_file" ||
    item.status === "processing" ||
    item.status === "encoding";
  const isCompleted = item.status === "completed" && item.outputBlob;
  const isFailed = item.status === "error";

  const sizeDelta =
    isCompleted && item.outputSize
      ? item.outputSize - item.originalSize
      : null;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-3.5 transition-colors hover:border-slate-300 dark:hover:border-white/20">
      {/* Top Row: File icon, name, formats, actions */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10">
            {isVideo ? <Film className="h-4 w-4" /> : <FileAudio className="h-4 w-4" />}
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 truncate" title={item.name}>
              {item.name}
            </h4>

            {/* Formats and sizes badges */}
            <div className="mt-1 flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-zinc-400">
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-1.5 py-0.5 rounded text-slate-700 dark:text-zinc-300">
                {item.inputFormat}
              </span>
              <ArrowRight className="h-3 w-3 text-slate-400" />
              <span className="bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/40 px-1.5 py-0.5 rounded text-brand-700 dark:text-brand-300">
                {item.settings.outputFormat.toUpperCase()}
              </span>
              <span>·</span>
              <span className="tabular-nums">{formatBytes(item.originalSize)}</span>

              {item.settings.bitrate && (
                <>
                  <span>·</span>
                  <span>{item.settings.bitrate}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Action Button: Download or Remove */}
        <div className="flex items-center gap-2 shrink-0">
          {isCompleted ? (
            <button
              onClick={() => onDownload(item)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700 btn-tactile shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </button>
          ) : (
            <button
              onClick={() => onRemove(item.id)}
              disabled={isProcessing}
              className="rounded-lg p-1.5 text-slate-400 hover:text-red-600 dark:text-zinc-500 dark:hover:text-red-400 transition-colors hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-40 btn-tactile"
              aria-label="Remove from queue"
              title="Remove file"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar with Laser Shimmer Beam & Audio Visualizer */}
      {isProcessing && (
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
              <Loader2 className="h-3 w-3 animate-spin text-brand-600 dark:text-brand-400" />
              <AudioVisualizer bars={3} className="h-2.5 gap-0.5" barWidth="w-0.5" />
              <span>{item.stage}</span>
            </span>
            <span className="font-mono text-[11px] text-slate-600 dark:text-zinc-400 tabular-nums">
              {item.progress}%
            </span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
            <div
              className="relative h-full bg-brand-600 transition-[width] duration-200 rounded-full overflow-hidden"
              style={{ width: `${Math.max(item.progress, 4)}%` }}
            >
              {/* Laser Shimmer Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-laser-sweep" />
            </div>
          </div>
        </div>
      )}

      {/* Completed Summary with SVG Checkmark Draw-In */}
      {isCompleted && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 dark:bg-white/5 p-2.5 text-xs text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 animate-in fade-in-50 duration-200">
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-emerald-500 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" className="animate-checkmark-draw" />
            </svg>
            <span className="truncate max-w-xs">{item.outputName}</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="tabular-nums text-slate-900 dark:text-zinc-100">
              {item.outputSize ? formatBytes(item.outputSize) : ""}
            </span>
            {sizeDelta !== null && (
              <span
                className={`tabular-nums ${
                  sizeDelta < 0 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-zinc-400"
                }`}
              >
                {sizeDelta < 0
                  ? `-${formatBytes(Math.abs(sizeDelta))}`
                  : `+${formatBytes(sizeDelta)}`}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Error state */}
      {isFailed && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 p-2.5 text-xs text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/60">
          <AlertTriangle className="h-3.5 w-3.5 text-red-600 dark:text-red-400 shrink-0" />
          <span>Conversion failed: {item.errorMessage || "Corrupted media or unsupported container"}</span>
        </div>
      )}
    </div>
  );
}
