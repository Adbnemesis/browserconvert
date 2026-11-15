import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioCompressorTool } from "@/components/tools/AudioCompressorTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Minimize2, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Compressor Online - Reduce Audio File Size Free",
  description:
    "Compress audio files online for free. Reduce the file size of MP3, WAV, FLAC, and M4A without sacrificing clarity. 100% private in-browser compression.",
  alternates: {
    canonical: `${siteConfig.url}/audio-compressor`,
  },
  openGraph: {
    title: "Audio Compressor Online - Reduce Audio File Size Free",
    description: "Compress MP3, WAV, and FLAC audio files by up to 85% directly in your browser with 100% privacy.",
    url: `${siteConfig.url}/audio-compressor`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Compressor Online - Reduce Audio File Size Free",
    description: "Compress audio files with customizable presets and 100% client-side privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AudioCompressorPage() {
  const faqs = [
    {
      q: "How does audio compression work on MediaConvert?",
      a: "MediaConvert compresses audio by re-encoding uncompressed or bloated audio files into high-efficiency MP3 or AAC codecs with optimized bitrates (such as 128 kbps or 96 kbps) and mono channel downmixing where appropriate, cutting file sizes by 50% to 85%.",
    },
    {
      q: "Will compression make my audio sound muffled or robotic?",
      a: "No. By using modern perceptual encoding presets (such as High Quality 192k or Medium 128k), speech, podcasts, and music retain crisp clarity while shedding redundant frequency data.",
    },
    {
      q: "Can I compress audio to email it or send via messaging apps?",
      a: "Yes. Most email services limit attachments to 25 MB. Compressing an uncompressed 60 MB WAV file reduces it down to approximately 4 MB to 7 MB, making it effortless to send as an attachment.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Online Audio Compressor - Reduce File Size"
        description="Compress MP3, WAV, and FLAC audio files online for free with 100% client-side privacy."
        url="/audio-compressor"
        breadcrumbs={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Compressor", href: "/audio-compressor" }]}
        faqs={faqs}
        howTo={{
          name: "How to Compress Audio Files Online",
          description: "Reduce audio file sizes by up to 85% in three easy steps.",
          steps: [
            {
              name: "Upload Audio File",
              text: "Select any large MP3, WAV, FLAC, or M4A file from your computer or smartphone.",
            },
            {
              name: "Choose Compression Preset",
              text: "Select your desired compression level (Light, Medium, or Heavy compression).",
            },
            {
              name: "Compress & Save",
              text: "Click Compress to process the audio in local memory and download your lightweight audio file.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Audio Compressor", href: "/audio-compressor" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Minimize2 className="h-3.5 w-3.5" />
          <span>File Size Reduction</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Free Online Audio Compressor
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Reduce audio file sizes for easy emailing, messaging, and web publishing.
          Select target compression levels and preview exact size savings.
        </p>
      </div>

      <DirectAnswer
        question="How can I reduce the file size of an audio file without losing quality?"
        answer="To compress an audio file without noticeable quality degradation, upload it to MediaConvert's Audio Compressor. Choose a balanced compression preset (such as 128 kbps or 192 kbps) which discards inaudible frequencies while keeping voices and instruments crisp. An uncompressed WAV file shrinks by up to 85% into a lightweight MP3, all processed locally in your browser."
      />

      <AudioCompressorTool />

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          How to Compress Audio Files Online
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">1. Upload Track</h3>
            <p>Select any MP3, WAV, FLAC, or M4A file from your device.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">2. Select Quality Preset</h3>
            <p>Choose from Light (192 kbps), Medium (128 kbps), or Maximum compression (96 kbps).</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">3. Compress & Save</h3>
            <p>Click &ldquo;Compress Audio&rdquo; to process locally and download your compact audio file.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-bitrate-changer" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Bitrate Changer
          </Link>
          <Link href="/audio-cutter" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Cutter
          </Link>
          <Link href="/wav-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            WAV to MP3
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About Audio Compression
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
