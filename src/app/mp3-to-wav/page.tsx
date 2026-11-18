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
import { FileAudio, HelpCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "MP3 to WAV Converter - Convert MP3 to Uncompressed 16-Bit WAV",
  description:
    "Convert MP3 to WAV online for free. Decompress MP3 audio into standard 16-bit PCM WAV for DAWs, music editing, and DJ hardware. 100% private in-browser conversion.",
  alternates: {
    canonical: `${siteConfig.url}/mp3-to-wav`,
    languages: getHreflangAlternates("/mp3-to-wav"),
  },
  openGraph: {
    title: "MP3 to WAV Converter - Convert MP3 to Uncompressed 16-Bit WAV Free",
    description: "Decompress MP3 audio into uncompressed 16-bit PCM WAV for DAWs and audio editing directly in your browser.",
    url: `${siteConfig.url}/mp3-to-wav`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 to WAV Converter - Convert MP3 to Uncompressed 16-Bit WAV Free",
    description: "Decompress MP3 audio into uncompressed 16-bit PCM WAV for DAWs with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function Mp3ToWavPage() {
  const faqs = [
    {
      q: "Does converting MP3 to WAV improve the audio quality?",
      a: "No. MP3 is a lossy compression format, meaning audio frequencies (usually above 16 kHz or masked sounds) were permanently removed when the MP3 was originally created. Converting to WAV decompresses that audio into uncompressed PCM, but cannot restore data that no longer exists.",
    },
    {
      q: "Why should I convert MP3 to WAV if the quality does not improve?",
      a: "Many professional applications require WAV: Digital Audio Workstations (DAWs) like Pro Tools or FL Studio run with less CPU overhead on uncompressed WAV; DJ CDJs and samplers often reject MP3s with variable bitrates (VBR); and audio editors prevent generation loss by editing in uncompressed PCM.",
    },
    {
      q: "Why is the converted WAV file so much larger than my MP3?",
      a: "A standard 16-bit 44.1 kHz stereo WAV file requires roughly 10 MB per minute of playback. Because WAV stores raw audio samples without compression, a 5 MB MP3 typically expands to around 40-50 MB as a WAV file. This is normal and expected.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Audio Encoding Format",
      sourceValue: "MPEG-1 Layer 3 (Lossy Psychoacoustic)",
      targetValue: "16-bit Linear PCM (Uncompressed Waveform)",
    },
    {
      feature: "Bitrate Rate",
      sourceValue: "128 kbps to 320 kbps (Compressed)",
      targetValue: "1,411.2 kbps (Standard CD quality PCM)",
    },
    {
      feature: "File Size Ratio",
      sourceValue: "Compact (Approx. 1 MB per minute)",
      targetValue: "Expanded (Approx. 10.5 MB per minute)",
    },
    {
      feature: "DAW & Timeline Performance",
      sourceValue: "Requires realtime CPU decompression",
      targetValue: "Instant random access & zero CPU decoding penalty",
    },
    {
      feature: "Repeated Re-editing Safety",
      sourceValue: "Suffers generation loss if re-compressed",
      targetValue: "Lossless editing without cumulative degradation",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="MP3 to WAV Converter - Decompress MP3 to 16-bit PCM WAV"
        description="Convert MP3 to WAV online for free with 100% private in-browser processing."
        url="/mp3-to-wav"
        breadcrumbs={[{ label: "MP3 to WAV", href: "/mp3-to-wav" }]}
        faqs={faqs}
        howTo={{
          name: "How to Decompress MP3 into 16-bit WAV",
          description: "Decompress MP3 audio into uncompressed PCM WAV in three easy steps.",
          steps: [
            {
              name: "Upload MP3 Track",
              text: "Drag and drop your MP3 files into the converter area.",
            },
            {
              name: "Verify WAV Output",
              text: "Select WAV format (encoded via pcm_s16le 44.1 kHz for maximum compatibility).",
            },
            {
              name: "Decompress & Download",
              text: "Click Convert to generate your uncompressed studio-ready WAV file in seconds.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "MP3 to WAV", href: "/mp3-to-wav" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>PCM Audio Decompression</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convert MP3 to WAV Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Decompress MP3 audio files into standard 16-bit uncompressed PCM WAV format for studio DAWs,
          audio editing, and DJ equipment. 100% private in-browser processing.
        </p>
      </div>

      <DirectAnswer
        question="Why convert MP3 to WAV and does it restore lost sound quality?"
        answer="Converting MP3 to WAV decompresses lossy audio into uncompressed 16-bit PCM. While it cannot restore frequencies discarded during initial MP3 compression, it expands the audio into a format required by DAWs, hardware DJ CDJs, and game engines to prevent CPU decoding lag and avoid compounding generation loss during editing. BrowserConvert performs this conversion 100% locally in your browser."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="wav"
          acceptTypes="audio/mpeg,audio/mp3,.mp3"
          dropzoneHeadline="Drop your MP3 audio files here to convert to WAV"
          dropzoneSubheadline="Produces 16-bit uncompressed PCM WAV master files • 100% Local"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table */}
      <ComparisonTable
        sourceName="MP3 (Compressed Audio)"
        targetName="WAV (Uncompressed PCM)"
        rows={comparisonRows}
        caption="Technical Comparison: Compressed MP3 vs. Decompressed WAV"
      />

      {/* Honest Technical Explanation */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-950">Important Note on Quality & File Size</h3>
            <p className="mt-1 leading-relaxed text-amber-800">
              Converting a compressed MP3 file to WAV does <strong>not</strong> restore the original acoustic fidelity of an analog or studio master recording. However, converting to WAV is indispensable when importing clips into video editors, DAWs, game engines, and audio sequencers that demand uncompressed waveforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Zero Generation Loss</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Editing in WAV prevents compounding lossy compression artifacts during repeated cuts and re-exports.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">DAW & DJ Compatibility</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Ensures smooth waveform rendering and prevents playback errors on hardware samplers and DJ gear.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Low CPU Decoding</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Uncompressed PCM audio requires minimal CPU overhead to stream, ideal for game sound effects.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/wav-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            WAV to MP3 Converter
          </Link>
          <Link href="/flac-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            FLAC to MP3 Converter
          </Link>
          <Link href="/audio-merger" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Merger
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About MP3 to WAV
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
