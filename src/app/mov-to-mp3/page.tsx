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
import { Film, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "MOV to MP3 Converter - Extract Audio from QuickTime MOV Videos",
  description:
    "Convert QuickTime MOV to MP3 online for free. Extract audio from iPhone videos and Mac screen recordings in high quality. 100% private in-browser conversion.",
  alternates: {
    canonical: `${siteConfig.url}/mov-to-mp3`,
  },
  openGraph: {
    title: "MOV to MP3 Converter - Extract Audio from QuickTime MOV Videos",
    description: "Extract high quality audio from iPhone MOV videos and Mac screen recordings in your browser.",
    url: `${siteConfig.url}/mov-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOV to MP3 Converter - Extract Audio from QuickTime MOV Videos",
    description: "Extract audio from iPhone MOV videos and Mac screen recordings with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function MovToMp3Page() {
  const faqs = [
    {
      q: "Can I convert iPhone 4K HDR MOV videos?",
      a: "Yes. Even if your iPhone records in 4K ProRes or HDR, MediaConvert only processes the underlying audio stream, disregarding the massive video bitrate. This allows lightning-fast conversion on your device.",
    },
    {
      q: "Why convert QuickTime MOV to MP3?",
      a: "MOV video files recorded on iPhones or Macs can be several gigabytes in size. If you only need the voice, interview, song, or meeting audio, extracting an MP3 reduces the file by 98% to just a few megabytes.",
    },
    {
      q: "Are my private videos uploaded anywhere?",
      a: "Never. Your MOV video file stays completely inside your web browser. MediaConvert utilizes WebAssembly to parse the file locally on your CPU.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Container / Type",
      sourceValue: "Apple QuickTime Video (MOV)",
      targetValue: "MPEG-1 Layer 3 Audio (MP3)",
    },
    {
      feature: "Typical File Size",
      sourceValue: "100 MB – 2 GB+ (Contains heavy 4K/HD video)",
      targetValue: "3 MB – 8 MB (~98% reduction)",
    },
    {
      feature: "Embedded Audio Codec",
      sourceValue: "Linear PCM or AAC (Stereo)",
      targetValue: "libmp3lame MP3 (192k or 320k)",
    },
    {
      feature: "Non-Apple Compatibility",
      sourceValue: "Often unsupported on legacy car stereos/USBs",
      targetValue: "Universal (100% of all devices and platforms)",
    },
    {
      feature: "Processing Speed",
      sourceValue: "Video decoding bypassed with -vn flag",
      targetValue: "Near-instantaneous audio track export",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="MOV to MP3 Converter - Apple QuickTime to MP3"
        description="Extract audio from iPhone MOV videos and QuickTime screen recordings online for free with 100% client-side privacy."
        url="/mov-to-mp3"
        breadcrumbs={[{ label: "MOV to MP3", href: "/mov-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "How to Extract MP3 from QuickTime MOV Videos",
          description: "Extract clean MP3 audio from any iPhone or Mac MOV video in three simple steps.",
          steps: [
            {
              name: "Upload MOV Video",
              text: "Select or drop your iPhone camera video or Mac screen capture into the converter.",
            },
            {
              name: "Select MP3 & Quality",
              text: "Choose MP3 format and configure your desired bitrate (192 kbps or 320 kbps).",
            },
            {
              name: "Extract & Save",
              text: "Click Convert. The video stream is discarded, and your audio is saved as a lightweight MP3.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "MOV to MP3", href: "/mov-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>QuickTime Audio Extraction</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert QuickTime MOV to MP3 Online
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Extract pristine MP3 audio from Apple QuickTime MOV recordings and iPhone video captures.
          No watermarks, no registration, and 100% local privacy.
        </p>
      </div>

      <DirectAnswer
        question="How do I extract audio from an iPhone QuickTime (.mov) video?"
        answer="To extract audio from an iPhone MOV video, upload it to MediaConvert. Our client-side WebAssembly engine isolates the audio stream and re-encodes it into an MP3 file directly in your browser. Because heavy video frames are ignored, extraction takes just seconds, shrinking multi-gigabyte video files by 98% with zero server uploads."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/quicktime,.mov,video/*"
          dropzoneHeadline="Drop your QuickTime MOV video here to extract MP3"
          dropzoneSubheadline="iPhone camera videos, screen recordings, and ProRes MOV • 100% Local"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table */}
      <ComparisonTable
        sourceName="Apple MOV Video"
        targetName="MP3 Audio Stream"
        rows={comparisonRows}
        caption="Technical Comparison: Apple MOV Video vs. Extracted MP3 Audio"
      />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Extracting Audio from iPhone & Mac MOV Recordings
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Apple MOV container format was created by Apple for QuickTime multimedia framework. Today, it is
          the default format for high-definition video recorded on iPhone cameras, iPad devices, and macOS QuickTime
          screen captures. Extracting the audio stream into MP3 makes it easy to share interviews, voice notes,
          musical rehearsals, and webinar audio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">iPhone Voice Memos in Video</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Recorded an interview on camera? Turn it into a podcast-ready MP3 file in seconds.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Mac Screen Recordings</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Convert Zoom, Teams, or presentation screen captures into compact audio files.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">98% File Size Reduction</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Reduce a 500 MB video to a 5 MB audio track without losing vocal clarity.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/mp4-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            MP4 to MP3
          </Link>
          <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Cutter & Trimmer
          </Link>
          <Link href="/audio-converter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            All Audio Converters
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About MOV to MP3
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
