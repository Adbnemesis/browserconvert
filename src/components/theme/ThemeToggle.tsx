"use client";

import React, { useEffect, useState } from "react";
import { useTheme, THEME_OPTIONS } from "./ThemeProvider";
import { Sun, Moon, Palette } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, accent, setAccent } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <div className="w-16 h-8 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5" />
        <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 2 Curated tweakcn Themes: Northern Lights & Solar Dusk */}
      <div
        className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 p-1 shadow-xs"
        role="group"
        aria-label="Theme Presets"
      >
        {THEME_OPTIONS.map((opt) => {
          const isActive = accent === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setAccent(opt.id)}
              aria-label={`Switch to ${opt.name} (${opt.tagline})`}
              title={`${opt.name} · ${opt.tagline}`}
              className={`relative flex items-center justify-center rounded-full p-1 transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-brand-500 scale-110 shadow-sm"
                  : "opacity-60 hover:opacity-100 hover:scale-110"
              }`}
            >
              {/* Two-tone Theme Swatch: Canvas Background + Accent Dot */}
              <span
                className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/20 shadow-xs"
                style={{ backgroundColor: opt.bgHex }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: opt.colorHex }}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Light / Dark Mode Toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent dark:border-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4 text-amber-400 animate-in spin-in-90 duration-200" />
        ) : (
          <Moon className="h-4 w-4 text-slate-700 animate-in spin-in-90 duration-200" />
        )}
      </button>
    </div>
  );
}
