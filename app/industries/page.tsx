import { IndexPage } from "@/components/index-page";
import { industries } from "@/data/industries";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Industry Marketing", "Connected digital marketing for e-commerce, hospitality, education, real estate, health and professional services in Sri Lanka.", "/industries");
export default function IndustriesPage() { return <IndexPage title="BUILT FOR THE BUYING JOURNEY." description="Industry context changes the audience, evidence, message and route to action. These plans start with the way your market actually decides." pages={industries} basePath="/industries" />; }
