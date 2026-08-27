import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const localSecret = "1x0000000000000000000000000000000AA";
const attempts = new Map<string, { count: number; resetAt: number }>();

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(160),
  company: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().max(80).optional().default("Not selected"),
  budget: z.string().trim().max(80).optional().default("Not specified"),
  message: z.string().trim().min(20).max(3000),
  website: z.string().max(0).optional().default(""),
  startedAt: z.coerce.number().int().positive(),
  turnstileToken: z.string().min(1).max(2048),
});

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function rateLimited(key: string) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

async function verifyTurnstile(token: string, remoteip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY || (process.env.NODE_ENV !== "production" ? localSecret : "");
  if (!secret) throw new Error("Turnstile is not configured.");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip, idempotency_key: crypto.randomUUID() }),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) return false;
    const result = (await response.json()) as TurnstileResponse;
    if (!result.success) return false;
    if (process.env.NODE_ENV === "production") {
      const validHost = result.hostname === "swot.lk" || result.hostname === "www.swot.lk";
      return validHost && result.action === "contact";
    }
    return true;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  try {
    const headerList = await headers();
    const ip = headerList.get("cf-connecting-ip") || headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) return NextResponse.json({ message: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });

    const raw = (await request.json()) as Record<string, unknown>;
    const parsed = enquirySchema.safeParse({ ...raw, turnstileToken: raw["cf-turnstile-response"] });
    if (!parsed.success) return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });

    const enquiry = parsed.data;
    if (Date.now() - enquiry.startedAt < 1800) return NextResponse.json({ message: "Please take a moment to review your message and try again." }, { status: 400 });
    const verified = await verifyTurnstile(enquiry.turnstileToken, ip === "unknown" ? undefined : ip);
    if (!verified) return NextResponse.json({ message: "The security check expired or failed. Please refresh it and try again." }, { status: 400 });

    if (!process.env.RESEND_API_KEY) {
      if (process.env.NODE_ENV !== "production") return NextResponse.json({ message: "Local form test passed. Add RESEND_API_KEY to deliver enquiries." });
      return NextResponse.json({ message: "Email delivery is not configured yet. Please email hello@swot.lk directly." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.CONTACT_FROM_EMAIL || "SWOT Notifications <notifications@swot.lk>";
    const to = process.env.CONTACT_TO_EMAIL || "hello@swot.lk";
    const subject = `New SWOT enquiry from ${enquiry.name}${enquiry.company ? ` at ${enquiry.company}` : ""}`;
    const rows = [
      ["Name", enquiry.name], ["Email", enquiry.email], ["Company", enquiry.company || "Not provided"],
      ["Phone", enquiry.phone || "Not provided"], ["Service", enquiry.service], ["Budget", enquiry.budget],
    ];

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: enquiry.email,
      subject,
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#11100f"><h1 style="font-size:28px">New SWOT website enquiry</h1>${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join("")}<hr style="border:0;border-top:1px solid #ddd;margin:24px 0"><p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(enquiry.message)}</p></div>`,
      text: `${subject}\n\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nMessage:\n${enquiry.message}`,
    });
    if (error) throw new Error(error.message);

    return NextResponse.json({ message: "Thanks. Your enquiry is with us, and we will reply shortly." });
  } catch (error) {
    console.error("Contact form error", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ message: "We could not send your message. Please email hello@swot.lk directly." }, { status: 500 });
  }
}
