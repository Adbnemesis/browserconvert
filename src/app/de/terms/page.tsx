import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { TermsView } from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen ",
  description: "Nutzungsbedingungen und Vereinbarung zur fairen Nutzung von BrowserConvert.",
  alternates: {
    canonical: `${siteConfig.url}/de/terms`,
  },
  openGraph: {
    title: "Nutzungsbedingungen ",
    description: "Nutzungsbedingungen und Vereinbarung zur fairen Nutzung von BrowserConvert.",
    url: `${siteConfig.url}/de/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutzungsbedingungen ",
    description: "Nutzungsbedingungen und Vereinbarung zur fairen Nutzung von BrowserConvert.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsPage() {
  return <TermsView locale="de" />;
}
