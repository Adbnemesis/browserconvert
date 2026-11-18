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
  title: "AAC in MP3 umwandeln - Kostenlos AAC in universelles MP3 konvertieren",
  description: "AAC in MP3 kostenlos online umwandeln. Wandeln Sie reine AAC-Audiodateien in universell abspielbare MP3s um. 100% lokal im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/aac-to-mp3`,
    languages: getHreflangAlternates("/aac-to-mp3"),
  },
  openGraph: {
    title: "AAC in MP3 umwandeln - Kostenlos AAC in universelles MP3 konvertieren",
    description: "AAC in MP3 kostenlos online umwandeln. Wandeln Sie reine AAC-Audiodateien in universell abspielbare MP3s um. 100% lokal im Browser.",
    url: `${siteConfig.url}/de/aac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC in MP3 umwandeln - Kostenlos AAC in universelles MP3 konvertieren",
    description: "AAC in MP3 kostenlos online umwandeln. Wandeln Sie reine AAC-Audiodateien in universell abspielbare MP3s um. 100% lokal im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function DE_aac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Worin liegt der Unterschied zwischen AAC und MP3?",
        "a": "AAC ist moderner und komprimiert effizienter, während MP3 der weltweit am weitesten verbreitete Standard mit 100% Geräteunterstützung ist."
    },
    {
        "q": "Welche Bitrate empfiehlt sich?",
        "a": "Wir empfehlen 192 oder 320 kbps für optimale Klarheit."
    },
    {
        "q": "Werden Dateien auf einen Server hochgeladen?",
        "a": "Nein, alles läuft lokal im Browser über WebAssembly."
    }
];

  const comparisonRows = [
    {
        "feature": "Codec-Effizienz",
        "sourceValue": "Sehr hoch bei kleiner Bitrate",
        "targetValue": "Hervorragend bei 192k–320 kbps"
    },
    {
        "feature": "Gerätekompatibilität",
        "sourceValue": "Moderne Smartphones/PCs",
        "targetValue": "100% aller Player, Autoradios und PCs"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="AAC in MP3 umwandeln - Kostenlos AAC in universelles MP3 konvertieren"
        description="AAC in MP3 kostenlos online umwandeln. Wandeln Sie reine AAC-Audiodateien in universell abspielbare MP3s um. 100% lokal im Browser."
        url="/de/aac-to-mp3"
        breadcrumbs={[
          { label: "Konverter", href: "/de" },
          { label: "AAC in MP3", href: "/de/aac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Konverter", href: "/de" },
          { label: "AAC in MP3", href: "/de/aac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>AAC zu MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          AAC in MP3 kostenlos online umwandeln
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Wandeln Sie AAC-Audiodateien in universelles MP3 um. Hören Sie Ihre Musik auf allen MP3-Playern, Autoradios und Computern.
        </p>
      </div>

      <DirectAnswer
        question="Warum sollte man AAC in MP3 umwandeln?"
        answer="Obwohl AAC eine hohe Effizienz bietet, können ältere Autoradios, USB-Player und portable Audiogeräte reine .aac-Dateien oft nicht lesen. Die Konvertierung in MP3 garantiert 100% Kompatibilität."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="AAC Audio"
        targetName="MP3 Universal"
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
