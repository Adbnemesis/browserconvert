import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { FileAudio, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertire MP3 in WAV Online Gratis - Decomprimere Audio per DAW",
  description: "Converti MP3 in WAV online gratis. Decomprimi file audio MP3 in WAV PCM non compresso a 16 bit per produzione musicale e DJ. 100% locale.",
  alternates: {
    canonical: `${siteConfig.url}/it/mp3-to-wav`,
    languages: getHreflangAlternates("/mp3-to-wav"),
  },
  openGraph: {
    title: "Convertire MP3 in WAV Online Gratis - Decomprimere Audio per DAW",
    description: "Converti MP3 in WAV online gratis. Decomprimi file audio MP3 in WAV PCM non compresso a 16 bit per produzione musicale e DJ. 100% locale.",
    url: `${siteConfig.url}/it/mp3-to-wav`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertire MP3 in WAV Online Gratis - Decomprimere Audio per DAW",
    description: "Converti MP3 in WAV online gratis. Decomprimi file audio MP3 in WAV PCM non compresso a 16 bit per produzione musicale e DJ. 100% locale.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function IT_mp3_to_wav_Page() {
  const faqs = [
    {
        "q": "La conversione restituisce la qualità originaria prima dell'MP3?",
        "a": "I dati scartati dalla compressione MP3 originale non possono essere recuperati, ma il formato WAV facilita l'editing senza ulteriori perdite."
    },
    {
        "q": "Quali sono le caratteristiche del WAV generato?",
        "a": "BrowserConvert esporta file WAV PCM a 16 bit e 44.1 kHz, compatibili con tutti i software professionali."
    },
    {
        "q": "I file vengono caricati su server remoti?",
        "a": "No, la conversione viene elaborata al 100% in locale nel browser."
    }
];

  const comparisonRows = [
    {
        "feature": "Codifica audio",
        "sourceValue": "Compressione percettiva",
        "targetValue": "PCM lineare non compresso"
    },
    {
        "feature": "Destinazione d'uso",
        "sourceValue": "Ascolto su smartphone e web",
        "targetValue": "DAW, mixer e montaggio"
    },
    {
        "feature": "Prestazioni in editing",
        "sourceValue": "Richiede decodifica continua",
        "targetValue": "Editing immediato a latenza zero"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire MP3 in WAV Online Gratis - Decomprimere Audio per DAW"
        description="Converti MP3 in WAV online gratis. Decomprimi file audio MP3 in WAV PCM non compresso a 16 bit per produzione musicale e DJ. 100% locale."
        url="/it/mp3-to-wav"
        breadcrumbs={[
          { label: "Convertitore", href: "/it" },
          { label: "MP3 a WAV", href: "/it/mp3-to-wav" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertitore", href: "/it" },
          { label: "MP3 a WAV", href: "/it/mp3-to-wav" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Decompressione per DAW</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire MP3 in WAV Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Decomprimi file MP3 in WAV PCM a 16 bit non compresso. Ideale per software DAW, console per DJ e montaggio video.
        </p>
      </div>

      <DirectAnswer
        question="Qual è il vantaggio di convertire file MP3 in formato WAV?"
        answer="Il formato WAV non compresso evita il sovraccarico della CPU durante l'editing in tempo reale e previene ulteriori perdite di qualità durante le sessioni di mixaggio."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="wav"
          acceptTypes="audio/mpeg,audio/mp3,.mp3"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="MP3 (Compresso)"
        targetName="WAV (Non compresso)"
        rows={comparisonRows}
      />

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2 className="text-lg sm:text-xl font-medium text-slate-900 dark:text-zinc-100">
            FAQ
          </h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-200">
                {faq.q}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
