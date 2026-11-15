import React from "react";
import { Info } from "lucide-react";

interface DirectAnswerProps {
  question: string;
  answer: string;
  badge?: string;
}

export function DirectAnswer({
  question,
  answer,
  badge = "Overview",
}: DirectAnswerProps) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 sm:p-5 my-6">
      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 mb-2">
        <Info className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
        <span className="font-mono text-[11px]">{badge}</span>
      </div>
      <h2 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 mb-1.5">
        {question}
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
        {answer}
      </p>
    </div>
  );
}
