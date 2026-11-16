import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { SUPPORTED_OUTPUT_FORMATS } from "@/lib/config/formats";
import { FileAudio, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertidor de Audio Online Gratis - MP3, WAV, M4A, FLAC",
  description:
    "Convertidor de audio online gratis. Convierte entre MP3, WAV, M4A, FLAC, AAC, OGG y OPUS con bitrates personalizables. 100% privado en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-converter`,
    languages: getHreflangAlternates("/audio-converter"),
  },
  openGraph: {
    title: "Convertidor de Audio Online Gratis - MP3, WAV, M4A, FLAC",
    description: "Convierte entre todos los formatos de audio populares directamente en tu navegador con total privacidad.",
    url: `${siteConfig.url}/es/audio-converter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertidor de Audio Online - BrowserConvert",
    description: "Convierte archivos de audio directamente en tu navegador sin subir archivos a servidores.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioConverterPage() {
  const faqs = [
    {
      q: "¿Entre qué formatos de audio puedo convertir?",
      a: "BrowserConvert admite conversiones entre MP3, WAV, M4A, AAC, FLAC, OGG y OPUS. También puedes importar formatos como AIFF y WMA.",
    },
    {
      q: "¿Cómo elijo el mejor formato de audio?",
      a: "Elige MP3 para compatibilidad universal con cualquier dispositivo, WAV para edición en programas de audio sin compresión, M4A para dispositivos Apple y FLAC para calidad de archivo sin pérdida con menor tamaño.",
    },
    {
      q: "¿Se pierde calidad durante la conversión?",
      a: "Convertir desde formatos sin pérdida (como WAV o FLAC) a un MP3 de alto bitrate (320 kbps) conserva una fidelidad sonora prácticamente indistinguible del original.",
    },
    {
      q: "¿Puedo convertir varios archivos a la vez?",
      a: "Sí. Puedes subir varios archivos al mismo tiempo. El convertidor los procesa secuencialmente y te permite descargarlos uno a uno o todos juntos en un archivo ZIP.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Convertidor de Audio Online Gratis"
        description="Convierte entre MP3, WAV, M4A, FLAC, AAC y OGG con total privacidad y procesamiento local."
        url="/es/audio-converter"
        breadcrumbs={[{ label: "Inicio", href: "/es" }, { label: "Convertidor de Audio", href: "/es/audio-converter" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Convertir Archivos de Audio Online",
          description: "Convierte cualquier archivo de audio en tres pasos sencillos.",
          steps: [
            { name: "Selecciona los Audios", text: "Arrastra tus canciones o audios al convertidor." },
            { name: "Elige el Formato", text: "Selecciona MP3, WAV, M4A, FLAC, AAC u OGG." },
            { name: "Descarga el Resultado", text: "Haz clic en Convertir y descarga tus archivos procesados." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Convertidor de Audio", href: "/es/audio-converter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Conversión de Audio Universal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertidor de Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convierte entre MP3, WAV, M4A, FLAC, AAC, OGG y OPUS directamente en tu navegador. 100% privado, rápido y sin registro.
        </p>
      </div>

      <DirectAnswer
        title="Conversión de Audio 100% Privada en tu Navegador"
        lead="BrowserConvert procesa todas las pistas de audio en la memoria local de tu dispositivo."
        body="A diferencia de los convertidores tradicionales que almacenan tus canciones o grabaciones de voz en servidores remotos, nuestro motor WebAssembly garantiza que ningún dato salga de tu ordenador o teléfono."
        icon="shield"
      />

      <Converter
        dropzoneHeadline="Arrastra tus archivos de audio aquí"
        dropzoneSubheadline="o haz clic para seleccionar archivos desde tu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
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
