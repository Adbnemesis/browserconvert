import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { TermsView } from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: "Términos de Servicio - BrowserConvert",
  description: "Términos de servicio y condiciones de uso de BrowserConvert.",
  alternates: {
    canonical: `${siteConfig.url}/es/terms`,
  },
  openGraph: {
    title: "Términos de Servicio - BrowserConvert",
    description: "Términos de servicio y condiciones de uso de BrowserConvert.",
    url: `${siteConfig.url}/es/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Servicio - BrowserConvert",
    description: "Términos de servicio y condiciones de uso de BrowserConvert.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsPage() {
  return <TermsView locale="es" />;
}
