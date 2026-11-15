import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact BrowserConvert - Support & Inquiries",
  description:
    "Get in touch with the BrowserConvert team. Contact us for format support, technical inquiries, bug reports, or feature suggestions.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact BrowserConvert - Support & Inquiries",
    description: "Get in touch with the BrowserConvert team for support and feature inquiries.",
    url: `${siteConfig.url}/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        pageType="website"
        title="Contact BrowserConvert Support"
        description="Get in touch with the BrowserConvert engineering and product team."
        url="/contact"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Contact Support
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Have a question about format support, bug reports, or feature requests?
          Send us a message and our team will get back to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Direct Email Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 mb-4">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-sm font-bold text-slate-900">Direct Email</h2>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Reach our development team directly for technical inquiries:
            </p>
            <div className="mt-3 font-mono text-xs font-semibold text-brand-600 break-all">
              {siteConfig.contactEmail}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
            Average response time: 24-48 business hours.
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
