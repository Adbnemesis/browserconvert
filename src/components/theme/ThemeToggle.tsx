"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, accent, setAccent } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <div className="w-14 h-8 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5" />
        <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Accent Switcher (Green Light vs Crimson Red) */}
      <div
        className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 p-1 shadow-xs"
        role="group"
        aria-label="Theme Accent Color"
      >
        <button
          type="button"
          onClick={() => setAccent("green")}
          aria-label="Switch to Green Light accent"
          title="Green Light / Cyber Emerald"
          className={`relative flex items-center justify-center rounded-full p-1 transition-all ${
            accent === "green"
              ? "bg-white dark:bg-white/15 shadow-xs ring-1 ring-emerald-500"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
        </button>

        <button
          type="button"
          onClick={() => setAccent("red")}
          aria-label="Switch to Crimson Red accent"
          title="Cyberpunk Crimson Red"
          className={`relative flex items-center justify-center rounded-full p-1 transition-all ${
            accent === "red"
              ? "bg-white dark:bg-white/15 shadow-xs ring-1 ring-rose-500"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          <span className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]" />
        </button>
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
