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
  title: "Aumentar Volume de Áudio Online - Subir Som de Gravação Grátis",
  description:
    "Aumente o volume de seus áudios online grátis. Amplifique gravações baixas ou reduza o som em até 200%. 100% privado no navegador, sem uploads.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-volume-adjuster`,
    languages: getHreflangAlternates("/audio-volume-adjuster"),
  },
  openGraph: {
    title: "Aumentar Volume de Áudio Online - Subir Som de Gravação Grátis",
    description: "Aumente o som de gravações e músicas em até 200% diretamente no seu navegador.",
    url: `${siteConfig.url}/pt/audio-volume-adjuster`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumentar Volume de Áudio ",
    description: "Amplifique gravações de áudio baixas diretamente no navegador sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioVolumePage() {
  const faqs = [
    {
      q: "Como o BrowserConvert aumenta o volume?",
      a: "O ajustador de volume aplica ganho linear diretamente nas amostras de áudio na memória RAM do seu aparelho, garantindo aumento claro sem distorção excessiva.",
    },
    {
      q: "Meu arquivo de áudio é enviado para algum servidor?",
      a: "Não. O ganho de volume é calculado 100% na memória do seu dispositivo através de WebAssembly.",
    },
    {
      q: "Consigo diminuir o volume se o som estiver estourando?",
      a: "Sim. Você pode regular o volume entre 25% e 200% para normalizar qualquer gravação.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Aumentar Volume de Áudio Online Grátis"
        description="Ajuste o volume de suas músicas e gravações de áudio em até 200% com processamento local."
        url="/pt/audio-volume-adjuster"
        breadcrumbs={[{ label: "Ferramentas", href: "/pt" }, { label: "Aumentar Volume", href: "/pt/audio-volume-adjuster" }]}
        faqs={faqs}
        howTo={{
          name: "Como Aumentar o Volume de um Áudio Online",
          description: "Amplifique ou suavize o volume de qualquer áudio em três passos simples.",
          steps: [
            { name: "Selecione o Arquivo", text: "Escolha seu arquivo de áudio no seu aparelho." },
            { name: "Ajuste o Volume", text: "Use a barra deslizante para escolher entre 25% e 200%." },
            { name: "Aplique e Baixe", text: "Clique em Aplicar Volume e baixe seu arquivo amplificado." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Aumentar Volume", href: "/pt/audio-volume-adjuster" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Volume2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Ajuste de Ganho de Áudio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Aumentar Volume de Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Amplifique gravações de áudio baixas ou regule faixas estouradas em até 200%. 100% privado no seu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Como Subir o Volume de um Áudio no Navegador Sem Fazer Upload"
        lead="O BrowserConvert amplifica a intensidade das ondas sonoras localmente no seu aparelho."
        body="Sem precisar instalar programas pesados nem mandar arquivos particulares para servidores externos, o ganho de volume é processado em segundos na memória do seu dispositivo."
        icon="sliders"
      />

      <AudioVolumeTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Perguntas Frecuentes</h2>
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
