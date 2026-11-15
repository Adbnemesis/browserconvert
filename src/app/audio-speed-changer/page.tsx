import React from "react";
import type { Metadata } from "next";
import { AudioSpeedTool } from "@/components/tools/AudioSpeedTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { FastForward } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Speed Changer Online - Change Audio Playback Speed Free",
  description:
    "Speed up or slow down audio files online. Adjust tempo from 0.5x to 2.0x without pitch distortion. 100% private in-browser tool for MP3, WAV, and M4A.",
  alternates: {
    canonical: `${siteConfig.url}/audio-speed-changer`,
  },
};

export default function AudioSpeedChangerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Speed Changer", href: "/audio-speed-changer" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <FastForward className="h-3.5 w-3.5" />
          <span>Tempo & Speed Adjustment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Audio Speed Changer Online
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Speed up speech or slow down musical phrases from 0.5x to 2.0x using time-stretching algorithms.
          Fast, local browser processing with no pitch degradation.
        </p>
      </div>

      <AudioSpeedTool />

      <AdSlot position="headerBanner" />
    </div>
  );
}
