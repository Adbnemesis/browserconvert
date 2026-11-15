import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { FileAudio, Shield, Lock, Cpu } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d0e] text-slate-600 dark:text-zinc-400">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-slate-200/80 dark:border-white/5 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-brand-600 dark:text-brand-400">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-200">Client-side privacy</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Files are processed in memory with zero uploads.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-brand-600 dark:text-brand-400">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-200">No account required</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Unlimited conversions without sign-up.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-brand-600 dark:text-brand-400">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-200">WebAssembly engine</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Browser-native FFmpeg compilation for audio fidelity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white">
                <FileAudio className="h-3.5 w-3.5" />
              </div>
              <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-zinc-100">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-zinc-400 max-w-sm">
              Online audio converter and video-to-audio extraction utility. Convert MP3, WAV, M4A, FLAC, OGG, OPUS,
              AAC, and more directly in your browser.
            </p>
            <div className="mt-4 font-mono text-[11px] text-slate-400 dark:text-zinc-500">
              Zero remote server media storage.
            </div>
          </div>

          {/* Popular Conversions */}
          <div>
            <h3 className="text-xs font-medium text-slate-900 dark:text-zinc-200">Popular tools</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/mp4-to-mp3" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  MP4 to MP3
                </Link>
              </li>
              <li>
                <Link href="/wav-to-mp3" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  WAV to MP3
                </Link>
              </li>
              <li>
                <Link href="/m4a-to-mp3" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  M4A to MP3
                </Link>
              </li>
              <li>
                <Link href="/mov-to-mp3" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  MOV to MP3
                </Link>
              </li>
              <li>
                <Link href="/mp3-to-wav" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  MP3 to WAV
                </Link>
              </li>
              <li>
                <Link href="/flac-to-mp3" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  FLAC to MP3
                </Link>
              </li>
            </ul>
          </div>

          {/* Audio Utilities */}
          <div>
            <h3 className="text-xs font-medium text-slate-900 dark:text-zinc-200">Audio utilities</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/audio-cutter" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Audio Cutter
                </Link>
              </li>
              <li>
                <Link href="/audio-merger" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Audio Merger
                </Link>
              </li>
              <li>
                <Link href="/audio-compressor" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Audio Compressor
                </Link>
              </li>
              <li>
                <Link href="/audio-bitrate-changer" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Bitrate Changer
                </Link>
              </li>
              <li>
                <Link href="/audio-speed-changer" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Speed Changer
                </Link>
              </li>
              <li>
                <Link href="/audio-volume-adjuster" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Volume Adjuster
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-xs font-medium text-slate-900 dark:text-zinc-200">Resources & legal</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/format-guide" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Audio format guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-200 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-zinc-500 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            In-browser WebAssembly FFmpeg
          </p>
        </div>
      </div>
    </footer>
  );
}
