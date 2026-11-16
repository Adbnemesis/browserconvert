import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Locale, getLocalizedPath } from "@/i18n";

interface FormatGuideViewProps {
  locale?: Locale;
}

interface FormatItem {
  id: string;
  name: string;
  ext: string;
  type: string;
  bitrates: string;
  efficiency: string;
  compatibility: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  converterLink: string;
}

interface GuideContent {
  seoTitle: string;
  seoDesc: string;
  breadcrumbLabel: string;
  pageTitle: string;
  pageSubtitle: string;
  directAnswerQuestion: string;
  directAnswerAnswer: string;
  overviewBadge: string;
  tableHeaders: {
    format: string;
    compressionType: string;
    bitrate: string;
    fileSize: string;
    bestApplication: string;
    action: string;
  };
  detailsHeading: string;
  bestForLabel: string;
  advantagesLabel: string;
  limitationsLabel: string;
  convertButton: string;
  faqsHeading: string;
  formats: FormatItem[];
  faqs: { q: string; a: string }[];
}

export function FormatGuideView({ locale = "en" }: FormatGuideViewProps) {
  const content = getFormatGuideContent(locale);
  const canonicalUrl = getLocalizedPath(locale, "/format-guide");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        pageType="article"
        title={content.seoTitle}
        description={content.seoDesc}
        url={canonicalUrl}
        breadcrumbs={[{ label: content.breadcrumbLabel, href: canonicalUrl }]}
        faqs={content.faqs}
      />

      <Breadcrumbs items={[{ label: content.breadcrumbLabel, href: canonicalUrl }]} />

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          {content.pageTitle}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content.pageSubtitle}
        </p>
      </div>

      <DirectAnswer
        question={content.directAnswerQuestion}
        answer={content.directAnswerAnswer}
        badge={content.overviewBadge}
      />

      <AdSlot position="headerBanner" />

      {/* Format Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] font-bold text-slate-700 dark:text-zinc-300">
              <th className="p-3.5">{content.tableHeaders.format}</th>
              <th className="p-3.5">{content.tableHeaders.compressionType}</th>
              <th className="p-3.5">{content.tableHeaders.bitrate}</th>
              <th className="p-3.5">{content.tableHeaders.fileSize}</th>
              <th className="p-3.5">{content.tableHeaders.bestApplication}</th>
              <th className="p-3.5 text-right">{content.tableHeaders.action}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {content.formats.map((f) => (
              <tr key={f.id} className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-3.5 font-bold text-slate-900 dark:text-zinc-100">
                  {f.name.split(" ")[0]} <span className="font-mono text-slate-400 dark:text-zinc-500">({f.ext})</span>
                </td>
                <td className="p-3.5 text-slate-600 dark:text-zinc-400">{f.type}</td>
                <td className="p-3.5 text-slate-600 dark:text-zinc-400 font-mono">{f.bitrates}</td>
                <td className="p-3.5 text-slate-600 dark:text-zinc-400">{f.efficiency}</td>
                <td className="p-3.5 text-slate-600 dark:text-zinc-400 max-w-xs">{f.bestFor}</td>
                <td className="p-3.5 text-right">
                  <Link
                    href={getLocalizedPath(locale, f.converterLink)}
                    className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    <span>{content.convertButton}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Format Cards */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
          {content.detailsHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.formats.map((f) => (
            <div key={f.id} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">{f.name}</h3>
                  <span className="text-xs font-mono text-brand-600 dark:text-brand-400">{f.ext} • {f.type}</span>
                </div>
                <Link
                  href={getLocalizedPath(locale, f.converterLink)}
                  className="rounded-lg bg-brand-50 dark:bg-brand-950/40 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-900/50"
                >
                  {content.convertButton}
                </Link>
              </div>

              <div className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                <strong className="text-slate-900 dark:text-zinc-200">{content.bestForLabel}:</strong> {f.bestFor}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 p-3 border border-emerald-100 dark:border-emerald-800/40">
                  <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-1">{content.advantagesLabel}</span>
                  <ul className="space-y-1 text-emerald-800 dark:text-emerald-400 text-[11px] list-disc list-inside">
                    {f.pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-amber-50/60 dark:bg-amber-950/20 p-3 border border-amber-100 dark:border-amber-800/40">
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">{content.limitationsLabel}</span>
                  <ul className="space-y-1 text-amber-800 dark:text-amber-400 text-[11px] list-disc list-inside">
                    {f.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide FAQs */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 text-center mb-6">
          {content.faqsHeading}
        </h2>
        {content.faqs.map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-start gap-2.5">
              <HelpCircle className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed pl-6.5">
              {faq.a}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

function getFormatGuideContent(locale: Locale): GuideContent {
  const isDe = locale === "de";
  const isEs = locale === "es";
  const isPt = locale === "pt";
  const isFr = locale === "fr";
  const isIt = locale === "it";

  if (isDe) {
    return {
      seoTitle: "Audioformat-Leitfaden - MP3, WAV, M4A, FLAC, OGG, OPUS im Vergleich",
      seoDesc: "Umfassender Vergleich gängiger Audioformate. Erfahren Sie die Unterschiede zwischen MP3, WAV, FLAC, M4A, AAC, OGG und OPUS für Musik, Podcasts und Tonproduktion.",
      breadcrumbLabel: "Format-Leitfaden",
      pageTitle: "Audioformat-Vergleich & Codec-Leitfaden",
      pageSubtitle: "Erfahren Sie, wie Audiokomprimierung funktioniert, und wählen Sie das richtige Format für Musik, Podcasts, Videos oder Abspielgeräte.",
      directAnswerQuestion: "Wie wähle ich zwischen MP3, WAV, FLAC und M4A?",
      directAnswerAnswer: "Wählen Sie MP3 (192–320 kbps) für universelle Kompatibilität auf allen Endgeräten und Autoradios. Wählen Sie WAV für unkomprimierte Studiobearbeitung in DAWs. Wählen Sie FLAC zur Archivierung in verlustfreier Studioqualität bei halber Dateigröße. Wählen Sie M4A für Apple-Geräte und moderne Streaming-Anwendungen mit höchster Effizienz.",
      overviewBadge: "Format-Übersicht",
      tableHeaders: {
        format: "Format",
        compressionType: "Komprimierungsart",
        bitrate: "Typische Bitrate",
        fileSize: "Relative Größe",
        bestApplication: "Bester Einsatzbereich",
        action: "Konvertieren",
      },
      detailsHeading: "Detaillierte Codec-Analyse",
      bestForLabel: "Optimal für",
      advantagesLabel: "Vorteile",
      limitationsLabel: "Einschränkungen",
      convertButton: "Umwandeln",
      faqsHeading: "Häufig gestellte Fragen zu Audioformaten",
      formats: [
        {
          id: "mp3",
          name: "MP3 (MPEG-1 Audio Layer III)",
          ext: ".mp3",
          type: "Verlustbehaftet",
          bitrates: "64 kbps bis 320 kbps",
          efficiency: "Hoch",
          compatibility: "Universell (100% aller Geräte)",
          bestFor: "Alltägliches Musikhören, Podcasts, Hörbücher und universeller Dateiaustausch.",
          pros: ["Läuft auf absolut jedem Gerät, Player, Autoradio und Browser", "Flexible Datenraten von Sprachaufnahmen bis zu High-Fidelity-Musik"],
          cons: ["Entfernt unhörbare Frequenzanteile unwiderruflich", "Bei niedrigen Bitraten etwas ineffizienter als moderne Codecs"],
          converterLink: "/audio-converter",
        },
        {
          id: "wav",
          name: "WAV (Waveform Audio File Format)",
          ext: ".wav",
          type: "Unkomprimiertes PCM (Verlustfrei)",
          bitrates: "1411 kbps (16-Bit 44,1 kHz Stereo)",
          efficiency: "Keine (Rohdaten)",
          compatibility: "Universell (Standard auf Windows, Mac, Linux)",
          bestFor: "Musikproduktion in DAWs, Mastering, Sounddesign und Rundfunkbearbeitung.",
          pros: ["Keine Kompressionsartefakte; 1:1 Abbildung der Studioaufnahme", "Minimale CPU-Last beim Abspielen und Rendern"],
          cons: ["Sehr große Dateien (~10 MB pro Audiominute)", "Ungeeignet für mobile Speicher oder E-Mail-Anhänge"],
          converterLink: "/mp3-to-wav",
        },
        {
          id: "flac",
          name: "FLAC (Free Lossless Audio Codec)",
          ext: ".flac",
          type: "Komprimiert verlustfrei",
          bitrates: "VBR (~700 - 1000 kbps)",
          efficiency: "Mittel (50-60% von WAV)",
          compatibility: "Breit (Android, Windows, macOS via VLC)",
          bestFor: "Audiophile Musiksammlungen, CD-Rippings und High-Res-Downloads.",
          pros: ["100% bitgenaue Erhaltung aller Audiodaten bei reduzierter Dateigröße", "Open-Source und patentfrei"],
          cons: ["Keine native Unterstützung in Standard-iOS-Apps ohne Konvertierung", "Größer als verlustbehaftete Formate"],
          converterLink: "/flac-to-mp3",
        },
        {
          id: "m4a",
          name: "M4A (MPEG-4 Audio / AAC)",
          ext: ".m4a",
          type: "Verlustbehaftet (typisch AAC)",
          bitrates: "64 kbps bis 320 kbps",
          efficiency: "Sehr hoch",
          compatibility: "Hoch (Nativ auf iOS, macOS, Android, Windows)",
          bestFor: "Apple-Ökosystem, iPhone-Sprachmemos und Musikwiedergabe.",
          pros: ["Bessere Klangtreue als MP3 bei gleicher Datenrate", "Standardformat für alle modernen Apple-Geräte"],
          cons: ["Ältere Autoradios und MP3-Player können M4A oft nicht wiedergeben"],
          converterLink: "/m4a-to-mp3",
        },
        {
          id: "ogg",
          name: "OGG (Vorbis)",
          ext: ".ogg",
          type: "Verlustbehaftet",
          bitrates: "64 kbps bis 320 kbps",
          efficiency: "Hoch",
          compatibility: "Mittel (Browser, Linux, Game Engines, Android)",
          bestFor: "Videospiel-Sounddesign (Unity, Godot), Spotify-Desktop und Open-Source-Medien.",
          pros: ["Patentfrei und quelloffen", "Hervorragende psychoakustische Frequenzauflösung"],
          cons: ["Safari auf iOS erfordert Zusatzsoftware"],
          converterLink: "/ogg-to-mp3",
        },
        {
          id: "opus",
          name: "OPUS (Interactive Audio)",
          ext: ".opus",
          type: "Verlustbehaftet",
          bitrates: "6 kbps bis 510 kbps",
          efficiency: "Modernster Standard (Höchste)",
          compatibility: "Modern (WebRTC, Discord, WhatsApp, moderne Browser)",
          bestFor: "Sprachanrufe in Echtzeit, WhatsApp-Sprachnachrichten, Live-Streaming.",
          pros: ["Dynamische Anpassung von niedrigster Sprach-Bandbreite bis Vollband-Musik", "Nahezu latenzfreie Echtzeitübertragung"],
          cons: ["Standalone .opus-Dateien werden von vielen traditionellen DAWs nicht direkt geladen"],
          converterLink: "/opus-to-mp3",
        },
      ],
      faqs: [
        {
          q: "Welches Audioformat liefert die höchste Klangqualität?",
          a: "WAV und FLAC bieten bitgenaue, verlustfreie Klangqualität identisch zur Original-Studioaufnahme. WAV ist unkomprimiert, während FLAC die Dateigröße ohne Qualitätsverlust halbiert.",
        },
        {
          q: "Was unterscheidet verlustfreie von verlustbehafteten Formaten?",
          a: "Verlustfreie Formate (WAV, FLAC) behalten 100% aller Audiodaten. Verlustbehaftete Formate (MP3, AAC, OPUS) filtern für das menschliche Gehör kaum wahrnehmbare Anteile heraus und sparen 70% bis 90% Speicherplatz.",
        },
        {
          q: "Welches Format eignet sich am besten für Podcasts?",
          a: "MP3 bei 128 kbps Stereo (oder 96 kbps Mono) ist der weltweite Industriestandard für Podcasts, da alle Podcast-Apps und Plattformen es verzögerungsfrei abspielen.",
        },
      ],
    };
  }

  if (isEs) {
    return {
      seoTitle: "Guía de formatos de audio - Comparativa de MP3, WAV, M4A, FLAC, OGG, OPUS",
      seoDesc: "Guía completa de formatos de audio. Conoce las diferencias entre MP3, WAV, FLAC, M4A, AAC, OGG y OPUS para música, podcasts y producción sonora.",
      breadcrumbLabel: "Guía de formatos",
      pageTitle: "Comparativa de formatos de audio y códecs",
      pageSubtitle: "Aprende cómo funciona la compresión de audio y elige el formato perfecto para tus canciones, podcasts, vídeos o dispositivos.",
      directAnswerQuestion: "¿Cómo elegir entre MP3, WAV, FLAC y M4A?",
      directAnswerAnswer: "Elige MP3 (192-320 kbps) para compatibilidad universal con todos los dispositivos y reproductores de coche. Elige WAV para producción y masterización en DAW sin compresión. Elige FLAC para archivar música en calidad de estudio ocupando la mitad de espacio que WAV. Elige M4A para dispositivos Apple y streaming moderno con máxima eficiencia acústica.",
      overviewBadge: "Resumen de formatos",
      tableHeaders: {
        format: "Formato",
        compressionType: "Tipo de compresión",
        bitrate: "Bitrate típico",
        fileSize: "Tamaño relativo",
        bestApplication: "Mejor uso",
        action: "Convertir",
      },
      detailsHeading: "Análisis detallado de cada códec",
      bestForLabel: "Ideal para",
      advantagesLabel: "Ventajas",
      limitationsLabel: "Limitaciones",
      convertButton: "Convertir",
      faqsHeading: "Preguntas frecuentes sobre formatos de audio",
      formats: [
        {
          id: "mp3",
          name: "MP3 (MPEG-1 Audio Layer III)",
          ext: ".mp3",
          type: "Con pérdidas",
          bitrates: "64 kbps a 320 kbps",
          efficiency: "Alta",
          compatibility: "Universal (100% de dispositivos)",
          bestFor: "Música cotidiana, podcasts, audiolibros y distribución universal.",
          pros: ["Compatible con cualquier reproductor, dispositivo y navegador", "Compresión ajustable desde voz ligera hasta música de alta fidelidad"],
          cons: ["Elimina frecuencias inaudibles de forma permanente", "Menos eficiente que códecs modernos a bitrates bajos"],
          converterLink: "/audio-converter",
        },
        {
          id: "wav",
          name: "WAV (Waveform Audio File Format)",
          ext: ".wav",
          type: "PCM sin compresión (Sin pérdidas)",
          bitrates: "1411 kbps (16-bit 44.1kHz estéreo)",
          efficiency: "Ninguna (audio crudo)",
          compatibility: "Universal (Estándar en Windows, Mac, Linux)",
          bestFor: "Producción musical en DAWs, masterización y diseño sonoro.",
          pros: ["Cero artefactos de compresión; copia exacta del master de estudio", "Mínimo consumo de CPU al editar o reproducir"],
          cons: ["Archivos muy grandes (~10 MB por minuto)", "Inadecuado para almacenamiento móvil o adjuntos de correo"],
          converterLink: "/mp3-to-wav",
        },
        {
          id: "flac",
          name: "FLAC (Free Lossless Audio Codec)",
          ext: ".flac",
          type: "Comprimido sin pérdidas",
          bitrates: "VBR (~700 - 1000 kbps)",
          efficiency: "Media (50-60% del tamaño de WAV)",
          compatibility: "Amplia (Android, Windows, macOS vía VLC)",
          bestFor: "Colecciones audiófilas, copias de seguridad de CD y descargas de alta resolución.",
          pros: ["Preserva el 100% de los datos de audio a tamaño reducido", "Código abierto y libre de patentes"],
          cons: ["Sin soporte nativo en apps estándar de iOS sin conversión", "Más grande que los formatos con pérdidas"],
          converterLink: "/flac-to-mp3",
        },
        {
          id: "m4a",
          name: "M4A (MPEG-4 Audio / AAC)",
          ext: ".m4a",
          type: "Con pérdidas (habitualmente AAC)",
          bitrates: "64 kbps a 320 kbps",
          efficiency: "Muy alta",
          compatibility: "Alta (Nativo en iOS, macOS, Android y Windows)",
          bestFor: "Ecosistema Apple, notas de voz de iPhone y música digital.",
          pros: ["Calidad acústica superior a MP3 a idéntico bitrate", "Formato estándar en todos los dispositivos Apple"],
          cons: ["Reproductores antiguos y sistemas de coche antiguos pueden no leerlo"],
          converterLink: "/m4a-to-mp3",
        },
        {
          id: "ogg",
          name: "OGG (Vorbis)",
          ext: ".ogg",
          type: "Con pérdidas",
          bitrates: "64 kbps a 320 kbps",
          efficiency: "Alta",
          compatibility: "Media (Navegadores web, Linux, motores de juegos, Android)",
          bestFor: "Sonido en videojuegos (Unity, Godot), Spotify de escritorio y software libre.",
          pros: ["Libre de patentes y código abierto", "Excelente fidelidad psicoacústica en todas las frecuencias"],
          cons: ["Safari en iOS requiere herramientas de terceros"],
          converterLink: "/ogg-to-mp3",
        },
        {
          id: "opus",
          name: "OPUS (Interactive Audio)",
          ext: ".opus",
          type: "Con pérdidas",
          bitrates: "6 kbps a 510 kbps",
          efficiency: "Vanguardia tecnológica (Máxima)",
          compatibility: "Moderna (WebRTC, Discord, WhatsApp, navegadores modernos)",
          bestFor: "Llamadas de voz en tiempo real, notas de voz de WhatsApp y streaming de baja latencia.",
          pros: ["Adaptación dinámica desde voz ultraligera hasta música estéreo completa", "Latencia algorítmica prácticamente nula"],
          cons: ["Muchos programas DAW tradicionales no abren archivos .opus directos"],
          converterLink: "/opus-to-mp3",
        },
      ],
      faqs: [
        {
          q: "¿Qué formato de audio ofrece la mayor calidad sonora?",
          a: "WAV y FLAC ofrecen fidelidad absoluta sin pérdidas idéntica a la grabación original de estudio. WAV no tiene compresión y FLAC reduce el tamaño a la mitad sin descartar información.",
        },
        {
          q: "¿Cuál es la diferencia entre audio con pérdidas y sin pérdidas?",
          a: "Los formatos sin pérdidas (WAV, FLAC) conservan el 100% de las muestras de sonido. Los formatos con pérdidas (MP3, AAC, OPUS) eliminan frecuencias inaudibles ahorrando entre un 70% y un 90% de espacio.",
        },
        {
          q: "¿Qué formato es el más recomendable para podcasts?",
          a: "MP3 a 128 kbps estéreo (o 96 kbps mono) es el estándar universal para podcasts porque cualquier reproductor y plataforma lo reproduce sin problemas.",
        },
      ],
    };
  }

  if (isPt) {
    return {
      seoTitle: "Guia de formatos de áudio - Compare MP3, WAV, M4A, FLAC, OGG e OPUS",
      seoDesc: "Guia completo de comparação de formatos de áudio. Descubra as diferenças entre MP3, WAV, FLAC, M4A, AAC, OGG e OPUS para música, podcasts e produção de áudio.",
      breadcrumbLabel: "Guia de formatos",
      pageTitle: "Comparativo de formatos de áudio e codecs",
      pageSubtitle: "Entenda como a compactação de áudio funciona e escolha o formato certo para suas músicas, podcasts, vídeos ou dispositivos.",
      directAnswerQuestion: "Como escolher entre MP3, WAV, FLAC e M4A?",
      directAnswerAnswer: "Escolha MP3 (192-320 kbps) para compatibilidade universal em todos os aparelhos e rádios de carro. Escolha WAV para edição e masterização em DAWs com qualidade de estúdio sem compactação. Escolha FLAC para arquivar áudio sem perdas na metade do tamanho do WAV. Escolha M4A para dispositivos Apple e podcasts com alta eficiência acústica.",
      overviewBadge: "Resumo de formatos",
      tableHeaders: {
        format: "Formato",
        compressionType: "Tipo de compactação",
        bitrate: "Taxa de bits típica",
        fileSize: "Tamanho relativo",
        bestApplication: "Melhor aplicação",
        action: "Converter",
      },
      detailsHeading: "Detalhamento de cada codec",
      bestForLabel: "Ideal para",
      advantagesLabel: "Vantagens",
      limitationsLabel: "Limitações",
      convertButton: "Converter",
      faqsHeading: "Perguntas frequentes sobre formatos de áudio",
      formats: [
        {
          id: "mp3",
          name: "MP3 (MPEG-1 Audio Layer III)",
          ext: ".mp3",
          type: "Com perdas",
          bitrates: "64 kbps a 320 kbps",
          efficiency: "Alta",
          compatibility: "Universal (100% dos dispositivos)",
          bestFor: "Música do dia a dia, podcasts, audiolivros e compartilhamento universal.",
          pros: ["Funciona em absolutamente qualquer aparelho, player e navegador", "Compactação flexível de voz até música de alta fidelidade"],
          cons: ["Descarta frequências inaudíveis permanentemente", "Menos eficiente que codecs modernos em baixas taxas de bits"],
          converterLink: "/audio-converter",
        },
        {
          id: "wav",
          name: "WAV (Waveform Audio File Format)",
          ext: ".wav",
          type: "PCM não compactado (Sem perdas)",
          bitrates: "1411 kbps (16-bit 44.1kHz estéreo)",
          efficiency: "Nenhuma (áudio bruto)",
          compatibility: "Universal (Padrão no Windows, Mac e Linux)",
          bestFor: "Produção musical em DAWs, masterização e sonoplastia.",
          pros: ["Sem artefatos de compactação; cópia exata do master de estúdio", "Uso mínimo de CPU durante edição e reprodução"],
          cons: ["Arquivos gigantescos (~10 MB por minuto)", "Inadequado para anexos de e-mail ou memórias móveis reduzidas"],
          converterLink: "/mp3-to-wav",
        },
        {
          id: "flac",
          name: "FLAC (Free Lossless Audio Codec)",
          ext: ".flac",
          type: "Compactado sem perdas",
          bitrates: "VBR (~700 - 1000 kbps)",
          efficiency: "Média (50-60% do tamanho do WAV)",
          compatibility: "Ampla (Android, Windows, macOS via VLC)",
          bestFor: "Arquivos de audiófilos, cópia de segurança de CDs e downloads de alta resolução.",
          pros: ["Preserva 100% dos dados de áudio ocupando menos espaço", "Código aberto e livre de patentes"],
          cons: ["Sem suporte nativo no app Música padrão do iOS sem conversão", "Maior que os formatos com perdas"],
          converterLink: "/flac-to-mp3",
        },
        {
          id: "m4a",
          name: "M4A (MPEG-4 Audio / AAC)",
          ext: ".m4a",
          type: "Com perdas (geralmente AAC)",
          bitrates: "64 kbps a 320 kbps",
          efficiency: "Muito alta",
          compatibility: "Alta (Nativo no iOS, macOS, Android e Windows)",
          bestFor: "Ecossistema Apple, gravador do iPhone e música digital.",
          pros: ["Fidelidade acústica superior ao MP3 na mesma taxa de bits", "Formato padrão de dispositivos Apple"],
          cons: ["Aparelhos antigos e rádios automotivos podem não reproduzir"],
          converterLink: "/m4a-to-mp3",
        },
        {
          id: "ogg",
          name: "OGG (Vorbis)",
          ext: ".ogg",
          type: "Com perdas",
          bitrates: "64 kbps a 320 kbps",
          efficiency: "Alta",
          compatibility: "Média (Navegadores, Linux, engines de jogos, Android)",
          bestFor: "Áudio em games (Unity, Godot), Spotify para computador e mídia aberta.",
          pros: ["Livre de patentes e código aberto", "Resposta psicoacústica suave em várias faixas de frequência"],
          cons: ["Safari no iOS exige reprodutores de terceiros"],
          converterLink: "/ogg-to-mp3",
        },
        {
          id: "opus",
          name: "OPUS (Interactive Audio)",
          ext: ".opus",
          type: "Com perdas",
          bitrates: "6 kbps a 510 kbps",
          efficiency: "Padrão moderno (Máxima)",
          compatibility: "Moderna (WebRTC, Discord, WhatsApp, navegadores modernos)",
          bestFor: "Chamadas de voz em tempo real, mensagens do WhatsApp e transmissões ao vivo.",
          pros: ["Adaptação dinâmica desde chamadas ultraleves até música estéreo de alta banda", "Latência quase nula"],
          cons: ["Muitos DAWs convencionais não abrem arquivos .opus puros"],
          converterLink: "/opus-to-mp3",
        },
      ],
      faqs: [
        {
          q: "Qual formato de áudio tem a melhor qualidade sonora?",
          a: "WAV e FLAC fornecem qualidade idêntica à gravação de estúdio original. O WAV não tem compactação e o FLAC corta o tamanho pela metade mantendo 100% da informação acústica.",
        },
        {
          q: "Qual a diferença entre áudio com e sem perdas?",
          a: "Formatos sem perdas (WAV, FLAC) preservam 100% das amostras gravadas. Formatos com perdas (MP3, AAC, OPUS) eliminam frequências inaudíveis ao ouvido humano, economizando até 90% de espaço.",
        },
        {
          q: "Qual formato é recomendado para podcasts?",
          a: "MP3 a 128 kbps estéreo (ou 96 kbps mono) é o padrão universal para podcasts, funcionando sem problemas em qualquer aplicativo e agregador.",
        },
      ],
    };
  }

  if (isFr) {
    return {
      seoTitle: "Guide des formats audio - Comparatif MP3, WAV, M4A, FLAC, OGG, OPUS",
      seoDesc: "Guide complet de comparaison des formats audio. Découvrez les différences entre MP3, WAV, FLAC, M4A, AAC, OGG et OPUS pour la musique, les podcasts et la production sonore.",
      breadcrumbLabel: "Guide des formats",
      pageTitle: "Comparatif des formats audio et codecs",
      pageSubtitle: "Comprenez le fonctionnement de la compression audio et choisissez le format idéal pour votre musique, podcast, vidéo ou matériel audio.",
      directAnswerQuestion: "Comment choisir entre MP3, WAV, FLAC et M4A ?",
      directAnswerAnswer: "Choisissez MP3 (192-320 kbps) pour une compatibilité universelle sur tous les appareils et autoradios. Choisissez WAV pour la production et le mastering studio sans compression. Choisissez FLAC pour archiver de la musique en qualité studio sans perte à la moitié du poids d'un WAV. Choisissez M4A pour les appareils Apple et le streaming avec une compression de pointe.",
      overviewBadge: "Synthèse des formats",
      tableHeaders: {
        format: "Format",
        compressionType: "Type de compression",
        bitrate: "Débit typique",
        fileSize: "Taille relative",
        bestApplication: "Meilleur usage",
        action: "Convertir",
      },
      detailsHeading: "Analyse approfondie de chaque codec",
      bestForLabel: "Idéal pour",
      advantagesLabel: "Avantages",
      limitationsLabel: "Limites",
      convertButton: "Convertir",
      faqsHeading: "Questions fréquentes sur les formats audio",
      formats: [
        {
          id: "mp3",
          name: "MP3 (MPEG-1 Audio Layer III)",
          ext: ".mp3",
          type: "Avec perte",
          bitrates: "64 kbps à 320 kbps",
          efficiency: "Élevée",
          compatibility: "Universelle (100% des appareils)",
          bestFor: "Écoute quotidienne, podcasts, livres audio et partage universel de fichiers.",
          pros: ["Compatible avec absolument tous les appareils et navigateurs", "Compression réglable de la voix légère à la musique haute fidélité"],
          cons: ["Supprime définitivement les fréquences inaudibles", "Légèrement moins performant que les codecs récents à bas débit"],
          converterLink: "/audio-converter",
        },
        {
          id: "wav",
          name: "WAV (Waveform Audio File Format)",
          ext: ".wav",
          type: "PCM non compressé (Sans perte)",
          bitrates: "1411 kbps (16-bit 44,1 kHz stéréo)",
          efficiency: "Nulle (audio brut)",
          compatibility: "Universelle (Standard sur Windows, Mac, Linux)",
          bestFor: "Production musicale DAW, mastering et conception sonore.",
          pros: ["Zéro artefact de compression; réplique exacte du master studio", "Charge CPU minimale lors de l'édition et de la lecture"],
          cons: ["Fichiers très volumineux (~10 Mo par minute)", "Inadapté pour le stockage mobile ou les pièces jointes email"],
          converterLink: "/mp3-to-wav",
        },
        {
          id: "flac",
          name: "FLAC (Free Lossless Audio Codec)",
          ext: ".flac",
          type: "Compressé sans perte",
          bitrates: "VBR (~700 - 1000 kbps)",
          efficiency: "Moyenne (50-60% de la taille WAV)",
          compatibility: "Large (Android, Windows, macOS via VLC)",
          bestFor: "Archivage audiophile, numérisation de CD et téléchargements haute résolution.",
          pros: ["Préserve 100% des données audio à un poids réduit", "Open source et libre de brevets"],
          cons: ["Non pris en charge nativement dans l'app Musique standard iOS sans conversion", "Plus lourd que les formats avec perte"],
          converterLink: "/flac-to-mp3",
        },
        {
          id: "m4a",
          name: "M4A (MPEG-4 Audio / AAC)",
          ext: ".m4a",
          type: "Avec perte (habituellement AAC)",
          bitrates: "64 kbps à 320 kbps",
          efficiency: "Très élevée",
          compatibility: "Élevée (Natif sur iOS, macOS, Android et Windows)",
          bestFor: "Écosystème Apple, mémos vocaux iPhone et musique numérique.",
          pros: ["Fidélité sonore supérieure au MP3 à débit équivalent", "Format standard des appareils Apple"],
          cons: ["Certains anciens autoradios et baladeurs ne le reconnaissent pas"],
          converterLink: "/m4a-to-mp3",
        },
        {
          id: "ogg",
          name: "OGG (Vorbis)",
          ext: ".ogg",
          type: "Avec perte",
          bitrates: "64 kbps à 320 kbps",
          efficiency: "Élevée",
          compatibility: "Moyenne (Navigateurs web, Linux, moteurs de jeux, Android)",
          bestFor: "Jeux vidéo (Unity, Godot), Spotify bureau et médias open source.",
          pros: ["Libre de droits et open source", "Réponse psychoacoustique régulière sur tout le spectre"],
          cons: ["Safari sur iOS nécessite une application tierce"],
          converterLink: "/ogg-to-mp3",
        },
        {
          id: "opus",
          name: "OPUS (Interactive Audio)",
          ext: ".opus",
          type: "Avec perte",
          bitrates: "6 kbps à 510 kbps",
          efficiency: "Pointe technologique (Maximale)",
          compatibility: "Moderne (WebRTC, Discord, WhatsApp, navigateurs modernes)",
          bestFor: "Appels vocaux en temps réel, messages WhatsApp et streaming basse latence.",
          pros: ["Adaptation dynamique de la voix très basse bande jusqu'à la musique stéréo pleine bande", "Latence quasi nulle"],
          cons: ["De nombreux logiciels DAW anciens ne lisent pas les fichiers .opus directement"],
          converterLink: "/opus-to-mp3",
        },
      ],
      faqs: [
        {
          q: "Quel format audio offre la meilleure qualité sonore ?",
          a: "WAV et FLAC offrent une qualité sans perte identique à l'enregistrement studio original. WAV est non compressé et FLAC réduit la taille de moitié sans supprimer aucune donnée.",
        },
        {
          q: "Quelle est la différence entre audio avec et sans perte ?",
          a: "Les formats sans perte (WAV, FLAC) conservent 100% des échantillons audio. Les formats avec perte (MP3, AAC, OPUS) retirent les fréquences inaudibles pour gagner de 70% à 90% d'espace.",
        },
        {
          q: "Quel format choisir pour un podcast ?",
          a: "MP3 à 128 kbps stéréo (ou 96 kbps mono) est le standard mondial pour les podcasts, car toutes les applications et flux RSS le gèrent parfaitement.",
        },
      ],
    };
  }

  if (isIt) {
    return {
      seoTitle: "Guida ai formati audio - Confronto tra MP3, WAV, M4A, FLAC, OGG e OPUS",
      seoDesc: "Guida tecnica completa ai formati audio. Scopri le differenze tra MP3, WAV, FLAC, M4A, AAC, OGG e OPUS per musica, podcast e produzione sonora.",
      breadcrumbLabel: "Guida ai formati",
      pageTitle: "Confronto formati audio e codec",
      pageSubtitle: "Comprendi il funzionamento della compressione audio e scegli il formato ideale per la tua musica, i podcast, i video o i lettori portatili.",
      directAnswerQuestion: "Come scegliere tra MP3, WAV, FLAC e M4A?",
      directAnswerAnswer: "Scegli MP3 (192-320 kbps) per la massima compatibilità universale su tutti i dispositivi e autoradio. Scegli WAV per la produzione in DAW e il mastering in qualità studio non compressa. Scegli FLAC per archiviare musica senza perdita alla metà dello spazio di un file WAV. Scegli M4A per i dispositivi Apple e lo streaming moderno con eccellente efficienza.",
      overviewBadge: "Riepilogo formati",
      tableHeaders: {
        format: "Formato",
        compressionType: "Tipo di compressione",
        bitrate: "Bitrate tipico",
        fileSize: "Dimensione relativa",
        bestApplication: "Miglior utilizzo",
        action: "Converti",
      },
      detailsHeading: "Analisi approfondita di ciascun codec",
      bestForLabel: "Ideale per",
      advantagesLabel: "Vantaggi",
      limitationsLabel: "Limitazioni",
      convertButton: "Converti",
      faqsHeading: "Domande frequenti sui formati audio",
      formats: [
        {
          id: "mp3",
          name: "MP3 (MPEG-1 Audio Layer III)",
          ext: ".mp3",
          type: "Con perdita",
          bitrates: "Da 64 kbps a 320 kbps",
          efficiency: "Alta",
          compatibility: "Universale (100% dei dispositivi)",
          bestFor: "Ascolto musicale quotidiano, podcast, audiolibri e condivisione file universale.",
          pros: ["Funziona su qualsiasi lettore, dispositivo, autoradio e browser", "Compressione regolabile da voce leggera a musica ad alta fedeltà"],
          cons: ["Rimuove in modo permanente frequenze non udibili", "Meno efficiente dei codec recenti a bitrate bassi"],
          converterLink: "/audio-converter",
        },
        {
          id: "wav",
          name: "WAV (Waveform Audio File Format)",
          ext: ".wav",
          type: "PCM non compresso (Senza perdita)",
          bitrates: "1411 kbps (16-bit 44.1kHz stereo)",
          efficiency: "Nessuna (audio grezzo)",
          compatibility: "Universale (Standard su Windows, Mac, Linux)",
          bestFor: "Produzione musicale in DAW, mastering e sound design professionale.",
          pros: ["Zero artefatti di compressione; copia perfetta del master di studio", "Carico CPU minimo durante l'editing e la riproduzione"],
          cons: ["File molto voluminosi (~10 MB al minuto)", "Inadatto per memoria mobile o allegati e-mail"],
          converterLink: "/mp3-to-wav",
        },
        {
          id: "flac",
          name: "FLAC (Free Lossless Audio Codec)",
          ext: ".flac",
          type: "Compresso senza perdita",
          bitrates: "VBR (~700 - 1000 kbps)",
          efficiency: "Media (50-60% delle dimensioni WAV)",
          compatibility: "Ampia (Android, Windows, macOS via VLC)",
          bestFor: "Archivio per audiofili, backup di CD e download in alta risoluzione.",
          pros: ["Conserva il 100% delle informazioni sonore a dimensioni ridotte", "Open source e privo di brevetti"],
          cons: ["Nessun supporto nativo nell'app Musica iOS standard senza conversione", "Più pesante dei formati con perdita"],
          converterLink: "/flac-to-mp3",
        },
        {
          id: "m4a",
          name: "M4A (MPEG-4 Audio / AAC)",
          ext: ".m4a",
          type: "Con perdita (generalmente AAC)",
          bitrates: "Da 64 kbps a 320 kbps",
          efficiency: "Molto alta",
          compatibility: "Alta (Nativo su iOS, macOS, Android e Windows)",
          bestFor: "Ecosistema Apple, registratore vocale iPhone e musica digitale.",
          pros: ["Fedeltà acustica superiore a MP3 a parità di bitrate", "Formato di riferimento sui dispositivi Apple"],
          cons: ["Autoradio e vecchi lettori potrebbero non essere compatibili"],
          converterLink: "/m4a-to-mp3",
        },
        {
          id: "ogg",
          name: "OGG (Vorbis)",
          ext: ".ogg",
          type: "Con perdita",
          bitrates: "Da 64 kbps a 320 kbps",
          efficiency: "Alta",
          compatibility: "Media (Browser, Linux, motori di gioco, Android)",
          bestFor: "Audio di videogiochi (Unity, Godot), Spotify desktop e software open source.",
          pros: ["Privo di brevetti e open source", "Risposta psicoacustica equilibrata su tutte le frequenze"],
          cons: ["Safari su iOS richiede app esterne"],
          converterLink: "/ogg-to-mp3",
        },
        {
          id: "opus",
          name: "OPUS (Interactive Audio)",
          ext: ".opus",
          type: "Con perdita",
          bitrates: "Da 6 kbps a 510 kbps",
          efficiency: "Massima modernità (Più alta)",
          compatibility: "Moderna (WebRTC, Discord, WhatsApp, browser moderni)",
          bestFor: "Chiamate vocali in tempo reale, vocali WhatsApp e streaming a bassa latenza.",
          pros: ["Adattamento dinamico da voce a banda minima a musica stereo a banda piena", "Latenza pressoché nulla"],
          cons: ["Molte DAW tradizionali non leggono direttamente i file .opus"],
          converterLink: "/opus-to-mp3",
        },
      ],
      faqs: [
        {
          q: "Quale formato audio offre la migliore qualità sonora?",
          a: "WAV e FLAC garantiscono una fedeltà perfetta senza perdita identica al master di studio. WAV non è compresso, mentre FLAC dimezza la dimensione senza sacrificare dati sonori.",
        },
        {
          q: "Che differenza c'è tra audio lossy e lossless?",
          a: "I formati lossless (WAV, FLAC) conservano il 100% dei campioni sonori. I formati lossy (MP3, AAC, OPUS) eliminano frequenze non percepibili riducendo lo spazio del 70-90%.",
        },
        {
          q: "Qual è il formato più indicato per i podcast?",
          a: "MP3 a 128 kbps stereo (o 96 kbps mono) è lo standard mondiale per i podcast perché viene riprodotto istantaneamente da qualsiasi piattaforma.",
        },
      ],
    };
  }

  // English default
  return {
    seoTitle: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
    seoDesc: "Comprehensive audio format comparison guide. Learn the differences between MP3, WAV, FLAC, M4A, AAC, OGG, and OPUS for music, podcasts, and sound production.",
    breadcrumbLabel: "Format Guide",
    pageTitle: "Audio Format Comparison & Codec Guide",
    pageSubtitle: "Learn how audio compression works and choose the right format for your music, podcast, video project, or hardware player.",
    directAnswerQuestion: "How do I choose between MP3, WAV, FLAC, and M4A?",
    directAnswerAnswer: "Choose MP3 (192-320 kbps) for universal playback on all devices and car stereos. Choose WAV for zero-latency studio DAW editing and mastering where uncompressed quality is mandatory. Choose FLAC to archive high-resolution music with bit-perfect fidelity at half the file size of WAV. Choose M4A for Apple devices and podcasts with superior compression efficiency.",
    overviewBadge: "Format Overview",
    tableHeaders: {
      format: "Format",
      compressionType: "Compression Type",
      bitrate: "Typical Bitrate",
      fileSize: "Relative File Size",
      bestApplication: "Best Application",
      action: "Convert",
    },
    detailsHeading: "In-Depth Codec Breakdown",
    bestForLabel: "Best For",
    advantagesLabel: "Advantages",
    limitationsLabel: "Limitations",
    convertButton: "Convert",
    faqsHeading: "Audio Format FAQs",
    formats: [
      {
        id: "mp3",
        name: "MP3 (MPEG-1 Audio Layer III)",
        ext: ".mp3",
        type: "Lossy",
        bitrates: "64 kbps to 320 kbps",
        efficiency: "High",
        compatibility: "Universal (100% of devices)",
        bestFor: "Everyday music listening, podcasts, audiobook distribution, and universal file sharing.",
        pros: ["Works on every device, player, car stereo, and browser", "Adjustable compression from tiny speech files to high-fidelity music"],
        cons: ["Permanently discards inaudible frequencies", "Slightly less efficient than modern codecs like AAC or OPUS at low bitrates"],
        converterLink: "/audio-converter",
      },
      {
        id: "wav",
        name: "WAV (Waveform Audio File Format)",
        ext: ".wav",
        type: "Uncompressed PCM (Lossless)",
        bitrates: "1411 kbps (16-bit 44.1kHz stereo)",
        efficiency: "None (Raw uncompressed)",
        compatibility: "Universal (Standard on Windows, Mac, Linux)",
        bestFor: "DAW music production, audio mastering, sound design, and broadcast editing.",
        pros: ["Zero compression artifacts; bit-perfect reproduction of analog/master source", "Minimal CPU overhead for playback and audio rendering"],
        cons: ["Massive file sizes (approx. 10 MB per minute)", "Unsuitable for web streaming, email attachments, or mobile storage"],
        converterLink: "/mp3-to-wav",
      },
      {
        id: "flac",
        name: "FLAC (Free Lossless Audio Codec)",
        ext: ".flac",
        type: "Compressed Lossless",
        bitrates: "VBR (~700 - 1000 kbps)",
        efficiency: "Medium (50-60% of WAV size)",
        compatibility: "Wide (Android, Windows, macOS via VLC/third-party)",
        bestFor: "Audiophile music archiving, CD ripping, and high-resolution digital purchases.",
        pros: ["100% bit-perfect audio data preservation with reduced file footprint", "Open source and patent-free"],
        cons: ["Not natively supported by default Apple Music iOS apps without conversion", "Larger than lossy formats"],
        converterLink: "/flac-to-mp3",
      },
      {
        id: "m4a",
        name: "M4A (MPEG-4 Audio / AAC)",
        ext: ".m4a",
        type: "Lossy (typically AAC)",
        bitrates: "64 kbps to 320 kbps",
        efficiency: "Very High",
        compatibility: "High (Native on iOS, macOS, modern Android, Windows 10/11)",
        bestFor: "Apple ecosystem playback, iPhone Voice Memos, and iTunes music.",
        pros: ["Superior acoustic fidelity compared to MP3 at identical bitrates", "Standard format for Apple devices"],
        cons: ["Legacy hardware, older car stereos, and basic MP3 players cannot play M4A"],
        converterLink: "/m4a-to-mp3",
      },
      {
        id: "ogg",
        name: "OGG (Vorbis)",
        ext: ".ogg",
        type: "Lossy",
        bitrates: "64 kbps to 320 kbps",
        efficiency: "High",
        compatibility: "Medium (Web browsers, Linux, game engines, Android)",
        bestFor: "Video game sound design (Unity, Godot, Unreal), Spotify desktop client, open-source media.",
        pros: ["Patent-free and open source", "Smooth psychoacoustic response across diverse frequency ranges"],
        cons: ["iOS Safari and default Apple media players require third-party apps"],
        converterLink: "/ogg-to-mp3",
      },
      {
        id: "opus",
        name: "OPUS (Interactive Audio)",
        ext: ".opus",
        type: "Lossy",
        bitrates: "6 kbps to 510 kbps",
        efficiency: "State-of-the-Art (Highest)",
        compatibility: "Modern (WebRTC, Discord, WhatsApp, YouTube, modern browsers)",
        bestFor: "Real-time voice calls, Discord, WhatsApp voice notes, low-bandwidth internet streaming.",
        pros: ["Dynamic adaptation from ultra-low bandwidth speech to full-bandwidth stereo music", "Virtually zero algorithmic latency"],
        cons: ["Raw .opus standalone files are not supported by most legacy desktop DAWs"],
        converterLink: "/opus-to-mp3",
      },
    ],
    faqs: [
      {
        q: "Which audio format offers the highest sound quality?",
        a: "WAV and FLAC provide bit-perfect, lossless sound reproduction identical to original studio masters. WAV is uncompressed PCM, while FLAC uses lossless compression to cut file sizes in half without discarding any acoustic frequencies.",
      },
      {
        q: "What is the difference between lossy and lossless audio?",
        a: "Lossless formats (WAV, FLAC) retain 100% of recorded audio samples. Lossy formats (MP3, AAC, OGG, OPUS) apply psychoacoustic algorithms to eliminate inaudible frequencies, reducing file size by 70% to 90% while sounding virtually identical on standard headphones and speakers.",
      },
      {
        q: "Which format is best for podcasts and voice notes?",
        a: "MP3 at 128 kbps stereo (or 96 kbps mono) is the global standard for podcasts because every podcast app, RSS aggregator, and mobile device plays it reliably without buffering.",
      },
    ],
  };
}
