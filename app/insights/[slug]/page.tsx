import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { insightDetails } from "@/data/insight-details";
import { insightBySlug, insights } from "@/data/insights";
import { serviceBySlug } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightBySlug(slug);
  if (!article) return {};
  const detail = insightDetails[slug];
  const metadata = pageMetadata(article.title, article.description, `/insights/${slug}`, detail?.keywords);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: article.published, modifiedTime: article.updated, authors: [site.name], section: article.category },
  };
}

const headingId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const formatDate = (date: string) => new Intl.DateTimeFormat("en-LK", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Colombo" }).format(new Date(`${date}T12:00:00+05:30`));

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightBySlug(slug);
  if (!article) notFound();
  const detail = insightDetails[slug];
  const sections = [...article.sections, ...(detail?.extraSections ?? [])];
  const relatedServices = (detail?.relatedServices ?? []).map((serviceSlug) => serviceBySlug(serviceSlug)).filter((item) => item !== undefined);
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description,
    datePublished: article.published, dateModified: article.updated, image: `${site.url}${article.image}`, mainEntityOfPage: `${site.url}/insights/${slug}`,
    author: { "@type": "Organization", name: "SWOT Strategy Team", url: `${site.url}/about` }, publisher: { "@id": `${site.url}/#organization` },
    articleSection: article.category, inLanguage: "en-LK", keywords: detail?.keywords.join(", "),
  };
  const faqSchema = detail ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: detail.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) } : null;
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/insights` }, { "@type": "ListItem", position: 3, name: article.title, item: `${site.url}/insights/${slug}` }] };
  return (
    <main id="main" className="inner-main">
      <header className="article-header article-shell"><div className="article-meta"><span>{article.category}</span><span>·</span><span>{article.readTime}</span><span>·</span><time dateTime={article.updated}>Updated {formatDate(article.updated)}</time></div><h1>{article.title}</h1><p>{article.description}</p><p className="article-byline">By SWOT Strategy Team</p></header>
      <div className="article-cover"><Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" /></div>
      <article className="article-body article-shell">
        <p className="article-intro">{article.intro}</p>
        {detail ? <aside className="article-summary" aria-labelledby="key-takeaways"><h2 id="key-takeaways">KEY TAKEAWAYS.</h2><ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></aside> : null}
        <nav className="article-toc" aria-label="Article contents"><p>IN THIS GUIDE</p><ol>{sections.map((section) => <li key={section.heading}><a href={`#${headingId(section.heading)}`}>{section.heading}</a></li>)}</ol></nav>
        {sections.map((section) => <section id={headingId(section.heading)} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}
        {detail?.resources?.length ? <section className="article-resources"><h2>PRIMARY RESOURCES.</h2><p>Official guidance used to review and maintain this article:</p><ul>{detail.resources.map((resource) => <li key={resource.href}><a href={resource.href} target="_blank" rel="noopener noreferrer">{resource.title} <span>{resource.publisher}</span><ArrowUpRight size={15} /></a></li>)}</ul></section> : null}
        {detail ? <section className="article-faq"><h2>COMMON QUESTIONS.</h2><FaqAccordion items={detail.faq} /></section> : null}
        {relatedServices.length ? <section className="article-related"><p className="eyebrow">RELATED SERVICES</p><div className="article-related-grid">{relatedServices.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><h3>{service.shortTitle}</h3><p>{service.metaDescription}</p><span className="text-link">Explore <ArrowUpRight size={15} /></span></Link>)}</div></section> : null}
        <section><Link className="text-link" href="/insights"><ArrowLeft size={16} /> Back to insights</Link></section>
      </article>
      <JsonLd data={[schema, ...(faqSchema ? [faqSchema] : []), breadcrumbSchema]} />
    </main>
  );
}
