import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Scissors, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Cutter Online - Trim Audio & Music Files Free",
  description:
    "Free online audio cutter and trimmer. Cut and trim MP3, WAV, M4A, and FLAC audio files with precision. 100% private in-browser audio editing.",
  alternates: {
    canonical: `${siteConfig.url}/audio-cutter`,
  },
  openGraph: {
    title: "Audio Cutter Online - Trim Audio & Music Files Free",
    description: "Free online audio cutter and trimmer. Cut and trim MP3, WAV, M4A, and FLAC audio files with precision in your browser.",
    url: `${siteConfig.url}/audio-cutter`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Cutter Online - Trim Audio & Music Files Free",
    description: "Trim audio tracks with millisecond precision and live playback preview. 100% client-side privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AudioCutterPage() {
  const faqs = [
    {
      q: "How does the Audio Cutter work without uploading my files?",
      a: "BrowserConvert uses WebAssembly-compiled FFmpeg directly in your browser. When you select an audio track, the HTML5 Web Audio API parses the file for playback preview while FFmpeg slices the exact start and end timestamps in memory.",
    },
    {
      q: "Can I cut audio on mobile devices?",
      a: "Yes. The Audio Cutter is fully responsive and supports touch range sliders and numerical inputs on iOS Safari and Android Chrome.",
    },
    {
      q: "What audio formats can I trim?",
      a: "You can trim any MP3, WAV, M4A, FLAC, OGG, or AAC file. The output is cleanly exported as a lossless-cut audio track.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Online Audio Cutter & Trimmer"
        description="Cut and trim MP3, WAV, M4A, and FLAC audio tracks with live playback preview and 100% private browser processing."
        url="/audio-cutter"
        breadcrumbs={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Cutter", href: "/audio-cutter" }]}
        faqs={faqs}
        howTo={{
          name: "How to Cut and Trim Audio Online",
          description: "Trim any audio file with live waveform preview in three simple steps.",
          steps: [
            {
              name: "Upload Audio Track",
              text: "Select any MP3, WAV, M4A, FLAC, or OGG file from your device.",
            },
            {
              name: "Adjust Start & End Markers",
              text: "Use the range sliders or enter exact seconds with playback preview.",
            },
            {
              name: "Cut & Download",
              text: "Click Cut & Save Selection to generate your trimmed audio clip instantly in your browser.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "Audio tools", href: "/audio-converter" }, { label: "Audio cutter", href: "/audio-cutter" }]} />

      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300 mb-3">
          <Scissors className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span className="font-mono text-[11px]">Precision trimming</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Audio cutter and trimmer
        </h1>
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Trim start and end points of audio tracks with live playback preview.
          Extract clips, ringtones, and voice highlights locally in your browser.
        </p>
      </div>

      <DirectAnswer
        question="How do I cut an audio file online for free without uploading it to a server?"
        answer="Upload your track to the Audio Cutter below. Set your desired start and end points using the interactive range sliders or type exact timestamps, preview the selection with the built-in player, and click Cut & Save. The file is sliced locally in memory with 100% privacy."
      />

      <AudioCutterTool />

      <AdSlot position="headerBanner" />

      <section className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 sm:p-6 space-y-4 max-w-3xl mx-auto">
        <h2 className="text-base font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          How to cut audio files
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-zinc-400">
          <div className="space-y-1">
            <h3 className="font-medium text-slate-800 dark:text-zinc-200">1. Select track</h3>
            <p>Load MP3, WAV, M4A, FLAC, or OGG files from your computer or smartphone.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-medium text-slate-800 dark:text-zinc-200">2. Set markers</h3>
            <p>Use the range slider controls or input exact seconds to define your segment.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-medium text-slate-800 dark:text-zinc-200">3. Save clip</h3>
            <p>Click Cut & Save to process locally and download your trimmed audio track.</p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-merger" className="rounded-lg bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10 transition-colors">
            Audio merger
          </Link>
          <Link href="/audio-compressor" className="rounded-lg bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10 transition-colors">
            Audio compressor
          </Link>
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10 transition-colors">
            All audio converters
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-3 max-w-3xl mx-auto">
        <h2 className="text-base font-medium tracking-tight text-slate-900 dark:text-zinc-100 text-center mb-4">
          Frequently asked questions
        </h2>
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-4">
            <h3 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 flex items-start gap-2">
              <HelpCircle className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h3>
            <p className="mt-1.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed pl-5.5">
              {faq.a}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
