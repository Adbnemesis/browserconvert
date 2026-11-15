import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { FileAudio, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AAC to MP3 Converter - Convert Advanced Audio Coding to MP3",
  description:
    "Convert AAC to MP3 online for free. Transform raw AAC audio streams and streaming tracks into universal MP3 format with customizable bitrates. 100% private in-browser conversion.",
  alternates: {
    canonical: `${siteConfig.url}/aac-to-mp3`,
  },
  openGraph: {
    title: "AAC to MP3 Converter - Convert Advanced Audio Coding to MP3 Free",
    description: "Transform raw AAC audio streams and streaming tracks into universal MP3 format in your browser.",
    url: `${siteConfig.url}/aac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC to MP3 Converter - Convert Advanced Audio Coding to MP3 Free",
    description: "Transform raw AAC audio into universal MP3 format with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
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

  const comparisonRows = [
    {
      feature: "Compression Architecture",
      sourceValue: "Advanced Audio Coding (MPEG-4 Part 3)",
      targetValue: "MPEG-1 Audio Layer III (MP3)",
    },
    {
      feature: "Compression Efficiency",
      sourceValue: "High (Clean fidelity at 128 kbps)",
      targetValue: "Moderate (Standard fidelity at 192 kbps)",
    },
    {
      feature: "Hardware Player Compatibility",
      sourceValue: "Inconsistent on older MP3 players & car decks",
      targetValue: "100% Universal on every digital audio device",
    },
    {
      feature: "Streaming Standard",
      sourceValue: "Default for YouTube, Apple Music, and DAB+",
      targetValue: "Standard for podcasts, RSS feeds & audiobooks",
    },
    {
      feature: "Transcoding Recommendation",
      sourceValue: "Keep original bitstream if compatible",
      targetValue: "Re-encode at 192k or 256k for maximum compatibility",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="AAC to MP3 Converter - Raw AAC Streams to MP3"
        description="Convert raw AAC audio streams to MP3 online for free with 100% in-browser privacy."
        url="/aac-to-mp3"
        breadcrumbs={[{ label: "AAC to MP3", href: "/aac-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "How to Convert AAC Audio to MP3",
          description: "Convert AAC and ADTS audio files into universal MP3 in three easy steps.",
          steps: [
            {
              name: "Add AAC Files",
              text: "Drag and drop your raw .aac or ADTS files into the converter area.",
            },
            {
              name: "Select MP3 & Bitrate",
              text: "Select MP3 format and choose 192 kbps or 256 kbps for pristine sound fidelity.",
            },
            {
              name: "Convert & Download",
              text: "Click Convert to process in-browser and download your universally playable MP3.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "AAC to MP3", href: "/aac-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Advanced Audio to Universal MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convert AAC to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert raw AAC and ADTS audio files into universal MP3. Fast, free, and processed entirely inside
          your web browser with zero server uploads.
        </p>
      </div>

      <DirectAnswer
        question="How do I convert an AAC file to MP3 for universal device playback?"
        answer="To convert an AAC file to MP3, upload your file to BrowserConvert, choose MP3 at 192 kbps or 256 kbps, and click Convert. While AAC provides excellent sound efficiency, older car stereos and media players often fail to read raw .aac streams. Converting to MP3 ensures 100% playback compatibility across all devices, with files processed 100% locally in your browser."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
          dropzoneHeadline="Drop your AAC audio files here to convert to MP3"
          dropzoneSubheadline="Supports raw AAC and ADTS streams • 100% Local"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table */}
      <ComparisonTable
        sourceName="AAC (Advanced Audio Coding)"
        targetName="MP3 (Universal Standard)"
        rows={comparisonRows}
        caption="Technical Comparison: AAC Audio vs. Universal MP3"
      />

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
