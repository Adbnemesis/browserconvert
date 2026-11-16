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
  title: "Conversor de Áudio Online Grátis - MP3, WAV, M4A, FLAC",
  description:
    "Conversor de áudio online grátis. Converta entre MP3, WAV, M4A, FLAC, AAC, OGG e OPUS com bitrates personalizados. 100% privado no navegador, sem uploads.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-converter`,
    languages: getHreflangAlternates("/audio-converter"),
  },
  openGraph: {
    title: "Conversor de Áudio Online Grátis - MP3, WAV, M4A, FLAC",
    description: "Converta entre os principais formatos de áudio diretamente no seu navegador com total privacidade.",
    url: `${siteConfig.url}/pt/audio-converter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Áudio Online - BrowserConvert",
    description: "Converta arquivos de áudio diretamente no navegador sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioConverterPage() {
  const faqs = [
    {
      q: "Quais formatos de áudio posso converter?",
      a: "O BrowserConvert suporta conversões entre MP3, WAV, M4A, AAC, FLAC, OGG e OPUS. Você também pode importar formatos de áudio como AIFF e WMA.",
    },
    {
      q: "Qual formato devo escolher?",
      a: "Escolha MP3 para tocar em qualquer celular ou som de carro, WAV para edição em programas de gravação sem perdas, M4A para aparelhos Apple e FLAC para máxima fidelidade e economia de espaço.",
    },
    {
      q: "Ocorre perda de qualidade durante a conversão?",
      a: "Converter a partir de formatos sem perdas (como WAV ou FLAC) para um MP3 com taxa de 320 kbps preserva uma fidelidade de som praticamente idêntica à gravação original.",
    },
    {
      q: "Posso converter vários áudios de uma só vez?",
      a: "Sim. Você pode adicionar múltiplos arquivos em lote. O conversor processa tudo e permite baixar cada arquivo separado ou todos juntos em um arquivo ZIP.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Conversor de Áudio Online Grátis"
        description="Converta entre MP3, WAV, M4A, FLAC, AAC e OGG com total privacidade e processamento local."
        url="/pt/audio-converter"
        breadcrumbs={[{ label: "Início", href: "/pt" }, { label: "Conversor de Áudio", href: "/pt/audio-converter" }]}
        faqs={faqs}
        howTo={{
          name: "Como Converter Arquivos de Áudio Online",
          description: "Converta qualquer arquivo de áudio em três passos simples.",
          steps: [
            { name: "Selecione as Faixas", text: "Arraste suas músicas ou áudios para o conversor." },
            { name: "Escolha o Formato", text: "Escolha MP3, WAV, M4A, FLAC, AAC ou OGG." },
            { name: "Baixe o Resultado", text: "Clique em Converter e baixe seus arquivos processados." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Conversor de Áudio", href: "/pt/audio-converter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Conversão de Áudio Universal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Conversor de Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converta entre MP3, WAV, M4A, FLAC, AAC, OGG e OPUS diretamente no navegador. 100% privado, rápido e sem cadastro.
        </p>
      </div>

      <DirectAnswer
        title="Conversão de Áudio 100% Privada no Navegador"
        lead="O BrowserConvert processa todas as faixas na memória RAM do seu próprio aparelho."
        body="Ao contrário de outros conversores que guardam suas gravações em servidores na nuvem, nosso motor WebAssembly garante que nada saia do seu computador ou celular."
        icon="shield"
      />

      <Converter
        dropzoneHeadline="Arraste seus arquivos de áudio aqui"
        dropzoneSubheadline="ou clique para escolher arquivos do seu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
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
