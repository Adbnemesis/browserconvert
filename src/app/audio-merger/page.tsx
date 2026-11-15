import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioMergerTool } from "@/components/tools/AudioMergerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Layers, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Merger Online - Join Multiple Audio Files Together",
  description:
    "Free online audio merger and joiner. Combine multiple MP3, WAV, and M4A audio files into one continuous track. 100% private in-browser audio concatenation.",
  alternates: {
    canonical: `${siteConfig.url}/audio-merger`,
  },
  openGraph: {
    title: "Audio Merger Online - Join Multiple Audio Files Together Free",
    description: "Combine multiple MP3, WAV, and M4A audio files into one seamless track with 100% in-browser privacy.",
    url: `${siteConfig.url}/audio-merger`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Merger Online - Join Multiple Audio Files Together Free",
    description: "Combine multiple audio tracks into one seamless file with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AudioMergerPage() {
  const faqs = [
    {
      q: "Can I combine audio files of different formats?",
      a: "Yes. You can upload an MP3, a WAV file, and an M4A file in the same batch. MediaConvert decodes them into uniform internal PCM audio streams before concatenating and exporting into your selected target format.",
    },
    {
      q: "Is there any gap or silence introduced between merged tracks?",
      a: "No. The FFmpeg concat demuxer joins the raw audio samples sample-for-sample, creating a smooth, gapless transition between consecutive files.",
    },
    {
      q: "Can I change the sequence order of the songs before joining them?",
      a: "Yes. Use the up and down arrow buttons next to each track in the merger list to arrange your tracks in the exact playback order you desire.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Online Audio Merger & Joiner"
        description="Combine and merge multiple audio tracks into a single unified file with 100% client-side privacy."
        url="/audio-merger"
        breadcrumbs={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Merger", href: "/audio-merger" }]}
        faqs={faqs}
        howTo={{
          name: "How to Merge Multiple Audio Files Online",
          description: "Combine multiple audio tracks into one seamless file in three easy steps.",
          steps: [
            {
              name: "Add Audio Tracks",
              text: "Upload two or more audio files (MP3, WAV, M4A, etc.) to join together.",
            },
            {
              name: "Reorder & Choose Format",
              text: "Arrange tracks in your desired playback order and select your preferred output format.",
            },
            {
              name: "Merge & Download",
              text: "Click Merge Files to join the audio tracks in browser memory and download your unified track.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Merger", href: "/audio-merger" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Layers className="h-3.5 w-3.5" />
          <span>Multi-Track Concatenation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Free Online Audio Merger
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Combine and join multiple audio tracks together into a single continuous file.
          Re-order tracks easily and export as MP3, WAV, or M4A with zero server uploads.
        </p>
      </div>

      <DirectAnswer
        question="How do I join multiple audio files into a single track online?"
        answer="To merge multiple audio tracks into one continuous file, upload your files to MediaConvert's Audio Merger below. Arrange the files in your preferred sequence using the reorder buttons, choose your target format (such as MP3 or WAV), and click Merge Files. Our client-side WebAssembly engine concatenates the audio streams sample-by-sample with 100% local privacy."
      />

      <AudioMergerTool />

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          How to Combine Audio Files Online
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">1. Upload Files</h3>
            <p>Select two or more MP3, WAV, or M4A audio files from your device.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">2. Re-Order Tracks</h3>
            <p>Use the up and down arrow controls to set your exact track order.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">3. Merge & Download</h3>
            <p>Click &ldquo;Merge Files&rdquo; to process locally and download your single concatenated audio file.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Cutter
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
          Frequently Asked Questions About Audio Merging
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
