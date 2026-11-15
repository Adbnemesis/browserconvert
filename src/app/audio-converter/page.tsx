import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SUPPORTED_OUTPUT_FORMATS } from "@/lib/config/formats";
import { FileAudio, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Audio Converter - Convert MP3, WAV, M4A, FLAC, OGG, OPUS",
  description:
    "Free online audio converter. Convert between MP3, WAV, M4A, FLAC, AAC, OGG, and OPUS with custom bitrates and sample rates. 100% private in-browser processing.",
  alternates: {
    canonical: `${siteConfig.url}/audio-converter`,
  },
};

export default function AudioConverterPage() {
  const faqs = [
    {
      q: "What audio formats can I convert between?",
      a: "MediaConvert supports converting between MP3, WAV, M4A, AAC, FLAC, OGG, and OPUS. You can also import legacy formats like AIFF and WMA.",
    },
    {
      q: "How do I choose the best audio format?",
      a: "Choose MP3 for universal playback on any device, WAV for uncompressed studio-quality audio editing, M4A for Apple devices, and FLAC for lossless archive quality with reduced file size.",
    },
    {
      q: "Is there any quality loss during audio conversion?",
      a: "Converting between lossy formats (such as MP3 to M4A or vice versa) involves re-encoding, which can cause minor fidelity loss. Converting from a lossless format (like WAV or FLAC) to a high-bitrate MP3 (320 kbps) preserves near-indistinguishable quality.",
    },
    {
      q: "Can I convert multiple files at once?",
      a: "Yes. You can upload multiple audio files in a single batch. MediaConvert converts them sequentially and allows you to download all results individually or as a single ZIP file.",
    },
  ];

  const formatCards = [
    { name: "MP4 to MP3", href: "/mp4-to-mp3", desc: "Extract MP3 audio from MP4 video clips" },
    { name: "WAV to MP3", href: "/wav-to-mp3", desc: "Convert studio WAV recordings to portable MP3" },
    { name: "M4A to MP3", href: "/m4a-to-mp3", desc: "Convert Apple Voice Memos and iTunes songs" },
    { name: "MOV to MP3", href: "/mov-to-mp3", desc: "Extract audio from iPhone QuickTime recordings" },
    { name: "MP3 to WAV", href: "/mp3-to-wav", desc: "Decompress MP3 to 16-bit PCM WAV for DAWs" },
    { name: "FLAC to MP3", href: "/flac-to-mp3", desc: "Convert audiophile FLAC albums to MP3 320k" },
    { name: "OGG to MP3", href: "/ogg-to-mp3", desc: "Convert game assets and WhatsApp notes to MP3" },
    { name: "OPUS to MP3", href: "/opus-to-mp3", desc: "Convert Discord voice and VoIP audio to MP3" },
    { name: "AAC to MP3", href: "/aac-to-mp3", desc: "Convert Advanced Audio Coding to universal MP3" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Audio Converter", href: "/audio-converter" }]} />

      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Universal Audio Converter</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Free Online Audio Converter
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert audio files across all major formats directly in your web browser. Fast, 100% private,
          and with adjustable bitrates, sample rates, and trimming.
        </p>
      </div>

      {/* Primary Working Converter */}
      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          dropzoneHeadline="Drop your audio files here to convert"
          dropzoneSubheadline="MP3, WAV, M4A, FLAC, AAC, OGG, OPUS, WMA, AIFF • Up to 1 GB"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Format Capabilities Section */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Dedicated Conversion Hubs
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Choose a dedicated conversion pipeline with pre-tuned parameters for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {formatCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-brand-400 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {card.name}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          How to Convert Audio Files with MediaConvert
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="flex flex-col gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">
              1
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Upload Your Tracks</h3>
            <p>
              Click &ldquo;Choose Files&rdquo; or drag your audio tracks into the dropzone. You can add multiple files to convert in a single batch.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">
              2
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Select Output Settings</h3>
            <p>
              Pick your target format (MP3, WAV, M4A, FLAC, etc.). Expand Advanced Settings to configure bitrates from 64 kbps to 320 kbps or trim start/end timestamps.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">
              3
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Instant Local Download</h3>
            <p>
              Click &ldquo;Convert All&rdquo;. The browser compiles your audio into clean new files. Download individual songs or grab the whole package in a single ZIP file.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions
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
