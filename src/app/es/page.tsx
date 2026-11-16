import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { HomeView } from "@/components/views/HomeView";
import { getHreflangAlternates, getTranslations } from "@/i18n";

const t = getTranslations("es");

export const metadata: Metadata = {
  title: `${t.home.title} | ${siteConfig.name}`,
  description: t.home.subtitle,
  alternates: {
    canonical: `${siteConfig.url}/es`,
    languages: getHreflangAlternates(""),
  },
  openGraph: {
    title: `${t.home.title} | ${siteConfig.name}`,
    description: t.home.subtitle,
    url: `${siteConfig.url}/es`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: `${t.home.title} - BrowserConvert`,
    description: t.home.subtitle,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishHomePage() {
  return <HomeView locale="es" />;
}
