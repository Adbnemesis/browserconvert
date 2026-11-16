import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { TermsView } from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation - BrowserConvert",
  description: "Conditions générales d'utilisation de la plateforme BrowserConvert.",
  alternates: {
    canonical: `${siteConfig.url}/fr/terms`,
  },
  openGraph: {
    title: "Conditions d'Utilisation - BrowserConvert",
    description: "Conditions générales d'utilisation de la plateforme BrowserConvert.",
    url: `${siteConfig.url}/fr/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions d'Utilisation - BrowserConvert",
    description: "Conditions générales d'utilisation de la plateforme BrowserConvert.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsPage() {
  return <TermsView locale="fr" />;
}
