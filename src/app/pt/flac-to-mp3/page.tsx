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
  title: "Converter FLAC para MP3 Online Grátis - Áudio de Alta Fidelidade a 320kbps",
  description: "Converta FLAC para MP3 online grátis. Transforme álbuns FLAC sem perdas em arquivos MP3 a 320 kbps de alta qualidade. 100% privado no navegador.",
  alternates: {
    canonical: `${siteConfig.url}/pt/flac-to-mp3`,
    languages: getHreflangAlternates("/flac-to-mp3"),
  },
  openGraph: {
    title: "Converter FLAC para MP3 Online Grátis - Áudio de Alta Fidelidade a 320kbps",
    description: "Converta FLAC para MP3 online grátis. Transforme álbuns FLAC sem perdas em arquivos MP3 a 320 kbps de alta qualidade. 100% privado no navegador.",
    url: `${siteConfig.url}/pt/flac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Converter FLAC para MP3 Online Grátis - Áudio de Alta Fidelidade a 320kbps",
    description: "Converta FLAC para MP3 online grátis. Transforme álbuns FLAC sem perdas em arquivos MP3 a 320 kbps de alta qualidade. 100% privado no navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PT_flac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Por que converter FLAC para MP3?",
        "a": "Arquivos FLAC são volumosos (30 a 50 MB por música) e não funcionam em muitos sons automotivos ou no Apple Music nativo. O MP3 a 320 kbps oferece compatibilidade total."
    },
    {
        "q": "Qual bitrate escolher na conversão?",
        "a": "Recomendamos 320 kbps para manter a máxima clareza e fidelidade do arquivo master."
    },
    {
        "q": "Meus arquivos de áudio são enviados para a internet?",
        "a": "Não. O processamento ocorre 100% no seu navegador com WebAssembly. Suas músicas nunca saem do seu aparelho."
    }
];

  const comparisonRows = [
    {
        "feature": "Compressão",
        "sourceValue": "Sem perdas (Bit-perfect)",
        "targetValue": "Compressão perceptual"
    },
    {
        "feature": "Taxa de bits",
        "sourceValue": "800–1411 kbps",
        "targetValue": "320 kbps ou 192 kbps"
    },
    {
        "feature": "Tamanho por álbum",
        "sourceValue": "350–600 MB",
        "targetValue": "80–120 MB (~75% de economia)"
    },
    {
        "feature": "Compatibilidade",
        "sourceValue": "Limitada em players antigos",
        "targetValue": "100% universal"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Converter FLAC para MP3 Online Grátis - Áudio de Alta Fidelidade a 320kbps"
        description="Converta FLAC para MP3 online grátis. Transforme álbuns FLAC sem perdas em arquivos MP3 a 320 kbps de alta qualidade. 100% privado no navegador."
        url="/pt/flac-to-mp3"
        breadcrumbs={[
          { label: "Conversor", href: "/pt" },
          { label: "FLAC para MP3", href: "/pt/flac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Conversor", href: "/pt" },
          { label: "FLAC para MP3", href: "/pt/flac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Áudio sem perdas para MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Converter FLAC para MP3 Online Grátis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Converta faixas FLAC de estúdio em MP3 de 320 kbps. Ideal para reprodução no iPhone, Android e som automotivo.
        </p>
      </div>

      <DirectAnswer
        question="Como converter FLAC para MP3 sem perda perceptível de qualidade?"
        answer="Ao converter no BrowserConvert, escolha 320 kbps. O FLAC mantém o áudio original do estúdio; converter para MP3 a 320 kbps preserva mais de 95% dos detalhes acústicos e reduz o tamanho em 75%."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/flac,.flac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="FLAC (Sem perdas)"
        targetName="MP3 (Universal 320k)"
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
