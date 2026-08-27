import { IndexPage } from "@/components/index-page";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Digital Marketing Services", "Strategy, social media, content, performance, SEO, paid media, branding, video and conversion services for Sri Lankan businesses.", "/services");

export default function ServicesPage() { return <IndexPage title="EVERY MARKETING MOVE." description="Choose a focused service or connect the right disciplines around one business goal. Every scope starts with clarity about the job, audience and evidence needed." pages={services} basePath="/services" />; }
