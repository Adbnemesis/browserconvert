import React from "react";
import type { Metadata } from "next";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { Scissors, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Cutter Online - Trim Audio & Music Files Free",
  description:
    "Free online audio cutter and trimmer. Cut and trim MP3, WAV, M4A, and FLAC audio files with precision. 100% private in-browser audio editing.",
  alternates: {
    canonical: `${siteConfig.url}/audio-cutter`,
  },
};

export default function AudioCutterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Cutter", href: "/audio-cutter" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Scissors className="h-3.5 w-3.5" />
          <span>Precision Audio Trimming</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Free Online Audio Cutter
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Trim start and end points of any audio file with live playback preview.
          Extract sound bites, ringtones, and podcast highlights with 100% private in-browser processing.
        </p>
      </div>

      <AudioCutterTool />

      <AdSlot position="headerBanner" />

      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          How to Cut & Trim Audio Files
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">1. Upload Audio Track</h3>
            <p>Select any MP3, WAV, M4A, FLAC, or OGG file from your computer or smartphone.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">2. Set Start & End Sliders</h3>
            <p>Use the range slider controls or input exact seconds to define your trimmed segment.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">3. Cut & Download</h3>
            <p>Click &ldquo;Cut & Save Audio&rdquo; to process locally and download your trimmed clip.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
