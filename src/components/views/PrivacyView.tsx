import React from "react";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { ShieldCheck, Lock, EyeOff, ServerOff, Cookie, HelpCircle } from "lucide-react";
import { Locale, getLocalizedPath } from "@/i18n";

interface PrivacyViewProps {
  locale?: Locale;
}

export function PrivacyView({ locale = "en" }: PrivacyViewProps) {
  const content = getPrivacyViewContent(locale);
  const canonicalUrl = getLocalizedPath(locale, "/privacy");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SeoSchema
        pageType="website"
        title={content.seoTitle}
        description={content.seoDesc}
        url={canonicalUrl}
        locale={locale}
        breadcrumbs={[{ label: content.breadcrumbLabel, href: canonicalUrl }]}
      />

      <Breadcrumbs items={[{ label: content.breadcrumbLabel, href: canonicalUrl }]} />

      <div className="mt-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 text-xs mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
          <span className="font-mono text-[11px]">{content.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          {content.pageTitle}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm">
          {content.lastUpdated}
        </p>
      </div>

      {/* Core Privacy Promise Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-brand-500/5 to-transparent border border-emerald-500/20 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {content.bannerTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {content.bannerBodyPrefix} <strong>{content.bannerBodyStrong}</strong>. {content.bannerBodySuffix}
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <ServerOff className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>{content.s1Title}</h3>
          </div>
          <p>{content.s1P1}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{content.s1Li1Strong}</strong> {content.s1Li1Text}</li>
            <li><strong>{content.s1Li2Strong}</strong> {content.s1Li2Text}</li>
            <li><strong>{content.s1Li3Strong}</strong> {content.s1Li3Text}</li>
            <li><strong>{content.s1Li4Strong}</strong> {content.s1Li4Text}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <EyeOff className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>{content.s2Title}</h3>
          </div>
          <p>{content.s2P1}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{content.s2Li1}</li>
            <li>{content.s2Li2}</li>
            <li>{content.s2Li3}</li>
            <li>{content.s2Li4}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <Cookie className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>{content.s3Title}</h3>
          </div>
          <p>{content.s3P1}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{content.s3Li1Strong}</strong> {content.s3Li1Text}</li>
            <li><strong>{content.s3Li2Strong}</strong> {content.s3Li2Text}</li>
            <li><strong>{content.s3Li3Strong}</strong> {content.s3Li3Text}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <HelpCircle className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>{content.s4Title}</h3>
          </div>
          <p>{content.s4P1}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{content.s4Li1}</li>
            <li>{content.s4Li2}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function getPrivacyViewContent(locale: Locale) {
  switch (locale) {
    case "de":
      return {
        seoTitle: "Datenschutzerklärung - 100% private lokale Audiokonvertierung | BrowserConvert",
        seoDesc: "BrowserConvert basiert auf einem Privacy-by-Default-Ansatz. Ihre Audio- und Videodateien werden lokal im Browser konvertiert und niemals auf Server hochgeladen.",
        breadcrumbLabel: "Datenschutz",
        badge: "Keine Server-Dateispeicherung",
        pageTitle: "Datenschutzerklärung",
        lastUpdated: "Zuletzt aktualisiert: November 2026 • Sofort wirksam",
        bannerTitle: "Die absolute Datenschutz-Garantie",
        bannerBodyPrefix: "Im Gegensatz zu herkömmlichen Cloud-Konvertern, bei denen vertrauliche Aufnahmen auf fremde Server geladen werden müssen,",
        bannerBodyStrong: "führt BrowserConvert 100% aller Konvertierungen direkt auf Ihrem Gerät in Ihrem Browser aus",
        bannerBodySuffix: "Ihre Dateien berühren zu keinem Zeitpunkt unsere Server.",
        s1Title: "1. Wie die Dateiverarbeitung funktioniert",
        s1P1: "Wenn Sie eine Audio- oder Videodatei in BrowserConvert laden:",
        s1Li1Strong: "Nur lokaler RAM:",
        s1Li1Text: "Ihr Browser liest die Datei von Ihrer Festplatte über Standard-HTML5-File-APIs in den lokalen Arbeitsspeicher.",
        s1Li2Strong: "Lokale Engine im Browser:",
        s1Li2Text: "Die Konvertierung läuft vollständig in WebAssembly-Web-Workern auf Ihrem Gerät.",
        s1Li3Strong: "Kein Upload ins Netz:",
        s1Li3Text: "Kein einziges Byte Ihrer Mediendaten wird über das Internet an Server übertragen.",
        s1Li4Strong: "Sofortige Speicherfreigabe:",
        s1Li4Text: "Konvertierte Dateien existieren als temporäre Blob-URLs. Beim Schließen des Tabs wird der RAM sofort freigegeben.",
        s2Title: "2. Daten, die wir NICHT erfassen",
        s2P1: "Da wir keine serverseitige Transcoding-Infrastruktur nutzen:",
        s2Li1: "Wir speichern, hören, transkribieren oder analysieren Ihre Dateien niemals.",
        s2Li2: "Wir speichern keine Datei-Metadaten, Titel oder ID3-Tags.",
        s2Li3: "Wir verlangen keine Benutzerkonten, Registrierungen oder E-Mail-Adressen.",
        s2Li4: "Wir nutzen Ihre Mediendateien nicht zum Trainieren von KI- oder ML-Modellen.",
        s3Title: "3. Analysen, Cookies & Telemetrie",
        s3P1: "Um den Betrieb und die Zuverlässigkeit sicherzustellen, erfassen wir ausschließlich aggregierte, nicht personenbezogene Diagnosedaten:",
        s3Li1Strong: "Engine-Diagnose:",
        s3Li1Text: "Aggregierte Zähler für gestartete Konvertierungen oder Format-Auswahlen ohne Dateinamen oder Kennungen.",
        s3Li2Strong: "Server-Zugriffsprotokolle:",
        s3Li2Text: "Standard-HTTP-Header und anonymisierte IP-Adressen zur DDoS-Abwehr unseres CDN-Hosters.",
        s3Li3Strong: "Lokale Einstellungen:",
        s3Li3Text: "Optionale UI-Einstellungen wie Dark Mode im lokalen Speicher Ihres Browsers.",
        s4Title: "4. Werbung & Drittanbieter",
        s4P1: "BrowserConvert finanziert sich über dezente Werbeplatzierungen, um kostenlos ohne Bezahlschranken zu bleiben:",
        s4Li1: "Werbepartner (wie Google AdSense) können Cookies zur Ausspielung relevanter Anzeigen einsetzen.",
        s4Li2: "Alle Anzeigen sind klar als Sponsoring gekennzeichnet und tarnen sich niemals als falsche Download-Buttons.",
      };
    case "es":
      return {
        seoTitle: "Política de Privacidad - Conversor de Audio 100% Privado | BrowserConvert",
        seoDesc: "BrowserConvert está diseñado con arquitectura privada por defecto. Tus archivos se procesan localmente en tu navegador sin subidas a servidores.",
        breadcrumbLabel: "Privacidad",
        badge: "Sin almacenamiento en servidores",
        pageTitle: "Política de Privacidad",
        lastUpdated: "Última actualización: Noviembre 2026 • Efectiva de inmediato",
        bannerTitle: "Garantía Absoluta de Privacidad",
        bannerBodyPrefix: "A diferencia de los convertidores tradicionales en la nube que requieren subir tus grabaciones a servidores desconocidos,",
        bannerBodyStrong: "BrowserConvert ejecuta el 100% del procesamiento y la conversión directamente en tu navegador",
        bannerBodySuffix: "Tus archivos nunca tocan nuestros servidores.",
        s1Title: "1. Cómo funciona el procesamiento de archivos",
        s1P1: "Cuando añades un archivo de audio o video a BrowserConvert:",
        s1Li1Strong: "Solo memoria local:",
        s1Li1Text: "Tu navegador lee el archivo del disco a la memoria RAM mediante APIs nativas de HTML5.",
        s1Li2Strong: "Motor local WebAssembly:",
        s1Li2Text: "El procesamiento se ejecuta en hilos de trabajo locales dentro de tu dispositivo.",
        s1Li3Strong: "Sin subidas a la red:",
        s1Li3Text: "Ni un solo byte de tu contenido se transmite por internet a ningún servidor.",
        s1Li4Strong: "Liberación inmediata de memoria:",
        s1Li4Text: "Los archivos convertidos residen como Blob URLs en RAM y se eliminan al cerrar la pestaña.",
        s2Title: "2. Información que NO recopilamos",
        s2P1: "Dado que no utilizamos servidores remotos para la conversión:",
        s2Li1: "No almacenamos, escuchamos, transcribimos ni inspeccionamos tus archivos.",
        s2Li2: "No guardamos metadatos de archivos, nombres ni etiquetas de audio.",
        s2Li3: "No exigimos cuentas, registros, contraseñas ni correos electrónicos.",
        s2Li4: "No usamos tus archivos para entrenar modelos de inteligencia artificial.",
        s3Title: "3. Analíticas, Cookies y Telemetría",
        s3P1: "Para mantener el servicio estable y corregir errores, recopilamos únicamente métricas diagnósticas anónimas:",
        s3Li1Strong: "Diagnóstico del motor:",
        s3Li1Text: "Estadísticas agregadas de conversiones iniciadas sin nombres de archivo ni identificadores.",
        s3Li2Strong: "Registros de red estándar:",
        s3Li2Text: "Cabeceras HTTP e IPs anonimizadas en el CDN para protección contra ataques DDoS.",
        s3Li3Strong: "Preferencias locales:",
        s3Li3Text: "Ajustes de interfaz como el modo oscuro guardados exclusivamente en tu navegador.",
        s4Title: "4. Publicidad y Terceros",
        s4P1: "BrowserConvert se financia mediante publicidad web para ofrecer conversiones gratuitas e ilimitadas:",
        s4Li1: "Los socios publicitarios pueden utilizar cookies técnicas para mostrar anuncios contextuales.",
        s4Li2: "Todos los anuncios están claramente identificados y nunca se disfrazan como falsos botones de descarga.",
      };
    case "pt":
      return {
        seoTitle: "Política de Privacidade - Conversão 100% Local | BrowserConvert",
        seoDesc: "O BrowserConvert é projetado com privacidade total. Seus arquivos de áudio e vídeo são convertidos no navegador sem upload para servidores.",
        breadcrumbLabel: "Privacidade",
        badge: "Sem armazenamento em servidores",
        pageTitle: "Política de Privacidade",
        lastUpdated: "Última atualização: Novembro de 2026 • Em vigor imediatamente",
        bannerTitle: "Garantia Absoluta de Privacidade",
        bannerBodyPrefix: "Ao contrário dos conversores em nuvem que exigem o upload de gravações para servidores remotos,",
        bannerBodyStrong: "o BrowserConvert realiza 100% da conversão diretamente no seu navegador web",
        bannerBodySuffix: "Seus arquivos nunca passam por nossos servidores.",
        s1Title: "1. Como funciona o processamento de arquivos",
        s1P1: "Quando você adiciona um arquivo ao BrowserConvert:",
        s1Li1Strong: "Apenas memória local:",
        s1Li1Text: "O navegador carrega o arquivo do disco para a memória RAM via APIs nativas do HTML5.",
        s1Li2Strong: "Motor local WebAssembly:",
        s1Li2Text: "Todo o processamento ocorre em threads locais no seu próprio aparelho.",
        s1Li3Strong: "Zero upload para a rede:",
        s1Li3Text: "Nenhum byte das suas mídias é enviado para a internet.",
        s1Li4Strong: "Liberação imediata de memória:",
        s1Li4Text: "Os arquivos convertidos existem como URLs temporárias e são liberados ao fechar a aba.",
        s2Title: "2. Informações que NÃO coletamos",
        s2P1: "Como não usamos transcodificação em servidores:",
        s2Li1: "Não armazenamos, ouvimos, transcrevemos nem inspecionamos seus arquivos.",
        s2Li2: "Não guardamos nomes de arquivos, metadados ou tags ID3.",
        s2Li3: "Não exigimos cadastros, senhas ou e-mails para utilizar as ferramentas.",
        s2Li4: "Não usamos seus dados para treinar modelos de inteligência artificial.",
        s3Title: "3. Métricas, Cookies e Telemetria",
        s3P1: "Para manter o serviço estável e corrigir falhas, coletamos apenas dados de diagnóstico agregados e anônimos:",
        s3Li1Strong: "Diagnóstico do motor:",
        s3Li1Text: "Contadores de conversões iniciadas sem nomes de arquivos ou dados do usuário.",
        s3Li2Strong: "Logs de CDN padrão:",
        s3Li2Text: "Cabeçalhos HTTP e IPs anonimizados para proteção contra ataques de negação de serviço.",
        s3Li3Strong: "Configurações locais:",
        s3Li3Text: "Preferências de tema (como modo escuro) salvas no armazenamento local do navegador.",
        s4Title: "4. Publicidade e Parceiros",
        s4P1: "O BrowserConvert é mantido por anúncios para permanecer gratuito e sem limites:",
        s4Li1: "Parceiros como o Google AdSense podem usar cookies para exibir anúncios contextuais.",
        s4Li2: "Anúncios são identificados e nunca se disfarçam de botões de download falsos.",
      };
    case "fr":
      return {
        seoTitle: "Politique de Confidentialité - 100% Privé dans le Navigateur | BrowserConvert",
        seoDesc: "BrowserConvert est conçu avec une confidentialité absolue par défaut. Vos fichiers sont convertis localement sans aucun transfert vers des serveurs.",
        breadcrumbLabel: "Confidentialité",
        badge: "Zéro stockage sur serveur",
        pageTitle: "Politique de Confidentialité",
        lastUpdated: "Dernière mise à jour : Novembre 2026 • Effet immédiat",
        bannerTitle: "Garantie Absolue de Confidentialité",
        bannerBodyPrefix: "Contrairement aux convertisseurs cloud traditionnels qui exigent d'envoyer vos enregistrements sur des serveurs distants,",
        bannerBodyStrong: "BrowserConvert effectue 100% des calculs de conversion directement sur votre appareil",
        bannerBodySuffix: "Vos fichiers ne transitent jamais par nos serveurs.",
        s1Title: "1. Fonctionnement du traitement des fichiers",
        s1P1: "Lorsque vous ajoutez un fichier à BrowserConvert :",
        s1Li1Strong: "Mémoire locale uniquement :",
        s1Li1Text: "Votre navigateur lit le fichier depuis votre disque vers la mémoire RAM via les APIs HTML5.",
        s1Li2Strong: "Moteur local WebAssembly :",
        s1Li2Text: "L'encodage audio s'exécute dans des Web Workers locaux sur votre appareil.",
        s1Li3Strong: "Aucun envoi réseau :",
        s1Li3Text: "Zéro octet de votre fichier n'est transmis sur Internet vers nos serveurs.",
        s1Li4Strong: "Libération immédiate de la mémoire :",
        s1Li4Text: "Les fichiers convertis existent sous forme de Blob URLs et sont effacés à la fermeture de l'onglet.",
        s2Title: "2. Données que nous ne collectons PAS",
        s2P1: "Comme nous n'utilisons aucun serveur de transcodage :",
        s2Li1: "Nous ne stockons, n'écoutons, ne transcrivons ni n'inspectons vos fichiers.",
        s2Li2: "Nous ne conservons aucune métadonnée ou étiquette de fichier.",
        s2Li3: "Nous n'exigeons aucun compte utilisateur, mot de passe ou adresse e-mail.",
        s2Li4: "Nous n'utilisons pas vos médias pour entraîner des modèles d'IA.",
        s3Title: "3. Télémétrie, Cookies et Diagnostics",
        s3P1: "Pour assurer la fiabilité du service, nous collectons uniquement des métriques anonymes et agrégées :",
        s3Li1Strong: "Diagnostics du moteur :",
        s3Li1Text: "Statistiques de conversions lancées sans noms de fichiers ni identifiants.",
        s3Li2Strong: "Journaux CDN standards :",
        s3Li2Text: "En-têtes HTTP et adresses IP anonymisées pour la protection contre les attaques DDoS.",
        s3Li3Strong: "Préférences locales :",
        s3Li3Text: "Préférences d'affichage (mode sombre) conservées dans le stockage local de votre navigateur.",
        s4Title: "4. Publicité et tiers",
        s4P1: "BrowserConvert est soutenu par des annonces web pour rester gratuit et illimité :",
        s4Li1: "Des partenaires publicitaires peuvent utiliser des cookies pour diffuser des annonces pertinentes.",
        s4Li2: "Toutes les annonces sont clairement identifiées et ne se déguisent jamais en faux boutons.",
      };
    case "it":
      return {
        seoTitle: "Informativa sulla Privacy - Conversione 100% Privata | BrowserConvert",
        seoDesc: "BrowserConvert è progettato con una privacy totale predefinita. I tuoi file audio e video vengono convertiti nel browser senza caricamenti su server.",
        breadcrumbLabel: "Privacy",
        badge: "Zero archiviazione su server",
        pageTitle: "Informativa sulla Privacy",
        lastUpdated: "Ultimo aggiornamento: Novembre 2026 • Efficacia immediata",
        bannerTitle: "Garanzia Assoluta di Riservatezza",
        bannerBodyPrefix: "A differenza dei convertitori cloud tradizionali che richiedono il caricamento di file su server remoti,",
        bannerBodyStrong: "BrowserConvert esegue il 100% dell'elaborazione direttamente nel tuo browser web",
        bannerBodySuffix: "I tuoi file non toccano mai i nostri server.",
        s1Title: "1. Come funziona l'elaborazione dei file",
        s1P1: "Quando carichi un file audio o video su BrowserConvert:",
        s1Li1Strong: "Solo memoria locale:",
        s1Li1Text: "Il browser legge il file dal tuo disco locale nella memoria RAM tramite API HTML5.",
        s1Li2Strong: "Motore WebAssembly locale:",
        s1Li2Text: "L'elaborazione viene eseguita localmente nei Web Worker del tuo dispositivo.",
        s1Li3Strong: "Zero caricamenti su Internet:",
        s1Li3Text: "Nessun byte dei tuoi file viene mai trasmesso in rete verso server esterni.",
        s1Li4Strong: "Rilascio immediato della memoria:",
        s1Li4Text: "I file convertiti risiedono come Blob URL in memoria e vengono cancellati chiudendo la scheda.",
        s2Title: "2. Informazioni che NON raccogliamo",
        s2P1: "Non utilizzando server remoti di transcodifica:",
        s2Li1: "Non memorizziamo, ascoltiamo, trascriviamo né ispezioniamo i tuoi file.",
        s2Li2: "Non conserviamo metadati dei file, titoli o tag audio.",
        s2Li3: "Non richiediamo registrazione, account, password o indirizzi email.",
        s2Li4: "Non usiamo i tuoi file per addestrare modelli di intelligenza artificiale.",
        s3Title: "3. Statistiche, Cookie e Diagnostica",
        s3P1: "Per garantire il funzionamento del servizio, raccogliamo solo parametri diagnostici anonimi e aggregati:",
        s3Li1Strong: "Diagnostica del motore:",
        s3Li1Text: "Statistiche sul numero di conversioni avviate senza nomi di file né identificatori personali.",
        s3Li2Strong: "Log standard del server CDN:",
        s3Li2Text: "Header HTTP e indirizzi IP anonimizzati per la difesa da attacchi DDoS.",
        s3Li3Strong: "Impostazioni locali:",
        s3Li3Text: "Preferenze di interfaccia come il tema scuro salvate nel browser dell'utente.",
        s4Title: "4. Pubblicità e Terze Parti",
        s4P1: "BrowserConvert è sostenuto da annunci pubblicitari per rimanere gratuito e senza limiti:",
        s4Li1: "I partner pubblicitari possono utilizzare cookie per mostrare annunci pertinenti.",
        s4Li2: "Gli annunci sono chiaramente contrassegnati e non si spacciano mai per pulsanti di download.",
      };
    default:
      return {
        seoTitle: "Privacy Policy - 100% Client-Side Private Audio Converter | BrowserConvert",
        seoDesc: "BrowserConvert is engineered with private-by-default architecture. Your audio and video files are converted locally in your browser and never uploaded to our servers.",
        breadcrumbLabel: "Privacy Policy",
        badge: "Zero server file storage",
        pageTitle: "Privacy Policy",
        lastUpdated: "Last updated: November 2026 • Effective immediately",
        bannerTitle: "The Absolute Privacy Guarantee",
        bannerBodyPrefix: "Unlike traditional cloud converter websites that require you to upload your sensitive voice recordings, musical tracks, or personal videos to an unknown remote server,",
        bannerBodyStrong: "BrowserConvert performs 100% of conversion and editing computations directly on your device inside your web browser",
        bannerBodySuffix: "Your files never touch our servers.",
        s1Title: "1. How File Processing Works",
        s1P1: "When you add an audio or video file to BrowserConvert:",
        s1Li1Strong: "Local Memory Only:",
        s1Li1Text: "Your browser reads the file from your local disk into browser memory (RAM) via standard HTML5 File APIs.",
        s1Li2Strong: "On-Device In-Browser Engine:",
        s1Li2Text: "Our conversion engine runs locally inside your browser tab or background worker thread on your device.",
        s1Li3Strong: "No Outbound Network Upload:",
        s1Li3Text: "No byte of your media payload is ever transmitted over the internet to BrowserConvert or any cloud storage service.",
        s1Li4Strong: "Immediate Memory Reclamation:",
        s1Li4Text: "Converted files reside as transient in-memory Object URLs (Blob URLs). When you clear a file from the queue, close the browser tab, or navigate away, memory is reclaimed by your operating system.",
        s2Title: "2. Information We Do NOT Collect",
        s2P1: "Because we do not use server-side transcoding infrastructure:",
        s2Li1: "We do not store, view, listen to, transcribe, or inspect your audio or video files.",
        s2Li2: "We do not retain file metadata, titles, album tags, or embedded personal information.",
        s2Li3: "We do not require user accounts, passwords, email sign-ups, or social logins to use any conversion tool.",
        s2Li4: "We do not monetize your file contents, sell training datasets, or feed your media to machine learning models.",
        s3Title: "3. Analytics, Cookies & Web Telemetry",
        s3P1: "To keep BrowserConvert operational, reliable, and bug-free, we may collect aggregated, non-personally identifiable diagnostic metrics:",
        s3Li1Strong: "Engine Diagnostics:",
        s3Li1Text: "Aggregated statistics such as total conversions initiated, output format selections, or engine initialization status.",
        s3Li2Strong: "Standard Server Access Logs:",
        s3Li2Text: "Standard HTTP request headers, IP addresses (anonymized/hashed for DDoS mitigation), browser user agents, and page load durations.",
        s3Li3Strong: "Local Storage Preferences:",
        s3Li3Text: "Non-sensitive UI settings (such as dark mode preference or preferred default bitrate) in your browser's local storage.",
        s4Title: "4. Advertising & Third-Party Services",
        s4P1: "BrowserConvert is supported by web advertising so we can provide unlimited, free conversions without paywalls:",
        s4Li1: "Third-party advertising partners (such as Google AdSense) may place or read cookies on your browser to serve contextual or personalized advertisements.",
        s4Li2: "We enforce strict ad container policies: ads on BrowserConvert are marked as sponsored placements and never disguise themselves as fake download buttons.",
      };
  }
}
