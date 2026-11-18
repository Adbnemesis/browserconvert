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
  title: "Convertir OPUS a MP3 Online Gratis - Audios de WhatsApp y Voz a MP3",
  description: "Convierte OPUS a MP3 online gratis. Transforma notas de voz de WhatsApp y audios de Discord en MP3 universal. 100% confidencial en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/opus-to-mp3`,
    languages: getHreflangAlternates("/opus-to-mp3"),
  },
  openGraph: {
    title: "Convertir OPUS a MP3 Online Gratis - Audios de WhatsApp y Voz a MP3",
    description: "Convierte OPUS a MP3 online gratis. Transforma notas de voz de WhatsApp y audios de Discord en MP3 universal. 100% confidencial en tu navegador.",
    url: `${siteConfig.url}/es/opus-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir OPUS a MP3 Online Gratis - Audios de WhatsApp y Voz a MP3",
    description: "Convierte OPUS a MP3 online gratis. Transforma notas de voz de WhatsApp y audios de Discord en MP3 universal. 100% confidencial en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ES_opus_to_mp3_Page() {
  const faqs = [
    {
        "q": "¿Qué aplicaciones usan el formato .opus?",
        "a": "WhatsApp, Telegram y Discord usan OPUS para comprimir llamadas y mensajes de voz."
    },
    {
        "q": "¿Por qué convertir OPUS a MP3?",
        "a": "Muchos editores de video y reproductores de auto rechazan archivos .opus. El formato MP3 es universal."
    },
    {
        "q": "¿Mis audios privados se guardan en servidores?",
        "a": "No, tus notas de voz se convierten de manera 100% local en tu dispositivo."
    }
];

  const comparisonRows = [
    {
        "feature": "Origen común",
        "sourceValue": "WhatsApp, Discord, VoIP",
        "targetValue": "Estándar digital universal"
    },
    {
        "feature": "Edición en programas de video",
        "sourceValue": "Frecuentemente incompatible",
        "targetValue": "Compatible en todos los editores"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir OPUS a MP3 Online Gratis - Audios de WhatsApp y Voz a MP3"
        description="Convierte OPUS a MP3 online gratis. Transforma notas de voz de WhatsApp y audios de Discord en MP3 universal. 100% confidencial en tu navegador."
        url="/es/opus-to-mp3"
        breadcrumbs={[
          { label: "Convertidor", href: "/es" },
          { label: "OPUS a MP3", href: "/es/opus-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertidor", href: "/es" },
          { label: "OPUS a MP3", href: "/es/opus-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Notas de voz a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir OPUS a MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convierte notas de voz de WhatsApp y grabaciones de Discord (.opus) en archivos MP3 universales para editar, archivar y compartir fácilmente.
        </p>
      </div>

      <DirectAnswer
        question="¿Cómo convertir un mensaje de voz de WhatsApp (.opus) a MP3?"
        answer="Sube el archivo .opus a BrowserConvert y haz clic en Convertir. La herramienta procesa el audio localmente en tu navegador y genera un MP3 compatible con cualquier reproductor."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/opus,audio/ogg,.opus"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OPUS (Nota de voz)"
        targetName="MP3 Estándar"
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
