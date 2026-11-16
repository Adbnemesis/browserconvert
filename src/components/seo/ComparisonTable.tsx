import React from "react";

export interface ComparisonRow {
  feature: string;
  sourceValue: string;
  targetValue: string;
  verdict?: string;
}

interface ComparisonTableProps {
  sourceName?: string;
  targetName?: string;
  sourceFormat?: string;
  targetFormat?: string;
  rows: ComparisonRow[];
  caption?: string;
}

export function ComparisonTable({
  sourceName,
  targetName,
  sourceFormat,
  targetFormat,
  rows,
  caption,
}: ComparisonTableProps) {
  const displaySource = sourceName || sourceFormat || "Source Format";
  const displayTarget = targetName || targetFormat || "Target Format";
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121216] shadow-xs my-6">
      {caption && (
        <div className="bg-slate-50 dark:bg-white/[0.03] px-5 py-3 border-b border-slate-200 dark:border-white/10">
          <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-200">
            {caption}
          </h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-slate-600 dark:text-zinc-400 font-semibold">
              <th className="py-3 px-4 sm:px-6 w-1/3">Feature / Metric</th>
              <th className="py-3 px-4 sm:px-6 w-1/3 text-brand-700 dark:text-brand-400 font-bold">{displaySource}</th>
              <th className="py-3 px-4 sm:px-6 w-1/3 text-emerald-700 dark:text-emerald-400 font-bold">{displayTarget}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {rows.map((row, index) => (
              <tr
                key={row.feature}
                className={index % 2 === 0 ? "bg-transparent" : "bg-slate-50/30 dark:bg-white/[0.01]"}
              >
                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 dark:text-zinc-200">
                  {row.feature}
                </td>
                <td className="py-3 px-4 sm:px-6 text-slate-600 dark:text-zinc-300">
                  {row.sourceValue}
                </td>
                <td className="py-3 px-4 sm:px-6 text-slate-600 dark:text-zinc-300 font-medium">
                  {row.targetValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
