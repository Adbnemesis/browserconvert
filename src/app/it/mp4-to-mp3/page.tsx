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
  title: "Convertire MP4 in MP3 Gratis Online - Estrai Audio da Video",
  description:
    "Converti MP4 in MP3 online gratis. Estrai la traccia audio dai tuoi video MP4 direttamente nel tuo browser a 320 kbps. 100% privato, nessun upload su server.",
  alternates: {
    canonical: `${siteConfig.url}/it/mp4-to-mp3`,
    languages: getHreflangAlternates("/mp4-to-mp3"),
  },
  openGraph: {
    title: "Convertire MP4 in MP3 Gratis Online - Estrai Audio da Video",
    description: "Converti video MP4 in MP3 di alta qualità direttamente nel tuo browser con privacy totale.",
    url: `${siteConfig.url}/it/mp4-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertitore MP4 in MP3 ",
    description: "Estrai audio MP3 da video MP4 direttamente nel tuo browser senza server remoti.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianMp4ToMp3Page() {
  const faqs = [
    {
      q: "La conversione da MP4 a MP3 riduce la qualità sonora?",
      a: "BrowserConvert estrae la traccia audio e la codifica con libmp3lame. A 192 o 320 kbps il risultato è praticamente identico alla traccia originale del video.",
    },
    {
      q: "Il mio video MP4 viene caricato su qualche server?",
      a: "No. Tutto il processo avviene localmente nel browser tramite WebAssembly. Il file video non esce mai dal tuo dispositivo e non viaggia in rete.",
    },
    {
      q: "Posso estrarre audio da file video 4K pesanti?",
      a: "Sì. Poiché i fotogrammi video vengono ignorati ed è estratto solo il canale audio, la conversione è rapidissima anche per file di grandi dimensioni.",
    },
    {
      q: "Funziona anche su smartphone e tablet?",
      a: "Sì. Puoi convertire i video MP4 registrati con lo smartphone direttamente in Safari su iPhone o Chrome su Android.",
    },
  ];

  const comparisonRows = [
    { feature: "Tipo di contenuto", sourceValue: "Video + Audio (Contenitore multimediale)", targetValue: "Solo Audio (Traccia audio compressa)" },
    { feature: "Dimensione tipica (5 min)", sourceValue: "50 MB – 200 MB (secondo la risoluzione)", targetValue: "5 MB – 12 MB (~90% risparmio di spazio)" },
    { feature: "Compatibilità", sourceValue: "Player video, browser, Smart TV", targetValue: "Universale (100% dei dispositivi audio)" },
    { feature: "Uso ideale", sourceValue: "Guardare filmati, video tutorial, clip", targetValue: "Ascoltare musica, podcast, note vocali" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire MP4 in MP3 Gratis Online"
        description="Estrai tracce audio da video MP4 nel tuo browser a 320 kbps con elaborazione 100% locale."
        url="/it/mp4-to-mp3"
        breadcrumbs={[{ label: "Convertitore", href: "/it" }, { label: "MP4 in MP3", href: "/it/mp4-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Come convertire MP4 in MP3 online",
          description: "Estrai l'audio da qualsiasi video MP4 in tre semplici passaggi.",
          steps: [
            { name: "Seleziona il video", text: "Trascina il tuo video MP4 nel convertitore." },
            { name: "Scegli il bitrate", text: "Seleziona 128, 192 o 320 kbps come qualità di output." },
            { name: "Scarica l'MP3", text: "Fai clic su Converti e scarica il file audio convertito." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "MP4 in MP3", href: "/it/mp4-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Film className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Estrazione Video in Audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire MP4 in MP3 Gratis Online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Estrai l'audio dai tuoi video MP4 in alta qualità (fino a 320 kbps). Elaborazione 100% privata nel tuo browser.
        </p>
      </div>

      <DirectAnswer
        title="Come estrarre audio da MP4 senza caricarlo su Internet"
        lead="BrowserConvert separa la traccia sonora dal tuo video MP4 direttamente all'interno del tuo browser."
        body="Grazie alla potenza di WebAssembly, l'audio viene estratto senza dover caricare gigabyte di file video su server remoti. Risparmi tempo, giga di connessione e tuteli pienamente la tua privacy."
        icon="film"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "video/mp4": [".mp4"], "video/*": [".mov", ".mkv", ".webm"] }}
        dropzoneHeadline="Trascina qui i tuoi video MP4"
        dropzoneSubheadline="oppure fai clic per selezionare i video dal tuo dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="MP4 (Video)"
        targetFormat="MP3 (Audio)"
        rows={comparisonRows}
      />

      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Domande Frecuenti (FAQ)</h2>
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
