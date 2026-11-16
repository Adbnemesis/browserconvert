"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config/site";
import { Mail, Copy, Check, ExternalLink, Send } from "lucide-react";
import { Locale } from "@/i18n";

interface ContactFormProps {
  locale?: Locale;
}

export function ContactForm({ locale = "en" }: ContactFormProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const t = getContactFormStrings(locale);
  const targetEmail = siteConfig.contactEmail || "adbnemesis88@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  const handleOpenEmailApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSubject = encodeURIComponent(
      subject.trim() ? `BrowserConvert: ${subject.trim()}` : "BrowserConvert Support Inquiry"
    );
    const finalBody = encodeURIComponent(
      message.trim()
        ? `${message.trim()}\n\n---\nSent via BrowserConvert Contact Form`
        : "Hello BrowserConvert team,\n\n"
    );
    window.location.href = `mailto:${targetEmail}?subject=${finalSubject}&body=${finalBody}`;
  };

  return (
    <div className="space-y-6">
      {/* Quick Direct Email Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-800/40">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              {t.directSupportLabel}
            </div>
            <div className="font-mono text-xs font-semibold text-slate-800 dark:text-zinc-200 break-all">
              {targetEmail}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/20 transition-colors shrink-0 cursor-pointer shadow-2xs"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? t.copied : t.copyEmail}</span>
        </button>
      </div>

      {/* Interactive Compose Box */}
      <form onSubmit={handleOpenEmailApp} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
            {t.subjectLabel}
          </label>
          <input
            type="text"
            placeholder={t.subjectPlaceholder}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121215] px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:border-brand-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
            {t.messageLabel}
          </label>
          <textarea
            rows={5}
            required
            placeholder={t.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121215] px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:border-brand-500 focus:outline-none"
          />
        </div>

        <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed">
          {t.helperNote.replace("{email}", targetEmail)}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 px-4 text-xs font-medium text-white hover:bg-brand-700 transition-colors cursor-pointer shadow-xs"
          >
            <Send className="h-3.5 w-3.5" />
            <span>{t.openEmailApp}</span>
          </button>

          <a
            href={`mailto:${targetEmail}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>{t.quickMailto}</span>
          </a>
        </div>
      </form>
    </div>
  );
}

function getContactFormStrings(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        directSupportLabel: "Support-Adresse",
        copyEmail: "Adresse kopieren",
        copied: "Kopiert!",
        subjectLabel: "Betreff (optional)",
        subjectPlaceholder: "z.B. Frage zur Konvertierung oder Fehlermeldung",
        messageLabel: "Ihre Nachricht",
        messagePlaceholder: "Beschreiben Sie Ihr Anliegen, Ihre Frage oder Ihr Feedback...",
        helperNote: "Ein Klick auf „In E-Mail-App verfassen“ öffnet Ihr E-Mail-Programm mit vorausgefüllter Nachricht an {email}.",
        openEmailApp: "In E-Mail-App verfassen",
        quickMailto: "Leere E-Mail öffnen",
      };
    case "es":
      return {
        directSupportLabel: "Correo de Soporte",
        copyEmail: "Copiar correo",
        copied: "¡Copiado!",
        subjectLabel: "Asunto (opcional)",
        subjectPlaceholder: "Ej: Pregunta sobre conversión o reporte de error",
        messageLabel: "Tu Mensaje",
        messagePlaceholder: "Describe tu consulta, sugerencia o problema técnico...",
        helperNote: "Al hacer clic en „Redactar en App de Correo“ se abrirá tu cliente de correo con el mensaje listo para enviar a {email}.",
        openEmailApp: "Redactar en App de Correo",
        quickMailto: "Abrir correo en blanco",
      };
    case "pt":
      return {
        directSupportLabel: "E-mail de Suporte",
        copyEmail: "Copiar e-mail",
        copied: "Copiado!",
        subjectLabel: "Assunto (opcional)",
        subjectPlaceholder: "Ex: Dúvida sobre conversão ou relato de bug",
        messageLabel: "Sua Mensagem",
        messagePlaceholder: "Descreva sua dúvida, sugestão ou necessidade técnica...",
        helperNote: "Ao clicar em „Escrever no App de E-mail“, seu cliente de e-mail será aberto com a mensagem pronta para envio para {email}.",
        openEmailApp: "Escrever no App de E-mail",
        quickMailto: "Abrir e-mail em branco",
      };
    case "fr":
      return {
        directSupportLabel: "Adresse de support",
        copyEmail: "Copier l'e-mail",
        copied: "Copié !",
        subjectLabel: "Objet (optionnel)",
        subjectPlaceholder: "Ex : Question sur un format ou signalement d'erreur",
        messageLabel: "Votre message",
        messagePlaceholder: "Décrivez votre demande, question ou suggestion...",
        helperNote: "Cliquer sur « Rédiger dans l'app Mail » ouvrira votre logiciel de messagerie avec le message prêt à être envoyé à {email}.",
        openEmailApp: "Rédiger dans l'app Mail",
        quickMailto: "Ouvrir un e-mail vierge",
      };
    case "it":
      return {
        directSupportLabel: "Indirizzo di Supporto",
        copyEmail: "Copia email",
        copied: "Copiato!",
        subjectLabel: "Oggetto (opzionale)",
        subjectPlaceholder: "Es: Domanda sul formato o segnalazione errore",
        messageLabel: "Il tuo messaggio",
        messagePlaceholder: "Descrivi la tua richiesta, domanda o suggerimento...",
        helperNote: "Cliccando su «Scrivi nell'app di posta» si aprirà il tuo client di posta con il messaggio pronto da inviare a {email}.",
        openEmailApp: "Scrivi nell'app di posta",
        quickMailto: "Apri email vuota",
      };
    default:
      return {
        directSupportLabel: "Direct Support Address",
        copyEmail: "Copy email",
        copied: "Copied!",
        subjectLabel: "Subject (optional)",
        subjectPlaceholder: "e.g. Conversion question, format request, or bug report",
        messageLabel: "Your Message",
        messagePlaceholder: "Describe your inquiry, suggestion, or issue...",
        helperNote: "Clicking 'Compose in Email App' opens your email client (Gmail, Apple Mail, Outlook) with your message ready to send to {email}.",
        openEmailApp: "Compose in Email App",
        quickMailto: "Open blank email",
      };
  }
}
