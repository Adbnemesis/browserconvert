import React from "react";
import type { Metadata } from "next";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Scissors, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Couper Audio en Ligne - Rogner Musique et Chansons Gratuit",
  description:
    "Couper et rogner des fichiers audio en ligne gratuitement. Découpez MP3, WAV, M4A et FLAC avec précision à la milliseconde. 100% privé dans votre navigateur, sans téléversement.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-cutter`,
    languages: getHreflangAlternates("/audio-cutter"),
  },
  openGraph: {
    title: "Couper Audio en Ligne - Rogner Musique et Chansons Gratuit",
    description: "Découpez vos pistes audio directement dans votre navigateur avec aperçu en temps réel sans serveur distant.",
    url: `${siteConfig.url}/fr/audio-cutter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couper Audio en Ligne ",
    description: "Découpez vos fichiers audio directement dans votre navigateur.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioCutterPage() {
  const faqs = [
    {
      q: "Comment fonctionne le découpage audio sans serveur distant ?",
      a: "BrowserConvert découpe vos pistes directement dans la mémoire de votre navigateur. Lors de la sélection d'un fichier, le navigateur décode le flux audio et extrait les repères exacts localement sans aucun envoi vers le cloud.",
    },
    {
      q: "Puis-je découper de la musique depuis mon smartphone ?",
      a: "Oui. L'interface tactile est entièrement optimisée pour iPhone, iPad et tous les téléphones Android.",
    },
    {
      q: "Quels formats audio peuvent être découpés ?",
      a: "Vous pouvez rogner tous les formats courants tels que MP3, WAV, M4A, FLAC, OGG et AAC.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="fr"
        title="Couper Audio en Ligne Gratuit"
        description="Découpez des fichiers audio MP3, WAV et M4A avec une précision absolue directement dans votre navigateur."
        url="/fr/audio-cutter"
        breadcrumbs={[{ label: "Outils", href: "/fr" }, { label: "Couper Audio", href: "/fr/audio-cutter" }]}
        faqs={faqs}
        howTo={{
          name: "Comment couper un fichier audio en ligne",
          description: "Découpez votre audio en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier", text: "Déposez votre fichier audio MP3, WAV ou M4A." },
            { name: "Définissez début et fin", text: "Ajustez les curseurs ou indiquez les secondes précises." },
            { name: "Découpez & Téléchargez", text: "Cliquez sur Rogner et téléchargez votre extrait instantanément." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Couper Audio", href: "/fr/audio-cutter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Scissors className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Édition Audio dans le Navigateur</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Couper Audio en Ligne Gratuit
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Découpez vos pistes MP3, WAV, M4A et FLAC avec une précision à la milliseconde. 100% privé sur votre appareil.
        </p>
      </div>

      <DirectAnswer
        title="Découper des fichiers audio dans le navigateur sans téléversement"
        lead="BrowserConvert rogne les pistes audio localement via les API audio natives de votre navigateur."
        body="Contrairement aux éditeurs classiques qui imposent de téléverser vos fichiers sur des serveurs lents, cet outil fonctionne intégralement dans la mémoire vive de votre appareil. Vos enregistrements privés restent strictement protégés."
        icon="sliders"
      />

      <AudioCutterTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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
