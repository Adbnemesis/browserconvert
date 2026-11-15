import React from "react";
import { Sparkles } from "lucide-react";

interface DirectAnswerProps {
  question: string;
  answer: string;
  badge?: string;
}

export function DirectAnswer({
  question,
  answer,
  badge = "Quick Answer • AI Overview",
}: DirectAnswerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-200/80 dark:border-brand-500/20 bg-gradient-to-r from-brand-50/60 via-slate-50 to-brand-50/30 dark:from-brand-950/30 dark:via-zinc-900 dark:to-brand-950/20 p-5 sm:p-6 shadow-xs my-6">
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 mb-2">
        <Sparkles className="h-3.5 w-3.5 text-brand-500 animate-pulse" />
        <span>{badge}</span>
      </div>
      <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
        {question}
      </h2>
      <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
        {answer}
      </p>
    </div>
  );
}
