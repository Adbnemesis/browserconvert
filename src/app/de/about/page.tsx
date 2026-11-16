import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "Über BrowserConvert - Lokale Audio- & Videokonvertierung im Browser",
  description: "Erfahren Sie mehr über die browserbasierte Audio-Konvertierungsarchitektur von BrowserConvert. 100% privat ohne Server-Uploads.",
  alternates: {
    canonical: `${siteConfig.url}/de/about`,
  },
  openGraph: {
    title: "Über BrowserConvert - Lokale Audio- & Videokonvertierung im Browser",
    description: "Erfahren Sie mehr über die browserbasierte Audio-Konvertierungsarchitektur von BrowserConvert. 100% privat ohne Server-Uploads.",
    url: `${siteConfig.url}/de/about`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über BrowserConvert - Lokale Audio- & Videokonvertierung im Browser",
    description: "Erfahren Sie mehr über die browserbasierte Audio-Konvertierungsarchitektur von BrowserConvert. 100% privat ohne Server-Uploads.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AboutPage() {
  return <AboutView locale="de" />;
}
