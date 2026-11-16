import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { FileAudio, HelpCircle, CheckCircle2 } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertir M4A a MP3 Online Gratis - Notas de Voz de iPhone a MP3",
  description:
    "Convierte M4A a MP3 online gratis. Transforma notas de voz de iPhone y audios de iTunes en MP3 universal. 100% privado en tu navegador, sin subir archivos.",
  alternates: {
    canonical: `${siteConfig.url}/es/m4a-to-mp3`,
    languages: getHreflangAlternates("/m4a-to-mp3"),
  },
  openGraph: {
    title: "Convertir M4A a MP3 Online Gratis - Notas de Voz de iPhone a MP3",
    description: "Convierte notas de voz de Apple y archivos M4A a formato MP3 universal directamente en tu navegador.",
    url: `${siteConfig.url}/es/m4a-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertidor M4A a MP3 - BrowserConvert",
    description: "Convierte notas de voz de iPhone a MP3 con 100% de privacidad.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishM4aToMp3Page() {
  const faqs = [
    {
      q: "¿Por qué las notas de voz de iPhone se guardan en formato M4A?",
      a: "Apple utiliza el contenedor M4A con compresión AAC porque ofrece mejor calidad de sonido que MP3 a bitrates bajos. Sin embargo, muchos reproductores de auto y programas de edición requieren MP3.",
    },
    {
      q: "¿Se pierde calidad al convertir de M4A a MP3?",
      a: "Al elegir 192k o 320 kbps, la diferencia es imperceptible para el oído humano. Tus grabaciones de voz conservarán toda su claridad.",
    },
    {
      q: "¿Se suben mis notas de voz privadas a algún servidor?",
      a: "No. La conversión se ejecuta 100% en la memoria de tu navegador mediante WebAssembly. Tus notas de voz y conversaciones privadas nunca salen de tu dispositivo.",
    },
  ];

  const comparisonRows = [
    { feature: "Desarrollador / Ecosistema", sourceValue: "Apple (Estándar en iOS y macOS)", targetValue: "MPEG (Estándar mundial abierto)" },
    { feature: "Códec Principal", sourceValue: "AAC (Advanced Audio Coding)", targetValue: "MPEG-1 Audio Layer III" },
    { feature: "Compatibilidad de Dispositivos", sourceValue: "Excelente en Apple; limitada en Android y autos", targetValue: "Universal (100% de reproductores y sistemas)" },
    { feature: "Uso Principal", sourceValue: "Notas de voz de iPhone, compras de iTunes", targetValue: "Compartir por mensajería, podcasts, edición" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Convertir M4A a MP3 Online Gratis"
        description="Transforma notas de voz de iPhone y archivos M4A en MP3 universal con procesamiento local en el navegador."
        url="/es/m4a-to-mp3"
        breadcrumbs={[{ label: "Convertidor", href: "/es" }, { label: "M4A a MP3", href: "/es/m4a-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Convertir M4A a MP3 Online",
          description: "Convierte notas de voz M4A a MP3 en tres simples pasos.",
          steps: [
            { name: "Selecciona el Archivo M4A", text: "Arrastra tus notas de voz M4A al convertidor." },
            { name: "Elige el Bitrate", text: "Selecciona 192 o 320 kbps para el archivo MP3." },
            { name: "Descarga el MP3", text: "Haz clic en Convertir y descarga tu archivo MP3 compatible." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "M4A a MP3", href: "/es/m4a-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Notas de Voz de Apple a MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir M4A a MP3 Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Transforma grabaciones M4A y notas de voz de iPhone en MP3 universal. 100% privado en tu navegador, sin límites ni registros.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Convertir Notas de Voz de iPhone en MP3 Sin Subirlas a Internet"
        lead="BrowserConvert recodifica archivos M4A de Apple a MP3 directamente en tu navegador."
        body="Tus grabaciones personales y notas de voz confidenciales nunca se suben a servidores remotos. El proceso se ejecuta en la memoria de tu dispositivo con total privacidad."
        icon="apple"
      />

      <Converter
        defaultOutputFormat="mp3"
        acceptTypes="audio/mp4,audio/m4a,audio/x-m4a,.m4a"
        dropzoneHeadline="Arrastra tus notas de voz M4A aquí"
        dropzoneSubheadline="o haz clic para seleccionar archivos M4A desde tu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="M4A (Apple AAC)"
        targetFormat="MP3 (Universal)"
        rows={comparisonRows}
      />

      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Preguntas Frecuentes</h2>
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
