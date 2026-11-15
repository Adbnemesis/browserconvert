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
    <div className="space-y-4">
      {/* Queue Header & Global Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-900">
            Conversion Queue ({items.length} {items.length === 1 ? "file" : "files"})
          </span>
          {completedCount > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3 w-3" />
              {completedCount} of {items.length} completed
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Cancel button if running */}
          {isConverting && (
            <button
              onClick={onCancel}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition-colors hover:bg-red-100"
            >
              <StopCircle className="h-4 w-4" />
              <span>Cancel</span>
            </button>
          )}

          {/* Download all as ZIP if any completed */}
          {hasCompleted && (
            <button
              onClick={onDownloadZip}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700 active:scale-95"
            >
              <DownloadCloud className="h-4 w-4" />
              <span>Download All as ZIP ({completedCount})</span>
            </button>
          )}

          {/* Convert pending files button */}
          {!isConverting && pendingCount > 0 && (
            <button
              onClick={onConvertAll}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-700 active:scale-95"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Convert {pendingCount === 1 ? "File" : `All (${pendingCount})`}</span>
            </button>
          )}

          {/* Clear all button */}
          <button
            onClick={onClearAll}
            disabled={isConverting}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 disabled:opacity-40"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Queue Cards */}
      <div className="space-y-2.5">
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
