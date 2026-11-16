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
  title: "Cortador de Áudio Online - Cortar Músicas e Áudios Grátis",
  description:
    "Cortador de áudio online grátis. Corte e apare faixas de MP3, WAV, M4A e FLAC com precisão. 100% privado no navegador, sem upload para servidores.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-cutter`,
    languages: getHreflangAlternates("/audio-cutter"),
  },
  openGraph: {
    title: "Cortador de Áudio Online - Cortar Músicas e Áudios Grátis",
    description: "Corte faixas de áudio com reprodução em tempo real e precisão de milissegundos. 100% no cliente.",
    url: `${siteConfig.url}/pt/audio-cutter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortador de Áudio Online - BrowserConvert",
    description: "Corte e apare trechos de áudio sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioCutterPage() {
  const faqs = [
    {
      q: "Como o Cortador de Áudio funciona sem enviar meus arquivos para um servidor?",
      a: "O BrowserConvert apara o áudio diretamente no seu navegador. Ao selecionar um arquivo, o navegador decodifica a faixa e recorta os pontos exatos de início e fim na memória RAM do seu aparelho, sem nada trafegar pela internet.",
    },
    {
      q: "Consigo cortar músicas pelo celular?",
      a: "Sim. O Cortador de Áudio é totalmente responsivo e funciona por toque no iPhone, iPad e celulares Android.",
    },
    {
      q: "Quais formatos de áudio posso cortar?",
      a: "Você pode cortar arquivos MP3, WAV, M4A, FLAC, OGG ou AAC com exportação rápida e alta qualidade.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Cortador de Áudio Online Grátis"
        description="Corte e apare músicas MP3, WAV, M4A e FLAC com reprodução ao vivo e 100% de privacidade no navegador."
        url="/pt/audio-cutter"
        breadcrumbs={[{ label: "Ferramentas de Áudio", href: "/pt" }, { label: "Cortador de Áudio", href: "/pt/audio-cutter" }]}
        faqs={faqs}
        howTo={{
          name: "Como Cortar Áudio Online Grátis",
          description: "Apare qualquer arquivo de áudio com visualização em três passos simples.",
          steps: [
            {
              name: "Selecione o Arquivo",
              text: "Arraste ou escolha um arquivo de áudio MP3, WAV ou M4A do seu dispositivo.",
            },
            {
              name: "Defina Início e Fim",
              text: "Ajuste os controles deslizantes ou digite os segundos exatos para o corte.",
            },
            {
              name: "Exporte e Baixe",
              text: "Clique em Cortar e baixe seu áudio aparado instantaneamente.",
            },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Cortador de Áudio", href: "/pt/audio-cutter" },
        ]}
      />

      {/* Header Deck */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Scissors className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Edição de Áudio no Navegador</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Cortador de Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Corte músicas e trechos de MP3, WAV, M4A e FLAC com precisão de milissegundos. 100% privado no cliente.
        </p>
      </div>

      {/* Interactive Tool Component */}
      <DirectAnswer
        title="Como Cortar Músicas e Áudios no Navegador"
        lead="O BrowserConvert apara arquivos de áudio localmente utilizando decodificadores nativos de som do navegador."
        body="Ao contrário de outros editores online que exigem o upload do seu arquivo para servidores remotos lentos, este cortador opera 100% na memória do seu dispositivo. Suas músicas e gravações nunca são transmitidas pela rede."
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
