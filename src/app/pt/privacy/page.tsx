import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { PrivacyView } from "@/components/views/PrivacyView";

export const metadata: Metadata = {
  title: "Política de Privacidade - BrowserConvert",
  description: "100% privado no navegador. Seus arquivos nunca são enviados a nenhum servidor.",
  alternates: {
    canonical: `${siteConfig.url}/pt/privacy`,
  },
  openGraph: {
    title: "Política de Privacidade - BrowserConvert",
    description: "100% privado no navegador. Seus arquivos nunca são enviados a nenhum servidor.",
    url: `${siteConfig.url}/pt/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade - BrowserConvert",
    description: "100% privado no navegador. Seus arquivos nunca são enviados a nenhum servidor.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPage() {
  return <PrivacyView locale="pt" />;
}
