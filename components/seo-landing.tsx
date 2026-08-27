import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaqAccordion } from "./faq-accordion";
import { JsonLd } from "./json-ld";
import { Reveal, RevealListItem } from "./reveal";
import type { SeoLandingPage } from "@/data/types";
import { site } from "@/data/site";
import type { ServiceSeoDetail } from "@/data/types";

type Related = { title: string; href: string; description?: string };

export function SeoLanding({ page, parentLabel, parentHref, path, related, detail, reading = [] }: { page: SeoLandingPage; parentLabel: string; parentHref: string; path: string; related: Related[]; detail?: ServiceSeoDetail; reading?: Related[] }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    serviceType: page.shortTitle,
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: parentLabel, item: `${site.url}${parentHref}` }, { "@type": "ListItem", position: 3, name: page.shortTitle, item: `${site.url}${path}` }] };

  return (
    <main id="main" className="inner-main">
      <section className="inner-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={parentHref}>{parentLabel}</Link><span>/</span><span>{page.shortTitle}</span></nav>
        <div className="section-shell inner-hero-grid">
          <Reveal><h1>{page.headline}</h1></Reveal>
          <Reveal className="inner-hero-copy" delay={0.08}><p>{page.metaDescription}</p><Link className="button button-lime" href="/contact">Start a project <ArrowRight size={18} /></Link></Reveal>
        </div>
      </section>
      <section className="outcome-strip" aria-label="Expected outcomes">{page.outcomes.map((outcome) => <div key={outcome}>{outcome}</div>)}</section>

      <section className="landing-media section-shell" aria-label={`${page.shortTitle} in action`}>
        <Image src={page.image} alt={page.imageAlt} fill sizes="(max-width: 768px) 100vw, 94vw" />
      </section>

      <section className="section-pad paper-texture"><div className="section-shell content-intro"><Reveal><h2>THE MOVE.</h2></Reveal><Reveal delay={0.06}><p>{page.intro}</p></Reveal></div></section>

      {detail ? <section className="section-pad service-depth"><div className="section-shell">
        <div className="service-depth-intro"><Reveal><p className="eyebrow">A CLEARER BRIEF</p><h2>WHAT WE DECIDE BEFORE WE EXECUTE.</h2></Reveal><Reveal delay={0.05}><p>{detail.scopeNote}</p></Reveal></div>
        <div className="service-decision-grid">{detail.decisions.map((item, index) => <Reveal className="service-decision" key={item.title} delay={index * .035}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
        <div className="service-fit-grid"><Reveal><h3>A GOOD FIT WHEN.</h3><ul>{detail.goodFit.map((item) => <li key={item}>{item}</li>)}</ul></Reveal><Reveal delay={0.05}><h3>MEASUREMENT FOCUS.</h3><ul>{detail.measures.map((item) => <li key={item}>{item}</li>)}</ul></Reveal></div>
      </div></section> : null}

      <section className="section-pad deliverables-section"><div className="section-shell deliverables-layout"><Reveal><h2>WHAT THE WORK CAN INCLUDE.</h2></Reveal><ol className="deliverable-list">{page.deliverables.map((item, index) => <RevealListItem key={item} delay={index * .035}><span>{String(index + 1).padStart(2, "0")}</span>{item}</RevealListItem>)}</ol></div></section>

      <section className="section-pad paper-texture process-detail"><div className="section-shell process-detail-grid"><Reveal><h2>HOW WE MOVE.</h2></Reveal><div className="process-detail-list">{page.process.map((step) => <Reveal className="process-detail-item" key={step.title}><div><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}</div></div></section>

      {reading.length ? <section className="section-pad service-reading"><div className="section-shell"><Reveal><p className="eyebrow">PRACTICAL GUIDES</p><h2>PLAN THE NEXT MOVE.</h2></Reveal><div className="service-reading-grid">{reading.map((item) => <Link className="service-reading-card" key={item.href} href={item.href}><h3>{item.title}</h3>{item.description ? <p>{item.description}</p> : null}<span className="text-link">Read the guide <ArrowUpRight size={16} /></span></Link>)}</div></div></section> : null}

      <section className="section-pad faq-section paper-texture"><div className="section-shell faq-layout"><Reveal><h2 className="display-heading">QUESTIONS.<br />CLEAR ANSWERS.</h2></Reveal><FaqAccordion items={page.faq} /></div></section>

      <section className="section-pad related-section"><div className="section-shell"><Reveal><h2>CONNECTED MOVES.</h2></Reveal><div className="related-grid">{related.slice(0, 3).map((item) => <Link className="related-card" key={item.href} href={item.href}><h3>{item.title}</h3>{item.description ? <p>{item.description}</p> : null}<span className="text-link">Explore <ArrowUpRight size={16} /></span></Link>)}</div></div></section>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
    </main>
  );
}
