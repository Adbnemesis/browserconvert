import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ ok: true, message: "Message received." });
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { ok: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { ok: false, error: "Message is required." },
        { status: 400 }
      );
    }

    const recipient = siteConfig.contactEmail || "adbnemesis88@gmail.com";

    // 1. Check if Resend is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "BrowserConvert <onboarding@resend.dev>",
          to: [recipient],
          reply_to: email.trim(),
          subject: `BrowserConvert Contact: ${name.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({ ok: true, delivered: true });
      }
    }

    // 2. Check if Web3Forms key is configured
    const web3formsKey =
      process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3formsKey) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `BrowserConvert Contact: ${name.trim()}`,
          from_name: "BrowserConvert Web",
        }),
      });

      const web3Data = await web3Res.json();
      if (web3Data.success) {
        return NextResponse.json({ ok: true, delivered: true });
      }
    }

    // 3. Fallback when no automated email service key is configured
    return NextResponse.json({
      ok: false,
      requiresEmailClient: true,
      recipient,
      error: "No automated mail service configured.",
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
