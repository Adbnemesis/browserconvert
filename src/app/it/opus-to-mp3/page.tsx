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
  title: "Convertire OPUS in MP3 Online Gratis - Note Vocali WhatsApp in MP3",
  description: "Converti OPUS in MP3 online gratis. Trasforma note vocali di WhatsApp e audio di Discord in formato MP3 universale. 100% privato nel browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/opus-to-mp3`,
    languages: getHreflangAlternates("/opus-to-mp3"),
  },
  openGraph: {
    title: "Convertire OPUS in MP3 Online Gratis - Note Vocali WhatsApp in MP3",
    description: "Converti OPUS in MP3 online gratis. Trasforma note vocali di WhatsApp e audio di Discord in formato MP3 universale. 100% privato nel browser.",
    url: `${siteConfig.url}/it/opus-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertire OPUS in MP3 Online Gratis - Note Vocali WhatsApp in MP3",
    description: "Converti OPUS in MP3 online gratis. Trasforma note vocali di WhatsApp e audio di Discord in formato MP3 universale. 100% privato nel browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function IT_opus_to_mp3_Page() {
  const faqs = [
    {
        "q": "Quali app creano file .opus?",
        "a": "WhatsApp, Telegram e Discord usano OPUS per i messaggi vocali e le chiamate vocali."
    },
    {
        "q": "Qual è il vantaggio di convertire in MP3?",
        "a": "Molti programmi di montaggio video rifiutano i file .opus. Il formato MP3 si integra ovunque senza problemi."
    },
    {
        "q": "I miei messaggi vocali rimangono privati?",
        "a": "Sì, nessun dato viene trasmesso a server esterni."
    }
];

  const comparisonRows = [
    {
        "feature": "Origine",
        "sourceValue": "WhatsApp, Discord, Skype",
        "targetValue": "Standard audio universale"
    },
    {
        "feature": "Uso nel montaggio video",
        "sourceValue": "Spesso non supportato",
        "targetValue": "Compatibilità istantanea in tutte le app"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire OPUS in MP3 Online Gratis - Note Vocali WhatsApp in MP3"
        description="Converti OPUS in MP3 online gratis. Trasforma note vocali di WhatsApp e audio di Discord in formato MP3 universale. 100% privato nel browser."
        url="/it/opus-to-mp3"
        breadcrumbs={[
          { label: "Convertitore", href: "/it" },
          { label: "OPUS a MP3", href: "/it/opus-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertitore", href: "/it" },
          { label: "OPUS a MP3", href: "/it/opus-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Note vocali a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire OPUS in MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converti note vocali WhatsApp e audio Discord (.opus) in file MP3 standard, pronti per essere ascoltati o montati nei tuoi video.
        </p>
      </div>

      <DirectAnswer
        question="Come convertire un audio WhatsApp .opus in file MP3?"
        answer="Trascina il file .opus su BrowserConvert e seleziona MP3. La conversione avviene in tempo reale nel browser, proteggendo la riservatezza delle tue registrazioni vocali."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/opus,audio/ogg,.opus"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Nota vocale OPUS"
        targetName="MP3 Standard"
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
