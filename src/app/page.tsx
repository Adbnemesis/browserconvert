import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import {
  FileAudio,
  Film,
  ShieldCheck,
  Zap,
  Sliders,
  FolderArchive,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { SUPPORTED_OUTPUT_FORMATS } from "@/lib/config/formats";

export const metadata: Metadata = {
  title: "Free Online Audio Converter & Video to Audio Extractor",
  description:
    "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser processing. No uploads, no limits.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Free Online Audio Converter & Video to Audio Extractor",
    description:
      "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser processing.",
    url: siteConfig.url,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function HomePage() {
  const popularConversions = [
    {
      title: "MP4 to MP3",
      href: "/mp4-to-mp3",
      description: "Extract audio streams from MP4 clips directly in your browser.",
      badge: "Video to audio",
    },
    {
      title: "WAV to MP3",
      href: "/wav-to-mp3",
      description: "Compress master WAV recordings into high-bitrate MP3 files.",
      badge: "Compression",
    },
    {
      title: "M4A to MP3",
      href: "/m4a-to-mp3",
      description: "Convert Apple Voice Memos and AAC audio to standard MP3.",
      badge: "Universal",
    },
    {
      title: "FLAC to MP3",
      href: "/flac-to-mp3",
      description: "Transform studio FLAC tracks into 320 kbps MP3 files for mobile listening.",
      badge: "Lossless to MP3",
    },
    {
      title: "MOV to MP3",
      href: "/mov-to-mp3",
      description: "Extract audio from QuickTime MOV recordings without sending video to any server.",
      badge: "Video to audio",
    },
    {
      title: "MP3 to WAV",
      href: "/mp3-to-wav",
      description: "Decompress MP3 audio into uncompressed 16-bit PCM WAV for DAWs.",
      badge: "Editing",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Client-side privacy",
      desc: "Files never leave your computer. All processing runs directly inside your browser memory without uploading to any server.",
    },
    {
      icon: Zap,
      title: "No account required",
      desc: "Drop files and convert immediately. No sign-up, no email confirmation, and no daily conversion quotas.",
    },
    {
      icon: Sliders,
      title: "Exact audio controls",
      desc: "Set bitrates from 64 to 320 kbps, configure sample rates, select mono or stereo, and trim timestamps.",
    },
    {
      icon: FolderArchive,
      title: "Batch queue & ZIP export",
      desc: "Process multiple tracks simultaneously and download the converted batch in a single archive.",
    },
  ];

  const faqs = [
    {
      q: "How does BrowserConvert process files without uploading them?",
      a: "BrowserConvert processes audio directly inside your web browser. When you select a file, your device converts the stream locally in memory. No media data ever travels across the internet.",
    },
    {
      q: "Which video formats can I extract audio from?",
      a: "Supported containers include MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP, and TS. The engine extracts the raw audio stream and encodes it directly to your target format.",
    },
    {
      q: "What audio bitrate is recommended?",
      a: "For music and general listening, 192 or 256 kbps offers the best balance of fidelity and size. For podcasts and speech, 96 to 128 kbps is sufficient. For mastering or archiving, choose 320 kbps or lossless WAV/FLAC.",
    },
    {
      q: "Will converting MP3 to WAV improve audio quality?",
      a: "No. MP3 is lossy, so lost frequencies cannot be restored. Converting to WAV produces an uncompressed stream suitable for editing in audio workstations, but does not recover missing data.",
    },
    {
      q: "Is there a file size limit?",
      a: "Because processing runs entirely in your device RAM, files up to 1 GB run smoothly on modern hardware. Very large video files may be constrained by available system memory.",
    },
    {
      q: "Does this work on mobile devices?",
      a: "Yes. BrowserConvert works on modern mobile browsers, including Safari on iPhone/iPad and Chrome on Android.",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <SeoSchema
        pageType="website"
        title="Free Online Audio Converter & Video to Audio Extractor"
        description="Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser processing. No uploads, no limits."
        faqs={faqs}
        howTo={{
          name: "How to Convert Audio Files Online",
          description: "Convert audio and video files locally in your browser in three simple steps with complete privacy.",
          steps: [
            {
              name: "Select Media Files",
              text: "Drag and drop single or multiple audio or video files into the converter. Files remain stored safely on your device.",
            },
            {
              name: "Select Format & Bitrate",
              text: "Choose your target output format (MP3, WAV, M4A, FLAC, OGG, or OPUS) and configure bitrate settings up to 320 kbps.",
            },
            {
              name: "Convert & Download",
              text: "Click Convert to process your audio locally. Download individual audio files or get all tracks in a single ZIP archive.",
            },
          ],
        }}
      />

      {/* SECTION 1: HERO & CONVERTER DECK */}
      <section className="pt-8 sm:pt-12 pb-12 border-b border-slate-200/80 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            {/* Studio Status Indicator with Live Audio Equalizer */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300 mb-4 shadow-xs">
              <AudioVisualizer bars={3} className="h-3 gap-0.5" barWidth="w-0.5" />
              <span className="font-mono text-[11px]">100% Private · Processed on Device</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-slate-900 dark:text-zinc-100 leading-tight">
              Convert audio and video files. <br className="hidden sm:inline" />
              <span className="text-brand-600 dark:text-brand-400">Locally in your browser</span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto font-normal">
              Convert MP3, WAV, M4A, FLAC, and extract audio from MP4 or MOV videos. Processing runs in browser memory with zero file uploads.
            </p>
          </div>

          {/* CONVERTER DECK */}
          <div className="relative">
            <Converter
              defaultOutputFormat="mp3"
              dropzoneHeadline="Drop audio or video files here"
              dropzoneSubheadline="MP3, WAV, M4A, FLAC, MP4, MOV, MKV and more · Processed on device"
            />
          </div>
        </div>
      </section>

      {/* AD BANNER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot position="headerBanner" />
      </div>

      {/* SECTION 2: POPULAR CONVERSIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DirectAnswer
          question="How do I convert audio or extract sound from video files online without uploading them?"
          answer="BrowserConvert converts files directly inside your web browser without uploading them. Drag and drop your audio or video files into the converter, select your output format (MP3, WAV, M4A, FLAC, OGG, OPUS), and click Convert. All processing takes place in your device memory with complete privacy and zero server uploads."
        />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
              Popular conversions
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              Preset converters configured for standard audio workflows.
            </p>
          </div>
          <Link
            href="/audio-converter"
            className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            <span>All audio formats</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularConversions.map((conv) => (
            <Link
              key={conv.href}
              href={conv.href}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded px-2 py-0.5">
                    {conv.badge}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1.5 transition-all duration-200" />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
                  {conv.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {conv.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: SUPPORTED CODECS */}
      <section className="bg-slate-50 dark:bg-white/[0.02] py-12 border-y border-slate-200/80 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-8">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
              Supported codecs and containers
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              Converted directly on your device with complete privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Audio Outputs */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5">
              <div className="flex items-center gap-2 mb-4">
                <FileAudio className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">Audio outputs</h3>
              </div>

              <div className="space-y-2.5">
                {Object.values(SUPPORTED_OUTPUT_FORMATS).map((fmt) => (
                  <div key={fmt.id} className="flex items-start justify-between border-b border-slate-100 dark:border-white/5 pb-2.5 text-xs">
                    <div>
                      <span className="font-medium text-slate-800 dark:text-zinc-200">{fmt.name}</span>
                      <span className="ml-1.5 text-slate-400 font-mono">({fmt.extension})</span>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">{fmt.description}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200/60 dark:border-white/5">
                      {fmt.isLossless ? "Lossless" : fmt.defaultBitrate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Extraction */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Film className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">Video extraction inputs</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
                  { name: "MOV", ext: ".mov", desc: "QuickTime" },
                  { name: "MKV", ext: ".mkv", desc: "Matroska" },
                  { name: "WEBM", ext: ".webm", desc: "WebM" },
                  { name: "AVI", ext: ".avi", desc: "AVI" },
                  { name: "WMV", ext: ".wmv", desc: "Windows Media" },
                  { name: "FLV", ext: ".flv", desc: "Flash" },
                  { name: "3GP", ext: ".3gp", desc: "Mobile" },
                  { name: "TS", ext: ".ts", desc: "Transport" },
                ].map((v) => (
                  <div key={v.ext} className="rounded-lg bg-slate-50 dark:bg-white/5 p-2.5 border border-slate-200/80 dark:border-white/10">
                    <div className="font-mono text-xs font-medium text-slate-800 dark:text-zinc-200">{v.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">{v.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-slate-50 dark:bg-white/5 p-3 text-xs text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/10">
                <span className="font-medium text-slate-800 dark:text-zinc-200">Stream demuxing: </span>
                Video tracks are bypassed entirely during processing to maximize encoding speed and battery efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STEPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
            How it works
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            Three steps from source media to converted output.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
            <div className="font-mono text-xs text-brand-600 dark:text-brand-400 mb-2">01</div>
            <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">Select media</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Drop single tracks or batches into the converter. Files are loaded directly into browser memory.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
            <div className="font-mono text-xs text-brand-600 dark:text-brand-400 mb-2">02</div>
            <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">Configure parameters</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Select output format, set bitrates from 64 to 320 kbps, or adjust sample rates and trimming.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
            <div className="font-mono text-xs text-brand-600 dark:text-brand-400 mb-2">03</div>
            <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">Export audio</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Click Convert to process locally. Save individual tracks or download the entire batch as a ZIP.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8">
          <div className="max-w-xl mb-6">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
              System capabilities
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              Engineered around client privacy and audio standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat) => (
              <div key={feat.title} className="flex flex-col items-start">
                <feat.icon className="h-4 w-4 text-brand-600 dark:text-brand-400 mb-2.5" />
                <h3 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100">{feat.title}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-CONTENT AD */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot position="inContent" />
      </div>

      {/* SECTION 6: FAQS */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
            Frequently asked questions
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            Common questions about in-browser private audio conversion.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-4">
              <h3 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 flex items-start gap-2">
                <HelpCircle className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed pl-5.5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
