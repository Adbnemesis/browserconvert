import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioVolumeTool } from "@/components/tools/AudioVolumeTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Volume2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Aumentar Volumen de Audio Online - Subir y Bajar Volumen Gratis",
  description:
    "Ajusta el volumen de tus audios online gratis. Amplifica grabaciones de voz bajas o reduce audios fuertes hasta el 200%. 100% privado en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-volume-adjuster`,
    languages: getHreflangAlternates("/audio-volume-adjuster"),
  },
  openGraph: {
    title: "Aumentar Volumen de Audio Online - Subir y Bajar Volumen Gratis",
    description: "Sube el volumen de tus pistas de audio hasta un 200% directamente en tu navegador.",
    url: `${siteConfig.url}/es/audio-volume-adjuster`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajustador de Volumen de Audio - BrowserConvert",
    description: "Amplifica grabaciones de voz bajas directamente en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioVolumePage() {
  const faqs = [
    {
      q: "¿Cómo amplifica el volumen BrowserConvert?",
      a: "El ajustador de volumen aplica una ganancia lineal directamente a las muestras de audio PCM en la memoria de tu navegador, garantizando un sonido limpio sin saturación excesiva.",
    },
    {
      q: "¿Se sube mi archivo a algún servidor?",
      a: "No. El procesamiento de ganancia se realiza 100% en la memoria RAM de tu propio dispositivo vía WebAssembly.",
    },
    {
      q: "¿Puedo bajar el volumen si el audio está muy fuerte?",
      a: "Sí. Puedes reducir el volumen desde el 100% hasta niveles más suaves (como 25% o 50%) para normalizar grabaciones con volumen excesivo.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Aumentar Volumen de Audio Online Gratis"
        description="Ajusta el volumen de tus canciones y grabaciones de audio hasta el 200% con procesamiento local."
        url="/es/audio-volume-adjuster"
        breadcrumbs={[{ label: "Herramientas", href: "/es" }, { label: "Ajustar Volumen", href: "/es/audio-volume-adjuster" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Subir el Volumen de un Audio Online",
          description: "Amplifica o suaviza el volumen de cualquier archivo de audio en tres pasos.",
          steps: [
            { name: "Selecciona el Archivo", text: "Elige tu archivo de audio desde tu dispositivo." },
            { name: "Ajusta el Nivel", text: "Usa el deslizador para elegir entre 25% y 200% de volumen." },
            { name: "Aplica y Descarga", text: "Haz clic en Aplicar Volumen y descarga tu pista de audio amplificada." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Ajustar Volumen", href: "/es/audio-volume-adjuster" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Volume2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Control de Ganancia de Audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Aumentar y Ajustar Volumen de Audio Online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Amplifica grabaciones de voz bajas o reduce audios fuertes hasta el 200%. 100% privado en tu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Aumentar el Volumen de un Audio en el Navegador"
        lead="BrowserConvert ajusta la amplitud de las muestras de sonido de forma nativa en tu dispositivo."
        body="Sin necesidad de instalar software pesado ni subir archivos privados a servidores externos, nuestro amplificador opera en segundos en la memoria de tu dispositivo."
        icon="sliders"
      />

      <AudioVolumeTool />

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
