"use client";

import React from "react";
import { siteConfig } from "@/lib/config/site";

interface AdSlotProps {
  position: "headerBanner" | "inContent" | "footerBanner";
  className?: string;
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  // If ads are disabled in configuration, do not render intrusive elements
  if (!siteConfig.ads.enabled) {
    return null;
  }

  // Define fixed minimum sizes to avoid Cumulative Layout Shift (CLS)
  const sizeClasses = {
    headerBanner: "min-h-[90px] max-w-[728px]",
    inContent: "min-h-[250px] max-w-[336px] sm:max-w-[728px]",
    footerBanner: "min-h-[90px] max-w-[728px]",
  };

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto my-6 flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50 p-2 text-center text-xs text-slate-400 ${sizeClasses[position]} ${className}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-slate-400">Advertisement</span>
      <div className="mt-1 flex items-center justify-center text-[11px] text-slate-400">
        Reserved Ad Placement ({position})
      </div>
      {/* Real ad scripts (Google AdSense / Mediavine) will mount here once client ID is configured */}
    </aside>
  );
}
