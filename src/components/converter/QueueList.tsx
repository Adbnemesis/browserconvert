"use client";

import React from "react";
import { ConversionItem } from "@/lib/conversion/types";
import { QueueItem } from "./QueueItem";
import { Play, DownloadCloud, Trash2, StopCircle, CheckCircle2 } from "lucide-react";

interface QueueListProps {
  items: ConversionItem[];
  isConverting: boolean;
  onRemoveItem: (id: string) => void;
  onDownloadItem: (item: ConversionItem) => void;
  onConvertAll: () => void;
  onDownloadZip: () => void;
  onClearAll: () => void;
  onCancel: () => void;
}

export function QueueList({
  items,
  isConverting,
  onRemoveItem,
  onDownloadItem,
  onConvertAll,
  onDownloadZip,
  onClearAll,
  onCancel,
}: QueueListProps) {
  if (items.length === 0) return null;

  const completedCount = items.filter((i) => i.status === "completed").length;
  const pendingCount = items.filter((i) => i.status === "idle" || i.status === "queued").length;
  const hasCompleted = completedCount > 0;

  return (
    <div className="space-y-3">
      {/* Queue Header & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-3.5">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100">
            Queue ({items.length} {items.length === 1 ? "track" : "tracks"})
          </span>
          {completedCount > 0 && (
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 px-2 py-0.5 rounded tabular-nums">
              <CheckCircle2 className="h-3 w-3" />
              {completedCount} / {items.length} done
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {isConverting && (
            <button
              onClick={onCancel}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors btn-tactile"
            >
              <StopCircle className="h-3.5 w-3.5" />
              <span>Cancel</span>
            </button>
          )}

          {hasCompleted && (
            <button
              onClick={onDownloadZip}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors btn-tactile shadow-xs"
            >
              <DownloadCloud className="h-3.5 w-3.5" />
              <span>Save all as ZIP ({completedCount})</span>
            </button>
          )}

          {!isConverting && pendingCount > 0 && (
            <button
              onClick={onConvertAll}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-brand-700 transition-colors btn-tactile shadow-xs"
            >
              <Play className="h-3 w-3 fill-white" />
              <span>Convert {pendingCount === 1 ? "track" : `all (${pendingCount})`}</span>
            </button>
          )}

          <button
            onClick={onClearAll}
            disabled={isConverting}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-zinc-100 disabled:opacity-40 transition-colors btn-tactile"
          >
            <Trash2 className="h-3 w-3" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Queue Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <QueueItem
            key={item.id}
            item={item}
            onRemove={onRemoveItem}
            onDownload={onDownloadItem}
          />
        ))}
      </div>
    </div>
  );
}
