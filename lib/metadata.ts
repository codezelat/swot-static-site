import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path: string, keywords?: string[]): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const resolvedTitle = /\bSWOT\b/i.test(title) ? title : `${title} | SWOT`;
  return {
    title: { absolute: resolvedTitle },
    description,
    keywords,
    alternates: { canonical },
    openGraph: { title: resolvedTitle, description, type: "website", url: `${site.url}${canonical}`, siteName: site.name, locale: "en_LK" },
    twitter: { card: "summary_large_image", title: resolvedTitle, description },
  };
}
