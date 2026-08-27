import { notFound } from "next/navigation";
import { SeoLanding } from "@/components/seo-landing";
import { industries, industryBySlug } from "@/data/industries";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = industryBySlug(slug); return page ? pageMetadata(page.metaTitle, page.metaDescription, `/industries/${slug}`, page.keywords) : {}; }
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = industryBySlug(slug); if (!page) notFound(); const related = industries.filter((item) => item.slug !== slug).slice(0, 3).map((item) => ({ title: item.shortTitle, href: `/industries/${item.slug}`, description: item.metaDescription })); return <SeoLanding page={page} parentLabel="Industries" parentHref="/industries" path={`/industries/${slug}`} related={related} />; }
