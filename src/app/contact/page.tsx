"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot spam trap
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (honeypot) {
      // Quietly ignore bot submissions
      setStatus("success");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");

    // Client-side contact handler: triggers user's default email client
    setTimeout(() => {
      const subject = encodeURIComponent(`MediaConvert Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 600);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
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
          {status === "success" ? (
            <div className="text-center py-8 space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Thank you for reaching out!</h2>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your email client has been prepared, or your message has been logged. We appreciate your feedback!
              </p>
              <button
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                  setStatus("idle");
                }}
                className="mt-4 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot Field */}
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your issue or suggestion..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-red-700 bg-red-50 p-2.5 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-2.5 text-xs font-bold text-white hover:bg-brand-700 active:scale-98 transition-all disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
