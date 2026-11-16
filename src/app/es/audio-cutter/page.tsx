import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Scissors, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Cortador de Audio Online - Recortar Canciones y Música Gratis",
  description:
    "Cortador y recortador de audio online gratis. Corta MP3, WAV, M4A y FLAC con precisión milimétrica. 100% privado en tu navegador, sin subir archivos.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-cutter`,
    languages: getHreflangAlternates("/audio-cutter"),
  },
  openGraph: {
    title: "Cortador de Audio Online - Recortar Canciones y Música Gratis",
    description: "Corta y recorta archivos MP3, WAV, M4A y FLAC con vista previa en tiempo real. 100% privado en el navegador.",
    url: `${siteConfig.url}/es/audio-cutter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortador de Audio Online - BrowserConvert",
    description: "Recorta pistas de audio con precisión de milisegundos directamente en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioCutterPage() {
  const faqs = [
    {
      q: "¿Cómo funciona el Cortador de Audio sin subir mis archivos a un servidor?",
      a: "BrowserConvert recorta el audio directamente en tu navegador. Al seleccionar una canción, el navegador decodifica el audio y recorta los puntos exactos de inicio y fin en la memoria local sin subir nada a la nube.",
    },
    {
      q: "¿Puedo recortar audio desde el teléfono móvil?",
      a: "Sí. El Cortador de Audio es completamente táctil y compatible con iPhone, iPad y teléfonos Android.",
    },
    {
      q: "¿Qué formatos de audio puedo cortar?",
      a: "Puedes recortar cualquier archivo MP3, WAV, M4A, FLAC, OGG o AAC con exportación limpia y sin pérdida audible de calidad.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Cortador de Audio Online y Recortador de Canciones"
        description="Corta archivos MP3, WAV, M4A y FLAC con vista previa y procesamiento 100% privado en el navegador."
        url="/es/audio-cutter"
        breadcrumbs={[{ label: "Herramientas de Audio", href: "/es" }, { label: "Cortador de Audio", href: "/es/audio-cutter" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Cortar Audio Online Gratis",
          description: "Recorta cualquier archivo de audio con vista previa en tres simples pasos.",
          steps: [
            {
              name: "Selecciona el Archivo",
              text: "Elige o arrastra un archivo de audio MP3, WAV o M4A desde tu dispositivo.",
            },
            {
              name: "Ajusta Inicio y Fin",
              text: "Utiliza los controles deslizantes o ingresa los segundos exactos de recorte.",
            },
            {
              name: "Exporta y Descarga",
              text: "Haz clic en Recortar y descarga tu pista de audio recortada al instante.",
            },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Cortador de Audio", href: "/es/audio-cutter" },
        ]}
      />

      {/* Header Deck */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Scissors className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Edición de Audio en el Navegador</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Cortador de Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Recorta archivos MP3, WAV, M4A y FLAC con precisión milimétrica. Procesamiento 100% privado del lado del cliente.
        </p>
      </div>

      {/* Interactive Tool Component */}
      <DirectAnswer
        title="Cómo Recortar Archivos de Audio en el Navegador"
        lead="BrowserConvert recorta audio localmente utilizando decodificadores nativos de audio en el navegador."
        body="A diferencia de otros editores de audio en línea que requieren subir tu archivo a servidores lentos, este cortador opera 100% en la memoria de tu dispositivo. Tus audios y grabaciones privadas nunca viajan por internet."
        icon="sliders"
      />

      <AudioCutterTool />

      {/* Native Ad Slot */}
      <AdSlot className="max-w-3xl mx-auto" />

      {/* Direct Answer SEO Section */}
      
      {/* FAQ Section */}
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
