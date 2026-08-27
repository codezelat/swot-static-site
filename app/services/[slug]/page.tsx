import { notFound } from "next/navigation";
import { SeoLanding } from "@/components/seo-landing";
import { serviceBySlug, services } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import { insightBySlug } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = serviceBySlug(slug); return page ? pageMetadata(page.metaTitle, page.metaDescription, `/services/${slug}`, page.keywords) : {}; }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = serviceBySlug(slug);
  if (!page) notFound();
  const detail = serviceDetails[slug];
  const related = services.filter((item) => item.slug !== slug).slice(0, 3).map((item) => ({ title: item.shortTitle, href: `/services/${item.slug}`, description: item.metaDescription }));
  const reading = (detail?.relatedInsights ?? []).map((insightSlug) => insightBySlug(insightSlug)).filter((item) => item !== undefined).map((item) => ({ title: item.title, href: `/insights/${item.slug}`, description: item.description }));
  return <SeoLanding page={page} parentLabel="Services" parentHref="/services" path={`/services/${slug}`} related={related} detail={detail} reading={reading} />;
}
