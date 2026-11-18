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
  title: "Convertir MOV en MP3 Gratuit en Ligne - Extraire le Son des Vidéos MOV",
  description: "Convertir QuickTime MOV en MP3 en ligne gratuitement. Extrayez la bande-son de vos vidéos iPhone et enregistrements Mac. 100% confidentiel.",
  alternates: {
    canonical: `${siteConfig.url}/fr/mov-to-mp3`,
    languages: getHreflangAlternates("/mov-to-mp3"),
  },
  openGraph: {
    title: "Convertir MOV en MP3 Gratuit en Ligne - Extraire le Son des Vidéos MOV",
    description: "Convertir QuickTime MOV en MP3 en ligne gratuitement. Extrayez la bande-son de vos vidéos iPhone et enregistrements Mac. 100% confidentiel.",
    url: `${siteConfig.url}/fr/mov-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir MOV en MP3 Gratuit en Ligne - Extraire le Son des Vidéos MOV",
    description: "Convertir QuickTime MOV en MP3 en ligne gratuitement. Extrayez la bande-son de vos vidéos iPhone et enregistrements Mac. 100% confidentiel.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FR_mov_to_mp3_Page() {
  const faqs = [
    {
        "q": "Puis-je convertir des vidéos 4K issues d'un iPhone ?",
        "a": "Oui. BrowserConvert ne traite que le flux audio et ignore le flux vidéo lourd, permettant une extraction ultra-rapide."
    },
    {
        "q": "Pourquoi extraire le son en MP3 ?",
        "a": "Les vidéos MOV pèsent souvent plusieurs gigaoctets. L'extraction en MP3 réduit la taille à quelques mégaoctets faciles à partager."
    },
    {
        "q": "Mes vidéos personnelles sont-elles protégées ?",
        "a": "Totalement. La conversion se fait dans la mémoire de votre navigateur via WebAssembly, sans aucun transfert réseau."
    }
];

  const comparisonRows = [
    {
        "feature": "Contenu",
        "sourceValue": "Vidéo HD/4K + Son",
        "targetValue": "Piste audio MP3 seule"
    },
    {
        "feature": "Taille (5 min)",
        "sourceValue": "500 Mo – 2 Go+",
        "targetValue": "5 Mo – 10 Mo (98% plus léger)"
    },
    {
        "feature": "Confidentialité",
        "sourceValue": "Aucun transfert distant",
        "targetValue": "Traitement 100% sur appareil"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="fr"
        title="Convertir MOV en MP3 Gratuit en Ligne - Extraire le Son des Vidéos MOV"
        description="Convertir QuickTime MOV en MP3 en ligne gratuitement. Extrayez la bande-son de vos vidéos iPhone et enregistrements Mac. 100% confidentiel."
        url="/fr/mov-to-mp3"
        breadcrumbs={[
          { label: "Convertisseur", href: "/fr" },
          { label: "MOV en MP3", href: "/fr/mov-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertisseur", href: "/fr" },
          { label: "MOV en MP3", href: "/fr/mov-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Vidéo en audio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir MOV en MP3 Gratuit en Ligne
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extrayez le son de vos vidéos iPhone QuickTime MOV directement en MP3 haute qualité. Économisez 98% d'espace sans aucun envoi.
        </p>
      </div>

      <DirectAnswer
        question="Comment extraire le son d'une vidéo MOV sans télécharger d'application ?"
        answer="Déposez votre vidéo MOV sur BrowserConvert. Le navigateur extrait immédiatement la piste sonore et la convertit en MP3 sans envoyer le moindre octet sur internet."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/quicktime,.mov"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Vidéo MOV QuickTime"
        targetName="Bande-son MP3"
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
