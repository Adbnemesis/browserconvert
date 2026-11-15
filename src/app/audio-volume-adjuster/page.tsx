import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioVolumeTool } from "@/components/tools/AudioVolumeTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Volume2, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Volume Adjuster Online - Boost or Soften Volume Free",
  description:
    "Adjust audio volume online for free. Boost quiet audio recordings or reduce overly loud audio tracks up to 200%. 100% private in-browser volume booster.",
  alternates: {
    canonical: `${siteConfig.url}/audio-volume-adjuster`,
  },
  openGraph: {
    title: "Audio Volume Adjuster Online - Boost or Soften Volume Free",
    description: "Boost quiet audio recordings or reduce loud tracks up to 200% directly in your browser with 100% privacy.",
    url: `${siteConfig.url}/audio-volume-adjuster`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Volume Adjuster Online - Boost or Soften Volume Free",
    description: "Boost quiet audio or normalize track volume with 100% client-side privacy.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AudioVolumeAdjusterPage() {
  const faqs = [
    {
      q: "Can I make quiet voice notes or meeting recordings louder?",
      a: "Yes. Many phone recordings and Zoom audio files are captured with low microphone gain. You can boost the volume up to 200% (+6 dB) to make speech clearly audible on phone speakers and laptops.",
    },
    {
      q: "Does boosting the volume cause distortion or clipping?",
      a: "MediaConvert applies internal gain staging with clipping safeguards. For maximum clarity, boost moderately (125% to 150%) so dynamic transients remain clean and unclipped.",
    },
    {
      q: "Can I soften or attenuate overly loud or piercing audio?",
      a: "Yes. You can decrease the gain down to 50% or 75% to bring harsh recordings down to comfortable listening levels.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Online Audio Volume Adjuster - Gain & Booster"
        description="Boost quiet audio or reduce loud tracks from 50% to 200% volume with 100% client-side privacy."
        url="/audio-volume-adjuster"
        breadcrumbs={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Volume Adjuster", href: "/audio-volume-adjuster" }]}
        faqs={faqs}
        howTo={{
          name: "How to Adjust Audio Volume Online",
          description: "Amplify or soften any audio recording in three quick steps.",
          steps: [
            {
              name: "Upload Audio File",
              text: "Select any MP3, WAV, or M4A file from your device.",
            },
            {
              name: "Set Target Gain Level",
              text: "Choose 50% (quieter), 125%, 150% (boost), or 200% (maximum amplification).",
            },
            {
              name: "Process & Save",
              text: "Click Adjust Volume to re-encode the audio gain locally and download your adjusted track.",
            },
          ],
        }}
      />

      <Breadcrumbs items={[{ label: "Audio Tools", href: "/audio-converter" }, { label: "Volume Adjuster", href: "/audio-volume-adjuster" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-200 mb-3">
          <Volume2 className="h-3.5 w-3.5" />
          <span>Gain & Volume Adjustment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Audio Volume Adjuster Online
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Boost quiet voice recordings, lectures, and music tracks up to 200%, or soften loud audio
          before sharing. Processed locally in your browser.
        </p>
      </div>

      <DirectAnswer
        question="How do I increase or decrease the volume of an audio file online for free?"
        answer="To adjust the volume of an audio file, upload your track to MediaConvert's Volume Adjuster below. Select your target volume level—from 50% (attenuate) up to 200% (amplify quiet speech)—and click Adjust Volume. MediaConvert uses client-side FFmpeg audio filters to adjust digital gain locally, guaranteeing 100% privacy with zero server uploads."
      />

      <AudioVolumeTool />

      <AdSlot position="headerBanner" />

      {/* Guide */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          How to Adjust Audio Volume Levels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">1. Upload Track</h3>
            <p>Select any quiet or loud audio file from your device.</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">2. Set Target Gain</h3>
            <p>Choose your desired percentage (50%, 75%, 125%, 150%, or 200%).</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900">3. Process & Save</h3>
            <p>Click &ldquo;Adjust Volume&rdquo; to process locally and download your normalized audio.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
          <Link href="/audio-speed-changer" className="rounded-lg bg-slate-50 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 border border-slate-200">
            Speed Changer
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
          Frequently Asked Questions About Volume Adjustment
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
