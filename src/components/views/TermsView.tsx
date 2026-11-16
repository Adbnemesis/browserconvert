import React from "react";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { FileText, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { Locale, getLocalizedPath } from "@/i18n";

interface TermsViewProps {
  locale?: Locale;
}

export function TermsView({ locale = "en" }: TermsViewProps) {
  const content = getTermsViewContent(locale);
  const canonicalUrl = getLocalizedPath(locale, "/terms");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SeoSchema
        pageType="website"
        title={content.seoTitle}
        description={content.seoDesc}
        url={canonicalUrl}
        breadcrumbs={[{ label: content.breadcrumbLabel, href: canonicalUrl }]}
      />

      <Breadcrumbs items={[{ label: content.breadcrumbLabel, href: canonicalUrl }]} />

      <div className="mt-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 text-xs mb-4">
          <FileText className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
          <span className="font-mono text-[11px]">{content.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          {content.pageTitle}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm">
          {content.lastUpdated}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>{content.s1Title}</h3>
          </div>
          <p>{content.s1P1}</p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>{content.s2Title}</h3>
          </div>
          <p>{content.s2P1}</p>
          <p>{content.s2P2}</p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <ShieldAlert className="w-5 h-5 text-amber-500" />
            <h3>{content.s3Title}</h3>
          </div>
          <p>{content.s3P1}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{content.s3Li1}</li>
            <li>{content.s3Li2}</li>
            <li>{content.s3Li3}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-slate-900 dark:text-white font-bold text-xl">{content.s4Title}</h3>
          <p>{content.s4P1}</p>
        </section>

        <section className="space-y-3">
          <h3 className="text-slate-900 dark:text-white font-bold text-xl">{content.s5Title}</h3>
          <p>{content.s5P1}</p>
        </section>
      </div>
    </div>
  );
}

function getTermsViewContent(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        seoTitle: "Nutzungsbedingungen - BrowserConvert",
        seoDesc: "Nutzungsbedingungen für die Nutzung der kostenlosen lokalen Audio-Konvertierungsdienste von BrowserConvert.",
        breadcrumbLabel: "Nutzungsbedingungen",
        badge: "Nutzungsvereinbarung",
        pageTitle: "Nutzungsbedingungen",
        lastUpdated: "Zuletzt aktualisiert: November 2026 • Bitte vor der Nutzung sorgfältig lesen",
        s1Title: "1. Annahme der Bedingungen",
        s1P1: "Durch den Zugriff auf oder die Nutzung von BrowserConvert erklären Sie sich mit diesen Nutzungsbedingungen und allen anwendbaren Gesetzen einverstanden.",
        s2Title: "2. Beschreibung des Dienstes",
        s2P1: "BrowserConvert stellt clientseitige Werkzeuge zur Audioumwandlung, Schnitt, Kompression und Videoextraktion bereit.",
        s2P2: "Alle Berechnungen werden direkt in Ihrem Browser mittels WebAssembly durchgeführt. Wir speichern oder verarbeiten keine Dateien auf externen Servern.",
        s3Title: "3. Zulässige Nutzung",
        s3P1: "Sie erklären sich damit einverstanden, den Dienst nur für rechtmäßige Zwecke zu nutzen. Es ist untersagt:",
        s3Li1: "Dateien zu konvertieren, an denen Sie keine Urheber- oder Nutzungsrechte besitzen.",
        s3Li2: "Den Dienst zur Verbreitung von Schadsoftware oder für rechtswidrige Inhalte zu missbrauchen.",
        s3Li3: "Kopierschutzmaßnahmen oder Streaming-Schutzmechanismen zu umgehen.",
        s4Title: "4. Geistiges Eigentum",
        s4P1: "Sie behalten zu jedem Zeitpunkt das vollständige Eigentum an allen Ihren Mediendateien. BrowserConvert erhebt keinerlei Rechte an Ihren Inhalten.",
        s5Title: "5. Haftungsausschluss",
        s5P1: "Der Dienst wird 'wie besehen' zur Verfügung gestellt. BrowserConvert übernimmt keine Gewähr für fehlerfreie oder ununterbrochene Verfügbarkeit.",
      };
    case "es":
      return {
        seoTitle: "Términos de Servicio - BrowserConvert",
        seoDesc: "Términos y condiciones para el uso de la plataforma de conversión de audio en el navegador BrowserConvert.",
        breadcrumbLabel: "Términos",
        badge: "Acuerdo de servicio",
        pageTitle: "Términos de Servicio",
        lastUpdated: "Última actualización: Noviembre 2026 • Lee atentamente antes de usar",
        s1Title: "1. Aceptación de los Términos",
        s1P1: "Al acceder o utilizar BrowserConvert, aceptas cumplir con estos Términos de Servicio y con todas las leyes y regulaciones aplicables.",
        s2Title: "2. Descripción del Servicio",
        s2P1: "BrowserConvert proporciona herramientas de conversión, corte, compresión y extracción de audio que funcionan en el navegador.",
        s2P2: "Todo el procesamiento se realiza localmente en tu dispositivo mediante WebAssembly. No almacenamos tus archivos en servidores externos.",
        s3Title: "3. Política de Uso Aceptable",
        s3P1: "Aceptas utilizar el servicio únicamente para fines lícitos. Queda estrictamente prohibido:",
        s3Li1: "Convertir archivos protegidos por derechos de autor sin la debida autorización o titularidad.",
        s3Li2: "Intentar introducir código malicioso o vulnerar la integridad de la aplicación web.",
        s3Li3: "Eludir mecanismos de protección de gestión de derechos digitales (DRM).",
        s4Title: "4. Propiedad Intelectual",
        s4P1: "Mantienes la propiedad total de todos tus archivos en todo momento. BrowserConvert no reclama ningún derecho sobre tus contenidos.",
        s5Title: "5. Limitación de Responsabilidad",
        s5P1: "El servicio se ofrece 'tal cual' sin garantías de ningún tipo. BrowserConvert no se hace responsable de pérdidas de datos indirectas.",
      };
    case "pt":
      return {
        seoTitle: "Termos de Serviço - BrowserConvert",
        seoDesc: "Termos e condições de uso da ferramenta gratuita de conversão de áudio no navegador BrowserConvert.",
        breadcrumbLabel: "Termos",
        badge: "Acordo de serviço",
        pageTitle: "Termos de Serviço",
        lastUpdated: "Última atualização: Novembro de 2026 • Leia atentamente antes de usar",
        s1Title: "1. Aceitação dos Termos",
        s1P1: "Ao acessar ou usar o BrowserConvert, você concorda com estes Termos de Serviço e com todas as leis aplicáveis.",
        s2Title: "2. Descrição do Serviço",
        s2P1: "O BrowserConvert disponibiliza ferramentas de conversão, corte e compressão de áudio executadas no navegador.",
        s2P2: "Todas as tarefas são realizadas no seu próprio aparelho através de WebAssembly, sem armazenamento em servidores remotos.",
        s3Title: "3. Uso Permitido",
        s3P1: "Você concorda em utilizar o serviço apenas para finalidades legais. É proibido:",
        s3Li1: "Converter arquivos dos quais você não possua direitos autorais ou autorização expressa.",
        s3Li2: "Utilizar a ferramenta para distribuir código malicioso ou conteúdos ilegais.",
        s3Li3: "Burlar tecnologias de proteção contra cópia (DRM) ou restrições de plataformas.",
        s4Title: "4. Direitos Autorais",
        s4P1: "Você mantém a posse e direitos integrais sobre seus arquivos. O BrowserConvert não tem acesso nem reivindica direitos sobre suas mídias.",
        s5Title: "5. Limitação de Responsabilidade",
        s5P1: "O serviço é fornecido 'no estado em que se encontra', sem garantias explícitas ou implícitas de disponibilidade ininterrupta.",
      };
    case "fr":
      return {
        seoTitle: "Conditions d'Utilisation - BrowserConvert",
        seoDesc: "Conditions d'utilisation de la plateforme de conversion audio gratuite et privée dans le navigateur BrowserConvert.",
        breadcrumbLabel: "Conditions",
        badge: "Contrat de service",
        pageTitle: "Conditions d'Utilisation",
        lastUpdated: "Dernière mise à jour : Novembre 2026 • À lire attentivement avant utilisation",
        s1Title: "1. Acceptation des conditions",
        s1P1: "En accédant à BrowserConvert ou en l'utilisant, vous acceptez d'être lié par les présentes conditions d'utilisation.",
        s2Title: "2. Description du service",
        s2P1: "BrowserConvert fournit des outils de conversion, découpage et compression audio fonctionnant dans le navigateur.",
        s2P2: "Tous les calculs sont effectués localement sur votre appareil via WebAssembly, sans aucun stockage sur serveur.",
        s3Title: "3. Utilisation acceptable",
        s3P1: "Vous vous engagez à n'utiliser le service qu'à des fins licites. Il est interdit de :",
        s3Li1: "Convertir des fichiers protégés par le droit d'auteur sans autorisation préalable.",
        s3Li2: "Utiliser l'outil pour propager des logiciels malveillants ou du contenu illicite.",
        s3Li3: "Contourner les mesures techniques de protection (DRM).",
        s4Title: "4. Propriété intellectuelle",
        s4P1: "Vous conservez l'entière propriété de tous vos fichiers multimédias. BrowserConvert ne revendique aucun droit sur vos contenus.",
        s5Title: "5. Limitation de responsabilité",
        s5P1: "Le service est fourni 'en l'état', sans garantie d'aucune sorte quant à sa disponibilité continue.",
      };
    case "it":
      return {
        seoTitle: "Termini di Servizio - BrowserConvert",
        seoDesc: "Termini e condizioni per l'utilizzo della piattaforma gratuita di conversione audio nel browser BrowserConvert.",
        breadcrumbLabel: "Termini",
        badge: "Accordo di servizio",
        pageTitle: "Termini di Servizio",
        lastUpdated: "Ultimo aggiornamento: Novembre 2026 • Si prega di leggere attentamente prima dell'uso",
        s1Title: "1. Accettazione dei termini",
        s1P1: "Accedendo o utilizzando BrowserConvert, accetti di essere vincolato dai presenti Termini di servizio e dalle normative vigenti.",
        s2Title: "2. Descrizione del servizio",
        s2P1: "BrowserConvert mette a disposizione strumenti di conversione, ritaglio e compressione audio funzionanti nel browser.",
        s2P2: "Tutte le elaborazioni avvengono localmente sul tuo dispositivo tramite WebAssembly, senza archiviazione su server esterni.",
        s3Title: "3. Utilizzo consentito",
        s3P1: "Accetti di utilizzare il servizio solo per scopi leciti. È fatto divieto di:",
        s3Li1: "Convertire file protetti da copyright senza i relativi diritti o autorizzazioni.",
        s3Li2: "Utilizzare lo strumento per diffondere software dannoso o contenuti non conformi alla legge.",
        s3Li3: "Aggirare sistemi di protezione digitale (DRM) o restrizioni di piattaforme terze.",
        s4Title: "4. Proprietà intellettuale",
        s4P1: "Mantieni la piena e totale proprietà di tutti i tuoi file. BrowserConvert non rivendica alcun diritto sui tuoi contenuti.",
        s5Title: "5. Limitazione di responsabilità",
        s5P1: "Il servizio è fornito 'così com'è', senza garanzie esplicite di disponibilità continuativa o assenza di errori.",
      };
    default:
      return {
        seoTitle: `Terms of Service - Acceptable Use & Service Agreement | ${siteConfig.name}`,
        seoDesc: `Review the terms and conditions for using ${siteConfig.name}, our free, in-browser client-side audio conversion and editing platform.`,
        breadcrumbLabel: "Terms of Service",
        badge: "Service agreement",
        pageTitle: "Terms of Service",
        lastUpdated: "Last updated: November 2026 • Please read carefully before using the service",
        s1Title: "1. Acceptance of Terms",
        s1P1: "By accessing or using BrowserConvert, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        s2Title: "2. Description of Service",
        s2P1: "BrowserConvert provides browser-native audio conversion, extraction, compression, and editing tools.",
        s2P2: "All processing occurs locally in your device's browser memory via WebAssembly without uploading files to our servers.",
        s3Title: "3. Acceptable Use Policy",
        s3P1: "You agree to use BrowserConvert only for lawful purposes. You agree NOT to:",
        s3Li1: "Convert or extract audio from media you do not have legal authorization or ownership to process.",
        s3Li2: "Attempt to probe, reverse-engineer, or disrupt the operation of the web application.",
        s3Li3: "Circumvent digital rights management (DRM) mechanisms.",
        s4Title: "4. Intellectual Property Rights",
        s4P1: "You retain full, exclusive ownership of your files at all times. BrowserConvert claims zero rights or licenses over your media.",
        s5Title: "5. Disclaimer of Warranties",
        s5P1: "BrowserConvert is provided 'as is' and 'as available' without warranties of any kind.",
      };
  }
}
