import React from "react";
import type { Metadata } from "next";
import { AudioVolumeTool } from "@/components/tools/AudioVolumeTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { Volume2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Volume Adjuster Online - Boost or Soften Volume Free",
  description:
    "Adjust audio volume online for free. Boost quiet audio recordings or reduce overly loud audio tracks up to 200%. 100% private in-browser volume booster.",
  alternates: {
    canonical: `${siteConfig.url}/audio-volume-adjuster`,
  },
};

export default function AudioVolumeAdjusterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Volume Adjuster", href: "/audio-volume-adjuster" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Volume2 className="h-3.5 w-3.5" />
          <span>Gain & Volume Adjustment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Audio Volume Adjuster Online
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Boost quiet voice recordings, lectures, and music tracks up to 200%, or soften loud audio
          before sharing. Processed locally in your browser.
        </p>
      </div>

      <AudioVolumeTool />

      <AdSlot position="headerBanner" />
    </div>
  );
}
