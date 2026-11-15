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
  title: "OGG to MP3 Converter - Convert Vorbis OGG Audio to MP3 Online",
  description:
    "Convert OGG to MP3 online for free. Transform OGG Vorbis game sound effects, music tracks, and voice notes into universal MP3. 100% private in-browser conversion.",
  alternates: {
    canonical: `${siteConfig.url}/ogg-to-mp3`,
  },
  openGraph: {
    title: "OGG to MP3 Converter - Convert Vorbis OGG Audio to MP3 Online Free",
    description: "Transform OGG Vorbis game audio and voice recordings into universal MP3 files in your browser.",
    url: `${siteConfig.url}/ogg-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG to MP3 Converter - Convert Vorbis OGG Audio to MP3 Online Free",
    description: "Convert OGG Vorbis audio to MP3 with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function OggToMp3Page() {
  const faqs = [
    {
      q: "Where do OGG files typically come from?",
      a: "OGG Vorbis is widely used by game developers (Unity, Unreal Engine, Godot) for sound effects and background music due to its open-source license. It is also used by messaging applications and desktop music clients like Spotify.",
    },
    {
      q: "Why convert OGG to MP3?",
      a: "Many standard media players, iPhone apps, and older car stereos cannot play OGG Vorbis files. Converting to MP3 ensures your audio can be played on any device or sent to any recipient without playback issues.",
    },
    {
      q: "What bitrate should I pick for OGG to MP3?",
      a: "For game music and songs, select 192 kbps or 256 kbps. For short sound effects or voice notes, 128 kbps provides great fidelity with small file size.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Codec Standard",
      sourceValue: "Xiph.Org Ogg Vorbis (Open-Source)",
      targetValue: "MPEG-1 Audio Layer III (MP3)",
    },
    {
      feature: "Primary Use Environment",
      sourceValue: "Game engines, Spotify desktop, Linux systems",
      targetValue: "Universal consumer hardware, mobile, car audio",
    },
    {
      feature: "Apple iOS Compatibility",
      sourceValue: "Unsupported by iOS Safari & Apple Music",
      targetValue: "100% native across all Apple hardware",
    },
    {
      feature: "Car Audio & USB Decks",
      sourceValue: "Fails to recognize .ogg extension",
      targetValue: "Universal instant playback",
    },
    {
      feature: "Audio Fidelity at 192 kbps",
      sourceValue: "Very High (Efficient Vorbis algorithm)",
      targetValue: "Near-identical perceptual transparency (LAME)",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="OGG to MP3 Converter - Ogg Vorbis to MP3"
        description="Convert OGG Vorbis audio tracks and game assets to MP3 online for free with 100% client-side browser privacy."
        url="/ogg-to-mp3"
        breadcrumbs={[{ label: "OGG to MP3", href: "/ogg-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "How to Convert OGG to MP3 in Browser",
          description: "Convert OGG Vorbis audio files to MP3 in three easy steps.",
          steps: [
            {
              name: "Add OGG Files",
              text: "Drag and drop your .ogg game sounds, music, or voice notes into the converter.",
            },
            {
              name: "Choose MP3 Bitrate",
              text: "Select MP3 and choose your target bitrate (192 kbps or 256 kbps).",
            },
            {
              name: "Convert & Download",
              text: "Click Convert to encode your files locally and download your playable MP3 audio.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "OGG to MP3", href: "/ogg-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Vorbis to Universal MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert OGG to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert OGG Vorbis game assets, WhatsApp voice notes, and streaming audio files into universal MP3.
          Fast, free, and 100% private in your browser.
        </p>
      </div>

      <DirectAnswer
        question="How do I convert an OGG file to MP3 so it plays on iPhone and car stereos?"
        answer="To convert an OGG Vorbis audio file to MP3, upload it to MediaConvert, select MP3 at 192 kbps or 256 kbps, and click Convert. Because iOS and car head units reject OGG files, converting to MP3 ensures 100% hardware compatibility without downloading extra players. MediaConvert runs locally in your browser with zero data uploads."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/ogg,audio/vorbis,.ogg"
          dropzoneHeadline="Drop your OGG audio files here to convert to MP3"
          dropzoneSubheadline="Supports OGG Vorbis audio tracks • 100% In-Browser Conversion"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table */}
      <ComparisonTable
        sourceName="OGG Vorbis Audio"
        targetName="MP3 Universal Audio"
        rows={comparisonRows}
        caption="Technical Comparison: OGG Vorbis vs. MP3 Audio"
      />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Why Convert OGG Vorbis to MP3?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          OGG is an open-source container format created by the Xiph.Org Foundation, typically utilizing the Vorbis
          audio codec. While admired by open-source communities and video game studios for its patent-free status and
          high acoustic efficiency, hardware compatibility outside PCs remains spotty. Converting your OGG files
          to MP3 solves playback issues instantly.
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/opus-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            OPUS to MP3 Converter
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
          Frequently Asked Questions About OGG to MP3
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
