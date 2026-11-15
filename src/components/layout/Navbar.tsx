"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { KofiIcon } from "@/components/common/KofiWidget";
import {
  FileAudio,
  Menu,
  X,
  ChevronDown,
  Scissors,
  Layers,
  Minimize2,
  Gauge,
  FastForward,
  Volume2,
  ShieldCheck,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const audioTools = [
    { label: "Audio Cutter", href: "/audio-cutter", desc: "Trim audio start and end times", icon: Scissors },
    { label: "Audio Merger", href: "/audio-merger", desc: "Join multiple tracks together", icon: Layers },
    { label: "Audio Compressor", href: "/audio-compressor", desc: "Reduce audio file size", icon: Minimize2 },
    { label: "Bitrate Changer", href: "/audio-bitrate-changer", desc: "Change kbps compression rate", icon: Gauge },
    { label: "Speed Changer", href: "/audio-speed-changer", desc: "Speed up or slow down audio", icon: FastForward },
    { label: "Volume Adjuster", href: "/audio-volume-adjuster", desc: "Boost or soften audio volume", icon: Volume2 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-[#09090b]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with Tactile Audio Hover Animation */}
        <Link href="/" className="group flex items-center gap-2.5 transition-all">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm transition-all duration-200 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:shadow-md">
            <FileAudio className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] text-slate-500 dark:text-zinc-400 sm:block -mt-0.5">
              In-browser audio tools
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Magnetic Pill Hover */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/audio-converter"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
              pathname === "/audio-converter"
                ? "bg-brand-500/15 text-brand-600 dark:text-brand-400 font-semibold ring-1 ring-brand-500/30"
                : "text-slate-650 dark:text-slate-300 hover:bg-brand-500/10 hover:text-brand-500"
            }`}
          >
            Audio Converter
          </Link>

          <Link
            href="/mp4-to-mp3"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
              pathname === "/mp4-to-mp3"
                ? "bg-brand-500/15 text-brand-600 dark:text-brand-400 font-semibold ring-1 ring-brand-500/30"
                : "text-slate-650 dark:text-slate-300 hover:bg-brand-500/10 hover:text-brand-500"
            }`}
          >
            Video to MP3
          </Link>

          {/* Tools Dropdown with Animated Item Hover */}
          <div className="relative" ref={toolsDropdownRef}>
            <button
              type="button"
              onClick={() => setToolsDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
                toolsDropdownOpen
                  ? "bg-brand-500/15 text-brand-600 dark:text-brand-400 font-semibold ring-1 ring-brand-500/30"
                  : "text-slate-650 dark:text-slate-300 hover:bg-brand-500/10 hover:text-brand-500"
              } focus:outline-none`}
              aria-expanded={toolsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Audio Tools</span>
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                  toolsDropdownOpen ? "rotate-180 text-brand-500" : ""
                }`}
              />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="w-72 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#121216] p-2 shadow-xl dark:shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="space-y-1">
                    {audioTools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          onClick={() => setToolsDropdownOpen(false)}
                          className="flex items-start gap-3 rounded-lg p-2.5 transition-all duration-150 hover:bg-brand-500/10 hover:translate-x-1.5 group"
                        >
                          <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 transition-all duration-200">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors">
                              {tool.label}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-zinc-400">{tool.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/format-guide"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
              pathname === "/format-guide"
                ? "bg-brand-500/15 text-brand-600 dark:text-brand-400 font-semibold ring-1 ring-brand-500/30"
                : "text-slate-650 dark:text-slate-300 hover:bg-brand-500/10 hover:text-brand-500"
            }`}
          >
            Format Guide
          </Link>

          <Link
            href="/about"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
              pathname === "/about"
                ? "bg-brand-500/15 text-brand-600 dark:text-brand-400 font-semibold ring-1 ring-brand-500/30"
                : "text-slate-650 dark:text-slate-300 hover:bg-brand-500/10 hover:text-brand-500"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Actions: Privacy Badge, Ko-fi Support & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>100% Client-Side Privacy</span>
          </div>
          {siteConfig.links.kofi && (
            <a
              href={siteConfig.links.kofi}
              target="_blank"
              rel="noopener noreferrer"
              title="Support BrowserConvert on Ko-fi"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-[#00b4a4] dark:hover:text-[#13c3ec] hover:border-[#00b4a4]/40 transition-all group"
            >
              <KofiIcon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
              <span>Support</span>
            </a>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Home
            </Link>
            <Link
              href="/audio-converter"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Audio Converter
            </Link>
            <Link
              href="/mp4-to-mp3"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Video to MP3
            </Link>
            <Link
              href="/format-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Format Guide
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              About
            </Link>

            <div className="pt-3 pb-1 border-t border-slate-100 dark:border-slate-800">
              <div className="px-3 text-xs font-medium text-slate-400 dark:text-zinc-500">Audio tools</div>
              <div className="mt-2 grid grid-cols-2 gap-1">
                {audioTools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <tool.icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                    <span>{tool.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 py-2.5 text-xs font-medium text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                <ShieldCheck className="h-4 w-4" />
                <span>Files never leave your device. 100% Local.</span>
              </div>
              {siteConfig.links.kofi && (
                <a
                  href={siteConfig.links.kofi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#00b4a4] hover:bg-[#009e8f] text-white py-2.5 text-xs font-semibold shadow-xs transition-colors"
                >
                  <KofiIcon className="h-4 w-4" />
                  <span>Support on Ko-fi</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
