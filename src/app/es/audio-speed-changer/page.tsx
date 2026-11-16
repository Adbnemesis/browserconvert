import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioSpeedTool } from "@/components/tools/AudioSpeedTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FastForward, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Cambiar Velocidad de Audio Online - Acelerar o Ralentizar Audio Gratis",
  description:
    "Acelera o ralentiza canciones y grabaciones de audio online. Modifica el tempo desde 0.5x hasta 2.0x sin distorsión de tono. 100% privado en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-speed-changer`,
    languages: getHreflangAlternates("/audio-speed-changer"),
  },
  openGraph: {
    title: "Cambiar Velocidad de Audio Online - Acelerar o Ralentizar Audio Gratis",
    description: "Modifica la velocidad de reproducción de audio sin alterar el tono directamente en tu navegador.",
    url: `${siteConfig.url}/es/audio-speed-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambiador de Velocidad de Audio - BrowserConvert",
    description: "Acelera o ralentiza audios sin distorsión de tono con 100% de privacidad.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioSpeedPage() {
  const faqs = [
    {
      q: "¿Cambiar la velocidad distorsionará el tono de la voz?",
      a: "No. Utilizamos filtros de compensación de tempo avanzados (atempo) en WebAssembly que conservan el tono natural sin que la voz suene como ardilla o monstruo.",
    },
    {
      q: "¿Qué velocidades están disponibles?",
      a: "Puedes ajustar la velocidad a 0.5x, 0.75x (más lento) o a 1.25x, 1.5x y 2.0x (más rápido).",
    },
    {
      q: "¿Se sube mi archivo a algún servidor?",
      a: "No. La conversión se procesa 100% de forma local en la memoria de tu navegador.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Cambiar Velocidad de Audio Online Gratis"
        description="Acelera o ralentiza pistas de audio de 0.5x a 2.0x sin distorsión de tono con procesamiento local."
        url="/es/audio-speed-changer"
        breadcrumbs={[{ label: "Herramientas", href: "/es" }, { label: "Cambiar Velocidad", href: "/es/audio-speed-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Cambiar la Velocidad de un Audio Online",
          description: "Acelera o desacelera cualquier pista de audio en tres pasos.",
          steps: [
            { name: "Selecciona el Archivo", text: "Elige tu archivo de audio desde tu dispositivo." },
            { name: "Elige la Velocidad", text: "Selecciona entre 0.5x y 2.0x de velocidad." },
            { name: "Exporta y Descarga", text: "Haz clic en Aplicar Velocidad y descarga tu pista acelerada o ralentizada." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Cambiar Velocidad", href: "/es/audio-speed-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FastForward className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Control de Tempo de Audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Cambiar Velocidad de Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Acelera o ralentiza canciones y grabaciones de audio de 0.5x a 2.0x sin alterar el tono. 100% privado en tu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Cambiar la Velocidad de Reproducción en el Navegador"
        lead="BrowserConvert estira o comprime la señal de audio manteniendo el tono original constante."
        body="A diferencia de convertidores lentos que suben archivos a la nube, nuestro procesador de tempo opera directamente en la memoria de tu dispositivo. Máxima velocidad y privacidad."
        icon="sliders"
      />

      <AudioSpeedTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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
