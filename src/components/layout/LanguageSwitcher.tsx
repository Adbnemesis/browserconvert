"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check } from "lucide-react";
import {
  LOCALES,
  LOCALE_CONFIG,
  Locale,
  getLocaleFromPathname,
  getCanonicalPath,
  getLocalizedPath,
} from "@/i18n";

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export function LanguageSwitcher({ className = "", isMobile = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = getLocaleFromPathname(pathname);
  const currentConfig = LOCALE_CONFIG[currentLocale];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSelectLanguage = (targetLocale: Locale) => {
    if (targetLocale === currentLocale) {
      setIsOpen(false);
      return;
    }
    const canonicalPath = getCanonicalPath(pathname);
    const targetUrl = getLocalizedPath(targetLocale, canonicalPath);
    setIsOpen(false);
    router.push(targetUrl);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
      >
        <Globe className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
        <span>{currentConfig.flag}</span>
        <span className="uppercase font-mono text-[11px] font-semibold">{currentConfig.code}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 z-50 w-48 max-h-[85vh] overflow-y-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-1.5 shadow-2xl transition-all"
        >
          <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
            Language / Idioma
          </div>
          <div className="space-y-0.5 mt-0.5">
            {LOCALES.map((loc) => {
              const config = LOCALE_CONFIG[loc];
              const isSelected = loc === currentLocale;
              return (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleSelectLanguage(loc)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold"
                      : "text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{config.flag}</span>
                    <span>{config.nativeName}</span>
                  </span>
                  {isSelected && <Check className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
