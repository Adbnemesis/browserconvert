import React from "react";
import { siteConfig } from "@/lib/config/site";

interface JsonLdProps {
  pageType?: "website" | "application";
  title?: string;
  description?: string;
  url?: string;
}

export function JsonLd({ pageType = "application", title, description, url }: JsonLdProps) {
  const currentUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDesc = description || siteConfig.description;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icons/icon-512.png`,
    },
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: pageTitle,
    url: currentUrl,
    description: pageDesc,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All modern web browsers (Chrome, Safari, Firefox, Edge, iOS, Android)",
    browserRequirements: "Requires WebAssembly support",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Client-side local file conversion",
      "No file size tracking or server storage",
      "Video to MP3 audio extraction",
      "Format support for MP3, WAV, M4A, FLAC, AAC, OGG, OPUS",
      "Batch file processing and ZIP downloads",
      "Custom audio bitrate, sample rate, and volume controls",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {pageType === "application" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
