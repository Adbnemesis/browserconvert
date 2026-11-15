"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
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
  const pathname = usePathname();

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
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:opacity-90 active:scale-98">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm dark:shadow-[0_0_15px_rgb(var(--brand-glow)/0.4)]">
            <FileAudio className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{siteConfig.name}</span>
            <span className="hidden text-[10px] font-medium text-slate-500 dark:text-slate-400 sm:block -mt-1">Free & Private</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/audio-converter"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              pathname === "/audio-converter"
                ? "bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-semibold"
                : "text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Audio Converter
          </Link>

          <Link
            href="/mp4-to-mp3"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              pathname === "/mp4-to-mp3"
                ? "bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-semibold"
                : "text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Video to MP3
          </Link>

          {/* Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <button
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-expanded={toolsDropdownOpen}
            >
              <span>Audio Tools</span>
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200" />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute left-0 mt-1 w-72 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-dropdown transition-all animate-in fade-in-50 zoom-in-95">
                <div className="space-y-1">
                  {audioTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setToolsDropdownOpen(false)}
                        className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 group"
                      >
                        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                            {tool.label}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">{tool.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/format-guide"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              pathname === "/format-guide"
                ? "bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-semibold"
                : "text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Format Guide
          </Link>

          <Link
            href="/about"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              pathname === "/about"
                ? "bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-semibold"
                : "text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Actions: Privacy Badge & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>100% Client-Side Privacy</span>
          </div>
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
              <div className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Audio Tools</div>
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

            <div className="pt-4">
              <div className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 py-2.5 text-xs font-medium text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                <ShieldCheck className="h-4 w-4" />
                <span>Files never leave your device. 100% Local.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
