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
  title: "Convertire FLAC in MP3 Online Gratis - Audio ad Alta Fedeltà a 320kbps",
  description: "Converti FLAC in MP3 online gratis. Trasforma album musicali FLAC lossless in file MP3 a 320 kbps. 100% privato direttamente nel browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/flac-to-mp3`,
    languages: getHreflangAlternates("/flac-to-mp3"),
  },
  openGraph: {
    title: "Convertire FLAC in MP3 Online Gratis - Audio ad Alta Fedeltà a 320kbps",
    description: "Converti FLAC in MP3 online gratis. Trasforma album musicali FLAC lossless in file MP3 a 320 kbps. 100% privato direttamente nel browser.",
    url: `${siteConfig.url}/it/flac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertire FLAC in MP3 Online Gratis - Audio ad Alta Fedeltà a 320kbps",
    description: "Converti FLAC in MP3 online gratis. Trasforma album musicali FLAC lossless in file MP3 a 320 kbps. 100% privato direttamente nel browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function IT_flac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Perché convertire FLAC in MP3?",
        "a": "I file FLAC occupano molto spazio (30–50 MB per brano) e non sono compatibili con molti autoradio o dispositivi Apple nativi. MP3 a 320 kbps garantisce compatibilità totale."
    },
    {
        "q": "Quale bitrate impostare per la conversione?",
        "a": "Consigliamo 320 kbps o 256 kbps per preservare la dinamica e la spazialità della registrazione originale."
    },
    {
        "q": "I file vengono caricati online su server esterni?",
        "a": "No, tutto viene elaborato localmente tramite WebAssembly nel browser. I tuoi brani non lasciano mai il dispositivo."
    }
];

  const comparisonRows = [
    {
        "feature": "Compressione",
        "sourceValue": "Lossless (Senza perdita)",
        "targetValue": "Compressione psicoacustica"
    },
    {
        "feature": "Bitrate tipico",
        "sourceValue": "800–1411 kbps",
        "targetValue": "320 kbps o 192 kbps"
    },
    {
        "feature": "Dimensione album",
        "sourceValue": "350–600 MB",
        "targetValue": "80–120 MB (~75% risparmio)"
    },
    {
        "feature": "Compatibilità",
        "sourceValue": "Parziale su Apple/auto",
        "targetValue": "100% universale"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire FLAC in MP3 Online Gratis - Audio ad Alta Fedeltà a 320kbps"
        description="Converti FLAC in MP3 online gratis. Trasforma album musicali FLAC lossless in file MP3 a 320 kbps. 100% privato direttamente nel browser."
        url="/it/flac-to-mp3"
        breadcrumbs={[
          { label: "Convertitore", href: "/it" },
          { label: "FLAC a MP3", href: "/it/flac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertitore", href: "/it" },
          { label: "FLAC a MP3", href: "/it/flac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Lossless a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire FLAC in MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converti tracce FLAC di livello master in file MP3 ad alto bitrate (320 kbps). Perfetto per iPhone, Android e autoradio.
        </p>
      </div>

      <DirectAnswer
        question="Come convertire FLAC in MP3 preservando la qualità acustica?"
        answer="Seleziona MP3 a 320 kbps con BrowserConvert. Il formato FLAC garantisce fedeltà da studio; convertirlo a 320 kbps preserva oltre il 95% della qualità sonora riducendo le dimensioni del 75%."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/flac,.flac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="FLAC (Lossless)"
        targetName="MP3 (Universale 320k)"
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
