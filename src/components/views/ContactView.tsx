import React from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail } from "lucide-react";
import { Locale, getLocalizedPath } from "@/i18n";

interface ContactViewProps {
  locale?: Locale;
}

export function ContactView({ locale = "en" }: ContactViewProps) {
  const content = getContactViewContent(locale);
  const canonicalUrl = getLocalizedPath(locale, "/contact");

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        pageType="website"
        title={content.seoTitle}
        description={content.seoDesc}
        url={canonicalUrl}
        locale={locale}
        breadcrumbs={[{ label: content.breadcrumbLabel, href: canonicalUrl }]}
      />

      <Breadcrumbs items={[{ label: content.breadcrumbLabel, href: canonicalUrl }]} />

      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          {content.pageTitle}
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content.pageSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Direct Email Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 mb-4">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-zinc-100">{content.emailHeading}</h2>
            <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
              {content.emailDesc}
            </p>
            <div className="mt-3 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 break-all">
              {siteConfig.contactEmail}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-400 dark:text-zinc-500">
            {content.emailResponseTime}
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8 shadow-xs">
          <ContactForm locale={locale} />
        </div>
      </div>
    </div>
  );
}

function getContactViewContent(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        seoTitle: "Kontakt BrowserConvert - Support & Anfragen",
        seoDesc: "Kontaktieren Sie das Team von BrowserConvert. Hilfe bei Formaten, Fehlermeldungen oder Funktionswünschen.",
        breadcrumbLabel: "Kontakt",
        pageTitle: "Kundenservice & Kontakt",
        pageSubtitle: "Haben Sie Fragen zur Konvertierung, Fehlermeldungen oder Feature-Wünsche? Schreiben Sie uns eine Nachricht.",
        emailHeading: "Direkte E-Mail",
        emailDesc: "Erreichen Sie unser Entwicklerteam direkt für technische Anfragen:",
        emailResponseTime: "Durchschnittliche Antwortzeit: 24–48 Geschäftsstunden.",
      };
    case "es":
      return {
        seoTitle: "Contacto BrowserConvert - Soporte y Consultas",
        seoDesc: "Ponte en contacto con el equipo de BrowserConvert para soporte técnico, reporte de errores o sugerencias.",
        breadcrumbLabel: "Contacto",
        pageTitle: "Contacto y Soporte",
        pageSubtitle: "¿Tienes preguntas sobre compatibilidad de formatos, errores o sugerencias? Envíanos un mensaje y te responderemos a la brevedad.",
        emailHeading: "Correo Directo",
        emailDesc: "Contacta directamente con nuestro equipo de desarrollo:",
        emailResponseTime: "Tiempo medio de respuesta: 24-48 horas laborables.",
      };
    case "pt":
      return {
        seoTitle: "Contato BrowserConvert - Suporte e Dúvidas",
        seoDesc: "Entre em contato com a equipe do BrowserConvert para suporte técnico, relato de problemas ou sugestões.",
        breadcrumbLabel: "Contato",
        pageTitle: "Contato e Suporte",
        pageSubtitle: "Tem dúvidas sobre formatos de áudio, erros ou sugestões de novos recursos? Envie uma mensagem para nossa equipe.",
        emailHeading: "E-mail Direto",
        emailDesc: "Fale diretamente com nossos engenheiros de desenvolvimento:",
        emailResponseTime: "Tempo médio de resposta: 24 a 48 horas úteis.",
      };
    case "fr":
      return {
        seoTitle: "Contact BrowserConvert - Support et Renseignements",
        seoDesc: "Contactez l'équipe de BrowserConvert pour toute question technique, signalement de bug ou suggestion.",
        breadcrumbLabel: "Contact",
        pageTitle: "Contact & Assistance",
        pageSubtitle: "Une question sur la prise en charge des formats, un bug ou une suggestion ? Envoyez-nous un message.",
        emailHeading: "E-mail direct",
        emailDesc: "Contactez directement notre équipe de développement technique :",
        emailResponseTime: "Délai de réponse moyen : 24 à 48 heures ouvrées.",
      };
    case "it":
      return {
        seoTitle: "Contatto BrowserConvert - Assistenza e Richieste",
        seoDesc: "Contatta il team di BrowserConvert per supporto sui formati, segnalazioni di bug o suggerimenti.",
        breadcrumbLabel: "Contatto",
        pageTitle: "Contatta il Supporto",
        pageSubtitle: "Hai domande sul supporto dei formati, segnalazioni di bug o richieste di nuove funzioni? Inviaci un messaggio.",
        emailHeading: "Email diretta",
        emailDesc: "Contatta direttamente il nostro team di sviluppo:",
        emailResponseTime: "Tempo medio di risposta: 24-48 ore lavorative.",
      };
    default:
      return {
        seoTitle: "Contact BrowserConvert Support",
        seoDesc: "Get in touch with the BrowserConvert engineering and product team.",
        breadcrumbLabel: "Contact",
        pageTitle: "Contact Support",
        pageSubtitle: "Have a question about format support, bug reports, or feature requests? Send us a message and our team will get back to you.",
        emailHeading: "Direct Email",
        emailDesc: "Reach our development team directly for technical inquiries:",
        emailResponseTime: "Average response time: 24-48 business hours.",
      };
  }
}
