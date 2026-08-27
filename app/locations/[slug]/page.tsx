import { notFound } from "next/navigation";
import { SeoLanding } from "@/components/seo-landing";
import { locationBySlug, locations } from "@/data/locations";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() { return locations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = locationBySlug(slug); return page ? pageMetadata(page.metaTitle, page.metaDescription, `/locations/${slug}`, page.keywords) : {}; }
export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = locationBySlug(slug); if (!page) notFound(); const related = locations.filter((item) => item.slug !== slug).slice(0, 3).map((item) => ({ title: item.shortTitle, href: `/locations/${item.slug}`, description: item.metaDescription })); return <SeoLanding page={page} parentLabel="Locations" parentHref="/locations" path={`/locations/${slug}`} related={related} />; }
