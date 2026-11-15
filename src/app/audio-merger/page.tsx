import React from "react";
import type { Metadata } from "next";
import { AudioMergerTool } from "@/components/tools/AudioMergerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Merger Online - Join Multiple Audio Files Together",
  description:
    "Free online audio merger and joiner. Combine multiple MP3, WAV, and M4A audio files into one continuous track. 100% private in-browser audio concatenation.",
  alternates: {
    canonical: `${siteConfig.url}/audio-merger`,
  },
};

export default function AudioMergerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Merger", href: "/audio-merger" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Layers className="h-3.5 w-3.5" />
          <span>Multi-Track Concatenation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Free Online Audio Merger
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Combine and join multiple audio tracks together into a single continuous file.
          Re-order tracks easily and export as MP3, WAV, or M4A with zero server uploads.
        </p>
      </div>

      <AudioMergerTool />

      <AdSlot position="headerBanner" />
    </div>
  );
}
