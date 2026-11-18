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
  title: "Convertire OGG in MP3 Online Gratis - Vorbis OGG in MP3 Universale",
  description: "Converti OGG in MP3 online gratis. Trasforma file audio OGG Vorbis in MP3 compatibile con iPhone e autoradio. 100% locale nel browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/ogg-to-mp3`,
    languages: getHreflangAlternates("/ogg-to-mp3"),
  },
  openGraph: {
    title: "Convertire OGG in MP3 Online Gratis - Vorbis OGG in MP3 Universale",
    description: "Converti OGG in MP3 online gratis. Trasforma file audio OGG Vorbis in MP3 compatibile con iPhone e autoradio. 100% locale nel browser.",
    url: `${siteConfig.url}/it/ogg-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertire OGG in MP3 Online Gratis - Vorbis OGG in MP3 Universale",
    description: "Converti OGG in MP3 online gratis. Trasforma file audio OGG Vorbis in MP3 compatibile con iPhone e autoradio. 100% locale nel browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function IT_ogg_to_mp3_Page() {
  const faqs = [
    {
        "q": "Perché l'iPhone non apre i file OGG?",
        "a": "Apple non supporta nativamente il contenitore OGG Vorbis. La conversione in MP3 rende i file immediatamente fruibili."
    },
    {
        "q": "La qualità audio viene compromessa?",
        "a": "A 192 o 320 kbps la qualità risulta nitida e priva di artefatti udibili."
    },
    {
        "q": "I file audio vengono trasmessi su internet?",
        "a": "No, la conversione avviene esclusivamente sul tuo dispositivo."
    }
];

  const comparisonRows = [
    {
        "feature": "Compatibilità",
        "sourceValue": "Parziale su dispositivi consumer",
        "targetValue": "100% universale"
    },
    {
        "feature": "Supporto Apple",
        "sourceValue": "Non compatibile nativamente",
        "targetValue": "Nativo su iOS e macOS"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire OGG in MP3 Online Gratis - Vorbis OGG in MP3 Universale"
        description="Converti OGG in MP3 online gratis. Trasforma file audio OGG Vorbis in MP3 compatibile con iPhone e autoradio. 100% locale nel browser."
        url="/it/ogg-to-mp3"
        breadcrumbs={[
          { label: "Convertitore", href: "/it" },
          { label: "OGG a MP3", href: "/it/ogg-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertitore", href: "/it" },
          { label: "OGG a MP3", href: "/it/ogg-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Vorbis a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire OGG in MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converti tracce OGG Vorbis in formato MP3 universale per ascoltarle su qualsiasi smartphone o sistema audio senza lettori aggiuntivi.
        </p>
      </div>

      <DirectAnswer
        question="Come riprodurre tracce OGG su iPhone e autoradio?"
        answer="Converti il file OGG in MP3 con BrowserConvert. Poiché iOS e molti autoradio rifiutano i file OGG, il formato MP3 assicura compatibilità totale nel rispetto della tua privacy."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/ogg,audio/vorbis,.ogg"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OGG Vorbis"
        targetName="MP3 Universale"
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
