import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioSpeedTool } from "@/components/tools/AudioSpeedTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FastForward, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Speed Changer Online - Change Audio Playback Speed Free",
  description:
    "Speed up or slow down audio files online. Adjust tempo from 0.5x to 2.0x without pitch distortion. 100% private in-browser tool for MP3, WAV, and M4A.",
  alternates: {
    canonical: `${siteConfig.url}/audio-speed-changer`,
  },
  openGraph: {
    title: "Audio Speed Changer Online - Change Audio Playback Speed Free",
    description: "Speed up or slow down audio files from 0.5x to 2.0x without pitch distortion in your browser.",
    url: `${siteConfig.url}/audio-speed-changer`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Speed Changer Online - Change Audio Playback Speed Free",
    description: "Change audio playback speed while preserving natural pitch with 100% client-side privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AudioSpeedChangerPage() {
  const faqs = [
    {
      q: "Does changing the speed alter the musical pitch (chipmunk effect)?",
      a: "No. BrowserConvert uses FFmpeg's advanced atempo audio filter, which stretches or compresses the time domain while preserving the original natural pitch, avoiding high-pitched chipmunk or deep demonic distortions.",
    },
    {
      q: "What speed ranges are supported?",
      a: "You can adjust playback speed from 0.5x (half-speed, ideal for transcribing speech or learning guitar solos) up to 2.0x (double-speed, ideal for fast podcast or lecture listening).",
    },
    {
      q: "Can I adjust speed on voice recordings or lectures?",
      a: "Yes. Simply upload any MP3, WAV, or M4A audio file, select 1.25x, 1.5x, or 2.0x, and download your accelerated audio track for faster listening.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Online Audio Speed Changer - Tempo Adjustment"
        description="Speed up or slow down audio tracks from 0.5x to 2.0x without pitch distortion with 100% in-browser privacy."
        url="/audio-speed-changer"
        breadcrumbs={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Speed Changer", href: "/audio-speed-changer" }]}
        faqs={faqs}
        howTo={{
          name: "How to Change Audio Speed Online",
          description: "Speed up or slow down any audio track in three simple steps.",
          steps: [
            {
              name: "Upload Audio Track",
              text: "Select any MP3, WAV, or M4A audio recording from your computer or phone.",
            },
            {
              name: "Choose Target Speed",
              text: "Select a speed preset (0.5x, 0.75x, 1.25x, 1.5x, or 2.0x) or adjust the tempo slider.",
            },
            {
              name: "Process & Download",
              text: "Click Adjust Speed to apply time-stretching locally and download your adjusted audio file.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Speed Changer", href: "/audio-speed-changer" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <FastForward className="h-3.5 w-3.5" />
          <span>Tempo & Speed Adjustment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Audio Speed Changer Online
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Speed up speech or slow down musical phrases from 0.5x to 2.0x using time-stretching algorithms.
          Fast, local browser processing with no pitch degradation.
        </p>
      </div>

      <DirectAnswer
        question="How do I speed up or slow down an audio file without changing its pitch?"
        answer="To adjust the tempo of an audio file without altering vocal pitch, upload your track to BrowserConvert's Audio Speed Changer below. Choose a playback speed between 0.5x and 2.0x and click Adjust Speed. Our browser engine utilizes the FFmpeg atempo filter to time-stretch the audio in local device memory, guaranteeing natural vocal tones with zero server uploads."
      />

      <AudioSpeedTool />

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          How to Change Audio Playback Speed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">1. Upload Track</h3>
            <p>Select any audio file (MP3, WAV, M4A, etc.) from your device.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">2. Pick Tempo</h3>
            <p>Choose 0.5x, 0.75x (slow), 1.25x, 1.5x (fast), or 2.0x (double speed).</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">3. Process & Save</h3>
            <p>Click &ldquo;Adjust Speed&rdquo; to process locally and download your time-stretched audio.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-volume-adjuster" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Volume Adjuster
          </Link>
          <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Cutter
          </Link>
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            All Audio Converters
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About Audio Speed
        </h2>
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
              <HelpCircle className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
              {faq.a}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
