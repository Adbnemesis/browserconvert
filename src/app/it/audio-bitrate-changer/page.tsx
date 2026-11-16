import React from "react";
import type { Metadata } from "next";
import { AudioBitrateChangerTool } from "@/components/tools/AudioBitrateChangerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Sliders, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Modificare Bitrate Audio - Regola i kbps MP3 Gratis",
  description:
    "Modifica il bitrate di file audio online gratis. Ricodifica le tue tracce in 128k, 192k, 256k o 320 kbps. 100% privato nel tuo browser, nessun upload.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-bitrate-changer`,
    languages: getHreflangAlternates("/audio-bitrate-changer"),
  },
  openGraph: {
    title: "Modificare Bitrate Audio - Regola i kbps MP3 Gratis",
    description: "Ricodifica i file audio nei bitrate standard direttamente nel tuo browser.",
    url: `${siteConfig.url}/it/audio-bitrate-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modificare Bitrate Audio ",
    description: "Imposta il bitrate audio (kbps) direttamente nel tuo browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioBitrateChangerPage() {
  const faqs = [
    {
      q: "Quale bitrate dovrei scegliere per i miei file MP3?",
      a: "192 kbps offre il miglior equilibrio tra dimensioni contenute e qualità audio elevata. Per gli amanti della massima fedeltà consigliamo 320 kbps.",
    },
    {
      q: "I miei file audio vengono caricati su qualche server?",
      a: "No. La ricodifica del bitrate viene eseguita localmente tramite WebAssembly all'interno del tuo browser.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="it"
        title="Modificare Bitrate Audio Online Gratis"
        description="Regola il bitrate di file audio in 128k, 192k o 320 kbps direttamente nel tuo browser."
        url="/it/audio-bitrate-changer"
        breadcrumbs={[{ label: "Strumenti", href: "/it" }, { label: "Modifica Bitrate", href: "/it/audio-bitrate-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Come modificare il bitrate audio online",
          description: "Regola il bitrate in tre semplici passaggi.",
          steps: [
            { name: "Seleziona il file", text: "Trascina il tuo file audio nello strumento." },
            { name: "Scegli il bitrate", text: "Seleziona 128k, 192k, 256k o 320 kbps." },
            { name: "Scarica", text: "Fai clic su Cambia Bitrate e scarica il file ricodificato." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Modifica Bitrate", href: "/it/audio-bitrate-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Sliders className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Regolare i kbps</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Modificare Bitrate Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Ricodifica i file audio nei bitrate standard (128k, 192k, 256k, 320k). 100% privato nel browser.
        </p>
      </div>

      <DirectAnswer
        title="Regolare il bitrate audio nel browser senza upload"
        lead="BrowserConvert ricodifica le tracce audio localmente nella memoria del tuo dispositivo."
        body="Riduci le dimensioni per una facile condivisione o aumenta la qualità per impianti audio ad alta fedeltà."
        icon="sliders"
      />

      <AudioBitrateChangerTool />

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
