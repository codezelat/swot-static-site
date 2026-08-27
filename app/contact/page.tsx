import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact SWOT", "Tell SWOT about your marketing goal, campaign, content, SEO or performance challenge. Start a project in Sri Lanka or beyond.", "/contact");

export default function ContactPage() {
  return (
    <main id="main" className="inner-main">
      <section className="inner-hero"><div className="section-shell inner-hero-grid"><Reveal><h1>LET&apos;S MAKE THE NEXT MOVE CLEAR.</h1></Reveal><Reveal className="inner-hero-copy"><p>Tell us what needs to change. We will reply with the next useful question, not a generic sales deck.</p></Reveal></div></section>
      <section className="section-pad paper-texture"><div className="section-shell contact-layout"><aside className="contact-aside"><Reveal><h2>START HERE.</h2><p>Share the business goal, current challenge, timing and what a good result would look like.</p><p>Email<br /><a href={`mailto:${site.email}`}>{site.email}</a></p><p>Call<br /><a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a></p><p>{site.contact.addressLine1}<br />{site.contact.addressLine2}<br />Working across Sri Lanka and worldwide.</p></Reveal></aside><ContactForm /></div></section>
    </main>
  );
}
