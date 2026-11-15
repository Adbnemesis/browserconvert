"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config/site";
import { X } from "lucide-react";

export function KofiIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cup Body */}
      <path
        d="M3 6.5C3 5.67 3.67 5 4.5 5H15.5C16.33 5 17 5.67 17 6.5V13C17 16.31 14.31 19 11 19H9C5.69 19 3 16.31 3 13V6.5Z"
        fill="#FFFFFF"
      />
      {/* Cup Handle */}
      <path
        d="M17 7.5H18.5C20.43 7.5 22 9.07 22 11C22 12.93 20.43 14.5 18.5 14.5H17"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Heart inside cup */}
      <path
        d="M10 9.8C9.4 9.1 8.4 9.1 7.8 9.7C7.2 10.3 7.2 11.3 7.8 11.9L10 14.1L12.2 11.9C12.8 11.3 12.8 10.3 12.2 9.7C11.6 9.1 10.6 9.1 10 9.8Z"
        fill="#FF5E5B"
      />
    </svg>
  );
}

export function KofiWidget() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = sessionStorage.getItem("kofi_dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  if (!mounted || isDismissed) return null;

  const kofiUrl = siteConfig.links.kofi || "https://ko-fi.com/nemistory";

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem("kofi_dismissed", "true");
  };

  return (
    <aside
      aria-label="Support BrowserConvert on Ko-fi"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 group animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="relative flex items-center">
        <a
          href={kofiUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Support BrowserConvert on Ko-fi"
          className="flex items-center gap-2 rounded-full bg-[#00b4a4] hover:bg-[#009e8f] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg shadow-teal-900/20 hover:shadow-xl hover:shadow-teal-900/30 transition-all duration-200 active:scale-95 group-hover:pr-8"
        >
          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center shrink-0">
            <KofiIcon className="h-4 w-4 sm:h-5 sm:w-5 drop-shadow-xs" />
          </div>
          <span className="tracking-tight whitespace-nowrap">Support me</span>
        </a>

        {/* Subtle Dismiss Cross (visible on hover) */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss support button"
          className="absolute right-2 opacity-0 group-hover:opacity-100 flex h-4 w-4 items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white/90 transition-opacity duration-150"
        >
          <X className="h-2.5 w-2.5" />
        </button>
      </div>
    </aside>
  );
}
