import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import {
  FileAudio,
  Film,
  ShieldCheck,
  Zap,
  Sliders,
  FolderArchive,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { SUPPORTED_OUTPUT_FORMATS } from "@/lib/config/formats";

export const metadata: Metadata = {
  title: "Free Online Audio Converter & Video to Audio Extractor",
  description:
    "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser WebAssembly processing. No uploads, no limits.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Free Online Audio Converter & Video to Audio Extractor",
    description:
      "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser WebAssembly processing.",
    url: siteConfig.url,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function HomePage() {
  const popularConversions = [
    {
      title: "MP4 to MP3",
      href: "/mp4-to-mp3",
      description: "Extract clean audio tracks from MP4 video clips directly in your browser.",
      badge: "Video to Audio",
      badgeColor: "bg-indigo-50 text-indigo-700",
    },
    {
      title: "WAV to MP3",
      href: "/wav-to-mp3",
      description: "Compress uncompressed master WAV recordings into portable high-bitrate MP3s.",
      badge: "Audio Compression",
      badgeColor: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "M4A to MP3",
      href: "/m4a-to-mp3",
      description: "Convert Apple Voice Memos and iTunes audio files to universally compatible MP3.",
      badge: "Universal Compatibility",
      badgeColor: "bg-blue-50 text-blue-700",
    },
    {
      title: "FLAC to MP3",
      href: "/flac-to-mp3",
      description: "Transform lossless studio FLAC albums into 320 kbps MP3 files for mobile players.",
      badge: "Audiophile",
      badgeColor: "bg-purple-50 text-purple-700",
    },
    {
      title: "MOV to MP3",
      href: "/mov-to-mp3",
      description: "Rip audio from Apple QuickTime MOV recordings without sending video to any server.",
      badge: "Video to Audio",
      badgeColor: "bg-indigo-50 text-indigo-700",
    },
    {
      title: "MP3 to WAV",
      href: "/mp3-to-wav",
      description: "Decompress MP3 audio into uncompressed 16-bit PCM WAV for audio editing and DAWs.",
      badge: "Audio Editing",
      badgeColor: "bg-amber-50 text-amber-700",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "100% Client-Side Privacy",
      desc: "Your files never touch our servers. WebAssembly executes the entire conversion locally inside your own browser window.",
    },
    {
      icon: Zap,
      title: "Fast & Registration-Free",
      desc: "No account creation, no email verification, and no wait times. Drop your files and download the converted audio immediately.",
    },
    {
      icon: Sliders,
      title: "Custom Bitrate & Audio Controls",
      desc: "Fine-tune output parameters from 64 kbps to 320 kbps, adjust sample rates, select mono/stereo, or trim start and end times.",
    },
    {
      icon: FolderArchive,
      title: "Batch Conversion & ZIP Download",
      desc: "Process multiple tracks simultaneously. When finished, download all converted tracks packaged into a single ZIP archive.",
    },
  ];

  const faqs = [
    {
      q: "How does BrowserConvert process files without uploading them?",
      a: "BrowserConvert runs WebAssembly (Wasm) compiled FFmpeg directly inside your web browser. When you select a file, your browser's CPU processes and re-encodes the audio data in memory. No file data is ever transmitted across the internet to our servers.",
    },
    {
      q: "Which video formats can I extract audio from?",
      a: "You can upload common video containers including MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP, and TS. The engine extracts the underlying audio stream and encodes it into your chosen output format such as MP3 or WAV.",
    },
    {
      q: "What audio bitrate should I choose?",
      a: "For general listening, 192 kbps is the recommended sweet spot between file size and audio fidelity. For spoken word and voice memos, 96-128 kbps is sufficient. For high-fidelity music playback on quality speakers, select 256 or 320 kbps.",
    },
    {
      q: "Will converting MP3 to WAV restore lost audio quality?",
      a: "No. MP3 is a lossy format, meaning data was permanently discarded during its initial encoding. Converting MP3 to WAV creates an uncompressed PCM stream suitable for editing software, but cannot restore the frequencies lost during the original MP3 compression.",
    },
    {
      q: "Is there a file size limit?",
      a: "Because processing happens in your browser's memory, we recommend files under 1 GB for smooth performance. Very large video files may be constrained by your device's available RAM.",
    },
    {
      q: "Can I use BrowserConvert on my smartphone?",
      a: "Yes. BrowserConvert is fully responsive and functions on modern mobile browsers including Safari on iOS and Chrome on Android with WebAssembly support.",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <SeoSchema
        pageType="website"
        title="Free Online Audio Converter & Video to Audio Extractor"
        description="Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser WebAssembly processing. No uploads, no limits."
        faqs={faqs}
        howTo={{
          name: "How to Convert Audio Files Online",
          description: "Convert audio and video files locally in your browser in three simple steps with complete privacy.",
          steps: [
            {
              name: "Upload Media Files",
              text: "Drag and drop single or multiple audio or video files into the converter. Files remain stored safely on your device.",
            },
            {
              name: "Select Format & Bitrate",
              text: "Choose your target output format (MP3, WAV, M4A, FLAC, OGG, or OPUS) and configure bitrate settings up to 320 kbps.",
            },
            {
              name: "Convert & Download",
              text: "Click Convert to run WebAssembly FFmpeg locally. Download individual audio files or get all tracks in a single ZIP archive.",
            },
          ],
        }}
      />

      {/* SECTION 1: HERO & WORKING CONVERTER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 dark:from-transparent dark:via-transparent dark:to-transparent pt-8 sm:pt-14 pb-12 border-b border-slate-200/60 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-brand-950/80 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 mb-4 shadow-xs dark:shadow-[0_0_15px_rgb(var(--brand-glow)/0.25)]">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span>Browser-Native FFmpeg • Free & Unlimited</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Convert Audio Files Online. <br className="hidden sm:inline" />
              <span className="text-brand-600 dark:text-brand-400 dark:drop-shadow-[0_0_25px_rgb(var(--brand-glow)/0.35)]">Fast, Free & Private.</span>
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-zinc-200 leading-relaxed max-w-2xl mx-auto font-normal">
              Convert MP3, WAV, M4A, FLAC, and more. Extract crystal-clear audio from video files with a simple,
              private browser converter. Zero file uploads.
            </p>
          </div>

          {/* WORKING CONVERTER MOUNTED RIGHT IN HERO */}
          <div className="relative">
            <Converter
              defaultOutputFormat="mp3"
              dropzoneHeadline="Drop your audio or video files here to convert"
              dropzoneSubheadline="MP3, WAV, M4A, FLAC, MP4, MOV, MKV and more • 100% Client-Side"
            />
          </div>
        </div>
      </section>

      {/* OPTIONAL AD BANNER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot position="headerBanner" />
      </div>

      {/* SECTION 2: POPULAR CONVERSIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DirectAnswer
          question="How do I convert audio or extract sound from video files online without uploading them?"
          answer="BrowserConvert executes WebAssembly-compiled FFmpeg directly inside your web browser sandbox. Drag and drop your audio or video files into the converter, select your output format (MP3, WAV, M4A, FLAC, OGG, OPUS), and click Convert. All processing takes place in your local device memory with 100% privacy and zero server uploads."
        />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Popular Media Conversions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Dedicated converters with pre-configured settings for the most requested formats.
            </p>
          </div>
          <Link
            href="/audio-converter"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
          >
            <span>View All Audio Formats</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularConversions.map((conv) => (
            <Link
              key={conv.href}
              href={conv.href}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-brand-300 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${conv.badgeColor}`}>
                    {conv.badge}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {conv.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {conv.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: SUPPORTED FORMATS MATRIX */}
      <section className="bg-slate-100/70 dark:bg-white/[0.02] py-12 border-y border-slate-200/80 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Supported Audio & Video Codecs
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Every format is processed by our client-side WebAssembly multimedia engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Audio Formats Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <FileAudio className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Supported Audio Outputs</h3>
                  <p className="text-xs text-slate-500">Available target formats for all conversions</p>
                </div>
              </div>

              <div className="space-y-3">
                {Object.values(SUPPORTED_OUTPUT_FORMATS).map((fmt) => (
                  <div key={fmt.id} className="flex items-start justify-between border-b border-slate-100 pb-2.5 text-xs">
                    <div>
                      <span className="font-bold text-slate-800">{fmt.name}</span>
                      <span className="ml-2 text-slate-400 font-mono">({fmt.extension})</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">{fmt.description}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {fmt.isLossless ? "Lossless" : fmt.defaultBitrate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Input Extraction Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Film className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Video Extraction Formats</h3>
                  <p className="text-xs text-slate-500">Containers supported for direct audio extraction</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  { name: "MP4 Video", ext: ".mp4", desc: "MPEG-4 Part 14" },
                  { name: "MOV Video", ext: ".mov", desc: "Apple QuickTime" },
                  { name: "MKV Video", ext: ".mkv", desc: "Matroska Container" },
                  { name: "WEBM Video", ext: ".webm", desc: "HTML5 Web Media" },
                  { name: "AVI Video", ext: ".avi", desc: "Audio Video Interleaved" },
                  { name: "WMV Video", ext: ".wmv", desc: "Windows Media" },
                  { name: "FLV Video", ext: ".flv", desc: "Flash Video" },
                  { name: "3GP Video", ext: ".3gp", desc: "Mobile Multimedia" },
                  { name: "TS Stream", ext: ".ts", desc: "Transport Stream" },
                ].map((v) => (
                  <div key={v.ext} className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <div className="font-bold text-slate-800">{v.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{v.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-brand-50/70 p-3 text-xs text-brand-900 border border-brand-200">
                <p className="font-semibold">Pure Audio Extraction</p>
                <p className="text-[11px] text-brand-700 mt-0.5">
                  The video stream is bypassed entirely during processing, saving battery and producing maximum fidelity audio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            How BrowserConvert Works in 3 Simple Steps
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Intuitive client-side processing without complex menus or waiting queues.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-xs text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700 font-extrabold text-base mb-4 border border-brand-100">
              1
            </div>
            <h3 className="text-base font-bold text-slate-900">Upload Your Media</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Drag and drop single or multiple audio/video files into the converter. Your files stay on your device.
            </p>
          </div>

          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-xs text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700 font-extrabold text-base mb-4 border border-brand-100">
              2
            </div>
            <h3 className="text-base font-bold text-slate-900">Select Format & Settings</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Choose your target format (MP3, WAV, FLAC, etc.) and optionally adjust bitrate, sample rate, or trimming.
            </p>
          </div>

          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-xs text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700 font-extrabold text-base mb-4 border border-brand-100">
              3
            </div>
            <h3 className="text-base font-bold text-slate-900">Download the Result</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Click Convert to run FFmpeg locally. Download individual audio tracks or grab all converted files in one ZIP.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY USE BROWSERCONVERT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Why Choose BrowserConvert?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Engineered for genuine privacy, audio fidelity, and modern browser standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat) => (
              <div key={feat.title} className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 mb-3 border border-brand-100">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-CONTENT ADVERTISEMENT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot position="inContent" />
      </div>

      {/* SECTION 6: FAQS */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Everything you need to know about our browser audio conversion architecture.
          </p>
        </div>

        <div className="space-y-4">
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
        </div>
      </section>
    </div>
  );
}
