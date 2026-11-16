"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { getLocaleFromPathname, getLocalizedPath } from "@/i18n";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const homeHref = getLocalizedPath(currentLocale, "");

  const homeLabel =
    currentLocale === "de"
      ? "Startseite"
      : currentLocale === "es"
      ? "Inicio"
      : currentLocale === "pt"
      ? "Início"
      : currentLocale === "fr"
      ? "Accueil"
      : "Home";

  // Filter out any duplicate root crumbs passed in items
  const cleanItems = items.filter(
    (item) => item.href !== homeHref && item.href !== "/" && item.label.toLowerCase() !== homeLabel.toLowerCase()
  );

  const allItems: BreadcrumbItem[] = [
    { label: homeLabel, href: homeHref },
    ...cleanItems,
  ];

  // Schema.org BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="my-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />}
              {isLast || !item.href ? (
                <span className="font-medium text-slate-800 dark:text-zinc-200" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {index === 0 && <Home className="h-3 w-3" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
