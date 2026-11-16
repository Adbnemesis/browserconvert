import React from "react";
import type { Metadata } from "next";
import { AudioVolumeTool } from "@/components/tools/AudioVolumeTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Volume2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Regolare Volume Audio - Aumenta Volume MP3 Online Gratis",
  description:
    "Aumenta o diminuisci il volume di file audio online gratis. Amplifica registrazioni vocali basse o normalizza brani musicali. 100% privato nel tuo browser.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-volume-adjuster`,
    languages: getHreflangAlternates("/audio-volume-adjuster"),
  },
  openGraph: {
    title: "Regolare Volume Audio - Aumenta Volume MP3 Online Gratis",
    description: "Amplifica il volume di file audio direttamente nel tuo browser senza upload su server.",
    url: `${siteConfig.url}/it/audio-volume-adjuster`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regolare Volume Audio - BrowserConvert",
    description: "Aumenta il volume di file MP3 direttamente nel tuo browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioVolumeAdjusterPage() {
  const faqs = [
    {
      q: "Come posso rendere un file audio più forte?",
      a: "Seleziona il tuo file e imposta il cursore del volume sopra il 100% (es. 150% o 200%). Il nostro algoritmo amplifica il segnale sonoro in modo pulito e senza distorsioni sgradevoli.",
    },
    {
      q: "I miei file audio vengono caricati su qualche server?",
      a: "No. La regolazione del volume viene effettuata interamente all'interno del tuo browser tramite WebAssembly.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Regolare Volume Audio Online Gratis"
        description="Amplifica il volume di tracce audio deboli direttamente nel tuo browser con privacy totale."
        url="/it/audio-volume-adjuster"
        breadcrumbs={[{ label: "Strumenti", href: "/it" }, { label: "Regola Volume", href: "/it/audio-volume-adjuster" }]}
        faqs={faqs}
        howTo={{
          name: "Come regolare il volume audio online",
          description: "Aumenta o diminuisci il suono in tre semplici passaggi.",
          steps: [
            { name: "Seleziona il file", text: "Trascina il tuo file audio nello strumento." },
            { name: "Regola il volume", text: "Scegli la percentuale di amplificazione o attenuazione." },
            { name: "Salva", text: "Fai clic su Applica Volume e scarica il file ottimizzato." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Regola Volume", href: "/it/audio-volume-adjuster" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Volume2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Ottimizzazione volume sonoro</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Regolare Volume Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Amplifica brani registrati con volume basso o attenua tracce troppo forti. 100% privato nel browser.
        </p>
      </div>

      <DirectAnswer
        title="Aumentare il volume audio online senza perdere nitidezza"
        lead="BrowserConvert normalizza il segnale audio localmente nella memoria del tuo dispositivo."
        body="Rendi chiare e comprensibili registrazioni di lezioni, note vocali o riunioni senza dover mai inviare file a server di terzi."
        icon="sliders"
      />

      <AudioVolumeTool />

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
