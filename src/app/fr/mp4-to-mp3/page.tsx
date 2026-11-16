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
  title: "Convertir MP4 en MP3 Gratuit en Ligne - Extraire Audio de Vidéo",
  description:
    "Convertir MP4 en MP3 en ligne gratuitement. Extrayez le son de vos vidéos MP4 directement dans votre navigateur à 320 kbps. 100% privé, sans téléversement.",
  alternates: {
    canonical: `${siteConfig.url}/fr/mp4-to-mp3`,
    languages: getHreflangAlternates("/mp4-to-mp3"),
  },
  openGraph: {
    title: "Convertir MP4 en MP3 Gratuit en Ligne - Extraire Audio de Vidéo",
    description: "Convertissez des vidéos MP4 en MP3 haute qualité directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/mp4-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertisseur MP4 en MP3 ",
    description: "Extrayez le son MP3 de vidéos MP4 directement dans votre navigateur sans serveur distant.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchMp4ToMp3Page() {
  const faqs = [
    {
      q: "La conversion de MP4 en MP3 réduit-elle la qualité du son ?",
      a: "BrowserConvert extrait la piste audio et l'encode avec le moteur libmp3lame. À 192 ou 320 kbps, le son est pratiquement indiscernable de la piste originale de la vidéo.",
    },
    {
      q: "Ma vidéo MP4 est-elle envoyée sur un serveur ?",
      a: "Non. Tout le processus s'exécute localement dans votre navigateur via WebAssembly. Votre fichier vidéo reste sur votre appareil et ne transite jamais sur Internet.",
    },
    {
      q: "Puis-je extraire le son de vidéos 4K volumineuses ?",
      a: "Oui. Comme les images vidéo ne sont pas traitées et que seul le flux audio est extrait, la conversion est extrêmement rapide même pour les gros fichiers vidéo.",
    },
    {
      q: "Est-ce compatible avec les smartphones ?",
      a: "Oui. Vous pouvez convertir les vidéos MP4 enregistrées avec votre téléphone directement depuis Safari sur iPhone ou Chrome sur Android.",
    },
  ];

  const comparisonRows = [
    { feature: "Type de contenu", sourceValue: "Vidéo + Audio (Conteneur multimédia)", targetValue: "Audio uniquement (Piste audio compressée)" },
    { feature: "Taille typique (5 min)", sourceValue: "50 Mo – 200 Mo (selon la résolution)", targetValue: "5 Mo – 12 Mo (~90% d'économie d'espace)" },
    { feature: "Compatibilité", sourceValue: "Lecteurs vidéo, navigateurs, TV", targetValue: "Universelle (100% des appareils audio)" },
    { feature: "Utilisation idéale", sourceValue: "Visionner des films, tutoriels, clips", targetValue: "Écouter de la musique, podcasts, voix" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir MP4 en MP3 Gratuit en Ligne"
        description="Extrayez le son de vidéos MP4 directement dans votre navigateur à 320 kbps avec traitement 100% local."
        url="/fr/mp4-to-mp3"
        breadcrumbs={[{ label: "Convertisseur", href: "/fr" }, { label: "MP4 en MP3", href: "/fr/mp4-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Comment convertir MP4 en MP3 en ligne",
          description: "Extrayez le son de n'importe quelle vidéo MP4 en trois étapes simples.",
          steps: [
            { name: "Sélectionnez la vidéo", text: "Déposez votre vidéo MP4 dans le convertisseur." },
            { name: "Choisissez le débit MP3", text: "Sélectionnez 128, 192 ou 320 kbps pour la qualité de sortie." },
            { name: "Téléchargez le MP3", text: "Cliquez sur Convertir et téléchargez votre fichier MP3 instantanément." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "MP4 en MP3", href: "/fr/mp4-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Film className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Extraction Vidéo vers Audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir MP4 en MP3 Gratuit en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extrayez la bande-son de vos vidéos MP4 en haute fidélité (jusqu'à 320 kbps). Traitement 100% confidentiel dans votre navigateur.
        </p>
      </div>

      <DirectAnswer
        title="Comment extraire le son d'une vidéo MP4 sans l'envoyer sur Internet"
        lead="BrowserConvert sépare la piste audio de votre fichier MP4 directement dans votre navigateur."
        body="Grâce à WebAssembly, notre outil extrait l'audio sans jamais téléverser vos volumineux fichiers vidéo sur un serveur. Vous économisez du temps, de la bande passante et protégez intégralement votre vie privée."
        icon="film"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "video/mp4": [".mp4"], "video/*": [".mov", ".mkv", ".webm"] }}
        dropzoneHeadline="Déposez vos vidéos MP4 ici"
        dropzoneSubheadline="ou cliquez pour sélectionner des vidéos depuis votre appareil"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="MP4 (Vidéo)"
        targetFormat="MP3 (Audio)"
        rows={comparisonRows}
      />

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
