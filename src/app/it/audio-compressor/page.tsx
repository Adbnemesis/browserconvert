import React from "react";
import type { Metadata } from "next";
import { AudioCompressorTool } from "@/components/tools/AudioCompressorTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Minimize2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Comprimere Audio Online - Riduci Dimensioni File Audio Gratis",
  description:
    "Comprimi file audio online gratis. Riduci le dimensioni di MP3, WAV, FLAC e M4A fino all'85% preservando una grande chiarezza sonora. 100% privato nel tuo browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-compressor`,
    languages: getHreflangAlternates("/audio-compressor"),
  },
  openGraph: {
    title: "Comprimere Audio Online - Riduci Dimensioni File Audio Gratis",
    description: "Riduci le dimensioni dei tuoi file MP3, WAV e FLAC direttamente nel tuo browser.",
    url: `${siteConfig.url}/it/audio-compressor`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compressore Audio Online ",
    description: "Riduci le dimensioni di file audio direttamente nel tuo browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioCompressorPage() {
  const faqs = [
    {
      q: "Di quanto si possono ridurre le dimensioni di un file audio?",
      a: "I file non compressi come WAV o AIFF possono essere ridotti dell'85%-90%. Un file MP3 a 320 kbps può essere dimezzato passando a 128 o 192 kbps.",
    },
    {
      q: "C'è perdita udibile di qualità sonora?",
      a: "A 192 kbps la qualità audio rimane eccellente e indistinguibile nell'ascolto comune con cuffie o in auto.",
    },
    {
      q: "I miei file vengono caricati su qualche server?",
      a: "No. La compressione avviene totalmente in locale tramite WebAssembly direttamente all'interno del tuo browser.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="it"
        title="Comprimere Audio Online Gratis"
        description="Riduci le dimensioni di MP3, WAV e FLAC mantenendo un'ottima fedeltà sonora."
        url="/it/audio-compressor"
        breadcrumbs={[{ label: "Strumenti", href: "/it" }, { label: "Comprimi Audio", href: "/it/audio-compressor" }]}
        faqs={faqs}
        howTo={{
          name: "Come comprimere un file audio online",
          description: "Riduci qualsiasi traccia audio in tre semplici passaggi.",
          steps: [
            { name: "Seleziona il file", text: "Trascina il tuo file MP3, WAV o FLAC nel compressore." },
            { name: "Scegli la qualità", text: "Seleziona 128 kbps (file leggero) o 192 kbps (alta qualità)." },
            { name: "Comprimi e Scarica", text: "Fai clic su Comprimi e scarica il file ottimizzato." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Comprimi Audio", href: "/it/audio-compressor" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Minimize2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Ridurre peso audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Comprimere Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Riduci le dimensioni di MP3, WAV, FLAC e M4A preservando un audio pulito. 100% privato nel tuo browser.
        </p>
      </div>

      <DirectAnswer
        title="Ridurre le dimensioni dei file audio online senza perdite udibili"
        lead="BrowserConvert ottimizza i file audio direttamente nella memoria del tuo dispositivo."
        body="Risparmia spazio prezioso sul tuo smartphone o prepara file leggeri per l'invio via email senza dover condividere le tue tracce con server terzi."
        icon="sliders"
      />

      <AudioCompressorTool />

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
