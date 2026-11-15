import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Scissors, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

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
      q: "Can I cut audio on iPhone, Android, or mobile devices?",
      a: "Yes. The Audio Cutter is fully responsive and supports touch range sliders and numerical inputs on iOS Safari and Android Chrome.",
    },
    {
      q: "What audio formats can I trim?",
      a: "You can trim any MP3, WAV, M4A, FLAC, OGG, or AAC file. The output is cleanly exported as a lossless-cut audio track.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
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
              text: "Use the interactive sliders or type exact start and end seconds with live playback verification.",
            },
            {
              name: "Cut & Download",
              text: "Click Cut & Save Selection to generate your trimmed audio clip instantly in your browser.",
            },
          ],
        }}
      />

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

      <DirectAnswer
        question="How do I cut an audio file online for free without uploading it to a server?"
        answer="To trim an audio file privately, upload it to BrowserConvert's Audio Cutter tool below. Set your desired start and end points using the interactive range sliders or type exact timestamps, preview the selection using the built-in player, and click Cut & Save. The file is trimmed locally using browser-native WebAssembly FFmpeg with 100% confidentiality."
      />

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
            <p>Click &ldquo;Cut & Save Selection&rdquo; to process locally and download your trimmed clip.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-merger" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Merger
          </Link>
          <Link href="/audio-compressor" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Compressor
          </Link>
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            All Audio Converters
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About Audio Trimming
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
