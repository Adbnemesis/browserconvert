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
  title: "Convertir MP3 en WAV Gratuit en Ligne - Décompresser Audio MP3 pour DAW",
  description: "Convertir MP3 en WAV en ligne gratuitement. Décompressez vos MP3 en fichiers WAV PCM 16 bits non compressés pour le montage audio. 100% privé.",
  alternates: {
    canonical: `${siteConfig.url}/fr/mp3-to-wav`,
    languages: getHreflangAlternates("/mp3-to-wav"),
  },
  openGraph: {
    title: "Convertir MP3 en WAV Gratuit en Ligne - Décompresser Audio MP3 pour DAW",
    description: "Convertir MP3 en WAV en ligne gratuitement. Décompressez vos MP3 en fichiers WAV PCM 16 bits non compressés pour le montage audio. 100% privé.",
    url: `${siteConfig.url}/fr/mp3-to-wav`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir MP3 en WAV Gratuit en Ligne - Décompresser Audio MP3 pour DAW",
    description: "Convertir MP3 en WAV en ligne gratuitement. Décompressez vos MP3 en fichiers WAV PCM 16 bits non compressés pour le montage audio. 100% privé.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FR_mp3_to_wav_Page() {
  const faqs = [
    {
        "q": "La conversion restaure-t-elle la qualité perdue du MP3 ?",
        "a": "Non, les fréquences supprimées lors de la création du MP3 ne peuvent être recréées, mais le WAV évite d'ajouter de nouvelles dégradations."
    },
    {
        "q": "Quel est le format WAV en sortie ?",
        "a": "BrowserConvert génère du WAV PCM 16 bits à 44,1 kHz universellement reconnu par les platines DJ et logiciels de mixage."
    },
    {
        "q": "Mes morceaux sont-ils envoyés sur internet ?",
        "a": "Non, l'opération s'effectue à 100% dans la mémoire locale de votre navigateur."
    }
];

  const comparisonRows = [
    {
        "feature": "Format de compression",
        "sourceValue": "Compressé avec perte",
        "targetValue": "PCM linéaire non compressé"
    },
    {
        "feature": "Utilisation",
        "sourceValue": "Écoute nomade",
        "targetValue": "Production, mixage et montage"
    },
    {
        "feature": "Charge CPU en montage",
        "sourceValue": "Décompression à chaque lecture",
        "targetValue": "Affichage immédiat de la forme d'onde"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir MP3 en WAV Gratuit en Ligne - Décompresser Audio MP3 pour DAW"
        description="Convertir MP3 en WAV en ligne gratuitement. Décompressez vos MP3 en fichiers WAV PCM 16 bits non compressés pour le montage audio. 100% privé."
        url="/fr/mp3-to-wav"
        breadcrumbs={[
          { label: "Convertisseur", href: "/fr" },
          { label: "MP3 en WAV", href: "/fr/mp3-to-wav" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertisseur", href: "/fr" },
          { label: "MP3 en WAV", href: "/fr/mp3-to-wav" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Décompression pour DAW</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir MP3 en WAV Gratuit en Ligne
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Décompressez vos MP3 en audio WAV PCM 16 bits non compressé. Idéal pour les logiciels de production musicale (DAW) et de montage vidéo.
        </p>
      </div>

      <DirectAnswer
        question="Pourquoi convertir un MP3 en WAV pour la production audio ?"
        answer="Les logiciels comme Logic Pro, FL Studio ou DaVinci Resolve manipulent le WAV PCM sans latence de décodage CPU et sans dégradation répétée lors des réencodages."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="wav"
          acceptTypes="audio/mpeg,audio/mp3,.mp3"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="MP3 (Compressé)"
        targetName="WAV (Non compressé)"
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
