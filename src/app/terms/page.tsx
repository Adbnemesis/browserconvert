import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { FileText, CheckCircle2, AlertTriangle, ShieldAlert, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms of Service - Acceptable Use & Service Agreement | ${siteConfig.name}`,
  description: `Review the terms and conditions for using ${siteConfig.name}, our free, in-browser client-side audio conversion and editing platform.`,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: `Terms of Service - Acceptable Use & Service Agreement | ${siteConfig.name}`,
    description: "Terms and conditions for using BrowserConvert free in-browser audio platform.",
    url: `${siteConfig.url}/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms of Service | ${siteConfig.name}`,
    description: "Terms of service and acceptable use agreement.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "November 15, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SeoSchema
        pageType="website"
        title="Terms of Service - BrowserConvert"
        description="Review BrowserConvert's acceptable use and terms of service."
        url="/terms"
        breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
      />

      <Breadcrumbs
        items={[
          { label: "Terms of Service" },
        ]}
      />

      <div className="mt-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 text-xs mb-4">
          <FileText className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
          <span className="font-mono text-[11px]">Service agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Terms of Service
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm">
          Last updated: {lastUpdated} • Please read carefully before using the service
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using {siteConfig.name} (&quot;the Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you must not use or access the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            2. Description of the Service
          </h2>
          <p>
            {siteConfig.name} provides users with in-browser media processing utilities, including audio format conversion, video audio extraction, trimming, bitrate modulation, speed modification, and volume adjustments.
          </p>
          <p>
            The Service operates directly on your client device. We do not provide remote cloud file storage, media hosting, or content distribution services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            3. Intellectual Property Rights & User Files
          </h2>
          <p>
            <strong>Ownership:</strong> You retain 100% of your ownership, copyright, and intellectual property rights in any media files you select for conversion. {siteConfig.name} makes no claim of ownership over your files.
          </p>
          <p>
            <strong>User Responsibility:</strong> You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You own the rights to the files you convert, or you have obtained all necessary licenses, permissions, and consents from copyright holders.</li>
            <li>Your use of the Service does not infringe upon any third-party copyright, trademark, privacy, or proprietary rights.</li>
            <li>You will not use the Service to circumvent digital rights management (DRM) or technical protection measures.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            4. Prohibited Uses & Boundaries
          </h2>
          <p>
            {siteConfig.name} is designed exclusively as an offline-compatible, file-to-file utility. You expressly agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Attempt to use the Service as an unauthorized media ripper or downloader for platforms including YouTube, TikTok, Instagram, Facebook, SoundCloud, Spotify, or any other streaming service. We do not support URL downloading.
            </li>
            <li>
              Attempt to reverse-engineer, exploit, or inject malicious payloads into our client-side software routines.
            </li>
            <li>
              Use automated bots, spiders, or headless crawlers to systematically abuse or overwhelm website delivery infrastructure.
            </li>
            <li>
              Process or convert content that promotes hate speech, child sexual abuse material (CSAM), non-consensual sexual imagery, terrorism, or illegal activities.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Hardware & Device Performance Disclaimer
          </h2>
          <p>
            Because audio and video transcoding is executed locally on your device, the speed, success, and memory consumption of any conversion depend directly on your device&apos;s available RAM, CPU capability, and browser memory limits (typically 2GB to 4GB per browser tab).
          </p>
          <p>
            We are not responsible for browser crashes, device slowdowns, thermal throttling, or battery drain resulting from processing massive video files (such as 4K/8K multi-gigabyte files) on low-memory devices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Disclaimer of Warranties
          </h2>
          <p>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT OUTPUT FILES WILL MEET YOUR SPECIFIC ACOUSTIC OR BROADCAST CRITERIA.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            7. Limitation of Liability
          </h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {siteConfig.name.toUpperCase()}, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, GOODWILL, OR BUSINESS INTERRUPTION ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            8. Modifications to Terms
          </h2>
          <p>
            We reserve the right to revise or modify these Terms of Service at any time. When modifications occur, the updated date at the top of this document will be updated. Your continued use of the Service following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            9. Contact Information
          </h2>
          <p>
            For legal inquiries or questions regarding these Terms of Service, please reach out to:
          </p>
          <p className="font-medium text-slate-900 dark:text-white">
            Email: <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-600 dark:text-brand-400 hover:underline">{siteConfig.contactEmail}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
