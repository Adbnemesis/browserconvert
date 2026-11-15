import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { ShieldCheck, Lock, EyeOff, ServerOff, Cookie, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy - 100% Client-Side Private Audio Converter | ${siteConfig.name}`,
  description: `${siteConfig.name} is engineered with private-by-default architecture. Your audio and video files are converted locally in your browser and never uploaded to our servers.`,
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: `Privacy Policy - 100% Client-Side Private Audio Converter | ${siteConfig.name}`,
    description: "BrowserConvert is engineered with private-by-default architecture. Files never leave your browser.",
    url: `${siteConfig.url}/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "100% client-side privacy. Zero server file uploads.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 15, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SeoSchema
        pageType="website"
        title="Privacy Policy - BrowserConvert"
        description="Review BrowserConvert's zero-server-upload privacy policy."
        url="/privacy"
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
      />

      <Breadcrumbs
        items={[
          { label: "Privacy Policy" },
        ]}
      />

      <div className="mt-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60 dark:border-emerald-800/40">
          <ShieldCheck className="w-4 h-4" />
          Zero Server File Uploads
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm">
          Last updated: {lastUpdated} • Effective immediately
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
              The Absolute Privacy Guarantee
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Unlike traditional cloud converter websites that require you to upload your sensitive voice recordings, musical tracks, or personal videos to an unknown remote server, <strong>{siteConfig.name} performs 100% of conversion and editing computations directly on your device inside your web browser</strong> using WebAssembly. Your files never touch our servers.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <ServerOff className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>1. How File Processing Works</h3>
          </div>
          <p>
            When you add an audio or video file to {siteConfig.name}:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Local Memory Only:</strong> Your browser reads the file from your local disk into browser memory (RAM) via standard HTML5 File APIs.
            </li>
            <li>
              <strong>Client-Side WebAssembly:</strong> Our conversion engine (compiled from FFmpeg into WebAssembly) runs locally inside your browser tab or Web Worker thread.
            </li>
            <li>
              <strong>No Outbound Network Upload:</strong> No byte of your media payload is ever transmitted over the internet to {siteConfig.name} or any cloud storage service.
            </li>
            <li>
              <strong>Immediate Memory Reclamation:</strong> Converted files reside as transient in-memory Object URLs (Blob URLs). When you clear a file from the queue, close the browser tab, or navigate away, memory is reclaimed by your operating system.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <EyeOff className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>2. Information We Do NOT Collect</h3>
          </div>
          <p>
            Because we do not use server-side transcoding infrastructure:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not store, view, listen to, transcribe, or inspect your audio or video files.</li>
            <li>We do not retain file metadata, titles, album tags, or embedded personal information.</li>
            <li>We do not require user accounts, passwords, email sign-ups, or social logins to use any conversion tool.</li>
            <li>We do not monetize your file contents, sell training datasets, or feed your media to machine learning models.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <Cookie className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>3. Analytics, Cookies & Web Telemetry</h3>
          </div>
          <p>
            To keep {siteConfig.name} operational, reliable, and bug-free, we may collect aggregated, non-personally identifiable diagnostic metrics:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Engine Diagnostics:</strong> Aggregated statistics such as total conversions initiated, output format selections (e.g., &quot;MP4 to MP3&quot;), or WebAssembly initialization errors. These logs never contain file contents, filenames, or user identifiers.
            </li>
            <li>
              <strong>Standard Server Access Logs:</strong> Like virtually all websites, our hosting CDN (such as Cloudflare or Vercel) logs standard HTTP request headers, IP addresses (anonymized/hashed for DDoS mitigation), browser user agents, and page load durations for security and caching.
            </li>
            <li>
              <strong>Local Storage Preferences:</strong> We may store your non-sensitive UI settings (such as dark mode preference or preferred default bitrate) in your browser&apos;s local storage. This data never leaves your device.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
            <HelpCircle className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3>4. Advertising & Third-Party Services</h3>
          </div>
          <p>
            {siteConfig.name} is supported by web advertising so we can provide unlimited, free conversions without paywalls:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Third-party advertising partners (such as Google AdSense) may place or read cookies on your browser to serve contextual or personalized advertisements based on previous visits to this or other websites.
            </li>
            <li>
              You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 dark:text-brand-400 hover:underline"
              >
                AboutAds.info
              </a>{" "}
              or adjusting your Google Ad Settings.
            </li>
            <li>
              We enforce strict ad container policies: ads on {siteConfig.name} are marked as sponsored placements and never disguise themselves as fake &quot;Download&quot; or &quot;Convert&quot; buttons.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-slate-900 dark:text-white font-bold text-xl">
            5. Children&apos;s Privacy
          </h3>
          <p>
            {siteConfig.name} does not knowingly collect any personally identifiable information from children under the age of 13. Since no registration is required and no files are uploaded, our services are safe and privacy-protective by design.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-slate-900 dark:text-white font-bold text-xl">
            6. Changes to This Privacy Policy
          </h3>
          <p>
            We may periodically update this policy to reflect enhancements in WebAssembly browser capabilities or regulatory compliance. Any changes will be posted on this page with an updated &quot;Last updated&quot; timestamp.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
          <h3 className="text-slate-900 dark:text-white font-bold text-xl">
            7. Contact Us
          </h3>
          <p>
            If you have questions regarding this Privacy Policy or wish to verify our client-side architecture, contact our data protection team:
          </p>
          <p className="font-medium text-slate-900 dark:text-white">
            Email: <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-600 dark:text-brand-400 hover:underline">{siteConfig.contactEmail}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
