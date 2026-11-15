import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioBitrateChangerTool } from "@/components/tools/AudioBitrateChangerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Gauge, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Bitrate Changer Online - Change MP3 kbps Free",
  description:
    "Change audio bitrate online for free. Adjust bitrates to 64k, 128k, 192k, 256k, or 320k kbps for MP3, M4A, and AAC files. 100% private in-browser tool.",
  alternates: {
    canonical: `${siteConfig.url}/audio-bitrate-changer`,
  },
  openGraph: {
    title: "Audio Bitrate Changer Online - Change MP3 kbps Free",
    description: "Re-encode MP3, M4A, and AAC audio to 64k, 128k, 192k, 256k, or 320k kbps with 100% in-browser privacy.",
    url: `${siteConfig.url}/audio-bitrate-changer`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Bitrate Changer Online - Change MP3 kbps Free",
    description: "Re-encode audio files to your exact target bitrate with 100% client-side privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AudioBitrateChangerPage() {
  const faqs = [
    {
      q: "What does audio bitrate mean?",
      a: "Bitrate refers to the number of kilobits of data processed per second of audio (kbps). Higher bitrates (like 320 kbps) store more acoustic nuance, while lower bitrates (like 128 kbps or 64 kbps) create compact files ideal for voice notes and mobile streaming.",
    },
    {
      q: "Can increasing the bitrate of a 128 kbps MP3 to 320 kbps improve quality?",
      a: "No. Increasing the bitrate of an already compressed audio file cannot restore frequencies lost during the initial encoding. However, setting an exact target bitrate is often required by podcast distributors, radio stations, and DJ platforms that require uniform 192 kbps or 320 kbps files.",
    },
    {
      q: "What bitrate is recommended for podcasts and speech?",
      a: "For spoken word, interviews, and podcasts, 96 kbps to 128 kbps mono or 128 kbps to 160 kbps stereo provides crystal-clear vocal clarity with very small file sizes.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Online Audio Bitrate Changer - Adjust kbps"
        description="Change audio bitrates to 64k, 128k, 192k, 256k, or 320k kbps with 100% client-side privacy."
        url="/audio-bitrate-changer"
        breadcrumbs={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Bitrate Changer", href: "/audio-bitrate-changer" }]}
        faqs={faqs}
        howTo={{
          name: "How to Change Audio Bitrate Online",
          description: "Adjust audio kbps compression rates in three quick steps.",
          steps: [
            {
              name: "Upload Audio Track",
              text: "Select any MP3, M4A, or WAV file from your device.",
            },
            {
              name: "Select Target Bitrate",
              text: "Choose 64 kbps, 96 kbps, 128 kbps, 192 kbps, 256 kbps, or 320 kbps.",
            },
            {
              name: "Re-Encode & Download",
              text: "Click Re-encode Bitrate to process locally in your browser and download the resulting file.",
            },
          ],
        }}
      />

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

      <DirectAnswer
        question="How do I change the bitrate of an MP3 audio file online?"
        answer="To change the bitrate of an audio file, upload your track to MediaConvert's Bitrate Changer below. Select your target bitrate—from 64 kbps for compact speech notes to 320 kbps for audiophile listening—and click Re-encode Bitrate. The file is transcoded locally using WebAssembly FFmpeg with 100% privacy and zero server uploads."
      />

      <AudioBitrateChangerTool />

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          How to Adjust Audio Bitrates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">1. Upload Track</h3>
            <p>Select any MP3, WAV, or M4A file from your device.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">2. Select Bitrate</h3>
            <p>Pick from 64 kbps (speech), 128 kbps (standard), 192 kbps (high quality), or 320 kbps (studio).</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">3. Transcode & Save</h3>
            <p>Click &ldquo;Re-encode Bitrate&rdquo; to process locally and download your re-encoded file.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-compressor" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Compressor
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
          Frequently Asked Questions About Audio Bitrates
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
