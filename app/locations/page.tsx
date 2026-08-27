import { IndexPage } from "@/components/index-page";
import { locations } from "@/data/locations";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Digital Marketing Across Sri Lanka", "Local digital marketing support for businesses across Sri Lanka, including Colombo, Kandy and Galle.", "/locations");
export default function LocationsPage() { return <IndexPage title="LOCAL CONTEXT. ISLANDWIDE AMBITION." description="SWOT is based in Colombo and works with businesses across Sri Lanka. Local pages explain how service and market context connect." pages={locations} basePath="/locations" />; }
