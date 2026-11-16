"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config/site";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Locale } from "@/i18n";

interface ContactFormProps {
  locale?: Locale;
}

export function ContactForm({ locale = "en" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const t = getContactFormStrings(locale);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage(t.errorEmpty);
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      const subject = encodeURIComponent(`BrowserConvert Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="text-center py-8 space-y-3">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="text-base font-bold text-slate-900 dark:text-zinc-100">{t.successTitle}</h2>
        <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
          {t.successSubtitle}
        </p>
        <button
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
            setStatus("idle");
          }}
          className="mt-4 rounded-lg bg-slate-100 dark:bg-white/10 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_url_hp"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">{t.nameLabel}</label>
        <input
          type="text"
          required
          placeholder="Alex Morgan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121215] px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">{t.emailLabel}</label>
        <input
          type="email"
          required
          placeholder="alex@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121215] px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">{t.messageLabel}</label>
        <textarea
          rows={4}
          required
          placeholder={t.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121215] px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:border-brand-500 focus:outline-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-xs text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30 p-2.5 rounded-lg border border-red-200 dark:border-red-900/40">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-xs font-medium text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
      >
        <Send className="h-3.5 w-3.5" />
        <span>{status === "submitting" ? t.submitting : t.submit}</span>
      </button>
    </form>
  );
}

function getContactFormStrings(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        nameLabel: "Ihr Name",
        emailLabel: "Ihre E-Mail",
        messageLabel: "Ihre Nachricht",
        messagePlaceholder: "Beschreiben Sie Ihr Anliegen oder Feedback...",
        submit: "Nachricht senden",
        submitting: "Wird gesendet...",
        errorEmpty: "Bitte füllen Sie alle erforderlichen Felder aus.",
        successTitle: "Vielen Dank für Ihre Nachricht!",
        successSubtitle: "Ihr E-Mail-Programm wurde vorbereitet, oder Ihre Nachricht wurde erfasst. Wir antworten in der Regel innerhalb von 24–48 Stunden.",
        sendAnother: "Weitere Nachricht senden",
      };
    case "es":
      return {
        nameLabel: "Tu Nombre",
        emailLabel: "Tu Correo Electrónico",
        messageLabel: "Mensaje",
        messagePlaceholder: "Describe tu duda, error o sugerencia...",
        submit: "Enviar Mensaje",
        submitting: "Enviando...",
        errorEmpty: "Por favor, completa todos los campos requeridos.",
        successTitle: "¡Gracias por contactarnos!",
        successSubtitle: "Se ha preparado tu cliente de correo para enviar el mensaje. Nos pondremos en contacto a la brevedad.",
        sendAnother: "Enviar Otro Mensaje",
      };
    case "pt":
      return {
        nameLabel: "Seu Nome",
        emailLabel: "Seu E-mail",
        messageLabel: "Mensagem",
        messagePlaceholder: "Descreva sua dúvida, erro ou sugestão...",
        submit: "Enviar Mensagem",
        submitting: "Enviando...",
        errorEmpty: "Por favor, preencha todos os campos obrigatórios.",
        successTitle: "Obrigado pelo contato!",
        successSubtitle: "Seu cliente de e-mail foi preparado com sua mensagem. Responderemos em até 24–48 horas.",
        sendAnother: "Enviar Outra Mensagem",
      };
    case "fr":
      return {
        nameLabel: "Votre nom",
        emailLabel: "Votre e-mail",
        messageLabel: "Message",
        messagePlaceholder: "Décrivez votre demande ou suggestion...",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        errorEmpty: "Veuillez remplir tous les champs obligatoires.",
        successTitle: "Merci de nous avoir contactés !",
        successSubtitle: "Votre logiciel de messagerie a été préparé avec votre message. Nous vous répondrons sous 24 à 48 heures.",
        sendAnother: "Envoyer un autre message",
      };
    case "it":
      return {
        nameLabel: "Il tuo nome",
        emailLabel: "La tua email",
        messageLabel: "Messaggio",
        messagePlaceholder: "Descrivi la tua richiesta o suggerimento...",
        submit: "Invia messaggio",
        submitting: "Invio in corso...",
        errorEmpty: "Si prega di completare tutti i campi obbligatori.",
        successTitle: "Grazie per averci contattato!",
        successSubtitle: "Il tuo client di posta è stato preparato. Risponderemo entro 24-48 ore lavorative.",
        sendAnother: "Invia un altro messaggio",
      };
    default:
      return {
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Message",
        messagePlaceholder: "Describe your issue or suggestion...",
        submit: "Send Message",
        submitting: "Sending...",
        errorEmpty: "Please complete all required fields.",
        successTitle: "Thank you for reaching out!",
        successSubtitle: "Your email client has been prepared, or your message has been logged. We appreciate your feedback!",
        sendAnother: "Send Another Message",
      };
  }
}
