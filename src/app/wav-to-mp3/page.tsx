import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { FileAudio, Sparkles, HelpCircle, CheckCircle2, Sliders, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "WAV to MP3 Converter - Convert Lossless WAV to MP3 Online",
  description:
    "Convert WAV to MP3 online for free. Compress large uncompressed WAV recordings into high-quality 320kbps or 192kbps MP3s. 100% private in-browser conversion.",
  alternates: {
    canonical: `${siteConfig.url}/wav-to-mp3`,
  },
};

export default function WavToMp3Page() {
  const faqs = [
    {
      q: "How much file size do I save converting WAV to MP3?",
      a: "WAV files typically consume approximately 10 MB per minute of uncompressed 16-bit 44.1 kHz stereo audio. Converting to a 192 kbps MP3 reduces the file size by roughly 85% to 90%, down to around 1.4 MB per minute, making files vastly easier to share and store.",
    },
    {
      q: "Can human ears tell the difference between WAV and 320 kbps MP3?",
      a: "In standard blind listening tests with consumer headphones, speakers, or car stereos, most listeners cannot distinguish between an uncompressed 16-bit WAV file and a high-grade 320 kbps MP3. Only in acoustically treated studios with professional reference monitors might subtle differences in ultra-high frequencies be detected.",
    },
    {
      q: "What is the best bitrate to convert WAV to MP3?",
      a: "For personal music collections, 192 kbps is the ideal balance between small size and crystal-clear sound. For audio production portfolios or commercial releases, choose 320 kbps.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "WAV to MP3", href: "/wav-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Lossless to Portable Compression</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert WAV to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Compress heavy uncompressed studio WAV audio files into lightweight, universal MP3s.
          Select your target bitrate and process directly in your browser with zero data uploads.
        </p>
      </div>

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/wav,audio/x-wav,.wav"
          dropzoneHeadline="Drop your WAV audio files here to convert to MP3"
          dropzoneSubheadline="Supports 16-bit, 24-bit, and 32-bit float WAV master files • 100% Private"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Technical Comparison Section */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            WAV vs MP3: File Size and Quality Trade-offs
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            WAV (Waveform Audio File Format) stores raw, uncompressed pulse-code modulation (PCM) data.
            While ideal for music production and mastering, WAV files are too large for email attachments,
            messaging apps, and portable storage. MP3 applies psychoacoustic perceptual coding to remove
            inaudible frequencies, slashing file size by up to 90%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              When to Keep WAV
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Multi-track recording and mixing inside a DAW (Logic, Pro Tools, Ableton).</li>
              <li>Archiving original voiceover or instrument recordings.</li>
              <li>Mastering for CD or digital distributor master uploads.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              When to Convert to MP3
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Sharing rough mixes or demos with clients and collaborators.</li>
              <li>Uploading podcast episodes to hosting platforms.</li>
              <li>Transferring music to mobile devices, flash drives, or car stereos.</li>
              <li>Saving significant hard drive and cloud storage space.</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 mb-3">Related Audio Tools</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/mp3-to-wav" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              MP3 to WAV Converter
            </Link>
            <Link href="/flac-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              FLAC to MP3 Converter
            </Link>
            <Link href="/audio-compressor" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
              Audio Compressor
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About WAV to MP3
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
