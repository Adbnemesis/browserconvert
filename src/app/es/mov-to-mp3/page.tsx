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
  title: "Convertir MOV a MP3 Online Gratis - Extraer Audio de Videos MOV",
  description: "Convierte QuickTime MOV a MP3 online gratis. Extrae audio de grabaciones de iPhone y Mac directamente en tu navegador. 100% privado.",
  alternates: {
    canonical: `${siteConfig.url}/es/mov-to-mp3`,
    languages: getHreflangAlternates("/mov-to-mp3"),
  },
  openGraph: {
    title: "Convertir MOV a MP3 Online Gratis - Extraer Audio de Videos MOV",
    description: "Convierte QuickTime MOV a MP3 online gratis. Extrae audio de grabaciones de iPhone y Mac directamente en tu navegador. 100% privado.",
    url: `${siteConfig.url}/es/mov-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir MOV a MP3 Online Gratis - Extraer Audio de Videos MOV",
    description: "Convierte QuickTime MOV a MP3 online gratis. Extrae audio de grabaciones de iPhone y Mac directamente en tu navegador. 100% privado.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ES_mov_to_mp3_Page() {
  const faqs = [
    {
        "q": "¿Puedo convertir videos 4K grabados con iPhone?",
        "a": "Sí. BrowserConvert procesa únicamente el flujo de sonido y omite la pesada señal de video, convirtiendo videos grandes en segundos."
    },
    {
        "q": "¿Por qué convertir MOV a MP3?",
        "a": "Los videos MOV ocupan gigabytes. Si solo necesitas una entrevista, clase o canción, extraer el MP3 reduce el archivo a unos pocos megabytes."
    },
    {
        "q": "¿Se suben mis videos privados a servidores?",
        "a": "Nunca. El archivo de video permanece en tu dispositivo y se procesa localmente en la memoria del navegador."
    }
];

  const comparisonRows = [
    {
        "feature": "Contenido",
        "sourceValue": "Video ProRes/H.264 + Audio",
        "targetValue": "Pista de audio MP3 pura"
    },
    {
        "feature": "Tamaño (5 min)",
        "sourceValue": "500 MB – 2 GB+",
        "targetValue": "5 MB – 10 MB (~98% ahorro)"
    },
    {
        "feature": "Procesamiento",
        "sourceValue": "Sin enviar a internet",
        "targetValue": "Extracción local en tu equipo"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir MOV a MP3 Online Gratis - Extraer Audio de Videos MOV"
        description="Convierte QuickTime MOV a MP3 online gratis. Extrae audio de grabaciones de iPhone y Mac directamente en tu navegador. 100% privado."
        url="/es/mov-to-mp3"
        breadcrumbs={[
          { label: "Convertidor", href: "/es" },
          { label: "MOV a MP3", href: "/es/mov-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertidor", href: "/es" },
          { label: "MOV a MP3", href: "/es/mov-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Video a audio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir MOV a MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extrae audio de alta calidad de videos QuickTime MOV de iPhone y Mac. Reduce el tamaño en un 98% con total confidencialidad.
        </p>
      </div>

      <DirectAnswer
        question="¿Cómo extraer el audio de un video MOV de iPhone sin subirlo a la nube?"
        answer="Usa BrowserConvert. El motor en el navegador extrae directamente la pista de sonido del contenedor MOV y la convierte a MP3 a 192k o 320 kbps de forma 100% local en tu dispositivo."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/quicktime,.mov"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="MOV QuickTime (Video)"
        targetName="Audio MP3 (Sonido)"
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
