import React from "react";
import type { Metadata } from "next";
import { AudioCompressorTool } from "@/components/tools/AudioCompressorTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { Minimize2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Compressor Online - Reduce Audio File Size Free",
  description:
    "Compress audio files online for free. Reduce the file size of MP3, WAV, FLAC, and M4A without sacrificing clarity. 100% private in-browser compression.",
  alternates: {
    canonical: `${siteConfig.url}/audio-compressor`,
  },
};

export default function AudioCompressorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Compressor", href: "/audio-compressor" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Minimize2 className="h-3.5 w-3.5" />
          <span>File Size Reduction</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Free Online Audio Compressor
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Reduce audio file sizes for easy emailing, messaging, and web publishing.
          Select target compression levels and preview exact size savings.
        </p>
      </div>

      <AudioCompressorTool />

      <AdSlot position="headerBanner" />
    </div>
  );
}
