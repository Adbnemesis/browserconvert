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
  title: "Convertir OGG en MP3 Gratuit en Ligne - Transformer Vorbis OGG en MP3",
  description: "Convertir OGG en MP3 en ligne gratuitement. Rendez vos fichiers OGG Vorbis compatibles avec iPhone et autoradios en les convertissant en MP3. 100% local.",
  alternates: {
    canonical: `${siteConfig.url}/fr/ogg-to-mp3`,
    languages: getHreflangAlternates("/ogg-to-mp3"),
  },
  openGraph: {
    title: "Convertir OGG en MP3 Gratuit en Ligne - Transformer Vorbis OGG en MP3",
    description: "Convertir OGG en MP3 en ligne gratuitement. Rendez vos fichiers OGG Vorbis compatibles avec iPhone et autoradios en les convertissant en MP3. 100% local.",
    url: `${siteConfig.url}/fr/ogg-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir OGG en MP3 Gratuit en Ligne - Transformer Vorbis OGG en MP3",
    description: "Convertir OGG en MP3 en ligne gratuitement. Rendez vos fichiers OGG Vorbis compatibles avec iPhone et autoradios en les convertissant en MP3. 100% local.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FR_ogg_to_mp3_Page() {
  const faqs = [
    {
        "q": "Pourquoi iOS ne lit-il pas les fichiers OGG ?",
        "a": "Apple ne prend pas en charge le codec Vorbis en natif. Le MP3 résout définitivement ce problème."
    },
    {
        "q": "Quelle qualité sonore est conservée ?",
        "a": "À 192 ou 320 kbps, le son MP3 est transparent et fidèle à la source OGG."
    },
    {
        "q": "Mes fichiers sont-ils envoyés sur un serveur ?",
        "a": "Non, la conversion se fait sur votre appareil."
    }
];

  const comparisonRows = [
    {
        "feature": "Compatibilité matérielle",
        "sourceValue": "Limitée hors Linux et jeux",
        "targetValue": "100% universelle"
    },
    {
        "feature": "Support Apple",
        "sourceValue": "Non supporté nativement",
        "targetValue": "Natif sur iOS, macOS et CarPlay"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir OGG en MP3 Gratuit en Ligne - Transformer Vorbis OGG en MP3"
        description="Convertir OGG en MP3 en ligne gratuitement. Rendez vos fichiers OGG Vorbis compatibles avec iPhone et autoradios en les convertissant en MP3. 100% local."
        url="/fr/ogg-to-mp3"
        breadcrumbs={[
          { label: "Convertisseur", href: "/fr" },
          { label: "OGG en MP3", href: "/fr/ogg-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertisseur", href: "/fr" },
          { label: "OGG en MP3", href: "/fr/ogg-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Vorbis en MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir OGG en MP3 Gratuit en Ligne
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Transformez vos fichiers OGG Vorbis en MP3 universels. Écoutez vos enregistrements sur n'importe quel appareil sans installer de lecteur tiers.
        </p>
      </div>

      <DirectAnswer
        question="Comment lire un fichier audio OGG sur un iPhone ou en voiture ?"
        answer="Convertissez le fichier OGG en MP3 avec BrowserConvert. Le MP3 assure une lecture universelle immédiate avec un traitement 100% local."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/ogg,audio/vorbis,.ogg"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OGG Vorbis"
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
