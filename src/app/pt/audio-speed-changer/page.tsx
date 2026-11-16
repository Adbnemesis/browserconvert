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
  title: "Acelerar Áudio Online - Mudar Velocidade de Músicas Grátis",
  description:
    "Acelere ou desacelere áudios online grátis. Ajuste o tempo de 0.5x até 2.0x sem desafinar a voz. 100% privado no navegador, sem upload para servidores.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-speed-changer`,
    languages: getHreflangAlternates("/audio-speed-changer"),
  },
  openGraph: {
    title: "Acelerar Áudio Online - Mudar Velocidade de Músicas Grátis",
    description: "Altere a velocidade de reprodução do áudio sem distorcer o tom diretamente no seu navegador.",
    url: `${siteConfig.url}/pt/audio-speed-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acelerar Áudio Online ",
    description: "Acelere podcasts e músicas sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioSpeedPage() {
  const faqs = [
    {
      q: "Acelerar o áudio vai deixar a voz fina ou distorcida?",
      a: "Não. O BrowserConvert usa algoritmos de compensação de tempo que preservam a altura natural da voz, acelerando a fala sem parecer um esquilo.",
    },
    {
      q: "Quais velocidades estão disponíveis?",
      a: "Você pode escolher entre 0.5x, 0.75x (mais lento) ou 1.25x, 1.5x e 2.0x (mais rápido).",
    },
    {
      q: "O arquivo é enviado para a internet?",
      a: "Não. A mudança de velocidade é processada 100% na memória RAM do seu próprio aparelho.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Acelerar Áudio Online Grátis"
        description="Acelere ou diminua a velocidade de áudios de 0.5x a 2.0x sem desafinar com processamento local."
        url="/pt/audio-speed-changer"
        breadcrumbs={[{ label: "Ferramentas", href: "/pt" }, { label: "Acelerar Áudio", href: "/pt/audio-speed-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Como Mudar a Velocidade de um Áudio Online",
          description: "Acelere ou desacelere qualquer áudio em três passos simples.",
          steps: [
            { name: "Selecione o Arquivo", text: "Escolha seu arquivo de áudio no seu aparelho." },
            { name: "Escolha a Velocidade", text: "Selecione de 0.5x até 2.0x." },
            { name: "Aplique e Baixe", text: "Clique em Aplicar Velocidade e baixe seu áudio acelerado." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Acelerar Áudio", href: "/pt/audio-speed-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FastForward className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Ajuste de Velocidade de Reprodução</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Acelerar Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Acelere ou desacelere músicas e gravações de áudio de 0.5x a 2.0x sem alterar o tom. 100% privado no navegador.
        </p>
      </div>

      <DirectAnswer
        title="Como Acelerar Músicas e Aulas no Navegador Sem Fazer Upload"
        lead="O BrowserConvert acelera o andamento da faixa mantendo o tom sonoro original."
        body="Ao contrário de conversores lentos que enviam arquivos para servidores remotos, nosso processador de tempo opera diretamente na memória do seu dispositivo. Máxima velocidade e privacidade total."
        icon="sliders"
      />

      <AudioSpeedTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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
