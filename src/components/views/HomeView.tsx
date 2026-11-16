import React from "react";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { AdSlot } from "@/components/layout/AdSlot";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import {
  FileAudio,
  Film,
  ShieldCheck,
  Zap,
  Sliders,
  FolderArchive,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Locale, getLocalizedPath } from "@/i18n";

interface HomeViewProps {
  locale?: Locale;
}

interface FormatInfo {
  id: string;
  name: string;
  extension: string;
  desc: string;
  isLossless: boolean;
  defaultBitrate: string;
}

export function HomeView({ locale = "en" }: HomeViewProps) {
  const content = getHomeContent(locale);

  return (
    <div className="space-y-16 pb-20">
      <SeoSchema
        pageType="website"
        title={content.seoTitle}
        description={content.seoDescription}
        url={locale === "en" ? "/" : `/${locale}`}
        faqs={content.faqs}
        howTo={content.howTo}
      />

      {/* SECTION 1: HERO & CONVERTER DECK */}
      <section className="pt-8 sm:pt-12 pb-12 border-b border-slate-200/80 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            {/* Studio Status Indicator with Live Audio Equalizer */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300 mb-4 shadow-xs">
              <AudioVisualizer bars={3} className="h-3 gap-0.5" barWidth="w-0.5" />
              <span className="font-mono text-[11px]">{content.visualizerBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-slate-900 dark:text-zinc-100 leading-tight">
              {content.heroTitlePrefix} <br className="hidden sm:inline" />
              <span className="text-brand-600 dark:text-brand-400">{content.heroTitleHighlight}</span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto font-normal">
              {content.heroSubtitle}
            </p>
          </div>

          {/* CONVERTER DECK */}
          <div className="relative">
            <Converter
              defaultOutputFormat="mp3"
              dropzoneHeadline={content.dropzoneHeadline}
              dropzoneSubheadline={content.dropzoneSubheadline}
            />
          </div>
        </div>
      </section>

      {/* AD BANNER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot position="headerBanner" />
      </div>

      {/* SECTION 2: POPULAR CONVERSIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DirectAnswer
          question={content.directAnswerQuestion}
          answer={content.directAnswerAnswer}
          badge={content.overviewBadge}
        />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
              {content.popularTitle}
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              {content.popularSubtitle}
            </p>
          </div>
          <Link
            href={getLocalizedPath(locale, "/audio-converter")}
            className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            <span>{content.allFormatsLabel}</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.popularConversions.map((conv) => (
            <Link
              key={conv.href}
              href={getLocalizedPath(locale, conv.href)}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded px-2 py-0.5">
                    {conv.badge}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1.5 transition-all duration-200" />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
                  {conv.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {conv.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: SUPPORTED CODECS */}
      <section className="bg-slate-50 dark:bg-white/[0.02] py-12 border-y border-slate-200/80 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-8">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
              {content.codecsTitle}
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              {content.codecsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Audio Outputs */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5">
              <div className="flex items-center gap-2 mb-4">
                <FileAudio className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">{content.audioOutputsHeading}</h3>
              </div>

              <div className="space-y-2.5">
                {content.outputFormats.map((fmt) => (
                  <div key={fmt.id} className="flex items-start justify-between border-b border-slate-100 dark:border-white/5 pb-2.5 text-xs">
                    <div>
                      <span className="font-medium text-slate-800 dark:text-zinc-200">{fmt.name}</span>
                      <span className="ml-1.5 text-slate-400 font-mono">({fmt.extension})</span>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">{fmt.desc}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200/60 dark:border-white/5">
                      {fmt.isLossless ? content.losslessLabel : fmt.defaultBitrate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Extraction */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Film className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">{content.videoInputsHeading}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {content.videoFormats.map((v) => (
                  <div key={v.ext} className="rounded-lg bg-slate-50 dark:bg-white/5 p-2.5 border border-slate-200/80 dark:border-white/10">
                    <div className="font-mono text-xs font-medium text-slate-800 dark:text-zinc-200">{v.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">{v.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-slate-50 dark:bg-white/5 p-3 text-xs text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/10">
                <span className="font-medium text-slate-800 dark:text-zinc-200">{content.streamDemuxingPrefix} </span>
                {content.streamDemuxingBody}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STEPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
            {content.howItWorksTitle}
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            {content.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
            <div className="font-mono text-xs text-brand-600 dark:text-brand-400 mb-2">01</div>
            <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">{content.step1Title}</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              {content.step1Desc}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
            <div className="font-mono text-xs text-brand-600 dark:text-brand-400 mb-2">02</div>
            <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">{content.step2Title}</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              {content.step2Desc}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
            <div className="font-mono text-xs text-brand-600 dark:text-brand-400 mb-2">03</div>
            <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-100">{content.step3Title}</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              {content.step3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8">
          <div className="max-w-xl mb-6">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
              {content.featuresTitle}
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              {content.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feat) => (
              <div key={feat.title} className="flex flex-col items-start">
                <feat.icon className="h-4 w-4 text-brand-600 dark:text-brand-400 mb-2.5" />
                <h3 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100">{feat.title}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-CONTENT AD */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot position="inContent" />
      </div>

      {/* SECTION 6: FAQS */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
            {content.faqTitle}
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            {content.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {content.faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-4">
              <h3 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-zinc-100 flex items-start gap-2">
                <HelpCircle className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed pl-5.5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function getHomeContent(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        seoTitle: "Kostenloser Online-Audiokonverter & Video-zu-Audio-Extraktor",
        seoDescription: "Konvertieren Sie Audiodateien und extrahieren Sie Tonspuren aus MP4-, MOV- und MKV-Videos online kostenlos. 100% privat im Browser.",
        visualizerBadge: "100% Privat · Auf dem Gerät verarbeitet",
        heroTitlePrefix: "Audio- und Videodateien umwandeln.",
        heroTitleHighlight: "Lokal in Ihrem Browser",
        heroSubtitle: "Konvertieren Sie MP3, WAV, M4A, FLAC und extrahieren Sie Tonspuren aus MP4- oder MOV-Videos. Verarbeitung im Browser-RAM ohne Uploads.",
        dropzoneHeadline: "Audio- oder Videodateien hier ablegen",
        dropzoneSubheadline: "MP3, WAV, M4A, FLAC, MP4, MOV, MKV und mehr · Auf dem Gerät verarbeitet",
        overviewBadge: "Übersicht",
        directAnswerQuestion: "Wie konvertiere ich Audio oder extrahiere Ton aus Videos ohne Server-Upload?",
        directAnswerAnswer: "BrowserConvert wandelt Dateien direkt in Ihrem Webbrowser um, ohne sie hochzuladen. Ziehen Sie Ihre Audio- oder Videodateien in den Konverter, wählen Sie das Zielformat (MP3, WAV, M4A, FLAC, OGG, OPUS) und klicken Sie auf Konvertieren. Die gesamte Verarbeitung erfolgt im Arbeitsspeicher Ihres Geräts mit vollem Datenschutz und null Server-Uploads.",
        popularTitle: "Beliebte Konvertierungen",
        popularSubtitle: "Vorkonfigurierte Konverter für gängige Audio-Workflows.",
        allFormatsLabel: "Alle Audioformate",
        popularConversions: [
          { title: "MP4 to MP3", href: "/mp4-to-mp3", description: "Extrahieren Sie Audiospuren aus MP4-Videos direkt im Browser.", badge: "Video zu Audio" },
          { title: "WAV to MP3", href: "/wav-to-mp3", description: "Komprimieren Sie Studio-WAV-Aufnahmen in hochwertige MP3-Dateien.", badge: "Kompression" },
          { title: "M4A to MP3", href: "/m4a-to-mp3", description: "Konvertieren Sie iPhone-Sprachmemos und AAC-Audios in Standard-MP3.", badge: "Universal" },
          { title: "FLAC to MP3", href: "/flac-to-mp3", description: "Verwandeln Sie verlustfreie FLAC-Dateien in 320-kbps-MP3-Dateien.", badge: "FLAC in MP3" },
          { title: "MOV to MP3", href: "/mov-to-mp3", description: "Extrahieren Sie Audio aus QuickTime-MOV-Aufnahmen ohne Server-Upload.", badge: "Video zu Audio" },
          { title: "MP3 to WAV", href: "/mp3-to-wav", description: "Dekomprimieren Sie MP3-Audio in unkomprimiertes 16-Bit-WAV für DAWs.", badge: "Bearbeitung" },
        ],
        codecsTitle: "Unterstützte Codecs und Container",
        codecsSubtitle: "Direkt auf Ihrem Gerät konvertiert mit vollständiger Privatsphäre.",
        audioOutputsHeading: "Audio-Ausgabeformate",
        losslessLabel: "Verlustfrei",
        outputFormats: [
          { id: "mp3", name: "MP3", extension: "mp3", desc: "Universelles Audioformat mit breitester Kompatibilität", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "wav", name: "WAV", extension: "wav", desc: "Unkomprimiertes PCM-Studioformat für Audiobearbeitung", isLossless: true, defaultBitrate: "Lossless" },
          { id: "m4a", name: "M4A", extension: "m4a", desc: "AAC-kodierter Standard für Apple-Geräte und Podcasts", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "flac", name: "FLAC", extension: "flac", desc: "Verlustfreie Kompression für audiophile Archivierung", isLossless: true, defaultBitrate: "Lossless" },
          { id: "ogg", name: "OGG", extension: "ogg", desc: "Open-Source-Vorbis-Format für Spiele und Web", isLossless: false, defaultBitrate: "160 kbps" },
          { id: "opus", name: "OPUS", extension: "opus", desc: "Moderner Sprach- und Streaming-Codec mit niedriger Latenz", isLossless: false, defaultBitrate: "128 kbps" },
        ],
        videoInputsHeading: "Video-Eingabeformate zur Audioextraktion",
        videoFormats: [
          { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
          { name: "MOV", ext: ".mov", desc: "QuickTime" },
          { name: "MKV", ext: ".mkv", desc: "Matroska" },
          { name: "WEBM", ext: ".webm", desc: "WebM" },
          { name: "AVI", ext: ".avi", desc: "AVI" },
          { name: "WMV", ext: ".wmv", desc: "Windows Media" },
          { name: "FLV", ext: ".flv", desc: "Flash" },
          { name: "3GP", ext: ".3gp", desc: "Mobil" },
          { name: "TS", ext: ".ts", desc: "Transport" },
        ],
        streamDemuxingPrefix: "Stream-Demuxing:",
        streamDemuxingBody: "Videospuren werden bei der Verarbeitung komplett umgangen, um maximale Kodiergeschwindigkeit und Akkueffizienz zu gewährleisten.",
        howItWorksTitle: "So funktioniert es",
        howItWorksSubtitle: "Drei Schritte von der Quelldatei zum fertigen Audio.",
        step1Title: "Medien auswählen",
        step1Desc: "Ziehen Sie einzelne Titel oder ganze Stapel in den Konverter. Dateien werden direkt in den Browser-RAM geladen.",
        step2Title: "Parameter anpassen",
        step2Desc: "Zielformat wählen, Bitraten von 64 bis 320 kbps festlegen oder Sampleraten und Schnittbereiche anpassen.",
        step3Title: "Audio exportieren",
        step3Desc: "Klicken Sie auf Konvertieren für lokale Verarbeitung. Einzelne Titel speichern oder gesamten Stapel als ZIP laden.",
        featuresTitle: "Systemfunktionen",
        featuresSubtitle: "Entwickelt für maximale Privatsphäre und professionelle Audiostandards.",
        features: [
          { icon: ShieldCheck, title: "Client-Datenschutz", desc: "Dateien verlassen Ihren Computer niemals. Die Verarbeitung läuft direkt im Browser-RAM ohne Server-Uploads." },
          { icon: Zap, title: "Kein Konto erforderlich", desc: "Dateien ablegen und sofort konvertieren. Keine Registrierung, keine E-Mail-Bestätigung und keine täglichen Limits." },
          { icon: Sliders, title: "Präzise Audiosteuerung", desc: "Bitraten von 64 bis 320 kbps wählen, Sampleraten festlegen, Mono oder Stereo einstellen und Schnittmarken setzen." },
          { icon: FolderArchive, title: "Stapel & ZIP-Export", desc: "Mehrere Titel gleichzeitig verarbeiten und den gesamten konvertierten Stapel in einem einzigen Archiv herunterladen." },
        ],
        faqTitle: "Häufig gestellte Fragen",
        faqSubtitle: "Antworten auf die wichtigsten Fragen zur lokalen Audiokonvertierung im Browser.",
        faqs: [
          { q: "Wie verarbeitet BrowserConvert Dateien ohne sie hochzuladen?", a: "BrowserConvert verarbeitet Audio direkt in Ihrem Webbrowser mit WebAssembly. Wenn Sie eine Datei auswählen, wandelt Ihr Gerät den Datenstrom lokal im Arbeitsspeicher um. Es werden keine Mediendaten über das Internet übertragen." },
          { q: "Aus welchen Videoformaten kann Ton extrahiert werden?", a: "Unterstützte Video-Container umfassen MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP und TS. Die Engine trennt die Audiospur heraus und kodiert sie direkt in Ihr gewünschtes Zielformat." },
          { q: "Welche Audio-Bitrate wird empfohlen?", a: "Für Musik und alltägliches Hören bieten 192 oder 256 kbps die beste Balance aus Klangtreue und Dateigröße. Für Podcasts und Sprache reichen 96 bis 128 kbps aus. Für Mastering oder Archivierung wählen Sie 320 kbps oder verlustfreies WAV/FLAC." },
          { q: "Verbessert die Konvertierung von MP3 zu WAV die Tonqualität?", a: "Nein. MP3 ist ein verlustbehaftetes Format; einmal entfernte Frequenzen können nicht wiederhergestellt werden. Die Konvertierung in WAV erzeugt einen unkomprimierten Stream für Schnittprogramme, stellt aber keine Daten wieder her." },
          { q: "Gibt es ein Dateigrößenlimit?", a: "Da die Verarbeitung vollständig im RAM Ihres Geräts stattfindet, lassen sich Dateien bis zu 1 GB auf modernen Geräten reibungslos konvertieren. Sehr große Videodateien können durch den verfügbaren Arbeitsspeicher begrenzt sein." },
          { q: "Funktioniert dies auch auf Mobilgeräten?", a: "Ja. BrowserConvert funktioniert auf modernen mobilen Browsern, einschließlich Safari auf dem iPhone/iPad und Chrome auf Android." },
        ],
        howTo: {
          name: "So konvertieren Sie Audiodateien online",
          description: "Konvertieren Sie Audio- und Videodateien lokal im Browser in drei einfachen Schritten mit vollem Datenschutz.",
          steps: [
            { name: "Medien auswählen", text: "Ziehen Sie eine oder mehrere Audio- oder Videodateien in den Konverter. Ihre Dateien verlassen Ihr Gerät niemals." },
            { name: "Format & Bitrate wählen", text: "Wählen Sie das Zielformat (MP3, WAV, M4A, FLAC, OGG oder OPUS) und passen Sie die Bitrate bis zu 320 kbps an." },
            { name: "Konvertieren & Herunterladen", text: "Klicken Sie auf Konvertieren für die lokale Verarbeitung. Laden Sie einzelne Titel oder alles als ZIP-Archiv herunter." },
          ],
        },
      };

    case "es":
      return {
        seoTitle: "Convertidor de Audio Online Gratis y Extractor de Video a Audio",
        seoDescription: "Convierte archivos de audio y extrae sonido de videos MP4, MOV y MKV online gratis. Procesamiento 100% privado en el navegador.",
        visualizerBadge: "100% Privado · Procesado en tu dispositivo",
        heroTitlePrefix: "Convierte archivos de audio y video.",
        heroTitleHighlight: "Localmente en tu navegador",
        heroSubtitle: "Convierte MP3, WAV, M4A, FLAC y extrae audio de videos MP4 o MOV. El procesamiento se ejecuta en la memoria del navegador sin subidas.",
        dropzoneHeadline: "Arrastra archivos de audio o video aquí",
        dropzoneSubheadline: "MP3, WAV, M4A, FLAC, MP4, MOV, MKV y más · Procesado en tu dispositivo",
        overviewBadge: "Resumen",
        directAnswerQuestion: "¿Cómo convertir audio o extraer sonido de videos sin subir archivos a un servidor?",
        directAnswerAnswer: "BrowserConvert convierte archivos directamente en tu navegador web sin subirlos a ningún servidor. Arrastra tus archivos de audio o video al convertidor, elige el formato de salida (MP3, WAV, M4A, FLAC, OGG, OPUS) y haz clic en Convertir. Todo el procesamiento se realiza en la memoria de tu dispositivo con total privacidad y sin subidas a servidores.",
        popularTitle: "Conversiones populares",
        popularSubtitle: "Convertidores preconfigurados para flujos de audio estándar.",
        allFormatsLabel: "Todos los formatos",
        popularConversions: [
          { title: "MP4 a MP3", href: "/mp4-to-mp3", description: "Extrae pistas de audio de videos MP4 directamente en tu navegador.", badge: "Video a audio" },
          { title: "WAV a MP3", href: "/wav-to-mp3", description: "Comprime grabaciones maestras WAV en archivos MP3 de alta fidelidad.", badge: "Compresión" },
          { title: "M4A a MP3", href: "/m4a-to-mp3", description: "Convierte notas de voz de iPhone y audio AAC a MP3 estándar.", badge: "Universal" },
          { title: "FLAC a MP3", href: "/flac-to-mp3", description: "Transforma pistas FLAC de estudio en archivos MP3 a 320 kbps.", badge: "FLAC a MP3" },
          { title: "MOV a MP3", href: "/mov-to-mp3", description: "Extrae audio de grabaciones QuickTime MOV sin enviar el video a servidores.", badge: "Video a audio" },
          { title: "MP3 a WAV", href: "/mp3-to-wav", description: "Descomprime audio MP3 a WAV PCM de 16 bits sin compresión para DAWs.", badge: "Edición" },
        ],
        codecsTitle: "Códecs y contenedores compatibles",
        codecsSubtitle: "Convertidos directamente en tu dispositivo con total privacidad.",
        audioOutputsHeading: "Formatos de salida de audio",
        losslessLabel: "Sin pérdida",
        outputFormats: [
          { id: "mp3", name: "MP3", extension: "mp3", desc: "Formato de audio universal con la máxima compatibilidad", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "wav", name: "WAV", extension: "wav", desc: "Formato de estudio PCM sin compresión para edición de audio", isLossless: true, defaultBitrate: "Lossless" },
          { id: "m4a", name: "M4A", extension: "m4a", desc: "Estándar codificado en AAC para dispositivos Apple y podcasts", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "flac", name: "FLAC", extension: "flac", desc: "Compresión sin pérdida para archivado audiófilo", isLossless: true, defaultBitrate: "Lossless" },
          { id: "ogg", name: "OGG", extension: "ogg", desc: "Formato Vorbis de código abierto para juegos y web", isLossless: false, defaultBitrate: "160 kbps" },
          { id: "opus", name: "OPUS", extension: "opus", desc: "Códec moderno de baja latencia para voz y streaming", isLossless: false, defaultBitrate: "128 kbps" },
        ],
        videoInputsHeading: "Formatos de video para extracción de audio",
        videoFormats: [
          { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
          { name: "MOV", ext: ".mov", desc: "QuickTime" },
          { name: "MKV", ext: ".mkv", desc: "Matroska" },
          { name: "WEBM", ext: ".webm", desc: "WebM" },
          { name: "AVI", ext: ".avi", desc: "AVI" },
          { name: "WMV", ext: ".wmv", desc: "Windows Media" },
          { name: "FLV", ext: ".flv", desc: "Flash" },
          { name: "3GP", ext: ".3gp", desc: "Móvil" },
          { name: "TS", ext: ".ts", desc: "Transport" },
        ],
        streamDemuxingPrefix: "Demultiplexación de flujo:",
        streamDemuxingBody: "Las pistas de video se omiten por completo durante el procesamiento para maximizar la velocidad y ahorrar batería.",
        howItWorksTitle: "Cómo funciona",
        howItWorksSubtitle: "Tres pasos desde el archivo original hasta el audio convertido.",
        step1Title: "Selecciona archivos",
        step1Desc: "Arrastra pistas individuales o lotes al convertidor. Los archivos se cargan directamente en la memoria del navegador.",
        step2Title: "Configura parámetros",
        step2Desc: "Elige el formato de salida, define bitrates de 64 a 320 kbps o ajusta la frecuencia de muestreo y recorte.",
        step3Title: "Exporta el audio",
        step3Desc: "Haz clic en Convertir para procesar localmente. Guarda pistas individuales o descarga el lote en un archivo ZIP.",
        featuresTitle: "Capacidades del sistema",
        featuresSubtitle: "Diseñado para la privacidad del usuario y estándares de audio profesional.",
        features: [
          { icon: ShieldCheck, title: "Privacidad en el cliente", desc: "Los archivos nunca salen de tu ordenador. Todo el procesamiento se realiza en la memoria del navegador sin servidores." },
          { icon: Zap, title: "Sin registro ni cuentas", desc: "Arrastra tus archivos y conviértelos al instante. Sin cuentas, sin confirmaciones de correo y sin límites diarios." },
          { icon: Sliders, title: "Controles de audio exactos", desc: "Configura bitrates de 64 a 320 kbps, define frecuencias de muestreo, selecciona mono o estéreo y ajusta tiempos." },
          { icon: FolderArchive, title: "Lotes y exportación ZIP", desc: "Procesa múltiples pistas en simultáneo y descarga el lote completo convertido en un único archivo ZIP." },
        ],
        faqTitle: "Preguntas frecuentes",
        faqSubtitle: "Respuestas a las preguntas habituales sobre la conversión de audio privada en el navegador.",
        faqs: [
          { q: "¿Cómo procesa BrowserConvert los archivos sin subirlos?", a: "BrowserConvert procesa el audio directamente en tu navegador web mediante WebAssembly. Cuando seleccionas un archivo, tu dispositivo convierte el flujo localmente en la memoria RAM. Ningún dato viaja por internet." },
          { q: "¿De qué formatos de video puedo extraer audio?", a: "Los contenedores de video compatibles incluyen MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP y TS. El motor extrae la pista de audio sin procesar y la codifica directamente en el formato deseado." },
          { q: "¿Qué bitrate de audio se recomienda?", a: "Para música y escucha general, 192 o 256 kbps ofrece el mejor equilibrio entre fidelidad y tamaño. Para podcasts y voz, 96 a 128 kbps es suficiente. Para masterización o archivo, elige 320 kbps o WAV/FLAC sin pérdida." },
          { q: "¿Convertir MP3 a WAV mejorará la calidad del sonido?", a: "No. MP3 es un formato comprimido con pérdidas, por lo que las frecuencias eliminadas no se pueden recuperar. Convertir a WAV produce un flujo sin compresión adecuado para edición en DAWs, pero no recupera datos ausentes." },
          { q: "¿Hay un límite de tamaño de archivo?", a: "Debido a que el procesamiento se ejecuta completamente en la memoria RAM de tu dispositivo, los archivos de hasta 1 GB funcionan sin problemas en hardware moderno. Archivos de video muy grandes pueden estar limitados por la memoria disponible." },
          { q: "¿Funciona en dispositivos móviles?", a: "Sí. BrowserConvert funciona en navegadores móviles modernos, incluidos Safari en iPhone/iPad y Chrome en Android." },
        ],
        howTo: {
          name: "Cómo Convertir Archivos de Audio Online",
          description: "Convierte archivos de audio y video localmente en tu navegador en tres sencillos pasos con total privacidad.",
          steps: [
            { name: "Selecciona los Archivos", text: "Arrastra uno o varios archivos de audio o video al convertidor. Los archivos permanecen guardados en tu dispositivo." },
            { name: "Elige Formato y Bitrate", text: "Selecciona el formato de salida deseado (MP3, WAV, M4A, FLAC, OGG u OPUS) y ajusta el bitrate hasta 320 kbps." },
            { name: "Convierte y Descarga", text: "Haz clic en Convertir para procesar localmente. Descarga las pistas individuales o todo el lote en un único archivo ZIP." },
          ],
        },
      };

    case "pt":
      return {
        seoTitle: "Conversor de Áudio Online Grátis e Extrator de Vídeo para Áudio",
        seoDescription: "Converta arquivos de áudio e extraia som de vídeos MP4, MOV e MKV online grátis. Processamento 100% privado no navegador.",
        visualizerBadge: "100% Privado · Processado no aparelho",
        heroTitlePrefix: "Converta arquivos de áudio e vídeo.",
        heroTitleHighlight: "Localmente no seu navegador",
        heroSubtitle: "Converta MP3, WAV, M4A, FLAC e extraia áudio de vídeos MP4 ou MOV. Processamento na memória do navegador sem envio de arquivos.",
        dropzoneHeadline: "Arraste arquivos de áudio ou vídeo para cá",
        dropzoneSubheadline: "MP3, WAV, M4A, FLAC, MP4, MOV, MKV e mais · Processado no aparelho",
        overviewBadge: "Visão Geral",
        directAnswerQuestion: "Como converter áudio ou extrair som de vídeos sem enviar arquivos para servidores?",
        directAnswerAnswer: "O BrowserConvert converte arquivos diretamente no navegador web sem uploads para servidores. Arraste seus arquivos de áudio ou vídeo para o conversor, escolha o formato de saída (MP3, WAV, M4A, FLAC, OGG, OPUS) e clique em Converter. Todo o processamento ocorre na memória do seu aparelho com total privacidade e zero uploads.",
        popularTitle: "Conversões populares",
        popularSubtitle: "Conversores pré-configurados para fluxos de áudio comuns.",
        allFormatsLabel: "Todos os formatos",
        popularConversions: [
          { title: "MP4 para MP3", href: "/mp4-to-mp3", description: "Extraia faixas de áudio de vídeos MP4 diretamente no seu navegador.", badge: "Vídeo para áudio" },
          { title: "WAV para MP3", href: "/wav-to-mp3", description: "Comprima gravações master WAV em arquivos MP3 de alta taxa de bits.", badge: "Compressão" },
          { title: "M4A para MP3", href: "/m4a-to-mp3", description: "Converta notas de voz da Apple e áudios AAC para MP3 padrão.", badge: "Universal" },
          { title: "FLAC para MP3", href: "/flac-to-mp3", description: "Transforme faixas FLAC de estúdio em MP3 a 320 kbps para celular.", badge: "FLAC para MP3" },
          { title: "MOV para MP3", href: "/mov-to-mp3", description: "Extraia áudio de vídeos MOV QuickTime sem enviar arquivos para servidores.", badge: "Vídeo para áudio" },
          { title: "MP3 para WAV", href: "/mp3-to-wav", description: "Descomprima áudios MP3 para WAV PCM de 16 bits para edição em DAWs.", badge: "Edição" },
        ],
        codecsTitle: "Codecs e contêineres compatíveis",
        codecsSubtitle: "Convertidos diretamente no seu aparelho com total privacidade.",
        audioOutputsHeading: "Formatos de saída de áudio",
        losslessLabel: "Sem perdas",
        outputFormats: [
          { id: "mp3", name: "MP3", extension: "mp3", desc: "Formato de áudio universal com a maior compatibilidade do mundo", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "wav", name: "WAV", extension: "wav", desc: "Formato de estúdio PCM sem compressão para edição de áudio", isLossless: true, defaultBitrate: "Lossless" },
          { id: "m4a", name: "M4A", extension: "m4a", desc: "Padrão codificado em AAC para aparelhos Apple e podcasts", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "flac", name: "FLAC", extension: "flac", desc: "Compressão sem perdas para arquivamento com fidelidade máxima", isLossless: true, defaultBitrate: "Lossless" },
          { id: "ogg", name: "OGG", extension: "ogg", desc: "Formato Vorbis de código aberto ideal para jogos e web", isLossless: false, defaultBitrate: "160 kbps" },
          { id: "opus", name: "OPUS", extension: "opus", desc: "Codec moderno de baixa latência para voz e streaming", isLossless: false, defaultBitrate: "128 kbps" },
        ],
        videoInputsHeading: "Formatos de vídeo para extração de áudio",
        videoFormats: [
          { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
          { name: "MOV", ext: ".mov", desc: "QuickTime" },
          { name: "MKV", ext: ".mkv", desc: "Matroska" },
          { name: "WEBM", ext: ".webm", desc: "WebM" },
          { name: "AVI", ext: ".avi", desc: "AVI" },
          { name: "WMV", ext: ".wmv", desc: "Windows Media" },
          { name: "FLV", ext: ".flv", desc: "Flash" },
          { name: "3GP", ext: ".3gp", desc: "Celular" },
          { name: "TS", ext: ".ts", desc: "Transport" },
        ],
        streamDemuxingPrefix: "Demultiplexação de fluxo:",
        streamDemuxingBody: "As faixas de vídeo são totalmente ignoradas durante o processamento para maximizar a velocidade e economizar bateria.",
        howItWorksTitle: "Como funciona",
        howItWorksSubtitle: "Três passos do arquivo de origem até o áudio convertido.",
        step1Title: "Selecionar mídia",
        step1Desc: "Arraste faixas individuais ou lotes para o conversor. Os arquivos são carregados diretamente na memória do navegador.",
        step2Title: "Configurar parâmetros",
        step2Desc: "Escolha o formato de saída, ajuste taxas de bits de 64 a 320 kbps ou configure taxa de amostragem e cortes.",
        step3Title: "Exportar áudio",
        step3Desc: "Clique em Converter para processar localmente. Salve faixas individuais ou baixe o lote completo em ZIP.",
        featuresTitle: "Recursos do sistema",
        featuresSubtitle: "Projetado com foco em privacidade total e padrões profissionais de áudio.",
        features: [
          { icon: ShieldCheck, title: "Privacidade no aparelho", desc: "Os arquivos nunca saem do seu computador. Todo o processamento ocorre na memória do navegador sem servidores." },
          { icon: Zap, title: "Sem cadastro ou contas", desc: "Arraste os arquivos e converta na hora. Sem cadastros, sem confirmação de e-mail e sem cotas diárias." },
          { icon: Sliders, title: "Controles de áudio precisos", desc: "Defina taxas de bits de 64 a 320 kbps, configure frequências de amostragem, mono ou estéreo e pontos de corte." },
          { icon: FolderArchive, title: "Fila em lote e ZIP", desc: "Processe várias faixas simultaneamente e baixe todo o lote convertido em um único arquivo compactado." },
        ],
        faqTitle: "Perguntas frequentes",
        faqSubtitle: "Respostas às dúvidas mais comuns sobre conversão de áudio privada no navegador.",
        faqs: [
          { q: "Como o BrowserConvert processa arquivos sem enviá-los?", a: "O BrowserConvert processa áudio diretamente no seu navegador usando WebAssembly. Quando você seleciona um arquivo, seu aparelho converte o fluxo localmente na memória RAM sem transmitir dados pela internet." },
          { q: "De quais formatos de vídeo posso extrair áudio?", a: "Os contêineres de vídeo compatíveis incluem MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP e TS. O mecanismo extrai a faixa de áudio original e a codifica diretamente para o formato escolhido." },
          { q: "Qual taxa de bits de áudio é recomendada?", a: "Para música e uso geral, 192 ou 256 kbps oferece o melhor equilíbrio entre qualidade e tamanho. Para podcasts e voz, 96 a 128 kbps é suficiente. Para masterização ou arquivo, escolha 320 kbps ou WAV/FLAC sem perdas." },
          { q: "Converter MP3 para WAV melhora a qualidade do som?", a: "Não. MP3 é um formato comprimido com perdas; frequências removidas não podem ser restauradas. A conversão para WAV gera um fluxo sem compressão ótimo para edição em DAWs, mas não recria dados ausentes." },
          { q: "Existe limite de tamanho de arquivo?", a: "Como o processamento é executado inteiramente na memória RAM do seu aparelho, arquivos de até 1 GB funcionam perfeitamente em computadores e celulares modernos." },
          { q: "Funciona em celulares e tablets?", a: "Sim. O BrowserConvert funciona nos principais navegadores móveis, incluindo o Safari no iPhone/iPad e o Chrome no Android." },
        ],
        howTo: {
          name: "Como Converter Arquivos de Áudio Online",
          description: "Converta áudio e vídeo localmente no seu navegador em três passos simples com privacidade total.",
          steps: [
            { name: "Selecione os Arquivos", text: "Arraste um ou mais arquivos de áudio ou vídeo para o conversor. Os arquivos nunca saem do seu aparelho." },
            { name: "Escolha Formato e Bitrate", text: "Escolha o formato de saída (MP3, WAV, M4A, FLAC, OGG ou OPUS) e configure a taxa de bits até 320 kbps." },
            { name: "Converta e Baixe", text: "Clique em Converter para processar localmente. Baixe arquivos individuais ou tudo em um único arquivo ZIP." },
          ],
        },
      };

    case "fr":
      return {
        seoTitle: "Convertisseur Audio en Ligne Gratuit & Extracteur Vidéo vers Audio",
        seoDescription: "Convertissez des fichiers audio et extrayez le son de vidéos MP4, MOV et MKV en ligne gratuitement. 100% privé dans le navigateur.",
        visualizerBadge: "100% Privé · Traité sur votre appareil",
        heroTitlePrefix: "Convertissez vos fichiers audio et vidéo.",
        heroTitleHighlight: "Localement dans votre navigateur",
        heroSubtitle: "Convertissez MP3, WAV, M4A, FLAC et extrayez l'audio de vidéos MP4 ou MOV. Le traitement s'exécute dans la mémoire du navigateur sans envoi.",
        dropzoneHeadline: "Déposez vos fichiers audio ou vidéo ici",
        dropzoneSubheadline: "MP3, WAV, M4A, FLAC, MP4, MOV, MKV et plus · Traité sur votre appareil",
        overviewBadge: "Aperçu",
        directAnswerQuestion: "Comment convertir de l'audio ou extraire le son de vidéos sans envoyer de fichiers sur un serveur ?",
        directAnswerAnswer: "BrowserConvert convertit vos fichiers directement dans votre navigateur web sans aucun transfert vers des serveurs. Glissez-déposez vos fichiers audio ou vidéo dans le convertisseur, sélectionnez votre format de sortie (MP3, WAV, M4A, FLAC, OGG, OPUS) et cliquez sur Convertir. Tout le traitement s'effectue dans la mémoire de votre appareil avec une confidentialité absolue.",
        popularTitle: "Conversions populaires",
        popularSubtitle: "Convertisseurs préconfigurés pour les flux de travail audio courants.",
        allFormatsLabel: "Tous les formats audio",
        popularConversions: [
          { title: "MP4 en MP3", href: "/mp4-to-mp3", description: "Extrayez des pistes audio de vidéos MP4 directement dans votre navigateur.", badge: "Vidéo en audio" },
          { title: "WAV en MP3", href: "/wav-to-mp3", description: "Compressez les enregistrements studio WAV en fichiers MP3 haute fidélité.", badge: "Compression" },
          { title: "M4A en MP3", href: "/m4a-to-mp3", description: "Convertissez les mémos vocaux iPhone et audios AAC en MP3 universel.", badge: "Universel" },
          { title: "FLAC en MP3", href: "/flac-to-mp3", description: "Transformez des pistes FLAC sans perte en fichiers MP3 320 kbps.", badge: "FLAC en MP3" },
          { title: "MOV en MP3", href: "/mov-to-mp3", description: "Extrayez l'audio de vidéos MOV QuickTime sans transfert vers des serveurs.", badge: "Vidéo en audio" },
          { title: "MP3 en WAV", href: "/mp3-to-wav", description: "Décompressez l'audio MP3 en WAV PCM 16 bits non compressé pour les DAWs.", badge: "Édition" },
        ],
        codecsTitle: "Codecs et conteneurs pris en charge",
        codecsSubtitle: "Convertis directement sur votre appareil avec une confidentialité totale.",
        audioOutputsHeading: "Formats de sortie audio",
        losslessLabel: "Sans perte",
        outputFormats: [
          { id: "mp3", name: "MP3", extension: "mp3", desc: "Format audio universel offrant la plus large compatibilité", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "wav", name: "WAV", extension: "wav", desc: "Format de studio PCM non compressé pour le montage audio", isLossless: true, defaultBitrate: "Lossless" },
          { id: "m4a", name: "M4A", extension: "m4a", desc: "Standard encodé en AAC pour les appareils Apple et podcasts", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "flac", name: "FLAC", extension: "flac", desc: "Compression sans perte pour archivage haute fidélité", isLossless: true, defaultBitrate: "Lossless" },
          { id: "ogg", name: "OGG", extension: "ogg", desc: "Format Vorbis open-source adapté aux jeux et au web", isLossless: false, defaultBitrate: "160 kbps" },
          { id: "opus", name: "OPUS", extension: "opus", desc: "Codec moderne à faible latence pour la voix et le streaming", isLossless: false, defaultBitrate: "128 kbps" },
        ],
        videoInputsHeading: "Formats vidéo pour l'extraction audio",
        videoFormats: [
          { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
          { name: "MOV", ext: ".mov", desc: "QuickTime" },
          { name: "MKV", ext: ".mkv", desc: "Matroska" },
          { name: "WEBM", ext: ".webm", desc: "WebM" },
          { name: "AVI", ext: ".avi", desc: "AVI" },
          { name: "WMV", ext: ".wmv", desc: "Windows Media" },
          { name: "FLV", ext: ".flv", desc: "Flash" },
          { name: "3GP", ext: ".3gp", desc: "Mobile" },
          { name: "TS", ext: ".ts", desc: "Transport" },
        ],
        streamDemuxingPrefix: "Démultiplexage de flux :",
        streamDemuxingBody: "Les pistes vidéo sont entièrement ignorées pendant le traitement afin de maximiser la vitesse d'encodage et préserver la batterie.",
        howItWorksTitle: "Comment ça fonctionne",
        howItWorksSubtitle: "Trois étapes du fichier source au résultat converti.",
        step1Title: "Sélectionner les médias",
        step1Desc: "Glissez des pistes individuelles ou des lots dans le convertisseur. Les fichiers sont chargés dans la mémoire du navigateur.",
        step2Title: "Configurer les paramètres",
        step2Desc: "Choisissez le format de sortie, réglez le débit de 64 à 320 kbps ou ajustez l'échantillonnage et le découpage.",
        step3Title: "Exporter l'audio",
        step3Desc: "Cliquez sur Convertir pour traiter localement. Enregistrez les pistes individuelles ou téléchargez le lot en ZIP.",
        featuresTitle: "Fonctionnalités du système",
        featuresSubtitle: "Conçu autour de la confidentialité absolue et des normes audio professionnelles.",
        features: [
          { icon: ShieldCheck, title: "Confidentialité client", desc: "Vos fichiers ne quittent jamais votre ordinateur. Tout le traitement s'exécute dans le navigateur sans serveurs." },
          { icon: Zap, title: "Aucun compte requis", desc: "Déposez vos fichiers et convertissez-les immédiatement. Sans inscription, sans e-mail et sans limites." },
          { icon: Sliders, title: "Contrôles audio précis", desc: "Réglez le débit de 64 à 320 kbps, configurez les fréquences d'échantillonnage, mono ou stéréo et le découpage." },
          { icon: FolderArchive, title: "File par lots & ZIP", desc: "Traitez plusieurs pistes simultanément et téléchargez l'ensemble des fichiers convertis dans une seule archive ZIP." },
        ],
        faqTitle: "Foire aux questions",
        faqSubtitle: "Réponses aux questions courantes sur la conversion audio privée dans le navigateur.",
        faqs: [
          { q: "Comment BrowserConvert traite-t-il les fichiers sans les envoyer sur un serveur ?", a: "BrowserConvert traite le son directement dans votre navigateur à l'aide de WebAssembly. Lorsque vous sélectionnez un fichier, votre appareil convertit le flux localement dans sa mémoire vive. Aucune donnée ne circule sur Internet." },
          { q: "De quels formats vidéo puis-je extraire le son ?", a: "Les conteneurs vidéo pris en charge incluent MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP et TS. Le moteur sépare la piste audio et la réencode directement dans le format de votre choix." },
          { q: "Quel débit audio est recommandé ?", a: "Pour la musique et l'écoute quotidienne, 192 ou 256 kbps offre le meilleur compromis entre clarté acoustique et taille de fichier. Pour les podcasts et la voix, 96 à 128 kbps suffit amplement. Pour l'archivage, choisissez 320 kbps ou WAV/FLAC sans perte." },
          { q: "La conversion de MP3 en WAV améliore-t-elle la qualité audio ?", a: "Non. Le MP3 est un format avec pertes ; les fréquences éliminées lors de la compression ne peuvent pas être reconstituées. La conversion en WAV produit un flux non compressé adapté aux logiciels de montage, mais ne restaure pas les données manquantes." },
          { q: "Existe-t-il une limite de taille de fichier ?", a: "Comme le traitement s'exécute entièrement dans la mémoire de votre appareil, les fichiers jusqu'à 1 Go sont traités sans encombre sur le matériel moderne." },
          { q: "L'outil fonctionne-t-il sur smartphone et tablette ?", a: "Oui. BrowserConvert fonctionne sur tous les navigateurs mobiles modernes, y compris Safari sur iPhone/iPad et Chrome sur Android." },
        ],
        howTo: {
          name: "Comment convertir des fichiers audio en ligne",
          description: "Convertissez des fichiers audio et vidéo localement dans votre navigateur en trois étapes simples avec une confidentialité totale.",
          steps: [
            { name: "Sélectionner les fichiers", text: "Glissez-déposez un ou plusieurs fichiers audio ou vidéo dans le convertisseur. Vos fichiers restent sur votre appareil." },
            { name: "Choisir le format et le débit", text: "Choisissez le format de sortie souhaité (MP3, WAV, M4A, FLAC, OGG ou OPUS) et réglez le débit jusqu'à 320 kbps." },
            { name: "Convertir et télécharger", text: "Cliquez sur Convertir pour traiter localement. Téléchargez les pistes individuelles ou le tout sous forme d'archive ZIP." },
          ],
        },
      };

    case "it":
      return {
        seoTitle: "Convertitore Audio Online Gratuito & Estrattore Video in Audio",
        seoDescription: "Converti file audio ed estrai audio da video MP4, MOV e MKV online gratis. Elaborazione 100% privata nel browser.",
        visualizerBadge: "100% Privato · Elaborato sul dispositivo",
        heroTitlePrefix: "Converti file audio e video.",
        heroTitleHighlight: "Localmente nel tuo browser",
        heroSubtitle: "Converti MP3, WAV, M4A, FLAC ed estrai audio da video MP4 o MOV. Elaborazione nella memoria del browser senza caricamento di file.",
        dropzoneHeadline: "Trascina qui i file audio o video",
        dropzoneSubheadline: "MP3, WAV, M4A, FLAC, MP4, MOV, MKV e altro · Elaborato sul dispositivo",
        overviewBadge: "Panoramica",
        directAnswerQuestion: "Come posso convertire audio o estrarre tracce audio da video senza caricarli su un server?",
        directAnswerAnswer: "BrowserConvert converte i file direttamente nel tuo browser web senza caricarli su server esterni. Trascina i tuoi file audio o video nel convertitore, seleziona il formato di output (MP3, WAV, M4A, FLAC, OGG, OPUS) e clicca su Converti. Tutta l'elaborazione avviene nella memoria del tuo dispositivo con massima privacy e zero upload.",
        popularTitle: "Conversioni popolari",
        popularSubtitle: "Convertitori preconfigurati per i flussi di lavoro audio più comuni.",
        allFormatsLabel: "Tutti i formati audio",
        popularConversions: [
          { title: "MP4 a MP3", href: "/mp4-to-mp3", description: "Estrai tracce audio da video MP4 direttamente nel tuo browser.", badge: "Video in audio" },
          { title: "WAV a MP3", href: "/wav-to-mp3", description: "Comprimi registrazioni studio WAV in file MP3 ad alta fedeltà.", badge: "Compressione" },
          { title: "M4A a MP3", href: "/m4a-to-mp3", description: "Converti memo vocali iPhone e audio AAC in formato MP3 universale.", badge: "Universale" },
          { title: "FLAC a MP3", href: "/flac-to-mp3", description: "Trasforma tracce FLAC senza perdita in file MP3 a 320 kbps.", badge: "FLAC a MP3" },
          { title: "MOV a MP3", href: "/mov-to-mp3", description: "Estrai l'audio dalle registrazioni QuickTime MOV senza caricamenti sui server.", badge: "Video in audio" },
          { title: "MP3 a WAV", href: "/mp3-to-wav", description: "Decomprimi l'audio MP3 in WAV PCM non compresso a 16 bit per DAW.", badge: "Editing" },
        ],
        codecsTitle: "Codec e contenitori supportati",
        codecsSubtitle: "Convertiti direttamente sul tuo dispositivo con totale privacy.",
        audioOutputsHeading: "Formati di output audio",
        losslessLabel: "Senza perdita",
        outputFormats: [
          { id: "mp3", name: "MP3", extension: "mp3", desc: "Formato audio universale con la massima compatibilità", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "wav", name: "WAV", extension: "wav", desc: "Formato studio PCM non compresso per l'editing audio", isLossless: true, defaultBitrate: "Lossless" },
          { id: "m4a", name: "M4A", extension: "m4a", desc: "Standard codificato in AAC per dispositivi Apple e podcast", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "flac", name: "FLAC", extension: "flac", desc: "Compressione senza perdita per archiviazione ad altissima fedeltà", isLossless: true, defaultBitrate: "Lossless" },
          { id: "ogg", name: "OGG", extension: "ogg", desc: "Formato Vorbis open source per videogiochi e web", isLossless: false, defaultBitrate: "160 kbps" },
          { id: "opus", name: "OPUS", extension: "opus", desc: "Codec moderno a bassa latenza per voce e streaming", isLossless: false, defaultBitrate: "128 kbps" },
        ],
        videoInputsHeading: "Formati video per estrazione audio",
        videoFormats: [
          { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
          { name: "MOV", ext: ".mov", desc: "QuickTime" },
          { name: "MKV", ext: ".mkv", desc: "Matroska" },
          { name: "WEBM", ext: ".webm", desc: "WebM" },
          { name: "AVI", ext: ".avi", desc: "AVI" },
          { name: "WMV", ext: ".wmv", desc: "Windows Media" },
          { name: "FLV", ext: ".flv", desc: "Flash" },
          { name: "3GP", ext: ".3gp", desc: "Mobile" },
          { name: "TS", ext: ".ts", desc: "Transport" },
        ],
        streamDemuxingPrefix: "Demuxing del flusso:",
        streamDemuxingBody: "Le tracce video vengono completamente ignorate durante l'elaborazione per massimizzare la velocità di codifica e l'efficienza della batteria.",
        howItWorksTitle: "Come funziona",
        howItWorksSubtitle: "Tre passaggi dal file sorgente all'output convertito.",
        step1Title: "Seleziona i file",
        step1Desc: "Trascina singoli brani o lotti nel convertitore. I file vengono caricati direttamente nella memoria del browser.",
        step2Title: "Configura i parametri",
        step2Desc: "Seleziona il formato di output, imposta bitrate da 64 a 320 kbps o regola frequenza di campionamento e ritaglio.",
        step3Title: "Esporta l'audio",
        step3Desc: "Clicca su Converti per elaborare localmente. Salva le singole tracce o scarica l'intero lotto come file ZIP.",
        featuresTitle: "Funzionalità del sistema",
        featuresSubtitle: "Progettato attorno alla privacy del dispositivo e agli standard audio.",
        features: [
          { icon: ShieldCheck, title: "Privacy sul dispositivo", desc: "I file non lasciano mai il tuo dispositivo. L'elaborazione avviene nella memoria del browser senza server." },
          { icon: Zap, title: "Nessun account richiesto", desc: "Trascina i file e convertili subito. Nessuna registrazione, nessuna email di conferma e nessun limite." },
          { icon: Sliders, title: "Controlli audio precisi", desc: "Imposta bitrate da 64 a 320 kbps, frequenze di campionamento, mono o stereo e punti di ritaglio precisi." },
          { icon: FolderArchive, title: "Coda di conversione & ZIP", desc: "Elabora più brani contemporaneamente e scarica l'intero lotto convertito in un unico archivio ZIP." },
        ],
        faqTitle: "Domande frequenti",
        faqSubtitle: "Risposte alle domande più frequenti sulla conversione audio privata nel browser.",
        faqs: [
          { q: "Come fa BrowserConvert a elaborare i file senza caricarli?", a: "BrowserConvert elabora l'audio direttamente nel tuo browser web utilizzando WebAssembly. Quando selezioni un file, il tuo dispositivo converte il flusso localmente nella memoria RAM senza inviare dati su Internet." },
          { q: "Da quali formati video posso estrarre l'audio?", a: "I contenitori video supportati includono MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP e TS. Il motore isola la traccia audio e la ricodifica direttamente nel formato di output prescelto." },
          { q: "Quale bitrate audio è consigliato?", a: "Per la musica e l'ascolto quotidiano, 192 o 256 kbps offre il miglior equilibrio tra fedeltà e dimensione. Per podcast e voce, da 96 a 128 kbps è ideale. Per archiviazione o mastering, scegli 320 kbps o WAV/FLAC senza perdita." },
          { q: "Convertire MP3 in WAV migliora la qualità del suono?", a: "No. L'MP3 è un formato con perdita di dati; le frequenze eliminate durante la compressione non possono essere recuperate. La conversione in WAV genera un flusso non compresso ideale per software di montaggio, ma non ripristina dati mancanti." },
          { q: "C'è un limite di dimensione dei file?", a: "Poiché l'elaborazione avviene interamente nella memoria RAM del tuo dispositivo, file fino a 1 GB vengono convertiti senza problemi su computer e smartphone moderni." },
          { q: "Funziona su smartphone e tablet?", a: "Sì. BrowserConvert funziona su tutti i browser mobili moderni, inclusi Safari su iPhone/iPad e Chrome su Android." },
        ],
        howTo: {
          name: "Come convertire file audio online",
          description: "Converti file audio e video localmente nel tuo browser in tre semplici passaggi con privacy totale.",
          steps: [
            { name: "Seleziona i file", text: "Trascina uno o più file audio o video nel convertitore. I file rimangono sul tuo dispositivo." },
            { name: "Scegli formato e bitrate", text: "Scegli il formato di output desiderato (MP3, WAV, M4A, FLAC, OGG o OPUS) e imposta il bitrate fino a 320 kbps." },
            { name: "Converti e scarica", text: "Fai clic su Converti per elaborare localmente. Scarica le singole tracce o l'intero pacchetto in un archivio ZIP." },
          ],
        },
      };

    default: // "en"
      return {
        seoTitle: "Free Online Audio Converter & Video to Audio Extractor",
        seoDescription: "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser processing. No uploads, no limits.",
        visualizerBadge: "100% Private · Processed on Device",
        heroTitlePrefix: "Convert audio and video files.",
        heroTitleHighlight: "Locally in your browser",
        heroSubtitle: "Convert MP3, WAV, M4A, FLAC, and extract audio from MP4 or MOV videos. Processing runs in browser memory with zero file uploads.",
        dropzoneHeadline: "Drop audio or video files here",
        dropzoneSubheadline: "MP3, WAV, M4A, FLAC, MP4, MOV, MKV and more · Processed on device",
        overviewBadge: "Overview",
        directAnswerQuestion: "How do I convert audio or extract sound from video files online without uploading them?",
        directAnswerAnswer: "BrowserConvert converts files directly inside your web browser without uploading them. Drag and drop your audio or video files into the converter, select your output format (MP3, WAV, M4A, FLAC, OGG, OPUS), and click Convert. All processing takes place in your device memory with complete privacy and zero server uploads.",
        popularTitle: "Popular conversions",
        popularSubtitle: "Preset converters configured for standard audio workflows.",
        allFormatsLabel: "All audio formats",
        popularConversions: [
          { title: "MP4 to MP3", href: "/mp4-to-mp3", description: "Extract audio streams from MP4 clips directly in your browser.", badge: "Video to audio" },
          { title: "WAV to MP3", href: "/wav-to-mp3", description: "Compress master WAV recordings into high-bitrate MP3 files.", badge: "Compression" },
          { title: "M4A to MP3", href: "/m4a-to-mp3", description: "Convert Apple Voice Memos and AAC audio to standard MP3.", badge: "Universal" },
          { title: "FLAC to MP3", href: "/flac-to-mp3", description: "Transform studio FLAC tracks into 320 kbps MP3 files for mobile listening.", badge: "Lossless to MP3" },
          { title: "MOV to MP3", href: "/mov-to-mp3", description: "Extract audio from QuickTime MOV recordings without sending video to any server.", badge: "Video to audio" },
          { title: "MP3 to WAV", href: "/mp3-to-wav", description: "Decompress MP3 audio into uncompressed 16-bit PCM WAV for DAWs.", badge: "Editing" },
        ],
        codecsTitle: "Supported codecs and containers",
        codecsSubtitle: "Converted directly on your device with complete privacy.",
        audioOutputsHeading: "Audio outputs",
        losslessLabel: "Lossless",
        outputFormats: [
          { id: "mp3", name: "MP3", extension: "mp3", desc: "Universal audio format with the broadest hardware support", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "wav", name: "WAV", extension: "wav", desc: "Uncompressed PCM master format for studio editing", isLossless: true, defaultBitrate: "Lossless" },
          { id: "m4a", name: "M4A", extension: "m4a", desc: "AAC-encoded default for Apple devices and podcasts", isLossless: false, defaultBitrate: "192 kbps" },
          { id: "flac", name: "FLAC", extension: "flac", desc: "Lossless compression for bit-perfect archival storage", isLossless: true, defaultBitrate: "Lossless" },
          { id: "ogg", name: "OGG", extension: "ogg", desc: "Open-source Vorbis container for games and web playback", isLossless: false, defaultBitrate: "160 kbps" },
          { id: "opus", name: "OPUS", extension: "opus", desc: "Modern low-latency codec for voice and streaming", isLossless: false, defaultBitrate: "128 kbps" },
        ],
        videoInputsHeading: "Video extraction inputs",
        videoFormats: [
          { name: "MP4", ext: ".mp4", desc: "MPEG-4" },
          { name: "MOV", ext: ".mov", desc: "QuickTime" },
          { name: "MKV", ext: ".mkv", desc: "Matroska" },
          { name: "WEBM", ext: ".webm", desc: "WebM" },
          { name: "AVI", ext: ".avi", desc: "AVI" },
          { name: "WMV", ext: ".wmv", desc: "Windows Media" },
          { name: "FLV", ext: ".flv", desc: "Flash" },
          { name: "3GP", ext: ".3gp", desc: "Mobile" },
          { name: "TS", ext: ".ts", desc: "Transport" },
        ],
        streamDemuxingPrefix: "Stream demuxing:",
        streamDemuxingBody: "Video tracks are bypassed entirely during processing to maximize encoding speed and battery efficiency.",
        howItWorksTitle: "How it works",
        howItWorksSubtitle: "Three steps from source media to converted output.",
        step1Title: "Select media",
        step1Desc: "Drop single tracks or batches into the converter. Files are loaded directly into browser memory.",
        step2Title: "Configure parameters",
        step2Desc: "Select output format, set bitrates from 64 to 320 kbps, or adjust sample rates and trimming.",
        step3Title: "Export audio",
        step3Desc: "Click Convert to process locally. Save individual tracks or download the entire batch as a ZIP.",
        featuresTitle: "System capabilities",
        featuresSubtitle: "Engineered around client privacy and audio standards.",
        features: [
          { icon: ShieldCheck, title: "Client-side privacy", desc: "Files never leave your computer. All processing runs directly inside your browser memory without uploading to any server." },
          { icon: Zap, title: "No account required", desc: "Drop files and convert immediately. No sign-up, no email confirmation, and no daily conversion quotas." },
          { icon: Sliders, title: "Exact audio controls", desc: "Set bitrates from 64 to 320 kbps, configure sample rates, select mono or stereo, and trim timestamps." },
          { icon: FolderArchive, title: "Batch queue & ZIP export", desc: "Process multiple tracks simultaneously and download the converted batch in a single archive." },
        ],
        faqTitle: "Frequently asked questions",
        faqSubtitle: "Common questions about in-browser private audio conversion.",
        faqs: [
          { q: "How does BrowserConvert process files without uploading them?", a: "BrowserConvert processes audio directly inside your web browser. When you select a file, your device converts the stream locally in memory. No media data ever travels across the internet." },
          { q: "Which video formats can I extract audio from?", a: "Supported containers include MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP, and TS. The engine extracts the raw audio stream and encodes it directly to your target format." },
          { q: "What audio bitrate is recommended?", a: "For music and general listening, 192 or 256 kbps offers the best balance of fidelity and size. For podcasts and speech, 96 to 128 kbps is sufficient. For mastering or archiving, choose 320 kbps or lossless WAV/FLAC." },
          { q: "Will converting MP3 to WAV improve audio quality?", a: "No. MP3 is lossy, so lost frequencies cannot be restored. Converting to WAV produces an uncompressed stream suitable for editing in audio workstations, but does not recover missing data." },
          { q: "Is there a file size limit?", a: "Because processing runs entirely in your device RAM, files up to 1 GB run smoothly on modern hardware. Very large video files may be constrained by available system memory." },
          { q: "Does this work on mobile devices?", a: "Yes. BrowserConvert works on modern mobile browsers, including Safari on iPhone/iPad and Chrome on Android." },
        ],
        howTo: {
          name: "How to Convert Audio Files Online",
          description: "Convert audio and video files locally in your browser in three simple steps with complete privacy.",
          steps: [
            { name: "Select Media Files", text: "Drag and drop single or multiple audio or video files into the converter. Files remain stored safely on your device." },
            { name: "Select Format & Bitrate", text: "Choose your target output format (MP3, WAV, M4A, FLAC, OGG, or OPUS) and configure bitrate settings up to 320 kbps." },
            { name: "Convert & Download", text: "Click Convert to process your audio locally. Download individual audio files or get all tracks in a single ZIP archive." },
          ],
        },
      };
  }
}
