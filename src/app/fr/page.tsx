import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { HomeView } from "@/components/views/HomeView";
import { getHreflangAlternates, getTranslations } from "@/i18n";

const t = getTranslations("fr");

export const metadata: Metadata = {
  title: `${t.home.title} `,
  description: t.home.subtitle,
  alternates: {
    canonical: `${siteConfig.url}/fr`,
    languages: getHreflangAlternates(""),
  },
  openGraph: {
    title: `${t.home.title} `,
    description: t.home.subtitle,
    url: `${siteConfig.url}/fr`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${t.home.title} `,
    description: t.home.subtitle,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchHomePage() {
  return <HomeView locale="fr" />;
}
