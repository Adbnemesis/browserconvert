"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config/site";
import { X, Heart, Coffee, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [coffees, setCoffees] = useState<number>(1);
  const [customMessage, setCustomMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drop-up when clicking outside or pressing Escape
  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handlePointerDown);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const kofiBaseUrl = siteConfig.links.kofi || "https://ko-fi.com/nemistory";
  const coffeePrice = 3;
  const totalAmount = coffees * coffeePrice;

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Never redirect the current page! Open Ko-fi in a new tab
    const url = new URL(kofiBaseUrl);
    if (customMessage.trim()) {
      url.searchParams.set("message", customMessage.trim());
    }
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <aside
      ref={widgetRef}
      aria-label="Support BrowserConvert on Ko-fi"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 select-none font-sans"
    >
      <div className="relative">
        {/* Drop-up Card Animation */}
        {isOpen && (
          <div
            role="dialog"
            aria-labelledby="kofi-card-title"
            aria-modal="true"
            className="absolute bottom-full left-0 mb-3 w-[300px] sm:w-[340px] rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#121216] p-4 sm:p-5 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200 origin-bottom-left"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-white/5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b4a4] to-teal-600 text-white shadow-sm shadow-teal-500/20">
                  <KofiIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    id="kofi-card-title"
                    className="text-sm font-semibold tracking-tight text-slate-900 dark:text-zinc-100 flex items-center gap-1.5"
                  >
                    <span>Support BrowserConvert</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                    ko-fi.com/nemistory
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close support card"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body Form */}
            <form onSubmit={handleSupportSubmit} className="mt-3.5 space-y-3.5">
              <p className="text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
                BrowserConvert is <span className="font-semibold text-slate-900 dark:text-white">100% free and private</span>.
                All audio processing runs on your device with zero server uploads or tracking ads.
              </p>

              {/* Coffee Selector */}
              <div>
                <label className="block text-[11px] font-medium text-slate-500 dark:text-zinc-400 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Coffee className="h-3 w-3 text-slate-400" />
                    <span>Buy a coffee ($3 each)</span>
                  </span>
                  <span className="font-mono font-semibold text-xs text-[#00a394] dark:text-[#13c3ec]">
                    ${totalAmount} USD
                  </span>
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {[1, 3, 5].map((count) => {
                    const isSelected = coffees === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setCoffees(count)}
                        className={`flex flex-col items-center justify-center rounded-xl py-2 px-2 border text-xs font-semibold transition-all duration-150 active:scale-95 ${
                          isSelected
                            ? "bg-[#00b4a4]/15 border-[#00b4a4] text-[#009b8d] dark:text-[#13c3ec] shadow-xs"
                            : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/10"
                        }`}
                      >
                        <span className="text-sm">{"☕".repeat(Math.min(count, 3))}</span>
                        <span className="mt-0.5">${count * coffeePrice}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Message Field */}
              <div>
                <input
                  type="text"
                  placeholder="Say something nice (optional)..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  maxLength={140}
                  className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:border-[#00b4a4] focus:outline-none transition-colors"
                />
              </div>

              {/* Primary Call to Action */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00b4a4] hover:bg-[#009e8f] text-white py-2.5 px-4 text-xs font-semibold shadow-md shadow-teal-900/20 hover:shadow-lg hover:shadow-teal-900/30 transition-all duration-200 active:scale-98 group cursor-pointer"
              >
                <KofiIcon className="h-4 w-4" />
                <span>Support ${totalAmount} on Ko-fi</span>
                <ExternalLink className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Trust & Guarantee footnote */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-zinc-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-emerald-500" />
                  <span>Secure via Ko-fi</span>
                </span>
                <span>Cards, PayPal & Apple Pay</span>
              </div>
            </form>
          </div>
        )}

        {/* Trigger Button: Fixed in bottom-left */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          title="Support BrowserConvert"
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-lg transition-all duration-200 active:scale-95 cursor-pointer ${
            isOpen
              ? "bg-[#009e8f] text-white ring-4 ring-[#00b4a4]/30 shadow-xl"
              : "bg-[#00b4a4] hover:bg-[#009e8f] text-white shadow-teal-900/20 hover:shadow-xl hover:shadow-teal-900/30 hover:-translate-y-0.5"
          }`}
        >
          <div className="flex h-5 w-5 sm:h-5 sm:w-5 items-center justify-center shrink-0">
            <KofiIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5 drop-shadow-xs" />
          </div>
          <span className="tracking-tight whitespace-nowrap">Support me</span>
        </button>
      </div>
    </aside>
  );
}
