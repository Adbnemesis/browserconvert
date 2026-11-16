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
  title: "Convertir WAV en MP3 Gratuit en Ligne - Compresser Fichier WAV",
  description:
    "Convertir WAV en MP3 en ligne gratuitement. Compressez des fichiers audio WAV sans perte en MP3 haute qualité à 320 kbps. 100% privé dans votre navigateur, sans téléversement.",
  alternates: {
    canonical: `${siteConfig.url}/fr/wav-to-mp3`,
    languages: getHreflangAlternates("/wav-to-mp3"),
  },
  openGraph: {
    title: "Convertir WAV en MP3 Gratuit en Ligne - Compresser Fichier WAV",
    description: "Compressez vos fichiers audio WAV en MP3 haute fidélité à 320 kbps directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/wav-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertisseur WAV en MP3 - BrowserConvert",
    description: "Compressez vos pistes audio WAV en MP3 avec une confidentialité totale.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchWavToMp3Page() {
  const faqs = [
    {
      q: "Combien d'espace puis-je économiser en convertissant WAV en MP3 ?",
      a: "Un fichier WAV non compressé utilise environ 10 Mo par minute. En le convertissant en MP3 à 192 ou 320 kbps, la taille diminue de 85% à 90%, n'occupant plus que 1,4 à 2,4 Mo par minute.",
    },
    {
      q: "Entend-on une différence de qualité sonore entre WAV et MP3 à 320 kbps ?",
      a: "Lors d'écoutes à l'aveugle avec des casques ou enceintes standards, la quasi-totalité des auditeurs ne perçoit aucune différence entre un fichier WAV 16 bits et un MP3 à 320 kbps.",
    },
    {
      q: "Quel est le meilleur débit (bitrate) pour convertir WAV en MP3 ?",
      a: "Pour écouter sur mobile ou baladeur, 192 ou 256 kbps offre le ratio idéal taille/qualité. Pour les projets musicaux exigeants, privilégiez 320 kbps.",
    },
    {
      q: "L'outil fonctionne-t-il hors connexion ?",
      a: "Une fois la page chargée dans votre navigateur, WebAssembly exécute la conversion entièrement sur votre appareil sans aucune connexion réseau requise.",
    },
  ];

  const comparisonRows = [
    { feature: "Type de compression", sourceValue: "PCM Linéaire Non Compressé (Son brut studio)", targetValue: "Compression Psychoacoustique Perceptive" },
    { feature: "Débit binaire (Bitrate)", sourceValue: "1 411 kbps (16 bits / 44,1 kHz stéréo)", targetValue: "128 kbps à 320 kbps (Personnalisable)" },
    { feature: "Taille typique (4 min)", sourceValue: "Env. 40 Mo – 50 Mo", targetValue: "Env. 4 Mo – 9 Mo (~85% à 90% d'économie)" },
    { feature: "Utilisation recommandée", sourceValue: "Enregistrement studio, master, logiciels MAO", targetValue: "Smartphones, baladeurs, streaming" },
    { feature: "Compatibilité", sourceValue: "Excellente sur PC/Mac ; limitée sur certains mobiles", targetValue: "Universelle (100% des appareils audio)" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Convertir WAV en MP3 Gratuit en Ligne"
        description="Compressez vos fichiers audio WAV en MP3 de 320 kbps avec traitement 100% local dans votre navigateur."
        url="/fr/wav-to-mp3"
        breadcrumbs={[{ label: "Convertisseur", href: "/fr" }, { label: "WAV en MP3", href: "/fr/wav-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Comment convertir WAV en MP3 en ligne",
          description: "Convertissez vos enregistrements WAV en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier WAV", text: "Déposez vos enregistrements WAV dans le convertisseur." },
            { name: "Réglez le débit", text: "Choisissez 192 ou 320 kbps pour une fidélité sonore optimale." },
            { name: "Téléchargez le MP3", text: "Cliquez sur Tout Convertir et téléchargez vos fichiers MP3." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "WAV en MP3", href: "/fr/wav-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Compression Audio WAV vers MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir WAV en MP3 Gratuit en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Compressez vos fichiers WAV en MP3 haute clarté à 320 kbps ou 192 kbps. 100% privé, sans limites de taille ni inscription.
        </p>
      </div>

      <DirectAnswer
        title="Convertir WAV en MP3 dans le navigateur sans téléversement"
        lead="BrowserConvert compresse vos pistes WAV directement dans la mémoire de votre appareil."
        body="Grâce à WebAssembly et libmp3lame, l'encodage s'effectue à vitesse maximale sur votre processeur. Vos enregistrements vocaux et maquettes musicales restent totalement confidentiels."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/wav": [".wav"], "audio/x-wav": [".wav"] }}
        dropzoneHeadline="Déposez vos fichiers WAV ici"
        dropzoneSubheadline="ou cliquez pour sélectionner des fichiers WAV depuis votre appareil"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="WAV (Non compressé)"
        targetFormat="MP3 (Compressé)"
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
