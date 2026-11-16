import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { HomeView } from "@/components/views/HomeView";
import { getHreflangAlternates, getTranslations } from "@/i18n";

const t = getTranslations("it");

export const metadata: Metadata = {
  title: `${t.home.title} | ${siteConfig.name}`,
  description: t.home.subtitle,
  alternates: {
    canonical: `${siteConfig.url}/it`,
    languages: getHreflangAlternates(""),
  },
  openGraph: {
    title: `${t.home.title} | ${siteConfig.name}`,
    description: t.home.subtitle,
    url: `${siteConfig.url}/it`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: `${t.home.title} - BrowserConvert`,
    description: t.home.subtitle,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ItalianHomePage() {
  return <HomeView locale="it" />;
}
