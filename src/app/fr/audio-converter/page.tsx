import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FileAudio, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertisseur Audio Gratuit en Ligne - MP3, WAV, M4A, FLAC",
  description:
    "Convertisseur audio gratuit en ligne. Convertissez entre MP3, WAV, M4A, FLAC, AAC, OGG et OPUS avec débits personnalisables. 100% privé dans votre navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-converter`,
    languages: getHreflangAlternates("/audio-converter"),
  },
  openGraph: {
    title: "Convertisseur Audio Gratuit en Ligne - MP3, WAV, M4A, FLAC",
    description: "Convertissez tous les formats audio directement dans votre navigateur avec une confidentialité totale.",
    url: `${siteConfig.url}/fr/audio-converter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertisseur Audio en Ligne ",
    description: "Convertissez vos fichiers audio directement dans votre navigateur sans téléversement vers des serveurs.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioConverterPage() {
  const faqs = [
    {
      q: "Quels formats audio puis-je convertir ?",
      a: "BrowserConvert prend en charge la conversion entre MP3, WAV, M4A, AAC, FLAC, OGG et OPUS. Vous pouvez également importer des formats tels que AIFF et WMA.",
    },
    {
      q: "Comment choisir le meilleur format audio ?",
      a: "Choisissez le MP3 pour une compatibilité universelle, le WAV pour le montage audio non compressé, le M4A pour les appareils Apple et le FLAC pour une qualité sans perte avec un fichier plus léger.",
    },
    {
      q: "Y a-t-il une perte de qualité lors de la conversion ?",
      a: "La conversion de formats sans perte (comme le WAV ou le FLAC) vers un MP3 à haut débit (320 kbps) conserve une clarté sonore quasi identique à l'original.",
    },
    {
      q: "Puis-je convertir plusieurs fichiers en même temps ?",
      a: "Oui. Vous pouvez ajouter autant de fichiers que nécessaire. Le convertisseur les traite de manière séquentielle et permet de les télécharger un par un ou dans une archive ZIP.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertisseur Audio Gratuit en Ligne"
        description="Convertissez entre MP3, WAV, M4A, FLAC, AAC et OGG en toute confidentialité grâce au traitement local."
        url="/fr/audio-converter"
        breadcrumbs={[{ label: "Accueil", href: "/fr" }, { label: "Convertisseur Audio", href: "/fr/audio-converter" }]}
        faqs={faqs}
        howTo={{
          name: "Comment convertir des fichiers audio en ligne",
          description: "Convertissez vos morceaux audio en trois étapes simples.",
          steps: [
            { name: "Sélectionnez les pistes", text: "Déposez vos musiques ou enregistrements audio dans le convertisseur." },
            { name: "Choisissez le format", text: "Sélectionnez MP3, WAV, M4A, FLAC, AAC ou OGG." },
            { name: "Téléchargez", text: "Cliquez sur Tout Convertir et téléchargez vos fichiers traités." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Convertisseur Audio", href: "/fr/audio-converter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Conversion Audio Universelle</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertisseur Audio Gratuit en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convertissez MP3, WAV, M4A, FLAC, AAC, OGG et OPUS directement dans votre navigateur. 100% privé, rapide et sans inscription.
        </p>
      </div>

      <DirectAnswer
        title="Traitement Audio 100% Confidentiel dans votre Navigateur"
        lead="BrowserConvert traite chaque piste audio localement dans la mémoire de votre appareil."
        body="Contrairement aux convertisseurs cloud traditionnels qui enregistrent vos fichiers sur des serveurs distants, notre moteur WebAssembly garantit qu'aucune donnée ne quitte votre ordinateur ou téléphone."
        icon="shield"
      />

      <Converter
        dropzoneHeadline="Déposez vos fichiers audio ici"
        dropzoneSubheadline="ou cliquez pour parcourir les fichiers de votre appareil"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Foire Aux Questions (FAQ)</h2>
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
