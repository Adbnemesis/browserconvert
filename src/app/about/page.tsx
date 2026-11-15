import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";
import { Cpu, ShieldCheck, Zap, Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About MediaConvert - Client-Side Audio & Video Converter",
  description:
    "Learn about MediaConvert's browser-native audio conversion architecture. Fast, free, and 100% private file-to-file conversion without server uploads.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          About MediaConvert
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          MediaConvert is a free, modern web utility built to simplify audio format conversion and video-to-audio
          extraction while protecting user confidentiality.
        </p>
      </div>

      {/* The Problem & Our Solution */}
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900">Why We Built MediaConvert</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          For years, converting an audio file or extracting sound from a video required either installing bloated,
          adware-laden desktop software or uploading sensitive recordings to obscure cloud servers. Cloud-based converters
          present serious privacy risks: your personal voice notes, corporate interviews, unreleased music, and private
          family videos are uploaded over the internet, stored on third-party disks, and processed in unpredictable server environments.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We built MediaConvert with a simple conviction: <strong>your media files should never leave your computer or phone.</strong>
        </p>
      </section>

      {/* How it Works: WebAssembly Architecture */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">The Technology Behind Local Processing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">WebAssembly (Wasm) Engine</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We compile the industry-standard FFmpeg multimedia framework into WebAssembly binaries that execute
              natively in your browser with near-native CPU speeds.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Zero Server Uploads</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              When you select a 500 MB video or audio file, zero bytes of media content are sent over the network.
              All demuxing, decoding, and re-encoding occurs inside your browser&apos;s isolated sandbox.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900">Our Core Principles</h2>
        <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
            <span><strong>No Registration:</strong> We will never ask for your email address, passwords, or credit card details to convert audio files.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
            <span><strong>No Deceptive Dark Patterns:</strong> We do not place misleading download buttons, fake antivirus alerts, or forced pop-ups.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
            <span><strong>Ethical Utility:</strong> We focus strictly on converting user-owned files. We do not support downloading protected streaming media or circumventing platform rights.</span>
          </li>
        </ul>
      </section>

      {/* Navigation Links */}
      <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-brand-600">
        <Link href="/audio-converter" className="inline-flex items-center gap-1 hover:text-brand-700">
          <span>Explore Audio Converter</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/format-guide" className="inline-flex items-center gap-1 hover:text-brand-700">
          <span>Read Format Guide</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/privacy" className="inline-flex items-center gap-1 hover:text-brand-700">
          <span>Read Privacy Policy</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
