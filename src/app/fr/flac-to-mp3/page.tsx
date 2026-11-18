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
  title: "Convertir FLAC en MP3 Gratuit en Ligne - Audio Haute Fidélité 320kbps",
  description: "Convertir FLAC en MP3 en ligne gratuitement. Transformez vos albums FLAC sans perte en fichiers MP3 320 kbps haute fidélité. 100% privé.",
  alternates: {
    canonical: `${siteConfig.url}/fr/flac-to-mp3`,
    languages: getHreflangAlternates("/flac-to-mp3"),
  },
  openGraph: {
    title: "Convertir FLAC en MP3 Gratuit en Ligne - Audio Haute Fidélité 320kbps",
    description: "Convertir FLAC en MP3 en ligne gratuitement. Transformez vos albums FLAC sans perte en fichiers MP3 320 kbps haute fidélité. 100% privé.",
    url: `${siteConfig.url}/fr/flac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir FLAC en MP3 Gratuit en Ligne - Audio Haute Fidélité 320kbps",
    description: "Convertir FLAC en MP3 en ligne gratuitement. Transformez vos albums FLAC sans perte en fichiers MP3 320 kbps haute fidélité. 100% privé.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FR_flac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Pourquoi convertir du FLAC en MP3 ?",
        "a": "Les fichiers FLAC sont très volumineux (30 à 50 Mo par piste) et incompatibles avec de nombreux autoradios ou Apple Music. Le MP3 à 320 kbps économise 75% d'espace avec un son éclatant."
    },
    {
        "q": "Quel débit binaire choisir ?",
        "a": "Nous conseillons 320 kbps pour préserver au maximum la dynamique sonore de la source studio."
    },
    {
        "q": "Mes fichiers sont-ils envoyés sur un serveur distant ?",
        "a": "Non. Le traitement s'effectue localement dans votre navigateur via WebAssembly. Vos pistes restent sur votre appareil."
    }
];

  const comparisonRows = [
    {
        "feature": "Type de compression",
        "sourceValue": "Sans perte (Bit-perfect)",
        "targetValue": "Avec compression psychoacoustique"
    },
    {
        "feature": "Débit binaire",
        "sourceValue": "800–1411 kbps",
        "targetValue": "320 kbps ou 192 kbps"
    },
    {
        "feature": "Taille d'album moyenne",
        "sourceValue": "350–600 Mo",
        "targetValue": "80–120 Mo (~75% d'économie)"
    },
    {
        "feature": "Compatibilité",
        "sourceValue": "Limitée sur anciens appareils",
        "targetValue": "100% universelle"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir FLAC en MP3 Gratuit en Ligne - Audio Haute Fidélité 320kbps"
        description="Convertir FLAC en MP3 en ligne gratuitement. Transformez vos albums FLAC sans perte en fichiers MP3 320 kbps haute fidélité. 100% privé."
        url="/fr/flac-to-mp3"
        breadcrumbs={[
          { label: "Convertisseur", href: "/fr" },
          { label: "FLAC en MP3", href: "/fr/flac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertisseur", href: "/fr" },
          { label: "FLAC en MP3", href: "/fr/flac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Audio sans perte en MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir FLAC en MP3 Gratuit en Ligne
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convertissez vos fichiers audio FLAC de qualité studio en MP3 320 kbps universels. Idéal pour iPhone, Android et autoradios.
        </p>
      </div>

      <DirectAnswer
        question="Comment convertir un fichier FLAC en MP3 sans perte audible ?"
        answer="Utilisez un encodage MP3 à 320 kbps sur BrowserConvert. Le format FLAC conserve la qualité studio originale; le convertir à 320 kbps conserve plus de 95% des nuances tout en réduisant la taille de 75%."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/flac,.flac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="FLAC (Sans perte)"
        targetName="MP3 (Universel 320k)"
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
