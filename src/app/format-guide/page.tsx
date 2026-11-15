import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { SUPPORTED_OUTPUT_FORMATS } from "@/lib/config/formats";
import { FileAudio, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
  description:
    "Comprehensive audio format comparison guide. Learn the differences between MP3, WAV, FLAC, M4A, AAC, OGG, and OPUS for music, podcasts, and sound production.",
  alternates: {
    canonical: `${siteConfig.url}/format-guide`,
  },
  openGraph: {
    title: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Learn the differences between MP3, WAV, FLAC, M4A, AAC, OGG, and OPUS for audio quality, file size, and compatibility.",
    url: `${siteConfig.url}/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Technical codec and container comparison guide for audio producers, podcasters, and listeners.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  const formatsDetailed = [
    {
      id: "mp3",
      name: "MP3 (MPEG-1 Audio Layer III)",
      ext: ".mp3",
      type: "Lossy",
      bitrates: "64 kbps to 320 kbps",
      efficiency: "High",
      compatibility: "Universal (100% of devices)",
      bestFor: "Everyday music listening, podcasts, audiobook distribution, and universal file sharing.",
      pros: ["Works on every device, player, car stereo, and browser", "Adjustable compression from tiny speech files to high-fidelity music"],
      cons: ["Permanently discards inaudible frequencies", "Slightly less efficient than modern codecs like AAC or OPUS at low bitrates"],
      converterLink: "/audio-converter",
    },
    {
      id: "wav",
      name: "WAV (Waveform Audio File Format)",
      ext: ".wav",
      type: "Uncompressed PCM (Lossless)",
      bitrates: "1411 kbps (16-bit 44.1kHz stereo)",
      efficiency: "None (Raw uncompressed)",
      compatibility: "Universal (Standard on Windows, Mac, Linux)",
      bestFor: "DAW music production, audio mastering, sound design, and broadcast editing.",
      pros: ["Zero compression artifacts; bit-perfect reproduction of analog/master source", "Minimal CPU overhead for playback and audio rendering"],
      cons: ["Massive file sizes (approx. 10 MB per minute)", "Unsuitable for web streaming, email attachments, or mobile storage"],
      converterLink: "/mp3-to-wav",
    },
    {
      id: "flac",
      name: "FLAC (Free Lossless Audio Codec)",
      ext: ".flac",
      type: "Compressed Lossless",
      bitrates: "VBR (~700 - 1000 kbps)",
      efficiency: "Medium (50-60% of WAV size)",
      compatibility: "Wide (Android, Windows, macOS via VLC/third-party)",
      bestFor: "Audiophile music archiving, CD ripping, and high-resolution digital purchases.",
      pros: ["100% bit-perfect audio data preservation with reduced file footprint", "Open source and patent-free"],
      cons: ["Not natively supported by default Apple Music iOS apps without conversion", "Larger than lossy formats"],
      converterLink: "/flac-to-mp3",
    },
    {
      id: "m4a",
      name: "M4A (MPEG-4 Audio / AAC)",
      ext: ".m4a",
      type: "Lossy (typically AAC)",
      bitrates: "64 kbps to 320 kbps",
      efficiency: "Very High",
      compatibility: "High (Native on iOS, macOS, modern Android, Windows 10/11)",
      bestFor: "Apple ecosystem playback, iPhone Voice Memos, and iTunes music.",
      pros: ["Superior acoustic fidelity compared to MP3 at identical bitrates", "Standard format for Apple devices"],
      cons: ["Legacy hardware, older car stereos, and basic MP3 players cannot play M4A"],
      converterLink: "/m4a-to-mp3",
    },
    {
      id: "ogg",
      name: "OGG (Vorbis)",
      ext: ".ogg",
      type: "Lossy",
      bitrates: "64 kbps to 320 kbps",
      efficiency: "High",
      compatibility: "Medium (Web browsers, Linux, game engines, Android)",
      bestFor: "Video game sound design (Unity, Godot, Unreal), Spotify desktop client, open-source media.",
      pros: ["Patent-free and open source", "Smooth psychoacoustic response across diverse frequency ranges"],
      cons: ["iOS Safari and default Apple media players require third-party apps"],
      converterLink: "/ogg-to-mp3",
    },
    {
      id: "opus",
      name: "OPUS (Interactive Audio)",
      ext: ".opus",
      type: "Lossy",
      bitrates: "6 kbps to 510 kbps",
      efficiency: "State-of-the-Art (Highest)",
      compatibility: "Modern (WebRTC, Discord, WhatsApp, YouTube, modern browsers)",
      bestFor: "Real-time voice calls, Discord, WhatsApp voice notes, low-bandwidth internet streaming.",
      pros: ["Dynamic adaptation from ultra-low bandwidth speech to full-bandwidth stereo music", "Virtually zero algorithmic latency"],
      cons: ["Raw .opus standalone files are not supported by most legacy desktop DAWs"],
      converterLink: "/opus-to-mp3",
    },
    {
      id: "aac",
      name: "AAC (Advanced Audio Coding)",
      ext: ".aac",
      type: "Lossy",
      bitrates: "64 kbps to 320 kbps",
      efficiency: "Very High",
      compatibility: "High (YouTube, TV broadcast, smartphones, modern web)",
      bestFor: "Digital radio broadcasting, streaming video soundtracks, YouTube audio.",
      pros: ["Standard audio stream for MP4 video containers", "Transparent fidelity at 192-256 kbps"],
      cons: ["Standalone .aac files without container can have missing metadata"],
      converterLink: "/aac-to-mp3",
    },
  ];

  const guideFaqs = [
    {
      q: "Which audio format offers the highest sound quality?",
      a: "WAV and FLAC provide bit-perfect, lossless sound reproduction identical to original studio masters. WAV is uncompressed PCM, while FLAC uses lossless compression to cut file sizes in half without discarding any acoustic frequencies.",
    },
    {
      q: "What is the difference between lossy and lossless audio?",
      a: "Lossless formats (WAV, FLAC, ALAC) retain 100% of recorded audio samples. Lossy formats (MP3, AAC, OGG, OPUS) apply psychoacoustic algorithms to eliminate inaudible frequencies, reducing file size by 70% to 90% while sounding virtually identical on standard headphones and speakers.",
    },
    {
      q: "Which format is best for podcasts and voice notes?",
      a: "MP3 at 128 kbps stereo (or 96 kbps mono) is the global standard for podcasts because every podcast app, RSS aggregator, and mobile device plays it reliably without buffering.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        pageType="article"
        title="Audio Format Comparison & Codec Guide"
        description="Comprehensive technical guide comparing MP3, WAV, FLAC, M4A, AAC, OGG, and OPUS for audio quality, compression, and hardware compatibility."
        url="/format-guide"
        breadcrumbs={[{ label: "Format Guide", href: "/format-guide" }]}
        faqs={guideFaqs}
      />

      <Breadcrumbs items={[{ label: "Format Guide", href: "/format-guide" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Audio Format Comparison & Codec Guide
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Learn how audio compression works and choose the right format for your music, podcast,
          video project, or hardware player.
        </p>
      </div>

      <DirectAnswer
        question="How do I choose between MP3, WAV, FLAC, and M4A?"
        answer="Choose MP3 (192-320 kbps) for universal playback on all devices and car stereos. Choose WAV for zero-latency studio DAW editing and mastering where uncompressed quality is mandatory. Choose FLAC to archive high-resolution music with bit-perfect fidelity at half the file size of WAV. Choose M4A for Apple devices and podcasts with superior compression efficiency."
      />

      <AdSlot position="headerBanner" />

      {/* Format Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 font-bold text-slate-700">
              <th className="p-3.5">Format</th>
              <th className="p-3.5">Compression Type</th>
              <th className="p-3.5">Typical Bitrate</th>
              <th className="p-3.5">Relative File Size</th>
              <th className="p-3.5">Best Application</th>
              <th className="p-3.5 text-right">Convert</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {formatsDetailed.map((f) => (
              <tr key={f.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 font-bold text-slate-900">
                  {f.name.split(" ")[0]} <span className="font-mono text-slate-400">({f.ext})</span>
                </td>
                <td className="p-3.5 text-slate-600">{f.type}</td>
                <td className="p-3.5 text-slate-600 font-mono">{f.bitrates}</td>
                <td className="p-3.5 text-slate-600">{f.efficiency}</td>
                <td className="p-3.5 text-slate-600 max-w-xs">{f.bestFor}</td>
                <td className="p-3.5 text-right">
                  <Link
                    href={f.converterLink}
                    className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <span>Use</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Format Cards */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          In-Depth Codec Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formatsDetailed.map((f) => (
            <div key={f.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{f.name}</h3>
                  <span className="text-xs font-mono text-brand-600">{f.ext} • {f.type}</span>
                </div>
                <Link
                  href={f.converterLink}
                  className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100"
                >
                  Convert
                </Link>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>Best For:</strong> {f.bestFor}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="rounded-lg bg-emerald-50/60 p-3 border border-emerald-100">
                  <span className="font-bold text-emerald-900 block mb-1">Advantages</span>
                  <ul className="space-y-1 text-emerald-800 text-[11px] list-disc list-inside">
                    {f.pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-amber-50/60 p-3 border border-amber-100">
                  <span className="font-bold text-amber-900 block mb-1">Limitations</span>
                  <ul className="space-y-1 text-amber-800 text-[11px] list-disc list-inside">
                    {f.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 text-center mb-6">
          Audio Format FAQs
        </h2>
        {guideFaqs.map((faq) => (
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
