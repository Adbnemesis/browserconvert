"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config/site";
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, ExternalLink, ArrowLeft } from "lucide-react";
import { Locale } from "@/i18n";

interface ContactFormProps {
  locale?: Locale;
}

export function ContactForm({ locale = "en" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "manual_send" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const t = getContactFormStrings(locale);
  const targetEmail = siteConfig.contactEmail || "adbnemesis88@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleOpenMailApp = () => {
    const subject = encodeURIComponent(`BrowserConvert Contact from ${name || "User"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setErrorMessage("");

    try {
      // 1. Try client-side Web3Forms if public key is configured
      const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (web3Key) {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject: `BrowserConvert Contact: ${name.trim()}`,
            from_name: "BrowserConvert Web",
          }),
        });
        const web3Data = await web3Res.json();
        if (web3Data.success) {
          setStatus("success");
          return;
        }
      }

      // 2. Try server-side route
      const apiRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const apiData = await apiRes.json();
      if (apiRes.ok && apiData.delivered) {
        setStatus("success");
        return;
      }

      // 3. If no automated service key is configured, transition to transparent manual send
      setStatus("manual_send");
    } catch {
      // Network failure or offline
      setStatus("manual_send");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-100">{t.successTitle}</h2>
        <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
          {t.successSubtitle.replace("{email}", targetEmail)}
        </p>
        <button
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
            setStatus("idle");
          }}
          className="mt-4 rounded-lg bg-slate-100 dark:bg-white/10 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  if (status === "manual_send") {
    return (
      <div className="py-6 space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
              {t.directSendHeading}
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              {t.directSendDesc}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 space-y-2">
          <div className="text-[11px] font-medium text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
            {t.targetRecipientLabel}
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold text-slate-800 dark:text-zinc-200 break-all">
              {targetEmail}
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/20 transition-colors shrink-0 cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? t.copied : t.copyEmail}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleOpenMailApp}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-medium text-white hover:bg-brand-700 transition-colors cursor-pointer"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>{t.openMailApp}</span>
          </button>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{t.editMessage}</span>
          </button>
        </div>
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
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-xs font-medium text-white hover:bg-brand-700 transition-colors disabled:opacity-50 cursor-pointer"
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
        successSubtitle: "Ihre Nachricht wurde erfolgreich übermittelt. Wir antworten in der Regel innerhalb von 24–48 Stunden an Ihre E-Mail-Adresse.",
        sendAnother: "Weitere Nachricht senden",
        directSendHeading: "Nachricht bereit zum Senden",
        directSendDesc: "Klicken Sie unten, um die Nachricht in Ihrem E-Mail-Programm zu öffnen oder unsere E-Mail-Adresse zu kopieren:",
        targetRecipientLabel: "Empfänger",
        copyEmail: "E-Mail kopieren",
        copied: "Kopiert!",
        openMailApp: "In Mail-App öffnen",
        editMessage: "Zurück zum Formular",
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
        successSubtitle: "Tu mensaje ha sido enviado correctamente. Responderemos a tu correo en 24-48 horas laborables.",
        sendAnother: "Enviar Otro Mensaje",
        directSendHeading: "Mensaje listo para enviar",
        directSendDesc: "Haz clic abajo para abrir tu cliente de correo o copiar nuestra dirección directa:",
        targetRecipientLabel: "Destinatario",
        copyEmail: "Copiar correo",
        copied: "¡Copiado!",
        openMailApp: "Abrir en App de Correo",
        editMessage: "Editar mensaje",
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
        successSubtitle: "Sua mensagem foi enviada com sucesso. Responderemos em até 24–48 horas úteis.",
        sendAnother: "Enviar Outra Mensagem",
        directSendHeading: "Mensagem pronta para envio",
        directSendDesc: "Clique abaixo para abrir em seu aplicativo de e-mail ou copiar nosso endereço:",
        targetRecipientLabel: "Destinatário",
        copyEmail: "Copiar e-mail",
        copied: "Copiado!",
        openMailApp: "Abrir no App de E-mail",
        editMessage: "Editar mensagem",
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
        successSubtitle: "Votre message a été transmis avec succès. Nous vous répondrons sous 24 à 48 heures.",
        sendAnother: "Envoyer un autre message",
        directSendHeading: "Message prêt à l'envoi",
        directSendDesc: "Cliquez ci-dessous pour ouvrir votre application de messagerie ou copier notre adresse :",
        targetRecipientLabel: "Destinataire",
        copyEmail: "Copier l'e-mail",
        copied: "Copié !",
        openMailApp: "Ouvrir l'application Mail",
        editMessage: "Modifier le message",
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
        successSubtitle: "Il tuo messaggio è stato inviato con successo. Risponderemo entro 24-48 ore lavorative.",
        sendAnother: "Invia un altro messaggio",
        directSendHeading: "Messaggio pronto per l'invio",
        directSendDesc: "Clicca qui sotto per aprire la tua app di posta o copiare il nostro indirizzo:",
        targetRecipientLabel: "Destinatario",
        copyEmail: "Copia email",
        copied: "Copiato!",
        openMailApp: "Apri nell'app di posta",
        editMessage: "Modifica messaggio",
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
        successSubtitle: "Your message has been sent successfully. We appreciate your feedback and will get back to you shortly!",
        sendAnother: "Send Another Message",
        directSendHeading: "Message ready to send",
        directSendDesc: "Click below to send via your email client, or copy our direct support address:",
        targetRecipientLabel: "Recipient",
        copyEmail: "Copy email",
        copied: "Copied!",
        openMailApp: "Open in Mail App",
        editMessage: "Edit message",
      };
  }
}
