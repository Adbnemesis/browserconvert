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
  title: "Converter AAC para MP3 Online Grátis - Áudio AAC para MP3 Universal",
  description: "Converta AAC para MP3 online grátis. Transforme arquivos AAC em MP3 universal compatível com sons de carro e players antigos. 100% local.",
  alternates: {
    canonical: `${siteConfig.url}/pt/aac-to-mp3`,
    languages: getHreflangAlternates("/aac-to-mp3"),
  },
  openGraph: {
    title: "Converter AAC para MP3 Online Grátis - Áudio AAC para MP3 Universal",
    description: "Converta AAC para MP3 online grátis. Transforme arquivos AAC em MP3 universal compatível com sons de carro e players antigos. 100% local.",
    url: `${siteConfig.url}/pt/aac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Converter AAC para MP3 Online Grátis - Áudio AAC para MP3 Universal",
    description: "Converta AAC para MP3 online grátis. Transforme arquivos AAC em MP3 universal compatível com sons de carro e players antigos. 100% local.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PT_aac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Qual a diferença entre AAC e MP3?",
        "a": "O AAC comprime com maior eficiência, mas o MP3 é o padrão universal compatível em qualquer reprodutor."
    },
    {
        "q": "Qual taxa de bits utilizar?",
        "a": "Recomendamos 192 kbps ou 320 kbps para manter ótima fidelidade sonora."
    },
    {
        "q": "Meus áudios são enviados para a internet?",
        "a": "Não, todo o processo é feito localmente no seu navegador."
    }
];

  const comparisonRows = [
    {
        "feature": "Eficiência de compressão",
        "sourceValue": "Alta eficiência por bit",
        "targetValue": "Excelente a 192k–320 kbps"
    },
    {
        "feature": "Compatibilidade de aparelhos",
        "sourceValue": "Aparelhos modernos",
        "targetValue": "100% de players e aparelhos de som"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Converter AAC para MP3 Online Grátis - Áudio AAC para MP3 Universal"
        description="Converta AAC para MP3 online grátis. Transforme arquivos AAC em MP3 universal compatível com sons de carro e players antigos. 100% local."
        url="/pt/aac-to-mp3"
        breadcrumbs={[
          { label: "Conversor", href: "/pt" },
          { label: "AAC para MP3", href: "/pt/aac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Conversor", href: "/pt" },
          { label: "AAC para MP3", href: "/pt/aac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>AAC para MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Converter AAC para MP3 Online Grátis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converta arquivos de áudio AAC em MP3 universal. Garanta reprodução perfeita em qualquer som automotivo, celular ou equipamento multimídia.
        </p>
      </div>

      <DirectAnswer
        question="Por que converter um áudio AAC para MP3?"
        answer="Muitos sons de carro e aparelhos USB não leem arquivos .aac. O MP3 garante compatibilidade absoluta em 100% dos equipamentos de áudio."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Áudio AAC"
        targetName="MP3 Universal"
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
