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
  title: "MOV in MP3 umwandeln - Kostenlos Audio aus QuickTime MOV extrahieren",
  description: "QuickTime MOV in MP3 kostenlos online umwandeln. Extrahieren Sie Audio aus iPhone-Videos und Mac-Bildschirmaufnahmen. 100% lokal im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/mov-to-mp3`,
    languages: getHreflangAlternates("/mov-to-mp3"),
  },
  openGraph: {
    title: "MOV in MP3 umwandeln - Kostenlos Audio aus QuickTime MOV extrahieren",
    description: "QuickTime MOV in MP3 kostenlos online umwandeln. Extrahieren Sie Audio aus iPhone-Videos und Mac-Bildschirmaufnahmen. 100% lokal im Browser.",
    url: `${siteConfig.url}/de/mov-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOV in MP3 umwandeln - Kostenlos Audio aus QuickTime MOV extrahieren",
    description: "QuickTime MOV in MP3 kostenlos online umwandeln. Extrahieren Sie Audio aus iPhone-Videos und Mac-Bildschirmaufnahmen. 100% lokal im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function DE_mov_to_mp3_Page() {
  const faqs = [
    {
        "q": "Kann ich 4K HDR MOV-Aufnahmen vom iPhone umwandeln?",
        "a": "Ja. BrowserConvert verarbeitet gezielt den Audiostrom und ignoriert die schwere Videospur. Die Extraktion dauert nur wenige Sekunden."
    },
    {
        "q": "Warum sollte man MOV in MP3 umwandeln?",
        "a": "Ein 5-minütiges iPhone-Video ist oft mehrere Gigabyte groß. Die extrahierte MP3-Audiospur ist nur wenige Megabyte groß und lässt sich leicht teilen."
    },
    {
        "q": "Werden meine persönlichen Videos hochgeladen?",
        "a": "Nein. Die Verarbeitung erfolgt zu 100% lokal auf Ihrem Rechner oder Smartphone über WebAssembly."
    }
];

  const comparisonRows = [
    {
        "feature": "Inhalt",
        "sourceValue": "Video (H.264/ProRes) + Audio",
        "targetValue": "Reine Audiospur (MP3)"
    },
    {
        "feature": "Dateigröße (5 Min)",
        "sourceValue": "500 MB – 2 GB+",
        "targetValue": "5 MB – 10 MB (98% kleiner)"
    },
    {
        "feature": "Verarbeitung",
        "sourceValue": "Kein Upload erforderlich",
        "targetValue": "100% lokales Demuxing"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="MOV in MP3 umwandeln - Kostenlos Audio aus QuickTime MOV extrahieren"
        description="QuickTime MOV in MP3 kostenlos online umwandeln. Extrahieren Sie Audio aus iPhone-Videos und Mac-Bildschirmaufnahmen. 100% lokal im Browser."
        url="/de/mov-to-mp3"
        breadcrumbs={[
          { label: "Konverter", href: "/de" },
          { label: "MOV in MP3", href: "/de/mov-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Konverter", href: "/de" },
          { label: "MOV in MP3", href: "/de/mov-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Video zu Audio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          MOV in MP3 kostenlos online umwandeln
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extrahieren Sie hochwertige MP3-Audiospuren aus iPhone QuickTime MOV-Videos. Sparen Sie 98% Dateigröße bei voller Privatsphäre.
        </p>
      </div>

      <DirectAnswer
        question="Kann man Ton aus großen 4K iPhone MOV-Videos extrahieren?"
        answer="Ja. BrowserConvert trennt den Audiostrom direkt auf Ihrem Gerät vom Videobild. Das spart enorme Zeit und Rechenleistung, ohne dass Gigabytes an Videodaten hochgeladen werden."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/quicktime,.mov"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="QuickTime MOV (Video)"
        targetName="MP3 Audio (Ton)"
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
