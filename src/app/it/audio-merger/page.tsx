import React from "react";
import type { Metadata } from "next";
import { AudioMergerTool } from "@/components/tools/AudioMergerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Combine, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Unire File Audio Online - Combina Brani e Canzoni Gratis",
  description:
    "Unisci file audio online gratis. Combina più tracce MP3, WAV e M4A in un unico file continuo. 100% privato nel tuo browser, nessun upload.",
  alternates: {
    canonical: `${siteConfig.url}/it/audio-merger`,
    languages: getHreflangAlternates("/audio-merger"),
  },
  openGraph: {
    title: "Unire File Audio Online - Combina Brani e Canzoni Gratis",
    description: "Combina più tracce audio in un unico brano direttamente nel tuo browser.",
    url: `${siteConfig.url}/it/audio-merger`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unire File Audio Online ",
    description: "Unisci file audio gratis direttamente nel tuo browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianAudioMergerPage() {
  const faqs = [
    {
      q: "Quanti file audio posso unire insieme?",
      a: "Non ci sono limiti prestabiliti. Puoi combinare 2, 5 o più tracce per creare un podcast unico o un mix musicale continuo.",
    },
    {
      q: "Posso combinare formati differenti (es. MP3 e WAV)?",
      a: "Sì. Puoi aggiungere simultaneamente file MP3, WAV e M4A. Il nostro strumento li ricodifica in un unico formato uniforme.",
    },
    {
      q: "I miei file audio vengono caricati su qualche server?",
      a: "No. Tutto il processo si svolge localmente nella memoria del tuo browser senza server esterni.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="it"
        title="Unire File Audio Online Gratis"
        description="Combina più tracce MP3 e WAV in un unico brano direttamente nel tuo browser."
        url="/it/audio-merger"
        breadcrumbs={[{ label: "Strumenti", href: "/it" }, { label: "Unisci Audio", href: "/it/audio-merger" }]}
        faqs={faqs}
        howTo={{
          name: "Come unire file audio online",
          description: "Unisci i tuoi brani in tre semplici passaggi.",
          steps: [
            { name: "Aggiungi i file", text: "Trascina due o più file audio nello strumento." },
            { name: "Ordina le tracce", text: "Disponi i brani nell'ordine di riproduzione desiderato." },
            { name: "Unisci e Scarica", text: "Fai clic su Unisci Tracce e scarica il file completo." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "Unisci Audio", href: "/it/audio-merger" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Combine className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Combinare tracce audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Unire File Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Combina più tracce MP3, WAV e M4A in un unico file sonoro continuo. 100% privato nel browser.
        </p>
      </div>

      <DirectAnswer
        title="Unire file audio online senza caricamenti su server"
        lead="BrowserConvert fonde i tuoi brani musicali localmente grazie a WebAssembly."
        body="Crea playlist senza pause, mix o unisci registrazioni vocali direttamente sul tuo computer senza perdite di qualità sonora."
        icon="sliders"
      />

      <AudioMergerTool />

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
