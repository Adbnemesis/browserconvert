import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { Film, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertire MOV in MP3 Online Gratis - Estrarre Audio da Video MOV",
  description: "Converti QuickTime MOV in MP3 online gratis. Estrai l'audio da video iPhone e registrazioni Mac direttamente nel browser. 100% privato.",
  alternates: {
    canonical: `${siteConfig.url}/it/mov-to-mp3`,
    languages: getHreflangAlternates("/mov-to-mp3"),
  },
  openGraph: {
    title: "Convertire MOV in MP3 Online Gratis - Estrarre Audio da Video MOV",
    description: "Converti QuickTime MOV in MP3 online gratis. Estrai l'audio da video iPhone e registrazioni Mac direttamente nel browser. 100% privato.",
    url: `${siteConfig.url}/it/mov-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertire MOV in MP3 Online Gratis - Estrarre Audio da Video MOV",
    description: "Converti QuickTime MOV in MP3 online gratis. Estrai l'audio da video iPhone e registrazioni Mac direttamente nel browser. 100% privato.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function IT_mov_to_mp3_Page() {
  const faqs = [
    {
        "q": "Posso estrarre l'audio da video pesanti in 4K?",
        "a": "Sì. BrowserConvert estrae solo il flusso audio e ignora i dati video, elaborando file di grandi dimensioni in pochi secondi."
    },
    {
        "q": "Perché convertire MOV in MP3?",
        "a": "I video MOV possono pesare svariati gigabyte. Se ti serve solo l'audio, il formato MP3 riduce il peso a pochi megabyte."
    },
    {
        "q": "I miei video privati vengono caricati online?",
        "a": "No, i file video non lasciano mai il tuo browser e vengono elaborati localmente con WebAssembly."
    }
];

  const comparisonRows = [
    {
        "feature": "Contenuto",
        "sourceValue": "Video 4K/HD + Flusso audio",
        "targetValue": "Pura traccia audio MP3"
    },
    {
        "feature": "Dimensioni (5 min)",
        "sourceValue": "500 MB – 2 GB+",
        "targetValue": "5 MB – 10 MB (98% risparmio)"
    },
    {
        "feature": "Sicurezza",
        "sourceValue": "Zero upload verso server",
        "targetValue": "Elaborazione locale nel browser"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire MOV in MP3 Online Gratis - Estrarre Audio da Video MOV"
        description="Converti QuickTime MOV in MP3 online gratis. Estrai l'audio da video iPhone e registrazioni Mac direttamente nel browser. 100% privato."
        url="/it/mov-to-mp3"
        breadcrumbs={[
          { label: "Convertitore", href: "/it" },
          { label: "MOV a MP3", href: "/it/mov-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertitore", href: "/it" },
          { label: "MOV a MP3", href: "/it/mov-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Video in audio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire MOV in MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Estrai tracce audio MP3 ad alta fedeltà dai tuoi video iPhone QuickTime MOV. Riduci le dimensioni del 98% con massima riservatezza.
        </p>
      </div>

      <DirectAnswer
        question="Come estrarre l'audio da un video QuickTime MOV su iPhone o Mac?"
        answer="Trascina il video MOV su BrowserConvert. Il motore locale estrae la traccia sonora e la converte in MP3 a 320 kbps istantaneamente sul tuo dispositivo."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/quicktime,.mov"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Video MOV QuickTime"
        targetName="Audio MP3"
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
