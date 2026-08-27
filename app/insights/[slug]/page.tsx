import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { insightBySlug, insights } from "@/data/insights";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = insightBySlug(slug); return article ? pageMetadata(article.title, article.description, `/insights/${slug}`) : {}; }

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightBySlug(slug);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description,
    datePublished: article.published, dateModified: article.updated, image: `${site.url}${article.image}`, mainEntityOfPage: `${site.url}/insights/${slug}`,
    author: { "@type": "Organization", name: "SWOT", url: site.url }, publisher: { "@id": `${site.url}/#organization` },
  };
  return (
    <main id="main" className="inner-main">
      <header className="article-header article-shell"><div className="article-meta"><span>{article.category}</span><span>·</span><span>{article.readTime}</span><span>·</span><time dateTime={article.published}>27 August 2026</time></div><h1>{article.title}</h1><p>{article.description}</p></header>
      <div className="article-cover"><Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" /></div>
      <article className="article-body article-shell"><p className="article-intro">{article.intro}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}<section><Link className="text-link" href="/insights"><ArrowLeft size={16} /> Back to insights</Link></section></article>
      <JsonLd data={schema} />
    </main>
  );
}
