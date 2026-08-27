"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

const localSiteKey = "1x00000000000000000000AA";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [startedAt] = useState(() => Date.now());
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || (process.env.NODE_ENV !== "production" ? localSiteKey : "");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "We could not send your message.");
      setState("success");
      setMessage(result.message || "Thanks. We will be in touch shortly.");
      form.reset();
      window.turnstile?.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not send your message. Please try again.");
      window.turnstile?.reset();
    }
  }

  return (
    <>
      {siteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" /> : null}
      <form className="contact-form" ref={formRef} onSubmit={submit}>
        <input type="hidden" name="startedAt" value={startedAt} />
        <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="form-grid">
          <label>Name<span>*</span><input name="name" autoComplete="name" required minLength={2} maxLength={80} /></label>
          <label>Work email<span>*</span><input type="email" name="email" autoComplete="email" required maxLength={160} /></label>
          <label>Company<input name="company" autoComplete="organization" maxLength={120} /></label>
          <label>Phone<input name="phone" autoComplete="tel" maxLength={40} /></label>
          <label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Digital strategy</option><option>Social media marketing</option><option>Content creation</option><option>Performance marketing</option><option>SEO</option><option>Brand and creative</option><option>Video production</option><option>Something connected</option></select></label>
          <label>Indicative monthly budget<select name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under LKR 150,000</option><option>LKR 150,000 to 350,000</option><option>LKR 350,000 to 750,000</option><option>Above LKR 750,000</option><option>One-off project</option></select></label>
        </div>
        <label>Tell us about the move<span>*</span><textarea name="message" rows={6} required minLength={20} maxLength={3000} placeholder="The business goal, current challenge and what a good outcome would look like." /></label>
        {siteKey ? <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" data-size="flexible" data-action="contact" /> : <p className="form-config-warning">Turnstile needs to be configured before this form can be used in production.</p>}
        <div className="form-submit-row">
          <button className="button button-ink" type="submit" disabled={state === "sending" || !siteKey}>
            {state === "sending" ? <><LoaderCircle className="spin" size={18} /> Sending</> : <>Send enquiry <ArrowRight size={18} /></>}
          </button>
          <p className={`form-status form-status-${state}`} aria-live="polite">{message}</p>
        </div>
      </form>
    </>
  );
}
