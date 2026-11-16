import React from "react";
import type { Metadata } from "next";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Scissors, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Tagliare Audio Online - Taglia Canzoni e Musica Gratis",
  description:
    "Taglia audio online gratis. Ritaglia tracce MP3, WAV, M4A e FLAC con precisione al millisecondo. 100% privato nel tuo browser, nessun upload su server.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-cutter`,
    languages: getHreflangAlternates("/audio-cutter"),
  },
  openGraph: {
    title: "Tagliare Audio Online - Taglia Canzoni e Musica Gratis",
    description: "Ritaglia file audio direttamente nel tuo browser con anteprima in tempo reale senza server remoti.",
    url: `${siteConfig.url}/it/audio-cutter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tagliare Audio Online - BrowserConvert",
    description: "Ritaglia tracce audio direttamente nel tuo browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioCutterPage() {
  const faqs = [
    {
      q: "Come funziona il taglio audio senza caricare file su un server?",
      a: "BrowserConvert ritaglia l'audio direttamente nella memoria del tuo browser. Quando selezioni un file, il browser decodifica la traccia ed estrae l'intervallo esatto localmente senza alcun invio al cloud.",
    },
    {
      q: "Posso tagliare file musicali da smartphone?",
      a: "Sì. L'interfaccia è pienamente ottimizzata per touchscreen ed è compatibile con iPhone, iPad e dispositivi Android.",
    },
    {
      q: "Quali formati audio posso tagliare?",
      a: "Puoi ritagliare qualsiasi file MP3, WAV, M4A, FLAC, OGG o AAC con esportazione rapida e senza perdita di qualità.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Tagliare Audio Online Gratis"
        description="Ritaglia file MP3, WAV e M4A con precisione millimetrica direttamente nel tuo browser."
        url="/it/audio-cutter"
        breadcrumbs={[{ label: "Strumenti", href: "/it" }, { label: "Taglia Audio", href: "/it/audio-cutter" }]}
        faqs={faqs}
        howTo={{
          name: "Come tagliare un file audio online",
          description: "Ritaglia il tuo audio in tre semplici passaggi.",
          steps: [
            { name: "Seleziona il file", text: "Trascina il tuo file audio MP3, WAV o M4A nello strumento." },
            { name: "Imposta inizio e fine", text: "Regola i cursori o inserisci i secondi esatti." },
            { name: "Ritaglia e Scarica", text: "Fai clic su Ritaglia e scarica il brano modificato." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Taglia Audio", href: "/it/audio-cutter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Scissors className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Editing Audio nel Browser</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Tagliare Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Ritaglia tracce MP3, WAV, M4A e FLAC con precisione al millisecondo. 100% privato sul tuo dispositivo.
        </p>
      </div>

      <DirectAnswer
        title="Tagliare file audio nel browser senza caricamenti"
        lead="BrowserConvert ritaglia le tracce audio localmente utilizzando le API audio native del browser."
        body="A differenza di altri software online che richiedono di caricare file su server remoti, questo strumento lavora al 100% nella memoria del tuo dispositivo. Le tue registrazioni private rimangono rigorosamente protette."
        icon="sliders"
      />

      <AudioCutterTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Domande Frequenti (FAQ)</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121215] p-5 shadow-xs">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{faq.q}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
