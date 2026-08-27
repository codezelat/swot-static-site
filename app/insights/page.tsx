import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Digital Marketing Insights Sri Lanka", "Practical guides to social media, SEO, paid advertising, content and marketing decisions for Sri Lankan businesses.", "/insights");

export default function InsightsPage() {
  return (
    <main id="main" className="inner-main">
      <section className="index-hero"><div className="section-shell"><Reveal><h1>MARKETING MOVES WORTH KNOWING.</h1></Reveal><Reveal delay={.06}><p>Useful thinking for Sri Lankan teams making decisions about content, search, media and growth.</p></Reveal></div></section>
      <section className="section-pad paper-texture"><div className="section-shell insight-grid">{insights.map((insight, index) => <Reveal key={insight.slug} delay={Math.min(index * .04, .16)}><article className="insight-card"><Link className="insight-image" href={`/insights/${insight.slug}`}><Image src={insight.image} alt={insight.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" /></Link><span>{insight.category} · {insight.readTime}</span><h2><Link href={`/insights/${insight.slug}`}>{insight.title}</Link></h2><p>{insight.description}</p><Link className="text-link" href={`/insights/${insight.slug}`}>Read article <ArrowRight size={16} /></Link></article></Reveal>)}</div></section>
    </main>
  );
}
