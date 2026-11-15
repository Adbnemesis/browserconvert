"use client";

import React from "react";
import { ConversionItem } from "@/lib/conversion/types";
import { formatBytes } from "@/lib/utils/formatters";
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

  // Calculate size change truthfully
  const sizeDelta =
    isCompleted && item.outputSize
      ? item.outputSize - item.originalSize
      : null;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs transition-all hover:border-slate-300 dark:hover:border-slate-700">
      {/* Top Row: File icon, name, formats, actions */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
              isVideo
                ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                : "bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400"
            }`}
          >
            {isVideo ? <Film className="h-5 w-5" /> : <FileAudio className="h-5 w-5" />}
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate" title={item.name}>
              {item.name}
            </h4>

            {/* Formats and sizes badges */}
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center rounded-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-bold uppercase text-slate-700 dark:text-slate-300">
                {item.inputFormat}
              </span>
              <ArrowRight className="h-3 w-3 text-slate-400" />
              <span className="inline-flex items-center rounded-sm bg-brand-50 dark:bg-brand-950/60 px-1.5 py-0.5 font-bold uppercase text-brand-700 dark:text-brand-300">
                {item.settings.outputFormat}
              </span>
              <span>•</span>
              <span>{formatBytes(item.originalSize)}</span>

              {/* Bitrate tag if lossy */}
              {item.settings.bitrate && (
                <>
                  <span>•</span>
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
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </button>
          ) : (
            <button
              onClick={() => onRemove(item.id)}
              disabled={isProcessing}
              className="rounded-lg p-1.5 text-slate-400 hover:text-red-600 dark:text-slate-500 dark:hover:text-red-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
              aria-label="Remove from queue"
              title="Remove file"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Progress & Status Bar */}
      {isProcessing && (
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 font-medium text-brand-700 dark:text-brand-400">
              <Loader2 className="h-3.5 w-3.5 animate-spin text-brand-600 dark:text-brand-400" />
              {item.stage}
            </span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{item.progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full bg-brand-600 transition-all duration-300 rounded-full"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Completed Success Summary */}
      {isCompleted && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 p-2.5 text-xs text-emerald-900 dark:text-emerald-200 border border-emerald-200/60 dark:border-emerald-800/40">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-medium truncate max-w-xs">{item.outputName}</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {item.outputSize ? formatBytes(item.outputSize) : ""}
            </span>
            {sizeDelta !== null && (
              <span
                className={`font-semibold ${
                  sizeDelta < 0 ? "text-emerald-700 dark:text-emerald-400" : "text-amber-700 dark:text-amber-400"
                }`}
              >
                ({sizeDelta < 0 ? "-" : "+"}
                {formatBytes(Math.abs(sizeDelta))})
              </span>
            )}
          </div>
        </div>
      )}

      {/* Failure State */}
      {isFailed && (
        <div className="flex items-start gap-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 p-2.5 text-xs text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800/60">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="font-semibold">Conversion could not complete</div>
            <div className="text-[11px] text-red-700 dark:text-red-300 mt-0.5">
              {item.errorMessage || "The input file could not be parsed by the audio engine."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
