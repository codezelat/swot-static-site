import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";
import { locations } from "@/data/locations";
import { platforms } from "@/data/platforms";
import { services } from "@/data/services";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-27");
  const routes = ["", "/services", "/platforms", "/industries", "/locations", "/insights", "/about", "/work", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((path) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "/contact" ? .8 : .7 })),
    ...services.map((item) => ({ url: `${site.url}/services/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .9 })),
    ...platforms.map((item) => ({ url: `${site.url}/platforms/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .75 })),
    ...industries.map((item) => ({ url: `${site.url}/industries/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .75 })),
    ...locations.map((item) => ({ url: `${site.url}/locations/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .75 })),
    ...insights.map((item) => ({ url: `${site.url}/insights/${item.slug}`, lastModified: new Date(item.updated), changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
