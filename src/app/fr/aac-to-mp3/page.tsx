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
  title: "Convertir AAC en MP3 Gratuit en Ligne - Audio AAC en MP3 Universel",
  description: "Convertir AAC en MP3 en ligne gratuitement. Rendez vos fichiers AAC compatibles avec tous les autoradios et baladeurs MP3. 100% local.",
  alternates: {
    canonical: `${siteConfig.url}/fr/aac-to-mp3`,
    languages: getHreflangAlternates("/aac-to-mp3"),
  },
  openGraph: {
    title: "Convertir AAC en MP3 Gratuit en Ligne - Audio AAC en MP3 Universel",
    description: "Convertir AAC en MP3 en ligne gratuitement. Rendez vos fichiers AAC compatibles avec tous les autoradios et baladeurs MP3. 100% local.",
    url: `${siteConfig.url}/fr/aac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir AAC en MP3 Gratuit en Ligne - Audio AAC en MP3 Universel",
    description: "Convertir AAC en MP3 en ligne gratuitement. Rendez vos fichiers AAC compatibles avec tous les autoradios et baladeurs MP3. 100% local.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FR_aac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Quelle est la différence entre AAC et MP3 ?",
        "a": "Le codec AAC est plus récent et efficace, mais le MP3 reste la référence universelle reconnue partout."
    },
    {
        "q": "Quel débit binaire sélectionner ?",
        "a": "192 kbps ou 320 kbps offre une qualité transparente et chaleureuse."
    },
    {
        "q": "Mes données sont-elles envoyées en ligne ?",
        "a": "Non, le traitement s'opère à 100% localement dans votre navigateur."
    }
];

  const comparisonRows = [
    {
        "feature": "Efficacité d'encodage",
        "sourceValue": "Très élevée à faible débit",
        "targetValue": "Excellente à 192–320 kbps"
    },
    {
        "feature": "Compatibilité matérielle",
        "sourceValue": "Appareils récents",
        "targetValue": "100% universelle"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir AAC en MP3 Gratuit en Ligne - Audio AAC en MP3 Universel"
        description="Convertir AAC en MP3 en ligne gratuitement. Rendez vos fichiers AAC compatibles avec tous les autoradios et baladeurs MP3. 100% local."
        url="/fr/aac-to-mp3"
        breadcrumbs={[
          { label: "Convertisseur", href: "/fr" },
          { label: "AAC en MP3", href: "/fr/aac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertisseur", href: "/fr" },
          { label: "AAC en MP3", href: "/fr/aac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>AAC en MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir AAC en MP3 Gratuit en Ligne
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convertissez vos fichiers audio AAC en MP3 universel. Écoutez vos morceaux sur n'importe quel autoradio ou lecteur sans souci de compatibilité.
        </p>
      </div>

      <DirectAnswer
        question="Pourquoi convertir un fichier AAC en MP3 ?"
        answer="Le format AAC pur (.aac) n'est pas toujours reconnu par les anciens équipements audio ou autoradios USB. Le MP3 assure une compatibilité totale sans perte audible."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Audio AAC"
        targetName="MP3 Universel"
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
