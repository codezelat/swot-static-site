import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import type { SeoLandingPage } from "@/data/types";

export function IndexPage({ title, description, pages, basePath }: { title: string; description: string; pages: SeoLandingPage[]; basePath: string }) {
  return (
    <main id="main" className="inner-main">
      <section className="index-hero"><div className="section-shell"><Reveal><h1>{title}</h1></Reveal><Reveal delay={.07}><p>{description}</p></Reveal></div></section>
      <section className="section-pad paper-texture"><div className="section-shell index-list">{pages.map((page, index) => <Reveal key={page.slug} delay={Math.min(index * .025, .15)}><Link href={`${basePath}/${page.slug}`}><span className="number">{String(index + 1).padStart(2, "0")}</span><h2>{page.shortTitle}</h2><p>{page.metaDescription}</p><ArrowUpRight /></Link></Reveal>)}</div></section>
    </main>
  );
}
