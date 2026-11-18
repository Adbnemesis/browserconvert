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
  title: "Convertire AAC in MP3 Online Gratis - Audio AAC in MP3 Universale",
  description: "Converti AAC in MP3 online gratis. Trasforma file AAC in MP3 compatibile con autoradio e lettori multimediali. 100% locale nel browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/aac-to-mp3`,
    languages: getHreflangAlternates("/aac-to-mp3"),
  },
  openGraph: {
    title: "Convertire AAC in MP3 Online Gratis - Audio AAC in MP3 Universale",
    description: "Converti AAC in MP3 online gratis. Trasforma file AAC in MP3 compatibile con autoradio e lettori multimediali. 100% locale nel browser.",
    url: `${siteConfig.url}/it/aac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertire AAC in MP3 Online Gratis - Audio AAC in MP3 Universale",
    description: "Converti AAC in MP3 online gratis. Trasforma file AAC in MP3 compatibile con autoradio e lettori multimediali. 100% locale nel browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function IT_aac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Cosa cambia tra formato AAC e MP3?",
        "a": "AAC garantisce una codifica più efficiente, ma l'MP3 è il formato più compatibile al mondo."
    },
    {
        "q": "Quale bitrate impostare per la conversione?",
        "a": "192 kbps o 320 kbps garantiscono un audio chiaro e dettagliato."
    },
    {
        "q": "I file vengono trasmessi su server remoti?",
        "a": "No, tutto viene convertito direttamente sul dispositivo."
    }
];

  const comparisonRows = [
    {
        "feature": "Efficienza di codifica",
        "sourceValue": "Molto efficiente",
        "targetValue": "Ottima a 192k–320 kbps"
    },
    {
        "feature": "Compatibilità",
        "sourceValue": "Limitata su vecchi lettori",
        "targetValue": "100% universale"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire AAC in MP3 Online Gratis - Audio AAC in MP3 Universale"
        description="Converti AAC in MP3 online gratis. Trasforma file AAC in MP3 compatibile con autoradio e lettori multimediali. 100% locale nel browser."
        url="/it/aac-to-mp3"
        breadcrumbs={[
          { label: "Convertitore", href: "/it" },
          { label: "AAC a MP3", href: "/it/aac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertitore", href: "/it" },
          { label: "AAC a MP3", href: "/it/aac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>AAC a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire AAC in MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converti file AAC in formato MP3 universale per garantire la massima compatibilità su vecchi autoradio, lettori USB e smartphone.
        </p>
      </div>

      <DirectAnswer
        question="Perché convertire file audio AAC in formato MP3?"
        answer="Molti lettori audio per auto e sistemi multimediali non leggono i file .aac grezzi. Convertire in MP3 rende la traccia riproducibile ovunque con privacy garantita."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Audio AAC"
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
