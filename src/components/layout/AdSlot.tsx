"use client";

import React, { useEffect, useRef } from "react";

interface AdSlotProps {
  position: "headerBanner" | "inContent" | "footerBanner";
  className?: string;
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (position !== "headerBanner") return;

    const scriptId = "adsterra-native-banner-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://bauval.org/21/bcb13c7f517c2331eb725d8dd3b6fa45";
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      document.body.appendChild(script);
    }
  }, [position]);

  // Render header banner below converter box
  if (position !== "headerBanner") {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto my-6 flex flex-col items-center justify-center text-center ${className}`}
    >
      <span className="font-mono text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1.5">
        Sponsored
      </span>
      <div className="w-full max-w-[728px] min-h-[90px] flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] p-1">
        <div id="container-bcb13c7f517c2331eb725d8dd3b6fa45" ref={containerRef} className="w-full" />
      </div>
    </aside>
  );
}
