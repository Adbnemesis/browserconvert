"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { FileAudio, Shield, Lock, Cpu } from "lucide-react";
import { KofiIcon } from "@/components/common/KofiIcon";
import { getLocaleFromPathname, getLocalizedPath, getTranslations } from "@/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const t = getTranslations(currentLocale);

  const homeHref = getLocalizedPath(currentLocale, "");
  const privacyHref = getLocalizedPath(currentLocale, "/privacy");
  const termsHref = getLocalizedPath(currentLocale, "/terms");
  const contactHref = getLocalizedPath(currentLocale, "/contact");
  const aboutHref = getLocalizedPath(currentLocale, "/about");
  const formatGuideHref = getLocalizedPath(currentLocale, "/format-guide");

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d0e] text-slate-600 dark:text-zinc-400">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-slate-200/80 dark:border-white/5 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-brand-600 dark:text-brand-400">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-200">
                  {currentLocale === "de"
                    ? "Datenschutz im Browser"
                    : currentLocale === "es"
                    ? "Privacidad en el navegador"
                    : currentLocale === "pt"
                    ? "Privacidade no navegador"
                    : currentLocale === "fr"
                    ? "Confidentialité dans le navigateur"
                    : currentLocale === "it"
                    ? "Privacy nel browser"
                    : "Client-side privacy"}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  {currentLocale === "de"
                    ? "Dateien werden im Speicher verarbeitet, ohne Uploads."
                    : currentLocale === "es"
                    ? "Archivos procesados en memoria, sin subidas."
                    : currentLocale === "pt"
                    ? "Arquivos processados em memória, sem uploads."
                    : currentLocale === "fr"
                    ? "Fichiers traités en mémoire, sans envoi."
                    : currentLocale === "it"
                    ? "File elaborati in memoria, senza caricamenti."
                    : "Files are processed in memory with zero uploads."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-brand-600 dark:text-brand-400">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-200">
                  {currentLocale === "de"
                    ? "Keine Registrierung nötig"
                    : currentLocale === "es"
                    ? "Sin necesidad de registro"
                    : currentLocale === "pt"
                    ? "Sem necessidade de cadastro"
                    : currentLocale === "fr"
                    ? "Aucun compte requis"
                    : currentLocale === "it"
                    ? "Nessun account richiesto"
                    : "No account required"}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  {currentLocale === "de"
                    ? "Unbegrenzte Konvertierungen ohne Account."
                    : currentLocale === "es"
                    ? "Conversiones ilimitadas sin crear cuenta."
                    : currentLocale === "pt"
                    ? "Conversões ilimitadas sem criar conta."
                    : currentLocale === "fr"
                    ? "Conversions illimitées sans inscription."
                    : currentLocale === "it"
                    ? "Conversioni illimitate senza registrazione."
                    : "Unlimited conversions without sign-up."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-brand-600 dark:text-brand-400">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-200">
                  {currentLocale === "de"
                    ? "Lokale Verarbeitung"
                    : currentLocale === "es"
                    ? "Procesamiento local"
                    : currentLocale === "pt"
                    ? "Processamento local"
                    : currentLocale === "fr"
                    ? "Traitement local"
                    : currentLocale === "it"
                    ? "Elaborazione locale"
                    : "On-device processing"}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  {currentLocale === "de"
                    ? "Audiokonvertierung auf Ihrem Gerät ohne externe Server."
                    : currentLocale === "es"
                    ? "Conversión en tu dispositivo sin servidores externos."
                    : currentLocale === "pt"
                    ? "Conversão no seu aparelho sem servidores externos."
                    : currentLocale === "fr"
                    ? "Conversion audio sur votre appareil sans serveur externe."
                    : currentLocale === "it"
                    ? "Conversione sul tuo dispositivo senza server esterni."
                    : "Audio conversion happens on your device with zero server uploads."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link href={homeHref} className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white">
                <FileAudio className="h-3.5 w-3.5" />
              </div>
              <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-zinc-400 max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="mt-4 font-mono text-[11px] text-slate-400 dark:text-zinc-500">
              {t.footer.privacyNote}
            </div>
            {siteConfig.links.kofi && (
              <div className="mt-4">
                <a
                  href={siteConfig.links.kofi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-[#00b4a4] dark:hover:text-[#13c3ec] hover:border-[#00b4a4]/40 transition-all shadow-xs group"
                >
                  <KofiIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>{t.kofi.bannerButton}</span>
                </a>
              </div>
            )}
          </div>

          {/* Popular Conversions */}
          <div>
            <h3 className="text-xs font-medium text-slate-900 dark:text-zinc-200">
              {currentLocale === "de"
                ? "Beliebte Konvertierungen"
                : currentLocale === "es"
                ? "Conversiones Populares"
                : currentLocale === "pt"
                ? "Conversões Populares"
                : currentLocale === "fr"
                ? "Conversions Populaires"
                : currentLocale === "it"
                ? "Conversioni Popolari"
                : "Popular conversions"}
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/mp4-to-mp3")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {currentLocale === "de"
                    ? "MP4 in MP3"
                    : currentLocale === "fr"
                    ? "MP4 en MP3"
                    : currentLocale === "es" || currentLocale === "pt" || currentLocale === "it"
                    ? "MP4 a MP3"
                    : "MP4 to MP3"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/wav-to-mp3")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {currentLocale === "de"
                    ? "WAV in MP3"
                    : currentLocale === "fr"
                    ? "WAV en MP3"
                    : currentLocale === "es" || currentLocale === "pt" || currentLocale === "it"
                    ? "WAV a MP3"
                    : "WAV to MP3"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/m4a-to-mp3")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {currentLocale === "de"
                    ? "M4A in MP3"
                    : currentLocale === "fr"
                    ? "M4A en MP3"
                    : currentLocale === "es" || currentLocale === "pt" || currentLocale === "it"
                    ? "M4A a MP3"
                    : "M4A to MP3"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/flac-to-mp3")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {currentLocale === "de"
                    ? "FLAC in MP3"
                    : currentLocale === "fr"
                    ? "FLAC en MP3"
                    : currentLocale === "es" || currentLocale === "pt" || currentLocale === "it"
                    ? "FLAC a MP3"
                    : "FLAC to MP3"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Audio Tools */}
          <div>
            <h3 className="text-xs font-medium text-slate-900 dark:text-zinc-200">{t.footer.tools}</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/audio-cutter")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.tools.cutter.title}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/audio-compressor")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.tools.compressor.title}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/audio-merger")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.tools.merger.title}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(currentLocale, "/audio-volume-adjuster")}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.tools.volume.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Site Links */}
          <div>
            <h3 className="text-xs font-medium text-slate-900 dark:text-zinc-200">{t.footer.legal}</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link
                  href={formatGuideHref}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.formatGuide}
                </Link>
              </li>
              <li>
                <Link
                  href={aboutHref}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={privacyHref}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={termsHref}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={contactHref}
                  className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 dark:border-white/5 pt-8 sm:flex-row text-xs">
          <p className="text-slate-400 dark:text-zinc-500">
            &copy; {currentYear} {siteConfig.name}. {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={privacyHref}
              className="text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={termsHref}
              className="text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
