import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { PrivacyView } from "@/components/views/PrivacyView";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - BrowserConvert",
  description: "100% lokale Privatsphäre im Browser. Ihre Dateien verlassen niemals Ihr Gerät.",
  alternates: {
    canonical: `${siteConfig.url}/de/privacy`,
  },
  openGraph: {
    title: "Datenschutzerklärung - BrowserConvert",
    description: "100% lokale Privatsphäre im Browser. Ihre Dateien verlassen niemals Ihr Gerät.",
    url: `${siteConfig.url}/de/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung - BrowserConvert",
    description: "100% lokale Privatsphäre im Browser. Ihre Dateien verlassen niemals Ihr Gerät.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPage() {
  return <PrivacyView locale="de" />;
}
