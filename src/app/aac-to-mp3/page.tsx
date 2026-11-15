import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { FileAudio, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AAC to MP3 Converter - Convert Advanced Audio Coding to MP3",
  description:
    "Convert AAC to MP3 online for free. Transform raw AAC audio streams and streaming tracks into universal MP3 format with customizable bitrates. 100% private in-browser conversion.",
  alternates: {
    canonical: `${siteConfig.url}/aac-to-mp3`,
  },
};

export default function AacToMp3Page() {
  const faqs = [
    {
      q: "What is the difference between AAC and MP3?",
      a: "AAC (Advanced Audio Coding) was designed as the successor to MP3, offering higher acoustic fidelity at matching bitrates. However, MP3 remains the most universally recognized format in consumer hardware, legacy MP3 players, and older car stereos.",
    },
    {
      q: "What bitrate should I choose when converting AAC to MP3?",
      a: "Because transcoding from one lossy format to another can introduce slight compression loss, we recommend selecting 192 kbps or 256 kbps MP3 to keep sound transparent.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "AAC to MP3", href: "/aac-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Advanced Audio to Universal MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert AAC to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert raw AAC and ADTS audio files into universal MP3. Fast, free, and processed entirely inside
          your web browser with zero server uploads.
        </p>
      </div>

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
          dropzoneHeadline="Drop your AAC audio files here to convert to MP3"
          dropzoneSubheadline="Supports raw AAC and ADTS streams • 100% Local"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Why Convert AAC to MP3?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          AAC is standard for YouTube, iTunes, PlayStation, and digital radio broadcasting. When dealing with standalone
          <code>.aac</code> files, legacy hardware devices and audio players may refuse playback. Converting to standard MP3
          allows seamless playback across any audio player.
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/m4a-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            M4A to MP3 Converter
          </Link>
          <Link href="/wav-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            WAV to MP3 Converter
          </Link>
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            All Audio Converters
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About AAC to MP3
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
