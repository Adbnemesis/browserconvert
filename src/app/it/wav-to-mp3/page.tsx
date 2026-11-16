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
  title: "Convertire WAV in MP3 Gratis Online - Comprimi File WAV",
  description:
    "Converti WAV in MP3 online gratis. Comprimi file audio WAV non compressi in MP3 di alta qualità a 320 kbps. 100% privato nel browser, senza caricamenti su server.",
  alternates: {
    canonical: `${siteConfig.url}/it/wav-to-mp3`,
    languages: getHreflangAlternates("/wav-to-mp3"),
  },
  openGraph: {
    title: "Convertire WAV in MP3 Gratis Online - Comprimi File WAV",
    description: "Comprimi registrazioni audio WAV in MP3 a 320 kbps direttamente nel tuo browser.",
    url: `${siteConfig.url}/it/wav-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertitore WAV in MP3 ",
    description: "Comprimi file WAV in MP3 con totale privacy lato client.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianWavToMp3Page() {
  const faqs = [
    {
      q: "Quanto spazio risparmio convertendo WAV in MP3?",
      a: "Un file WAV non compresso occupa circa 10 MB per minuto di riproduzione. Convertendolo in MP3 a 192 o 320 kbps la dimensione cala dell'85%-90%, occupando solo 1,4-2,4 MB al minuto.",
    },
    {
      q: "Si nota la differenza sonora tra WAV e MP3 a 320 kbps?",
      a: "In normali condizioni di ascolto con cuffie o altoparlanti consumer, è praticamente impossibile distinguere un MP3 a 320 kbps da una traccia WAV a 16 bit originale.",
    },
    {
      q: "Qual è il miglior bitrate per convertire da WAV a MP3?",
      a: "Per l'ascolto su smartphone 192 o 256 kbps offre il miglior equilibrio. Per progetti professionali o archivi musicali, consigliamo 320 kbps.",
    },
    {
      q: "Il convertitore funziona anche offline?",
      a: "Sì. Una volta caricata la pagina nel browser, la tecnologia WebAssembly converte l'audio direttamente nella memoria del tuo computer senza alcuna connessione server.",
    },
  ];

  const comparisonRows = [
    { feature: "Tipo di compressione", sourceValue: "PCM Lineare Non Compresso (Qualità master studio)", targetValue: "Compressione Psicoacustica Percettiva" },
    { feature: "Bitrate audio", sourceValue: "1.411 kbps (16 bit / 44.1 kHz stereo)", targetValue: "128 kbps a 320 kbps (Personalizzabile)" },
    { feature: "Dimensione (Traccia 4 min)", sourceValue: "Circa 40 MB – 50 MB", targetValue: "Circa 4 MB – 9 MB (~85% a 90% risparmio)" },
    { feature: "Uso consigliato", sourceValue: "Produzione in studio, DAW, mastering", targetValue: "Smartphone, impianti auto, streaming" },
    { feature: "Compatibilità", sourceValue: "Ottima su computer; limitata su alcuni player", targetValue: "Universale (100% dei dispositivi digitali)" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire WAV in MP3 Gratis Online"
        description="Comprimi file WAV in MP3 ad alta fedeltà a 320 kbps con elaborazione locale nel browser."
        url="/it/wav-to-mp3"
        breadcrumbs={[{ label: "Convertitore", href: "/it" }, { label: "WAV in MP3", href: "/it/wav-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Come convertire WAV in MP3 online",
          description: "Comprimi file WAV in MP3 in tre semplici passaggi.",
          steps: [
            { name: "Seleziona i file WAV", text: "Trascina le tue registrazioni WAV nel convertitore." },
            { name: "Imposta il bitrate", text: "Scegli 192 o 320 kbps per la massima fedeltà sonora." },
            { name: "Scarica l'MP3", text: "Fai clic su Converti Tutto e scarica i file convertiti." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "WAV in MP3", href: "/it/wav-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Compressione Audio WAV in MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire WAV in MP3 Gratis Online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Comprimi brani WAV in MP3 ad alta definizione a 320 kbps o 192 kbps. 100% privato nel browser, senza limiti o registrazione.
        </p>
      </div>

      <DirectAnswer
        title="Convertire WAV in MP3 nel browser senza caricare file"
        lead="BrowserConvert comprime le tracce WAV direttamente nella memoria del tuo dispositivo."
        body="Grazie all'efficienza di WebAssembly e libmp3lame, la compressione viene eseguita alla massima velocità sul processore del tuo computer. Le tue registrazioni audio rimangono sempre rigorosamente riservate."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/wav": [".wav"], "audio/x-wav": [".wav"] }}
        dropzoneHeadline="Trascina qui i tuoi file WAV"
        dropzoneSubheadline="oppure fai clic per selezionare i file WAV dal tuo dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="WAV (Non compresso)"
        targetFormat="MP3 (Compresso)"
        rows={comparisonRows}
      />

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
