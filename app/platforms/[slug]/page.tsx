import { notFound } from "next/navigation";
import { SeoLanding } from "@/components/seo-landing";
import { platformBySlug, platforms } from "@/data/platforms";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() { return platforms.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = platformBySlug(slug); return page ? pageMetadata(page.metaTitle, page.metaDescription, `/platforms/${slug}`, page.keywords) : {}; }
export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = platformBySlug(slug); if (!page) notFound(); const related = platforms.filter((item) => item.slug !== slug).slice(0, 3).map((item) => ({ title: item.shortTitle, href: `/platforms/${item.slug}`, description: item.metaDescription })); return <SeoLanding page={page} parentLabel="Platforms" parentHref="/platforms" path={`/platforms/${slug}`} related={related} />; }
