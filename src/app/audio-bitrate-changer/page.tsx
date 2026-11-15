import React from "react";
import type { Metadata } from "next";
import { AudioBitrateChangerTool } from "@/components/tools/AudioBitrateChangerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Bitrate Changer Online - Change MP3 kbps Free",
  description:
    "Change audio bitrate online for free. Adjust bitrates to 64k, 128k, 192k, 256k, or 320k kbps for MP3, M4A, and AAC files. 100% private in-browser tool.",
  alternates: {
    canonical: `${siteConfig.url}/audio-bitrate-changer`,
  },
};

export default function AudioBitrateChangerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Bitrate Changer", href: "/audio-bitrate-changer" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Gauge className="h-3.5 w-3.5" />
          <span>Bitrate Re-Encoding</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Audio Bitrate Changer Online
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Upgrade or reduce audio encoding bitrate between 64 kbps and 320 kbps.
          Control file sizes and fidelity for podcasts, music, and streaming.
        </p>
      </div>

      <AudioBitrateChangerTool />

      <AdSlot position="headerBanner" />
    </div>
  );
}
