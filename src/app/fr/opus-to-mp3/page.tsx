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
  title: "Convertir OPUS en MP3 Gratuit en Ligne - Messages Vocaux WhatsApp en MP3",
  description: "Convertir OPUS en MP3 en ligne gratuitement. Transformez vos notes vocales WhatsApp et enregistrements Discord en MP3 universel. 100% privé.",
  alternates: {
    canonical: `${siteConfig.url}/fr/opus-to-mp3`,
    languages: getHreflangAlternates("/opus-to-mp3"),
  },
  openGraph: {
    title: "Convertir OPUS en MP3 Gratuit en Ligne - Messages Vocaux WhatsApp en MP3",
    description: "Convertir OPUS en MP3 en ligne gratuitement. Transformez vos notes vocales WhatsApp et enregistrements Discord en MP3 universel. 100% privé.",
    url: `${siteConfig.url}/fr/opus-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir OPUS en MP3 Gratuit en Ligne - Messages Vocaux WhatsApp en MP3",
    description: "Convertir OPUS en MP3 en ligne gratuitement. Transformez vos notes vocales WhatsApp et enregistrements Discord en MP3 universel. 100% privé.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FR_opus_to_mp3_Page() {
  const faqs = [
    {
        "q": "D'où viennent les fichiers .opus ?",
        "a": "WhatsApp, Telegram et Discord utilisent le codec OPUS pour les mémos vocaux grâce à son excellente compression de la parole."
    },
    {
        "q": "Pourquoi convertir en MP3 ?",
        "a": "De nombreux logiciels de montage vidéo ne reconnaissent pas l'OPUS. Le MP3 est compatible partout."
    },
    {
        "q": "Mes mémos vocaux personnels sont-ils protégés ?",
        "a": "Absolument. La conversion est effectuée à 100% dans la mémoire locale de votre navigateur."
    }
];

  const comparisonRows = [
    {
        "feature": "Source",
        "sourceValue": "WhatsApp, Discord, WebRTC",
        "targetValue": "Format audio universel"
    },
    {
        "feature": "Prise en charge montage",
        "sourceValue": "Souvent refusé par les logiciels",
        "targetValue": "100% reconnu dans tous les outils"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir OPUS en MP3 Gratuit en Ligne - Messages Vocaux WhatsApp en MP3"
        description="Convertir OPUS en MP3 en ligne gratuitement. Transformez vos notes vocales WhatsApp et enregistrements Discord en MP3 universel. 100% privé."
        url="/fr/opus-to-mp3"
        breadcrumbs={[
          { label: "Convertisseur", href: "/fr" },
          { label: "OPUS en MP3", href: "/fr/opus-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertisseur", href: "/fr" },
          { label: "OPUS en MP3", href: "/fr/opus-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Messages vocaux en MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir OPUS en MP3 Gratuit en Ligne
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convertissez vos notes vocales WhatsApp et flux Discord (.opus) en fichiers MP3 lisibles sur tous les appareils et logiciels de montage.
        </p>
      </div>

      <DirectAnswer
        question="Comment transformer un message vocal WhatsApp en MP3 ?"
        answer="Importez votre fichier .opus sur BrowserConvert. Le convertisseur local le transforme en MP3 haute compatibilité directement dans votre navigateur, sans aucun téléversement."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/opus,audio/ogg,.opus"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Note vocale OPUS"
        targetName="Fichier MP3"
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
