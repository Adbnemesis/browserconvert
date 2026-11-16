import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { HomeView } from "@/components/views/HomeView";
import { getHreflangAlternates, getTranslations } from "@/i18n";

const t = getTranslations("pt");

export const metadata: Metadata = {
  title: `${t.home.title} `,
  description: t.home.subtitle,
  alternates: {
    canonical: `${siteConfig.url}/pt`,
    languages: getHreflangAlternates(""),
  },
  openGraph: {
    title: `${t.home.title} `,
    description: t.home.subtitle,
    url: `${siteConfig.url}/pt`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${t.home.title} `,
    description: t.home.subtitle,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseHomePage() {
  return <HomeView locale="pt" />;
}
