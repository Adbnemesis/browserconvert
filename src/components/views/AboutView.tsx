import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { Locale, getLocalizedPath } from "@/i18n";

interface AboutViewProps {
  locale?: Locale;
}

export function AboutView({ locale = "en" }: AboutViewProps) {
  const content = getAboutViewContent(locale);
  const canonicalUrl = getLocalizedPath(locale, "/about");

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        pageType="website"
        title={content.seoTitle}
        description={content.seoDesc}
        url={canonicalUrl}
        breadcrumbs={[{ label: content.breadcrumbLabel, href: canonicalUrl }]}
      />

      <Breadcrumbs items={[{ label: content.breadcrumbLabel, href: canonicalUrl }]} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          {content.pageTitle}
        </h1>
        <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content.pageSubtitle}
        </p>
      </div>

      <DirectAnswer
        question={content.directAnswerQuestion}
        answer={content.directAnswerAnswer}
        badge={content.overviewBadge}
      />

      {/* The Problem & Our Solution */}
      <section className="space-y-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100">{content.whyBuiltTitle}</h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content.whyBuiltP1}
        </p>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content.whyBuiltP2} <strong>{content.whyBuiltP2Strong}</strong>
        </p>
      </section>

      {/* How it Works */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100">{content.howWorksTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 shadow-xs space-y-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">{content.engineCardTitle}</h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
              {content.engineCardDesc}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-5 shadow-xs space-y-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">{content.privacyCardTitle}</h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
              {content.privacyCardDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100">{content.principlesTitle}</h2>
        <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
          <li className="flex items-start gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
            <span><strong>{content.p1Title}</strong> {content.p1Desc}</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
            <span><strong>{content.p2Title}</strong> {content.p2Desc}</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
            <span><strong>{content.p3Title}</strong> {content.p3Desc}</span>
          </li>
        </ul>
      </section>

      {/* Navigation Links */}
      <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-brand-600 dark:text-brand-400">
        <Link href={getLocalizedPath(locale, "/audio-converter")} className="inline-flex items-center gap-1 hover:text-brand-700">
          <span>{content.linkConverter}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href={getLocalizedPath(locale, "/format-guide")} className="inline-flex items-center gap-1 hover:text-brand-700">
          <span>{content.linkGuide}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href={getLocalizedPath(locale, "/privacy")} className="inline-flex items-center gap-1 hover:text-brand-700">
          <span>{content.linkPrivacy}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function getAboutViewContent(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        seoTitle: "Über BrowserConvert - Mission, Technologie & Datenschutz",
        seoDesc: "Erfahren Sie, wie BrowserConvert 100% private Audio-Konvertierung im Browser ohne Server-Uploads ermöglicht.",
        breadcrumbLabel: "Über uns",
        pageTitle: "Über BrowserConvert",
        pageSubtitle: "BrowserConvert ist ein kostenloses, modernes Web-Tool zur Konvertierung von Audioformaten und Extraktion von Ton aus Videos mit absolutem Schutz der Privatsphäre.",
        overviewBadge: "Übersicht",
        directAnswerQuestion: "Was ist BrowserConvert und wie schützt es meine Daten?",
        directAnswerAnswer: "BrowserConvert ist ein kostenloser Online-Audiokonverter, der Dateien vollständig lokal in Ihrem Webbrowser mit WebAssembly verarbeitet. Im Gegensatz zu herkömmlichen Diensten, die Audio- und Videodateien auf entfernte Server hochladen, führt BrowserConvert alle Vorgänge im RAM Ihres eigenen Geräts aus. Null Bytes Ihrer Mediendaten verlassen Ihr Gerät.",
        whyBuiltTitle: "Warum wir BrowserConvert entwickelt haben",
        whyBuiltP1: "Jahrelang bedeutete das Konvertieren von Audiodateien entweder die Installation sperriger Desktop-Programme oder das Hochladen persönlicher Aufnahmen auf ungesicherte Cloud-Server. Dies birgt erhebliche Risiken für vertrauliche Sprachmemos, Interviews, unveröffentlichte Musik oder private Videos.",
        whyBuiltP2: "Wir haben BrowserConvert aus einer klaren Überzeugung heraus gebaut:",
        whyBuiltP2Strong: "Ihre Mediendateien sollten Ihr Gerät niemals verlassen.",
        howWorksTitle: "So funktioniert die lokale Verarbeitung",
        engineCardTitle: "Verarbeitung direkt im Browser",
        engineCardDesc: "Unsere Konvertierungs-Engine nutzt WebAssembly und Web Worker, um Audiospuren lokal mit maximaler Geschwindigkeit zu kodieren.",
        privacyCardTitle: "100% Privat & Lokal",
        privacyCardDesc: "Wenn Sie eine Datei auswählen, wird kein einziges Byte über das Internet übertragen. Alles verbleibt im geschützten Speicher Ihres Geräts.",
        principlesTitle: "Unsere Grundsätze",
        p1Title: "Keine Registrierung:",
        p1Desc: "Wir fordern niemals E-Mail-Adressen, Passwörter oder Zahlungsdaten, um Audiodateien zu konvertieren.",
        p2Title: "Keine irreführende Werbung:",
        p2Desc: "Keine Fake-Download-Buttons, keine Pop-ups und keine aggressiven Weiterleitungen.",
        p3Title: "Ethisches Werkzeug:",
        p3Desc: "Fokus auf die Konvertierung eigener Mediendateien unter Wahrung von Urheberrechten.",
        linkConverter: "Audio-Konverter entdecken",
        linkGuide: "Format-Ratgeber lesen",
        linkPrivacy: "Datenschutzerklärung lesen",
      };
    case "es":
      return {
        seoTitle: "Acerca de BrowserConvert - Misión, Tecnología y Privacidad",
        seoDesc: "Descubre cómo BrowserConvert ofrece conversión de audio 100% privada en el navegador sin subir archivos a servidores.",
        breadcrumbLabel: "Acerca de",
        pageTitle: "Acerca de BrowserConvert",
        pageSubtitle: "BrowserConvert es una herramienta web gratuita diseñada para simplificar la conversión de formatos de audio y la extracción de video manteniendo la total confidencialidad de tus archivos.",
        overviewBadge: "Resumen",
        directAnswerQuestion: "¿Qué es BrowserConvert y cómo protege tu privacidad?",
        directAnswerAnswer: "BrowserConvert es un convertidor de audio online gratuito que procesa tus archivos directamente en tu navegador. A diferencia de las herramientas tradicionales que suben tus grabaciones a servidores en la nube, BrowserConvert ejecuta todo el procesamiento localmente en la memoria de tu dispositivo. Cero bytes de tus archivos viajan a través de la red.",
        whyBuiltTitle: "Por qué creamos BrowserConvert",
        whyBuiltP1: "Durante años, convertir un archivo de audio o extraer sonido de un video requería instalar software pesado o subir grabaciones sensibles a servidores remotos. Los convertidores en la nube presentan serios riesgos de privacidad para notas de voz, entrevistas corporativas o música confidencial.",
        whyBuiltP2: "Construimos BrowserConvert con una convicción fundamental:",
        whyBuiltP2Strong: "Tus archivos nunca deberían salir de tu ordenador o teléfono.",
        howWorksTitle: "Cómo funciona el procesamiento local",
        engineCardTitle: "Motor integrado en el navegador",
        engineCardDesc: "Nuestro motor ejecuta WebAssembly dentro de la pestaña de tu navegador para ofrecer conversiones de alta fidelidad al instante sin servidores.",
        privacyCardTitle: "100% Privado y Local",
        privacyCardDesc: "Al seleccionar un archivo de video o audio, cero bytes se envían a la red. Todo el procesamiento ocurre en la memoria protegida de tu navegador.",
        principlesTitle: "Nuestros Principios Fundamentales",
        p1Title: "Sin Registro:",
        p1Desc: "Nunca te pediremos correo electrónico, contraseñas ni datos bancarios para convertir tus archivos.",
        p2Title: "Sin Trampas ni Botones Falsos:",
        p2Desc: "No colocamos publicidad engañosa, botones falsos de descarga ni ventanas emergentes intrusivas.",
        p3Title: "Herramienta Ética:",
        p3Desc: "Nos enfocamos estrictamente en la conversión de archivos de propiedad del usuario con total respeto a la privacidad.",
        linkConverter: "Explorar Convertidor de Audio",
        linkGuide: "Leer Guía de Formatos",
        linkPrivacy: "Leer Política de Privacidad",
      };
    case "pt":
      return {
        seoTitle: "Sobre o BrowserConvert - Missão, Tecnologia e Privacidade",
        seoDesc: "Saiba como o BrowserConvert oferece conversão de áudio 100% privada no navegador sem uploads para servidores.",
        breadcrumbLabel: "Sobre",
        pageTitle: "Sobre o BrowserConvert",
        pageSubtitle: "O BrowserConvert é uma ferramenta web gratuita criada para simplificar a conversão de formatos de áudio e extração de vídeo com proteção total à privacidade.",
        overviewBadge: "Visão Geral",
        directAnswerQuestion: "O que é o BrowserConvert e como ele protege sua privacidade?",
        directAnswerAnswer: "O BrowserConvert é um conversor de áudio online gratuito que processa arquivos localmente no seu navegador. Diferente dos conversores tradicionais que enviam gravações para servidores na nuvem, o BrowserConvert realiza todo o processamento na memória do seu aparelho. Nenhum byte sai do seu computador.",
        whyBuiltTitle: "Por que criamos o BrowserConvert",
        whyBuiltP1: "Por anos, converter áudio ou extrair som de vídeos exigia instalar softwares pesados ou enviar gravações confidenciais para servidores na internet. Isso expõe áudios pessoais, entrevistas e músicas a riscos desnecessários.",
        whyBuiltP2: "Criamos o BrowserConvert com uma certeza simples:",
        whyBuiltP2Strong: "Seus arquivos nunca devem sair do seu computador ou celular.",
        howWorksTitle: "Como funciona o processamento local",
        engineCardTitle: "Motor no Navegador",
        engineCardDesc: "Nosso motor de conversão executa WebAssembly dentro da sua aba para entregar áudio de alta fidelidade sem servidores.",
        privacyCardTitle: "100% Privado e Local",
        privacyCardDesc: "Ao selecionar arquivos, zero bytes são transmitidos pela rede. Toda a codificação ocorre na memória do seu aparelho.",
        principlesTitle: "Nossos Princípios",
        p1Title: "Sem Cadastro:",
        p1Desc: "Nunca pediremos seu e-mail, senha ou cartões de crédito para converter áudios.",
        p2Title: "Sem Anúncios Enganosos:",
        p2Desc: "Não usamos botões falsos de download, alertas falsos nem pop-ups invasivos.",
        p3Title: "Utilidade Ética:",
        p3Desc: "Focado em permitir aos usuários converter seus próprios arquivos com segurança.",
        linkConverter: "Conhecer Conversor de Áudio",
        linkGuide: "Ler Guia de Formatos",
        linkPrivacy: "Ler Política de Privacidade",
      };
    case "fr":
      return {
        seoTitle: "À propos de BrowserConvert - Mission, Technologie & Confidentialité",
        seoDesc: "Découvrez comment BrowserConvert permet la conversion audio 100% privée dans le navigateur sans aucun envoi sur serveur.",
        breadcrumbLabel: "À propos",
        pageTitle: "À propos de BrowserConvert",
        pageSubtitle: "BrowserConvert est un utilitaire web moderne et gratuit conçu pour convertir des formats audio et extraire le son de vidéos en préservant une confidentialité absolue.",
        overviewBadge: "Aperçu",
        directAnswerQuestion: "Qu'est-ce que BrowserConvert et comment protège-t-il votre vie privée ?",
        directAnswerAnswer: "BrowserConvert est un convertisseur audio en ligne gratuit qui traite les fichiers directement dans votre navigateur. Contrairement aux services traditionnels qui téléchargent vos enregistrements sur le cloud, BrowserConvert exécute l'intégralité du traitement dans la mémoire vive de votre appareil. Zéro octet n'est envoyé sur un serveur.",
        whyBuiltTitle: "Pourquoi nous avons créé BrowserConvert",
        whyBuiltP1: "Pendant des années, convertir un fichier audio nécessitait d'installer des logiciels lourds ou d'envoyer des enregistrements sensibles sur des serveurs distants. Les convertisseurs cloud présentent des risques majeurs pour vos mémos vocaux, interviews et créations musicales.",
        whyBuiltP2: "Nous avons créé BrowserConvert avec une conviction simple :",
        whyBuiltP2Strong: "Vos fichiers multimédias ne devraient jamais quitter votre ordinateur.",
        howWorksTitle: "Fonctionnement du traitement local",
        engineCardTitle: "Moteur intégré au navigateur",
        engineCardDesc: "Notre moteur utilise WebAssembly directement dans votre onglet pour délivrer des conversions instantanées de haute fidélité sans aucun serveur.",
        privacyCardTitle: "100% Privé & Local",
        privacyCardDesc: "Lorsque vous sélectionnez un fichier, aucun octet n'est transféré sur Internet. Tout le traitement se déroule dans la mémoire protégée de votre navigateur.",
        principlesTitle: "Nos principes fondateurs",
        p1Title: "Aucune inscription :",
        p1Desc: "Nous ne vous demanderons jamais votre adresse e-mail, mot de passe ou carte bancaire.",
        p2Title: "Pas de pièges ni de fausses alertes :",
        p2Desc: "Aucun faux bouton de téléchargement ni pop-up trompeur.",
        p3Title: "Outil éthique :",
        p3Desc: "Strictement conçu pour la conversion de vos propres fichiers en respectant les droits d'auteur.",
        linkConverter: "Découvrir le convertisseur audio",
        linkGuide: "Consulter le guide des formats",
        linkPrivacy: "Lire la politique de confidentialité",
      };
    case "it":
      return {
        seoTitle: "Chi siamo - BrowserConvert, Tecnologia e Privacy",
        seoDesc: "Scopri come BrowserConvert garantisce la conversione audio 100% privata nel browser senza caricamenti su server.",
        breadcrumbLabel: "Chi siamo",
        pageTitle: "Chi siamo - BrowserConvert",
        pageSubtitle: "BrowserConvert è uno strumento web gratuito creato per convertire formati audio ed estrarre tracce video tutelando la privacy assoluta dell'utente.",
        overviewBadge: "Panoramica",
        directAnswerQuestion: "Cos'è BrowserConvert e come tutela la tua riservatezza?",
        directAnswerAnswer: "BrowserConvert è un convertitore audio online gratuito che elabora i file localmente nel tuo browser. A differenza dei convertitori tradizionali che inviano file a server remoti, BrowserConvert elabora tutto nella memoria RAM del tuo dispositivo. Zero byte vengono inviati su Internet.",
        whyBuiltTitle: "Perché abbiamo creato BrowserConvert",
        whyBuiltP1: "Per anni, convertire file audio ha richiesto l'installazione di programmi pesanti o il caricamento di registrazioni private su server cloud sconosciuti, esponendo note vocali e file personali a rischi di riservatezza.",
        whyBuiltP2: "Abbiamo sviluppato BrowserConvert con una chiara convinzione:",
        whyBuiltP2Strong: "I tuoi file non devono mai lasciare il tuo dispositivo.",
        howWorksTitle: "Come funziona l'elaborazione locale",
        engineCardTitle: "Motore integrato nel browser",
        engineCardDesc: "Il nostro motore esegue WebAssembly direttamente nella scheda del tuo browser, convertendo l'audio ad altissima velocità senza server esterni.",
        privacyCardTitle: "100% Privato e Locale",
        privacyCardDesc: "Quando selezioni un file, nessun dato viene trasmesso in rete. L'intera elaborazione avviene nella memoria protetta del tuo dispositivo.",
        principlesTitle: "I nostri principi fondamentali",
        p1Title: "Nessuna registrazione:",
        p1Desc: "Non ti chiederemo mai email, password o dati di pagamento per convertire i tuoi file.",
        p2Title: "Nessun inganno o pubblicità invasiva:",
        p2Desc: "Niente falsi pulsanti di download, finte notifiche o pop-up forzati.",
        p3Title: "Strumento etico:",
        p3Desc: "Dedicato alla conversione dei file di proprietà dell'utente nel pieno rispetto delle norme.",
        linkConverter: "Esplora il Convertitore Audio",
        linkGuide: "Leggi la Guida ai Formati",
        linkPrivacy: "Leggi l'Informativa sulla Privacy",
      };
    default:
      return {
        seoTitle: "About BrowserConvert - Mission, Tech & Privacy",
        seoDesc: "Learn how BrowserConvert provides 100% private in-browser audio conversion without server storage.",
        breadcrumbLabel: "About",
        pageTitle: "About BrowserConvert",
        pageSubtitle: "BrowserConvert is a free, modern web utility built to simplify audio format conversion and video-to-audio extraction while protecting user confidentiality.",
        overviewBadge: "Overview",
        directAnswerQuestion: "What is BrowserConvert and how does it protect user privacy?",
        directAnswerAnswer: "BrowserConvert is a free online audio converter that processes files locally inside your browser. Unlike traditional converters that upload private audio and video recordings to cloud servers, BrowserConvert executes all conversion, trimming, and editing directly on your device. Zero bytes of your personal media are ever uploaded to any server.",
        whyBuiltTitle: "Why We Built BrowserConvert",
        whyBuiltP1: "For years, converting an audio file or extracting sound from a video required either installing bloated, adware-laden desktop software or uploading sensitive recordings to obscure cloud servers. Cloud-based converters present serious privacy risks: your personal voice notes, corporate interviews, unreleased music, and private family videos are uploaded over the internet, stored on third-party disks, and processed in unpredictable server environments.",
        whyBuiltP2: "We built BrowserConvert with a simple conviction:",
        whyBuiltP2Strong: "your media files should never leave your computer or phone.",
        howWorksTitle: "How On-Device Processing Works",
        engineCardTitle: "In-Browser Processing Engine",
        engineCardDesc: "Our conversion engine runs directly inside your web browser tab to deliver high-fidelity audio conversions at instant speeds without sending any files over the internet.",
        privacyCardTitle: "100% Private & Local",
        privacyCardDesc: "When you select a video or audio file, zero bytes of media content are sent over the network. All audio processing and conversion occurs entirely inside your device's protected browser memory.",
        principlesTitle: "Our Core Principles",
        p1Title: "No Registration:",
        p1Desc: "We will never ask for your email address, passwords, or credit card details to convert audio files.",
        p2Title: "No Deceptive Dark Patterns:",
        p2Desc: "We do not place misleading download buttons, fake antivirus alerts, or forced pop-ups.",
        p3Title: "Ethical Utility:",
        p3Desc: "We focus strictly on converting user-owned files. We do not support downloading protected streaming media or circumventing platform rights.",
        linkConverter: "Explore Audio Converter",
        linkGuide: "Read Format Guide",
        linkPrivacy: "Read Privacy Policy",
      };
  }
}
