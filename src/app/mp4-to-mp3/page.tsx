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
import { Film, FileAudio, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "MP4 to MP3 Converter - Extract Audio from MP4 Online Free",
  description:
    "Convert MP4 to MP3 online for free. Extract audio from MP4 video files directly in your browser with 320kbps high quality. 100% private, no server uploads.",
  alternates: {
    canonical: `${siteConfig.url}/mp4-to-mp3`,
  },
  openGraph: {
    title: "MP4 to MP3 Converter - Extract Audio from MP4 Online Free",
    description:
      "Convert MP4 to MP3 online for free. Extract high quality audio from MP4 video files directly in your browser.",
    url: `${siteConfig.url}/mp4-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 to MP3 Converter - Extract Audio from MP4 Online Free",
    description: "Extract high quality audio from MP4 video files directly in your browser with 100% client-side privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function Mp4ToMp3Page() {
  const faqs = [
    {
      q: "Does converting MP4 to MP3 reduce the audio quality?",
      a: "BrowserConvert extracts the audio stream directly and re-encodes it using the high-performance libmp3lame codec. When choosing 192 kbps or 320 kbps, the sound is virtually identical to the audio contained in the original MP4 video.",
    },
    {
      q: "Is my MP4 video uploaded to any server?",
      a: "No. The entire conversion process occurs locally in your web browser via WebAssembly FFmpeg. Your video file stays on your computer or phone and is never sent to our servers.",
    },
    {
      q: "Can I extract audio from 4K or large MP4 files?",
      a: "Yes. Because the video frames are discarded and only the audio stream is parsed, even high-resolution video files can be converted efficiently. We recommend files under 1 GB for smooth browser memory performance.",
    },
    {
      q: "What if my MP4 video has multiple audio channels?",
      a: "By default, BrowserConvert retains stereo channels. You can also force Mono in Advanced Settings if you are extracting a podcast interview or speech recording to reduce file size.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Media Type",
      sourceValue: "Video + Audio Container (Multiplexed)",
      targetValue: "Pure Standalone Audio Track",
    },
    {
      feature: "Typical Audio Codec",
      sourceValue: "AAC-LC, HE-AAC, or ALAC",
      targetValue: "MPEG-1 Audio Layer III (libmp3lame)",
    },
    {
      feature: "Typical File Size",
      sourceValue: "50 MB – 500 MB+ (Includes video frames)",
      targetValue: "3 MB – 10 MB (~90% to 95% reduction)",
    },
    {
      feature: "Hardware Compatibility",
      sourceValue: "Requires video display & H.264/HEVC decoder",
      targetValue: "Universal (100% of car stereos, DAWs & players)",
    },
    {
      feature: "Battery & CPU Usage",
      sourceValue: "High (demuxing and decoding video frames)",
      targetValue: "Very Low (lightweight audio playback)",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="MP4 to MP3 Converter - Extract Audio from MP4"
        description="Convert MP4 to MP3 online for free with 100% in-browser client-side privacy."
        url="/mp4-to-mp3"
        breadcrumbs={[{ label: "MP4 to MP3", href: "/mp4-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "How to Convert MP4 to MP3 in Browser",
          description: "Extract high fidelity MP3 audio from any MP4 video file in three easy steps.",
          steps: [
            {
              name: "Upload MP4 Video",
              text: "Drag and drop your MP4 video file into the converter box. Files are processed locally on your device.",
            },
            {
              name: "Choose Quality Bitrate",
              text: "Select MP3 as target format and pick 192 kbps or 320 kbps for optimal audio fidelity.",
            },
            {
              name: "Extract & Download",
              text: "Click Convert to run WebAssembly FFmpeg. Download your standalone MP3 audio track instantly.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "MP4 to MP3", href: "/mp4-to-mp3" }]} />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Video to Audio Extraction</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convert MP4 to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Extract high-quality MP3 audio from any MP4 video file. Fast, simple, and 100% private in-browser
          processing without watermarks or file size penalties.
        </p>
      </div>

      {/* Answer-First / Direct Answer Block for AI Search & Featured Snippets */}
      <DirectAnswer
        question="How to convert MP4 to MP3 without uploading files to a server?"
        answer="To convert MP4 to MP3 privately, upload your video to BrowserConvert. Our browser engine demuxes the MP4 container and encodes the audio track into MP3 locally using WebAssembly FFmpeg. Select 192 kbps or 320 kbps for high fidelity. Your video never leaves your computer, ensuring complete confidentiality."
      />

      {/* Converter preconfigured with MP3 output */}
      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/mp4,.mp4,video/*"
          dropzoneHeadline="Drop your MP4 video file here to extract MP3"
          dropzoneSubheadline="High quality 320kbps & 192kbps MP3 audio • 100% Local Browser Extraction"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table Section */}
      <ComparisonTable
        sourceName="MP4 Video Container"
        targetName="MP3 Audio Stream"
        rows={comparisonRows}
        caption="Technical Comparison: MP4 Source vs. Extracted MP3 Audio"
      />

      {/* Educational Guide Section */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            How Audio Extraction from MP4 Video Works
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            An MP4 file is a multimedia container that wraps video (commonly H.264 or HEVC), audio (commonly AAC),
            and subtitle streams into a single file. When you extract MP3 from an MP4 file with BrowserConvert, our
            browser engine demuxes the container, isolates the audio track, and re-encodes it into universal MP3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900">1. Select Bitrate for Quality</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Standard YouTube or web MP4 videos typically encode audio at 128 to 160 kbps. Selecting <strong>192 kbps</strong> or <strong>320 kbps</strong> ensures no additional compression artifacts are introduced during extraction.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900">2. Save Battery & Memory</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Because BrowserConvert runs locally with the <code>-vn</code> flag (video disabled), heavy video frames are ignored entirely, allowing your computer or phone to process the file in seconds.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900">3. Playable Everywhere</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              MP3 is playable on every digital audio workstation, car stereo, smart TV, smartphone, and portable speaker without requiring video codecs.
            </p>
          </div>
        </div>

        {/* Related Video-to-Audio Conversions */}
        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 mb-3">Related Video & Audio Converters</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/mov-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              MOV to MP3 (QuickTime)
            </Link>
            <Link href="/wav-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              WAV to MP3
            </Link>
            <Link href="/m4a-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              M4A to MP3
            </Link>
            <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              Audio Cutter
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About MP4 to MP3
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
