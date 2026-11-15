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
  title: "FLAC to MP3 Converter - Convert Hi-Res FLAC to 320kbps MP3",
  description:
    "Convert FLAC to MP3 online for free. Transform lossless FLAC albums into high-fidelity 320kbps or 192kbps MP3 files for smartphones and car stereos. 100% private.",
  alternates: {
    canonical: `${siteConfig.url}/flac-to-mp3`,
  },
  openGraph: {
    title: "FLAC to MP3 Converter - Convert Hi-Res FLAC to 320kbps MP3 Online",
    description: "Transform lossless FLAC albums into high-fidelity 320kbps MP3 files directly in your browser.",
    url: `${siteConfig.url}/flac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC to MP3 Converter - Convert Hi-Res FLAC to 320kbps MP3 Online",
    description: "Transform lossless FLAC albums into 320kbps MP3 files with 100% in-browser privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FlacToMp3Page() {
  const faqs = [
    {
      q: "Why convert FLAC to MP3?",
      a: "FLAC provides bit-perfect lossless compression, but FLAC files are large (typically 30-50 MB per song) and unsupported by some car stereos, older smartphones, and Apple's native Music app. Converting to 320 kbps MP3 saves 75% of storage space while preserving stellar audio clarity.",
    },
    {
      q: "What bitrate should I choose for FLAC to MP3?",
      a: "Because FLAC starts from pristine master fidelity, we strongly recommend converting at 320 kbps or 256 kbps to maintain full dynamic range and top-end brilliance.",
    },
    {
      q: "Will batch converting a whole album work?",
      a: "Yes. You can drag an entire folder of FLAC tracks into BrowserConvert. The engine converts each track sequentially to protect your browser's memory, and lets you download the completed album as a single ZIP archive.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Compression Standard",
      sourceValue: "Free Lossless Audio Codec (Bit-perfect)",
      targetValue: "MPEG-1 Layer III (Lossy perceptual)",
    },
    {
      feature: "Typical Bitrate",
      sourceValue: "800 kbps – 1,411 kbps (VBR Lossless)",
      targetValue: "320 kbps CBR or 192 kbps CBR",
    },
    {
      feature: "Average Album Size",
      sourceValue: "350 MB – 600 MB",
      targetValue: "80 MB – 120 MB (~75% space reduction)",
    },
    {
      feature: "Apple Ecosystem Support",
      sourceValue: "Not supported natively by iOS Music/iTunes",
      targetValue: "100% native on iOS, macOS, watchOS, CarPlay",
    },
    {
      feature: "Acoustic Fidelity",
      sourceValue: "Identical to master studio recording",
      targetValue: "Transparent fidelity (indistinguishable on consumer gear)",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="FLAC to MP3 Converter - Hi-Res Lossless to 320kbps MP3"
        description="Convert FLAC to MP3 online for free with 100% private in-browser WebAssembly processing."
        url="/flac-to-mp3"
        breadcrumbs={[{ label: "FLAC to MP3", href: "/flac-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "How to Convert FLAC to 320kbps MP3",
          description: "Convert high-resolution FLAC albums into 320kbps MP3 in three easy steps.",
          steps: [
            {
              name: "Add FLAC Tracks",
              text: "Drag and drop your FLAC songs or entire album into the converter.",
            },
            {
              name: "Set Bitrate to 320 kbps",
              text: "Select MP3 and choose 320 kbps to maintain maximum acoustic fidelity.",
            },
            {
              name: "Convert & Download ZIP",
              text: "Click Convert. When batch completes, click Download All (ZIP) to get your album.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "FLAC to MP3", href: "/flac-to-mp3" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 border border-purple-200 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Lossless Audiophile to MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Convert FLAC to MP3 Online Free
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Convert studio-grade FLAC audio files to high-bitrate 320 kbps MP3. Perfect for listening to your
          lossless music collection on iPhone, Android, and car audio systems.
        </p>
      </div>

      <DirectAnswer
        question="What is the best way to convert FLAC to MP3 without quality degradation?"
        answer="To convert FLAC to MP3 with maximum audio fidelity, transcode to 320 kbps MP3 using the LAME encoder on BrowserConvert. FLAC provides bit-perfect studio recordings; converting to 320 kbps MP3 retains over 95% of perceptual nuance while shrinking file sizes by 75% for universal playback on iPhone, Android, and car stereos. BrowserConvert processes files 100% locally in your browser."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/flac,.flac"
          dropzoneHeadline="Drop your FLAC audio files here to convert to MP3"
          dropzoneSubheadline="Defaults to 320 kbps high-fidelity MP3 • 100% In-Browser Conversion"
        />
      </div>

      <AdSlot position="headerBanner" />

      {/* Comparison Table */}
      <ComparisonTable
        sourceName="FLAC (Lossless Studio)"
        targetName="MP3 (320kbps High-Bitrate)"
        rows={comparisonRows}
        caption="Technical Comparison: Lossless FLAC vs. 320 kbps MP3"
      />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          FLAC vs MP3: Studio Fidelity Meets Universal Portability
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          FLAC (Free Lossless Audio Codec) is the gold standard for audio archiving because it compresses audio like a ZIP file
          without discarding any musical frequencies. However, carrying an uncompressed or FLAC music library on a mobile
          device consumes dozens of gigabytes. Converting to MP3 produces lightweight files that play on virtually any software
          or hardware player created in the last 25 years.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">75% Smaller Files</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              A 40 MB FLAC file converts into an ~8 MB 320 kbps MP3 file.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">iOS & Apple Compatible</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Native Apple Music and iTunes sync MP3 effortlessly without requiring third-party players.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900">Preserved Dynamic Range</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              Encoded using genuine LAME algorithms for transparent acoustic response.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/wav-to-mp3" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            WAV to MP3 Converter
          </Link>
          <Link href="/audio-compressor" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Compressor
          </Link>
          <Link href="/format-guide" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Audio Format Guide
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Frequently Asked Questions About FLAC to MP3
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
