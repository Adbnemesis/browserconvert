"use client";

import React from "react";
import { Info } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getTranslations } from "@/i18n";

interface DirectAnswerProps {
  question?: string;
  answer?: string;
  title?: string;
  lead?: string;
  body?: string;
  icon?: string;
  badge?: string;
}

export function DirectAnswer({
  question,
  answer,
  title,
  lead,
  body,
  badge,
}: DirectAnswerProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname || "");
  const t = getTranslations(currentLocale);
  const displayBadge = badge || t.overviewBadge || "Overview";

  const displayQuestion = question || title || "";
  const displayAnswer = answer || (lead && body ? `${lead} ${body}` : lead || body || "");
  return (
    <div data-testid="direct-answer" className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 sm:p-5 my-6">
      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 mb-2">
        <Info className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
        <span data-testid="direct-answer-badge" className="font-mono text-[11px]">{displayBadge}</span>
      </div>
      <h2 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 mb-1.5">
        {displayQuestion}
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
        {displayAnswer}
      </p>
    </div>
  );
}
