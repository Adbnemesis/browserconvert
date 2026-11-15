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
import { FileAudio, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "M4A to MP3 Converter - Convert Apple Voice Memos & Audio Online",
  description:
    "Convert M4A to MP3 online for free. Transform Apple Voice Memos and iTunes M4A audio files into universal MP3 format. Fast, free, and 100% private in your browser.",
  alternates: {
    canonical: `${siteConfig.url}/m4a-to-mp3`,
  },
  openGraph: {
    title: "M4A to MP3 Converter - Convert Apple Voice Memos & Audio Online Free",
    description: "Convert Apple Voice Memos and iTunes M4A files to universal MP3 format directly in your browser.",
    url: `${siteConfig.url}/m4a-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A to MP3 Converter - Convert Apple Voice Memos & Audio Online Free",
    description: "Convert Apple Voice Memos and iTunes M4A files to MP3 with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function M4aToMp3Page() {
  const faqs = [
    {
      q: "Why can't I play M4A files on my Windows PC or Android phone?",
      a: "M4A is an Apple-preferred container usually holding AAC audio. While macOS and iOS devices support M4A natively, some Windows media players, legacy Android applications, car infotainment systems, and audio editing tools require standard MP3 format.",
    },
    {
      q: "Can I convert iPhone Voice Memos with MediaConvert?",
      a: "Yes. Simply share or export your Voice Memo from your iPhone (via AirDrop, Files app, or cloud drive) as an .m4a file, drop it into MediaConvert, and convert it into a universally playable MP3 in seconds.",
    },
    {
      q: "Will converting M4A to MP3 degrade sound quality?",
      a: "Both M4A (AAC) and MP3 are lossy formats. Converting between them is called transcoding. By selecting 192 kbps or 320 kbps output in MediaConvert, audio degradation is imperceptible to human hearing.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Audio Stream Codec",
      sourceValue: "Advanced Audio Coding (AAC / MPEG-4)",
      targetValue: "MPEG-1 Layer III (MP3)",
    },
    {
      feature: "Native iOS / macOS Support",
      sourceValue: "Native (Default Voice Memos format)",
      targetValue: "100% Supported across all Apple apps",
    },
    {
      feature: "Windows & Android Playback",
      sourceValue: "Requires dedicated player or codec pack",
      targetValue: "Universal (Plug-and-play everywhere)",
    },
    {
      feature: "Car Stereos & Hardware USBs",
      sourceValue: "Frequently rejected or skipped",
      targetValue: "100% compatible across all head units",
    },
    {
      feature: "Recommended Transcode Bitrate",
      sourceValue: "Original (typically 128 kbps to 256 kbps)",
      targetValue: "192 kbps or 320 kbps for zero audible loss",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="M4A to MP3 Converter - Apple Voice Memos to MP3"
        description="Convert Apple Voice Memos and M4A audio files into MP3 format online for free with 100% in-browser privacy."
        url="/m4a-to-mp3"
        breadcrumbs={[{ label: "M4A to MP3", href: "/m4a-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "How to Convert M4A Voice Memos to MP3",
          description: "Convert Apple Voice Memos and iTunes M4A tracks to MP3 in three easy steps.",
          steps: [
            {
              name: "Add M4A or Voice Memo",
              text: "Select or drag your .m4a recording into the converter box.",
            },
            {
              name: "Select MP3 & Bitrate",
              text: "Choose MP3 format and pick 192 kbps for clear speech and music.",
            },
            {
              name: "Convert & Download",
              text: "Click Convert to run WebAssembly FFmpeg locally and download your universal MP3.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "M4A to MP3", href: "/m4a-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Apple Audio to Universal MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert M4A to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert Apple Voice Memos, iTunes music, and audiobooks from M4A to universal MP3.
          Zero software installation and 100% private browser processing.
        </p>
      </div>

      <DirectAnswer
        question="How do I convert an Apple iPhone Voice Memo (.m4a) to MP3?"
        answer="To convert an iPhone Voice Memo to MP3, export the recording as an .m4a file and drop it into MediaConvert. Select MP3 at 192 kbps or 320 kbps and click Convert. Our browser engine re-encodes the AAC audio into MP3 locally using WebAssembly, ensuring your personal voice recordings are never sent to any external server."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/mp4,audio/x-m4a,audio/m4a,.m4a"
          dropzoneHeadline="Drop your M4A audio files here to convert to MP3"
          dropzoneSubheadline="iPhone Voice Memos, iTunes M4A, and AAC files • 100% Local"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table */}
      <ComparisonTable
        sourceName="M4A (Apple AAC Audio)"
        targetName="MP3 (Universal Audio)"
        rows={comparisonRows}
        caption="Technical Comparison: Apple M4A vs. Universal MP3"
      />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Understanding M4A and Solving Compatibility Roadblocks
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The <code>.m4a</code> filename extension stands for MPEG-4 Audio. Apple popularized M4A in iTunes and
          the iOS Voice Memos application as a successor to MP3 because AAC codecs offer superior compression efficiency
          at lower bitrates. However, outside the Apple ecosystem, M4A frequently encounters compatibility hurdles:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Car Audio & USBs</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Older vehicle stereos and USB head units only index MP3 files and fail to recognize M4A tracks.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Audio Editing Software</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Legacy DAWs and speech-to-text transcription utilities often reject M4A containers.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Web & Android Apps</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Certain Android apps and HTML audio players have inconsistent codec support for M4A.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            All Audio Converters
          </Link>
          <Link href="/wav-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            WAV to MP3
          </Link>
          <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Trim Audio Files
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About M4A to MP3
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
