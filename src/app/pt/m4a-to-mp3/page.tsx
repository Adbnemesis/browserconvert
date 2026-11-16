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
  title: "Converter M4A para MP3 Online Grátis - Áudios do iPhone para MP3",
  description:
    "Converta M4A para MP3 online grátis. Transforme notas de voz do iPhone e gravações M4A em MP3 universal. 100% privado no navegador, sem upload para servidores.",
  alternates: {
    canonical: `${siteConfig.url}/pt/m4a-to-mp3`,
    languages: getHreflangAlternates("/m4a-to-mp3"),
  },
  openGraph: {
    title: "Converter M4A para MP3 Online Grátis - Áudios do iPhone para MP3",
    description: "Converta gravações M4A e notas de voz da Apple para MP3 diretamente no seu navegador.",
    url: `${siteConfig.url}/pt/m4a-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor M4A para MP3 ",
    description: "Converta notas de voz do iPhone para MP3 com total privacidade.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseM4aToMp3Page() {
  const faqs = [
    {
      q: "Por que as gravações do iPhone são salvas em M4A?",
      a: "A Apple utiliza o contêiner M4A com compressão AAC para economizar espaço e garantir ótimo som. No entanto, muitos aparelhos de som, computadores antigos e caixas de som exigem o formato universal MP3.",
    },
    {
      q: "Ocorre perda de qualidade ao converter M4A em MP3?",
      a: "Ao escolher 192k ou 320 kbps, a diferença é imperceptível para o ouvido humano. Suas gravações de voz e músicas mantêm excelente fidelidade.",
    },
    {
      q: "Minhas notas de voz particulares são enviadas para algum servidor?",
      a: "Não. A conversão ocorre 100% na memória do seu navegador através de WebAssembly. Suas gravações particulares nunca saem do seu aparelho.",
    },
  ];

  const comparisonRows = [
    { feature: "Ecossistema", sourceValue: "Apple (Padrão em iPhone, iPad e Mac)", targetValue: "MPEG (Padrão mundial aberto)" },
    { feature: "Codec Principal", sourceValue: "AAC (Advanced Audio Coding)", targetValue: "MPEG-1 Audio Layer III" },
    { feature: "Compatibilidade", sourceValue: "Excelente em aparelhos Apple; limitada em outros", targetValue: "Universal (100% dos aparelhos digitais)" },
    { feature: "Uso Principal", sourceValue: "Notas de voz do iPhone, gravações do gravador", targetValue: "Compartilhar por WhatsApp, e-mail e som de carro" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Converter M4A para MP3 Online Grátis"
        description="Converta notas de voz do iPhone e áudios M4A em MP3 com processamento local no seu navegador."
        url="/pt/m4a-to-mp3"
        breadcrumbs={[{ label: "Conversor", href: "/pt" }, { label: "M4A para MP3", href: "/pt/m4a-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Como Converter M4A para MP3 Online",
          description: "Transforme gravações M4A em MP3 em três passos rápidos.",
          steps: [
            { name: "Selecione o Arquivo M4A", text: "Arraste suas gravações M4A para o conversor." },
            { name: "Escolha a Qualidade", text: "Selecione 192 ou 320 kbps para o áudio de saída." },
            { name: "Baixe o MP3", text: "Clique em Converter e baixe seu arquivo MP3 compatível." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "M4A para MP3", href: "/pt/m4a-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Notas de Voz do iPhone para MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Converter M4A para MP3 Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Transforme notas de voz do iPhone e arquivos M4A em MP3 universal. 100% privado no navegador, sem limites nem uploads.
        </p>
      </div>

      <DirectAnswer
        title="Como Converter Notas de Voz do iPhone em MP3 Sem Fazer Upload"
        lead="O BrowserConvert recodifica arquivos M4A da Apple diretamente no seu navegador."
        body="Suas gravações particulares nunca são enviadas para servidores na nuvem. O processamento é realizado na memória RAM do seu próprio aparelho com privacidade total."
        icon="apple"
      />

      <Converter
        defaultOutputFormat="mp3"
        acceptTypes="audio/mp4,audio/m4a,audio/x-m4a,.m4a"
        dropzoneHeadline="Arraste suas gravações M4A aqui"
        dropzoneSubheadline="ou clique para escolher arquivos M4A do seu aparelho"
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
          <h2>Perguntas Frequentes</h2>
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
