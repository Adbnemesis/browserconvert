import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FileAudio, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertitore Audio Online Gratis - MP3, WAV, M4A, FLAC",
  description:
    "Convertitore audio online gratis. Converti tra MP3, WAV, M4A, FLAC, AAC, OGG e OPUS con bitrate personalizzabili. 100% privato nel tuo browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-converter`,
    languages: getHreflangAlternates("/audio-converter"),
  },
  openGraph: {
    title: "Convertitore Audio Online Gratis - MP3, WAV, M4A, FLAC",
    description: "Converti tutti i formati audio direttamente nel tuo browser con privacy totale e senza caricamenti.",
    url: `${siteConfig.url}/it/audio-converter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertitore Audio Online ",
    description: "Converti file audio direttamente nel tuo browser senza caricare file su server.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioConverterPage() {
  const faqs = [
    {
      q: "Quali formati audio posso convertire?",
      a: "BrowserConvert supporta conversioni tra MP3, WAV, M4A, AAC, FLAC, OGG e OPUS. Puoi anche importare formati come AIFF e WMA.",
    },
    {
      q: "Come scelgo il formato audio migliore?",
      a: "Scegli MP3 per massima compatibilità con tutti i dispositivi, WAV per editing professionale senza compressione, M4A per dispositivi Apple e FLAC per qualità lossless con dimensioni ridotte.",
    },
    {
      q: "C'è perdita di qualità durante la conversione?",
      a: "Convertire formati lossless (come WAV o FLAC) in un MP3 ad alto bitrate (320 kbps) mantiene una fedeltà sonora praticamente indistinguibile dall'originale.",
    },
    {
      q: "Posso convertire più file contemporaneamente?",
      a: "Sì. Puoi caricare più tracce audio insieme. Il convertitore le elabora in sequenza e ti permette di scaricarle singolarmente o in un unico archivio ZIP.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertitore Audio Online Gratis"
        description="Converti tra MP3, WAV, M4A, FLAC, AAC e OGG con totale privacy ed elaborazione locale."
        url="/it/audio-converter"
        breadcrumbs={[{ label: "Home", href: "/it" }, { label: "Convertitore Audio", href: "/it/audio-converter" }]}
        faqs={faqs}
        howTo={{
          name: "Come convertire file audio online",
          description: "Converti qualsiasi brano audio in tre semplici passaggi.",
          steps: [
            { name: "Seleziona i file audio", text: "Trascina i tuoi file musicali o vocali nel convertitore." },
            { name: "Scegli il formato", text: "Seleziona MP3, WAV, M4A, FLAC, AAC o OGG." },
            { name: "Scarica", text: "Fai clic su Converti Tutto e scarica i file convertiti." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Convertitore Audio", href: "/it/audio-converter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Conversione Audio Universale</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertitore Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converti MP3, WAV, M4A, FLAC, AAC, OGG e OPUS direttamente nel tuo browser. 100% privato, veloce e senza registrazione.
        </p>
      </div>

      <DirectAnswer
        title="Elaborazione Audio 100% Riservata nel tuo Browser"
        lead="BrowserConvert elabora tutte le tracce audio nella memoria locale del tuo dispositivo."
        body="A differenza dei tradizionali convertitori cloud che caricano file su server remoti, il nostro motore WebAssembly assicura che nessun dato lasci il tuo computer o smartphone."
        icon="shield"
      />

      <Converter
        dropzoneHeadline="Trascina qui i tuoi file audio"
        dropzoneSubheadline="oppure fai clic per selezionare i file dal tuo dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
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
