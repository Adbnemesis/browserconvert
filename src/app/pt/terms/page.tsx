import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { TermsView } from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: "Termos de Serviço - BrowserConvert",
  description: "Termos de serviço e condições de uso da plataforma BrowserConvert.",
  alternates: {
    canonical: `${siteConfig.url}/pt/terms`,
  },
  openGraph: {
    title: "Termos de Serviço - BrowserConvert",
    description: "Termos de serviço e condições de uso da plataforma BrowserConvert.",
    url: `${siteConfig.url}/pt/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termos de Serviço - BrowserConvert",
    description: "Termos de serviço e condições de uso da plataforma BrowserConvert.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsPage() {
  return <TermsView locale="pt" />;
}
