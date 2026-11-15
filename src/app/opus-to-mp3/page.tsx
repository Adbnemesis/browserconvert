import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { FileAudio, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "OPUS to MP3 Converter - Convert WhatsApp & Discord Voice to MP3",
  description:
    "Convert OPUS to MP3 online for free. Transform WhatsApp voice messages, Discord recordings, and Telegram audio clips into universal MP3 format. 100% private in your browser.",
  alternates: {
    canonical: `${siteConfig.url}/opus-to-mp3`,
  },
};

export default function OpusToMp3Page() {
  const faqs = [
    {
      q: "Where do OPUS files come from?",
      a: "OPUS is the default voice compression format for WhatsApp audio messages, Discord voice channels, Telegram voice notes, and modern WebRTC telephone calls because it provides exceptional speech intelligibility with near-zero latency.",
    },
    {
      q: "Why can't I edit OPUS files in my video editor or DAW?",
      a: "Most desktop video editors (Premiere Pro, DaVinci Resolve) and legacy audio editors do not import raw .opus files. Converting them to MP3 or WAV makes them instantly editable on any timeline.",
    },
    {
      q: "Is converting OPUS to MP3 private on MediaConvert?",
      a: "Yes. Sensitive voice notes, meeting recordings, and personal calls are processed locally in your browser and are never uploaded to any remote server or third party.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "OPUS to MP3", href: "/opus-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Voice & VoIP to Universal MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert OPUS to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert WhatsApp voice recordings, Discord clips, and Telegram voice notes from OPUS to MP3.
          Fast, private, and compatible with all media players and video editors.
        </p>
      </div>

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/opus,audio/ogg,.opus"
          dropzoneHeadline="Drop your OPUS voice notes here to convert to MP3"
          dropzoneSubheadline="WhatsApp voice messages, Discord recordings, and WebRTC clips • 100% Local"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Unlocking WhatsApp and Discord Voice Recordings
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          OPUS is an extraordinary IETF audio standard combining Skype’s SILK codec (for speech) and Xiph’s CELT codec
          (for music). While it dominates real-time communications, standalone <code>.opus</code> files are frequently rejected
          by standard car stereos, transcription software, and video editing suites. Converting to MP3 bridges this gap
          flawlessly while keeping personal conversations 100% confidential.
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/ogg-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            OGG to MP3 Converter
          </Link>
          <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Trim Audio Clips
          </Link>
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            All Audio Converters
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About OPUS to MP3
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
