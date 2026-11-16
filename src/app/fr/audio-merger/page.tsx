import React from "react";
import type { Metadata } from "next";
import { AudioMergerTool } from "@/components/tools/AudioMergerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Combine, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Fusionner Audio en Ligne - Assembler Chansons et Musiques Gratuit",
  description:
    "Fusionner des fichiers audio en ligne gratuitement. Combinez plusieurs pistes MP3, WAV et M4A en un seul morceau fluide. 100% privé dans votre navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-merger`,
    languages: getHreflangAlternates("/audio-merger"),
  },
  openGraph: {
    title: "Fusionner Audio en Ligne - Assembler Chansons et Musiques Gratuit",
    description: "Combinez plusieurs morceaux audio en un seul fichier directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/audio-merger`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusionner Audio en Ligne - BrowserConvert",
    description: "Assemblez vos fichiers audio gratuitement dans votre navigateur.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioMergerPage() {
  const faqs = [
    {
      q: "Combien de fichiers puis-je fusionner ensemble ?",
      a: "Il n'y a aucune limite artificielle. Vous pouvez assembler 2, 5 pistes ou plus pour créer un podcast complet ou un mix musical.",
    },
    {
      q: "Puis-je combiner des formats différents (ex. MP3 et WAV) ?",
      a: "Oui. Vous pouvez ajouter simultanément des fichiers MP3, WAV et M4A. Notre outil les uniformise dans un format de sortie unique.",
    },
    {
      q: "Mes enregistrements privés sont-ils téléversés ?",
      a: "Non. Tout s'exécute directement dans la mémoire de votre navigateur sans aucun serveur tiers.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Fusionner Audio en Ligne Gratuit"
        description="Combinez plusieurs pistes MP3 et WAV en un seul fichier directement dans votre navigateur."
        url="/fr/audio-merger"
        breadcrumbs={[{ label: "Outils", href: "/fr" }, { label: "Fusionner Audio", href: "/fr/audio-merger" }]}
        faqs={faqs}
        howTo={{
          name: "Comment fusionner des fichiers audio en ligne",
          description: "Assemblez vos pistes audio en trois étapes simples.",
          steps: [
            { name: "Ajoutez les fichiers", text: "Déposez deux ou plusieurs fichiers audio dans l'outil." },
            { name: "Organisez l'ordre", text: "Définissez l'ordre de lecture des morceaux." },
            { name: "Fusionnez & Téléchargez", text: "Cliquez sur Fusionner et téléchargez le morceau complet." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Fusionner Audio", href: "/fr/audio-merger" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Combine className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Assembler des pistes audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Fusionner Audio en Ligne Gratuit
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Combinez plusieurs pistes MP3, WAV et M4A en un seul fichier audio. 100% privé dans le navigateur.
        </p>
      </div>

      <DirectAnswer
        title="Assembler des fichiers audio en ligne sans téléversement"
        lead="BrowserConvert fusionne vos morceaux localement grâce à WebAssembly."
        body="Créez des playlists sans interruption, des podcasts ou assemblez vos enregistrements vocaux directement sur votre ordinateur sans perte de qualité."
        icon="sliders"
      />

      <AudioMergerTool />

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
