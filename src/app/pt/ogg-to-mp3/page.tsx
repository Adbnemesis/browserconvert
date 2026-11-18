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
  title: "Converter OGG para MP3 Online Grátis - Vorbis OGG para MP3 Universal",
  description: "Converta OGG para MP3 online grátis. Transforme áudios OGG Vorbis em MP3 compatível com iPhone e som de carro. 100% privado no navegador.",
  alternates: {
    canonical: `${siteConfig.url}/pt/ogg-to-mp3`,
    languages: getHreflangAlternates("/ogg-to-mp3"),
  },
  openGraph: {
    title: "Converter OGG para MP3 Online Grátis - Vorbis OGG para MP3 Universal",
    description: "Converta OGG para MP3 online grátis. Transforme áudios OGG Vorbis em MP3 compatível com iPhone e som de carro. 100% privado no navegador.",
    url: `${siteConfig.url}/pt/ogg-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Converter OGG para MP3 Online Grátis - Vorbis OGG para MP3 Universal",
    description: "Converta OGG para MP3 online grátis. Transforme áudios OGG Vorbis em MP3 compatível com iPhone e som de carro. 100% privado no navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PT_ogg_to_mp3_Page() {
  const faqs = [
    {
        "q": "Por que o iPhone não toca arquivos OGG?",
        "a": "O iOS não suporta nativamente o codec Vorbis. A conversão para MP3 resolve a incompatibilidade."
    },
    {
        "q": "Há perda de qualidade sonora?",
        "a": "Com taxas de 192 kbps ou 320 kbps, o áudio mantém clareza excepcional."
    },
    {
        "q": "Os arquivos de áudio saem do aparelho?",
        "a": "Não, tudo é processado no próprio navegador."
    }
];

  const comparisonRows = [
    {
        "feature": "Compatibilidade",
        "sourceValue": "Limitada a jogos e Linux",
        "targetValue": "100% universal em celulares e autos"
    },
    {
        "feature": "Suporte Apple",
        "sourceValue": "Não suportado no app Música",
        "targetValue": "Totalmente nativo no iOS e CarPlay"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Converter OGG para MP3 Online Grátis - Vorbis OGG para MP3 Universal"
        description="Converta OGG para MP3 online grátis. Transforme áudios OGG Vorbis em MP3 compatível com iPhone e som de carro. 100% privado no navegador."
        url="/pt/ogg-to-mp3"
        breadcrumbs={[
          { label: "Conversor", href: "/pt" },
          { label: "OGG para MP3", href: "/pt/ogg-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Conversor", href: "/pt" },
          { label: "OGG para MP3", href: "/pt/ogg-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Vorbis para MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Converter OGG para MP3 Online Grátis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converta arquivos OGG Vorbis para MP3 universal. Reproduza seus áudios em qualquer aparelho sem precisar de aplicativos adicionais.
        </p>
      </div>

      <DirectAnswer
        question="Como tocar áudio OGG no iPhone e no som do carro?"
        answer="Converta seu arquivo OGG para MP3 no BrowserConvert. O formato MP3 garante compatibilidade em 100% dos aparelhos com processamento local seguro."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/ogg,audio/vorbis,.ogg"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OGG Vorbis"
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
