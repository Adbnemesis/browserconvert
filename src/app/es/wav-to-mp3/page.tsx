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
  title: "Convertir WAV a MP3 Online Gratis - Comprimir Audio WAV",
  description:
    "Convierte WAV a MP3 online gratis. Comprime grabaciones de audio WAV sin pérdidas a MP3 a 320kbps. 100% privado en tu navegador, sin subir archivos a servidores.",
  alternates: {
    canonical: `${siteConfig.url}/es/wav-to-mp3`,
    languages: getHreflangAlternates("/wav-to-mp3"),
  },
  openGraph: {
    title: "Convertir WAV a MP3 Online Gratis - Comprimir Audio WAV",
    description: "Comprime audios WAV en MP3 de 320kbps directamente en tu navegador.",
    url: `${siteConfig.url}/es/wav-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertidor WAV a MP3 ",
    description: "Convierte grabaciones WAV a MP3 con 100% de privacidad en el cliente.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishWavToMp3Page() {
  const faqs = [
    {
      q: "¿Cuánto espacio ahorro al convertir WAV a MP3?",
      a: "Un archivo WAV consume alrededor de 10 MB por minuto. Al convertir a MP3 a 192 kbps o 320 kbps, el tamaño se reduce entre un 85% y un 90%, dejando el archivo en apenas 1.4 MB por minuto.",
    },
    {
      q: "¿Se nota la diferencia de sonido entre WAV y MP3 a 320 kbps?",
      a: "En pruebas a ciegas con auriculares o altavoces normales, la mayoría de oyentes no puede distinguir entre un WAV de 16 bits y un MP3 a 320 kbps.",
    },
    {
      q: "¿Cuál es el mejor bitrate para convertir de WAV a MP3?",
      a: "Para música personal, 192 o 256 kbps es el balance ideal. Para proyectos de audio profesional o portafolios, elige 320 kbps.",
    },
  ];

  const comparisonRows = [
    { feature: "Tipo de Compresión", sourceValue: "PCM Lineal Sin Compresión (Audio puro)", targetValue: "Compresión Perceptual Psicoacústica" },
    { feature: "Tasa de Bits (Bitrate)", sourceValue: "1,411 kbps (16 bits / 44.1 kHz estéreo)", targetValue: "128 kbps a 320 kbps (Configurable)" },
    { feature: "Tamaño (Pista 4 min)", sourceValue: "Aprox. 40 MB – 50 MB", targetValue: "Aprox. 4 MB – 9 MB (~85% a 90% ahorro)" },
    { feature: "Uso Recomendado", sourceValue: "Grabación en estudio, masterización, DAWs", targetValue: "Celulares, reproductores de auto, streaming" },
    { feature: "Compatibilidad", sourceValue: "Alta en PC/Mac; limitada en reproductores viejos", targetValue: "Universal (100% de dispositivos digitales)" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir WAV a MP3 Online Gratis"
        description="Comprime pistas WAV a MP3 de alta fidelidad a 320kbps con procesamiento local en el navegador."
        url="/es/wav-to-mp3"
        breadcrumbs={[{ label: "Convertidor", href: "/es" }, { label: "WAV a MP3", href: "/es/wav-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Convertir WAV a MP3 Online",
          description: "Convierte archivos WAV a MP3 en tres sencillos pasos.",
          steps: [
            { name: "Selecciona el Archivo WAV", text: "Arrastra tus archivos WAV al convertidor." },
            { name: "Configura el Bitrate", text: "Selecciona 192 o 320 kbps para máxima calidad." },
            { name: "Descarga el MP3", text: "Haz clic en Convertir y descarga tus archivos MP3." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "WAV a MP3", href: "/es/wav-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Compresión de Audio WAV a MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir WAV a MP3 Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Comprime grabaciones WAV en MP3 de 320 kbps o 192 kbps. 100% privado en tu navegador, sin límites ni registros.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Convertir WAV a MP3 en el Navegador Sin Subir Archivos"
        lead="BrowserConvert comprime archivos WAV directamente en la memoria de tu dispositivo."
        body="Al utilizar WebAssembly y libmp3lame, la compresión se realiza a gran velocidad en tu propio equipo. Tus grabaciones de voz y mezclas de estudio nunca se comparten con servidores de terceros."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/wav": [".wav"], "audio/x-wav": [".wav"] }}
        dropzoneHeadline="Arrastra tus grabaciones WAV aquí"
        dropzoneSubheadline="o haz clic para seleccionar archivos WAV desde tu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="WAV (Sin comprimir)"
        targetFormat="MP3 (Comprimido)"
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
