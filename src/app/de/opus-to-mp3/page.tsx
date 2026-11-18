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
  title: "OPUS in MP3 umwandeln - Kostenlos WhatsApp-Sprachnachrichten in MP3",
  description: "OPUS in MP3 kostenlos online umwandeln. Wandeln Sie WhatsApp-Sprachmemos und Discord-Audio in universelles MP3 um. 100% lokal im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/opus-to-mp3`,
    languages: getHreflangAlternates("/opus-to-mp3"),
  },
  openGraph: {
    title: "OPUS in MP3 umwandeln - Kostenlos WhatsApp-Sprachnachrichten in MP3",
    description: "OPUS in MP3 kostenlos online umwandeln. Wandeln Sie WhatsApp-Sprachmemos und Discord-Audio in universelles MP3 um. 100% lokal im Browser.",
    url: `${siteConfig.url}/de/opus-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPUS in MP3 umwandeln - Kostenlos WhatsApp-Sprachnachrichten in MP3",
    description: "OPUS in MP3 kostenlos online umwandeln. Wandeln Sie WhatsApp-Sprachmemos und Discord-Audio in universelles MP3 um. 100% lokal im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function DE_opus_to_mp3_Page() {
  const faqs = [
    {
        "q": "Woher stammen .opus-Dateien?",
        "a": "WhatsApp, Telegram, Discord und Skype nutzen den OPUS-Codec für Sprachnachrichten und Anrufe wegen hoher Effizienz."
    },
    {
        "q": "Warum sollte man OPUS in MP3 umwandeln?",
        "a": "Viele Videoschnittprogramme und Audioplayer können .opus-Dateien nicht öffnen. MP3 lässt sich überall problemlos abspielen."
    },
    {
        "q": "Sind meine privaten Sprachmemos geschützt?",
        "a": "Ja. BrowserConvert verarbeitet alles lokal auf Ihrem Gerät; es findet kein Upload statt."
    }
];

  const comparisonRows = [
    {
        "feature": "Herkunft",
        "sourceValue": "WhatsApp, Discord, Telegram",
        "targetValue": "Universeller Audiostandard"
    },
    {
        "feature": "Kompatibilität in Schnittsoftware",
        "sourceValue": "Wird oft nicht erkannt",
        "targetValue": "100% kompatibel in Premiere, DaVinci etc."
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="OPUS in MP3 umwandeln - Kostenlos WhatsApp-Sprachnachrichten in MP3"
        description="OPUS in MP3 kostenlos online umwandeln. Wandeln Sie WhatsApp-Sprachmemos und Discord-Audio in universelles MP3 um. 100% lokal im Browser."
        url="/de/opus-to-mp3"
        breadcrumbs={[
          { label: "Konverter", href: "/de" },
          { label: "OPUS in MP3", href: "/de/opus-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Konverter", href: "/de" },
          { label: "OPUS in MP3", href: "/de/opus-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Sprachnachrichten zu MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          OPUS in MP3 kostenlos online umwandeln
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Konvertieren Sie WhatsApp-Sprachnachrichten und WebRTC-Aufnahmen (.opus) in Standard-MP3. Perfekt zum Teilen, Archivieren und Bearbeiten.
        </p>
      </div>

      <DirectAnswer
        question="Wie wandelt man WhatsApp-Sprachnachrichten (.opus) in MP3 um?"
        answer="Laden Sie die .opus-Datei auf BrowserConvert hoch und wählen Sie MP3. Die Datei wird direkt im Browser dekodiert und als universelles MP3 gespeichert, ohne dass persönliche Sprachaufnahmen hochgeladen werden."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/opus,audio/ogg,.opus"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OPUS Sprachnotiz"
        targetName="MP3 Audiodatei"
        rows={comparisonRows}
      />

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2 className="text-lg sm:text-xl font-medium text-slate-900 dark:text-zinc-100">
            FAQ
          </h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-200">
                {faq.q}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
