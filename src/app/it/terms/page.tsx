import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { TermsView } from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: "Termini di Servizio - BrowserConvert",
  description: "Termini e condizioni di utilizzo del servizio BrowserConvert.",
  alternates: {
    canonical: `${siteConfig.url}/it/terms`,
  },
  openGraph: {
    title: "Termini di Servizio - BrowserConvert",
    description: "Termini e condizioni di utilizzo del servizio BrowserConvert.",
    url: `${siteConfig.url}/it/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termini di Servizio - BrowserConvert",
    description: "Termini e condizioni di utilizzo del servizio BrowserConvert.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsPage() {
  return <TermsView locale="it" />;
}
