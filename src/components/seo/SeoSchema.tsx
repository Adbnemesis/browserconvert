import React from "react";
import { siteConfig } from "@/lib/config/site";

export interface FaqItem {
  q: string;
  a: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SeoSchemaProps {
  pageType?: "website" | "application" | "article";
  title?: string;
  description?: string;
  url?: string;
  faqs?: FaqItem[];
  howTo?: {
    name: string;
    description: string;
    steps: HowToStep[];
  };
  breadcrumbs?: BreadcrumbItem[];
  applicationCategory?: string;
  datePublished?: string;
  dateModified?: string;
}

export function SeoSchema({
  pageType = "application",
  title,
  description,
  url,
  faqs,
  howTo,
  breadcrumbs,
  applicationCategory = "MultimediaApplication",
  datePublished = "2026-01-01T00:00:00Z",
  dateModified = "2026-11-15T00:00:00Z",
}: SeoSchemaProps) {
  const currentUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`;
  const pageDesc = description || siteConfig.description;

  const graph: any[] = [];

  // 1. WebSite Schema (Top Level)
  graph.push({
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  });

  // 2. Organization Schema
  graph.push({
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icons/icon-512.png`,
      width: 512,
      height: 512,
    },
    email: siteConfig.contactEmail,
    sameAs: siteConfig.links.github ? [siteConfig.links.github] : [],
  });

  // 3. WebApplication / SoftwareApplication Schema
  if (pageType === "application") {
    graph.push({
      "@type": "WebApplication",
      "@id": `${currentUrl}/#application`,
      name: pageTitle,
      url: currentUrl,
      description: pageDesc,
      applicationCategory: applicationCategory,
      operatingSystem: "All modern web browsers (Chrome, Safari, Firefox, Edge, iOS, Android)",
      browserRequirements: "Requires WebAssembly (Wasm) support",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "100% private in-browser audio processing",
        "Zero server file uploads — maximum privacy",
        "Audio format conversion between MP3, WAV, M4A, FLAC, AAC, OGG, OPUS",
        "Direct audio extraction from MP4, MOV, MKV, and other video containers",
        "Batch conversions with single ZIP archive download",
        "Configurable bitrate (64 kbps to 320 kbps), sample rate, and audio trimming",
      ],
      creator: {
        "@id": `${siteConfig.url}/#organization`,
      },
    });
  } else if (pageType === "article") {
    graph.push({
      "@type": "TechArticle",
      "@id": `${currentUrl}/#article`,
      headline: title || siteConfig.name,
      description: pageDesc,
      url: currentUrl,
      datePublished: datePublished,
      dateModified: dateModified,
      inLanguage: "en-US",
      author: {
        "@id": `${siteConfig.url}/#organization`,
      },
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      image: `${siteConfig.url}/og-image.png`,
    });
  }

  // 4. Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const allCrumbs = [{ label: "Home", href: "/" }, ...breadcrumbs];
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}/#breadcrumbs`,
      itemListElement: allCrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.label,
        item: crumb.href ? `${siteConfig.url}${crumb.href}` : currentUrl,
      })),
    });
  }

  // 5. FAQPage Schema
  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${currentUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  // 6. HowTo Schema
  if (howTo && howTo.steps.length > 0) {
    graph.push({
      "@type": "HowTo",
      "@id": `${currentUrl}/#howto`,
      name: howTo.name,
      description: howTo.description,
      totalTime: "PT30S",
      tool: [
        {
          "@type": "HowToTool",
          name: `${siteConfig.name} Online Audio Converter`,
        },
      ],
      step: howTo.steps.map((s, idx) => ({
        "@type": "HowToStep",
        position: idx + 1,
        name: s.name,
        text: s.text,
        url: `${currentUrl}#step-${idx + 1}`,
      })),
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
