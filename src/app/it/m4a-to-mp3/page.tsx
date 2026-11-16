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
  title: "Convertire M4A in MP3 Gratis Online - Memo Vocali iPhone in MP3",
  description:
    "Converti M4A in MP3 online gratis. Trasforma i memo vocali Apple e i file iTunes M4A in MP3 universale. 100% privato nel tuo browser, nessun upload.",
  alternates: {
    canonical: `${siteConfig.url}/it/m4a-to-mp3`,
    languages: getHreflangAlternates("/m4a-to-mp3"),
  },
  openGraph: {
    title: "Convertire M4A in MP3 Gratis Online - Memo Vocali iPhone in MP3",
    description: "Converti i memo vocali Apple e i file M4A in MP3 universale direttamente nel tuo browser.",
    url: `${siteConfig.url}/it/m4a-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertitore M4A in MP3 ",
    description: "Converti i memo vocali Apple in MP3 con totale privacy lato client.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianM4aToMp3Page() {
  const faqs = [
    {
      q: "Perché l'iPhone salva i memo vocali in formato M4A?",
      a: "Apple utilizza il contenitore M4A con compressione AAC per garantire un'elevata chiarezza della voce a bitrate contenuti. Tuttavia, molti impianti stereo per auto o software per PC richiedono lo standard MP3.",
    },
    {
      q: "Si perde qualità convertendo da M4A a MP3?",
      a: "Impostando 192 o 320 kbps la differenza è impercettibile all'orecchio umano. Le tue registrazioni vocali mantengono la massima chiarezza.",
    },
    {
      q: "Le mie registrazioni vocali private vengono caricate su un server?",
      a: "No. L'elaborazione avviene al 100% nella memoria del tuo browser tramite WebAssembly. Le registrazioni vocali personali o lavorative non escono mai dal tuo dispositivo.",
    },
    {
      q: "Posso convertire più memo vocali contemporaneamente?",
      a: "Sì. Puoi caricare più registrazioni M4A contemporaneamente e scaricarle tutte insieme in un comodo file ZIP.",
    },
  ];

  const comparisonRows = [
    { feature: "Codec audio", sourceValue: "AAC (Advanced Audio Coding)", targetValue: "MPEG-1 Audio Layer III (MP3)" },
    { feature: "Ecosistema di riferimento", sourceValue: "Ottimizzato per Apple iOS, macOS, iTunes", targetValue: "Universale (Windows, Android, Linux, auto)" },
    { feature: "Compatibilità", sourceValue: "Dispositivi recenti e prodotti Apple", targetValue: "100% di tutti i dispositivi e lettori audio" },
    { feature: "Efficienza vocale", sourceValue: "Ottima per file di piccole dimensioni", targetValue: "Altissima fedeltà a 192k–320 kbps" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="it"
        title="Convertire M4A in MP3 Gratis Online"
        description="Trasforma i memo vocali di iPhone e i file audio Apple M4A in formato MP3 universale direttamente nel tuo browser."
        url="/it/m4a-to-mp3"
        breadcrumbs={[{ label: "Convertitore", href: "/it" }, { label: "M4A in MP3", href: "/it/m4a-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Come convertire M4A in MP3 online",
          description: "Converti i tuoi memo vocali in MP3 in tre semplici passaggi.",
          steps: [
            { name: "Seleziona i file M4A", text: "Trascina le tue registrazioni M4A nel convertitore." },
            { name: "Imposta il bitrate", text: "Scegli 192 o 320 kbps per la massima chiarezza vocale." },
            { name: "Scarica l'MP3", text: "Fai clic su Converti Tutto e scarica i file convertiti." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/it" },
          { label: "M4A in MP3", href: "/it/m4a-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Conversione M4A in MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertire M4A in MP3 Gratis Online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Trasforma i memo vocali Apple e file M4A in MP3. 100% privato, senza caricamenti su server e senza registrazione.
        </p>
      </div>

      <DirectAnswer
        title="Convertire i memo vocali Apple in MP3 senza cloud"
        lead="BrowserConvert converte i tuoi file vocali M4A direttamente nella memoria locale del tuo dispositivo."
        body="Grazie all'elaborazione client-side con WebAssembly, le tue registrazioni vocali e riunioni di lavoro non vengono mai inviate a server terzi. Sicuro, veloce e riservato."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/x-m4a": [".m4a"], "audio/m4a": [".m4a"], "audio/aac": [".aac"] }}
        dropzoneHeadline="Trascina qui i tuoi memo vocali M4A"
        dropzoneSubheadline="oppure fai clic per selezionare i file M4A dal tuo dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="M4A (Apple Audio)"
        targetFormat="MP3 (Universale)"
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
