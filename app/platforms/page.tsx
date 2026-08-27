import { IndexPage } from "@/components/index-page";
import { platforms } from "@/data/platforms";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Platform Marketing", "Platform-specific strategy and content for Facebook, Instagram, Google, TikTok, LinkedIn and YouTube in Sri Lanka.", "/platforms");
export default function PlatformsPage() { return <IndexPage title="PLATFORMS WITH A JOB TO DO." description="Every platform has a different audience behaviour and role. We shape the message, creative and measurement to fit the channel." pages={platforms} basePath="/platforms" />; }
