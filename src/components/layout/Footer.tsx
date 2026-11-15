import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { FileAudio, Shield, Lock, Cpu, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-brand-400">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">100% Client-Side Privacy</h4>
                <p className="text-xs text-slate-400">Your files are processed locally. Zero server uploads.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-emerald-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">No Registration Required</h4>
                <p className="text-xs text-slate-400">Unlimited free conversions with zero account sign-up.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">WebAssembly Engine</h4>
                <p className="text-xs text-slate-400">Powered by browser-native FFmpeg for studio-grade fidelity.</p>
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
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm">
                <FileAudio className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 max-w-sm">
              Free online audio converter and video-to-audio extraction platform. Convert MP3, WAV, M4A, FLAC, OGG, OPUS,
              AAC, MP4, MOV, and more directly in your web browser. Safe, instant, and private.
            </p>
            <div className="mt-4 text-xs text-slate-500">
              Files are never uploaded to any remote server or database.
            </div>
          </div>

          {/* Popular Conversions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Popular Tools</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/mp4-to-mp3" className="text-slate-400 hover:text-white transition-colors">
                  MP4 to MP3
                </Link>
              </li>
              <li>
                <Link href="/wav-to-mp3" className="text-slate-400 hover:text-white transition-colors">
                  WAV to MP3
                </Link>
              </li>
              <li>
                <Link href="/m4a-to-mp3" className="text-slate-400 hover:text-white transition-colors">
                  M4A to MP3
                </Link>
              </li>
              <li>
                <Link href="/mov-to-mp3" className="text-slate-400 hover:text-white transition-colors">
                  MOV to MP3
                </Link>
              </li>
              <li>
                <Link href="/mp3-to-wav" className="text-slate-400 hover:text-white transition-colors">
                  MP3 to WAV
                </Link>
              </li>
              <li>
                <Link href="/flac-to-mp3" className="text-slate-400 hover:text-white transition-colors">
                  FLAC to MP3
                </Link>
              </li>
            </ul>
          </div>

          {/* Audio Utilities */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Audio Utilities</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/audio-cutter" className="text-slate-400 hover:text-white transition-colors">
                  Audio Cutter
                </Link>
              </li>
              <li>
                <Link href="/audio-merger" className="text-slate-400 hover:text-white transition-colors">
                  Audio Merger
                </Link>
              </li>
              <li>
                <Link href="/audio-compressor" className="text-slate-400 hover:text-white transition-colors">
                  Audio Compressor
                </Link>
              </li>
              <li>
                <Link href="/audio-bitrate-changer" className="text-slate-400 hover:text-white transition-colors">
                  Bitrate Changer
                </Link>
              </li>
              <li>
                <Link href="/audio-speed-changer" className="text-slate-400 hover:text-white transition-colors">
                  Speed Changer
                </Link>
              </li>
              <li>
                <Link href="/audio-volume-adjuster" className="text-slate-400 hover:text-white transition-colors">
                  Volume Adjuster
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Resources & Legal</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/format-guide" className="text-slate-400 hover:text-white transition-colors">
                  Audio Format Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for audio creators with privacy and speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
