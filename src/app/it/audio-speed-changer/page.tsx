import React from "react";
import type { Metadata } from "next";
import { AudioSpeedTool } from "@/components/tools/AudioSpeedTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FastForward, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Cambiare Velocità Audio - Accelera o Rallenta Musica Online",
  description:
    "Modifica la velocità di riproduzione audio online gratis. Accelera o rallenta brani MP3 senza distorcere la tonalità. 100% privato nel tuo browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-speed-changer`,
    languages: getHreflangAlternates("/audio-speed-changer"),
  },
  openGraph: {
    title: "Cambiare Velocità Audio - Accelera o Rallenta Musica Online",
    description: "Modifica la velocità di riproduzione dei file audio direttamente nel tuo browser.",
    url: `${siteConfig.url}/it/audio-speed-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambiare Velocità Audio ",
    description: "Accelera o rallenta i tuoi file audio senza server remoti.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioSpeedChangerPage() {
  const faqs = [
    {
      q: "La tonalità (pitch) cambia quando accelero il brano?",
      a: "No. Il nostro algoritmo modifica la velocità di riproduzione preservando l'esatta intonazione (evitando qualsiasi effetto voce acuta artefatta).",
    },
    {
      q: "I miei file audio vengono caricati su qualche server?",
      a: "No. Tutti i calcoli avvengono localmente nella memoria del tuo browser.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="it"
        title="Cambiare Velocità Audio Online Gratis"
        description="Accelera o rallenta file audio MP3 direttamente nel tuo browser con elaborazione locale."
        url="/it/audio-speed-changer"
        breadcrumbs={[{ label: "Strumenti", href: "/it" }, { label: "Cambia Velocità", href: "/it/audio-speed-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Come modificare la velocità audio online",
          description: "Regola il tempo di riproduzione in tre semplici passaggi.",
          steps: [
            { name: "Seleziona il file", text: "Trascina il tuo file audio nello strumento." },
            { name: "Regola la velocità", text: "Imposta la velocità desiderata (es. 0.8x o 1.25x)." },
            { name: "Scarica", text: "Fai clic su Applica Velocità e scarica il file modificato." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Cambia Velocità", href: "/it/audio-speed-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FastForward className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Regolare il tempo audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Cambiare Velocità Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Accelera o rallenta la musica senza alterare l'intonazione. 100% privato nel tuo browser.
        </p>
      </div>

      <DirectAnswer
        title="Regolare il tempo audio online senza upload su server"
        lead="BrowserConvert adatta il tempo di riproduzione direttamente nella memoria del tuo dispositivo."
        body="Perfetto per velocizzare l'ascolto di lezioni registrate, audiolibri, o rallentare assoli musicali per trascriverne le note."
        icon="sliders"
      />

      <AudioSpeedTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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
