import type { SeoLandingPage } from "./types";

const locationProcess = [
  { title: "Market", text: "Understand local demand, competition and audience behaviour." },
  { title: "Message", text: "Shape a useful position for the people you need to reach." },
  { title: "Move", text: "Activate the right content, channels and conversion path." },
  { title: "Measure", text: "Learn what moved and refine the next decision." },
];

function locationPage(location: string, slug: string, context: string, image: string, imageAlt: string): SeoLandingPage {
  return {
    slug,
    title: `Digital Marketing Agency in ${location}`,
    shortTitle: location,
    metaTitle: `Digital Marketing Agency ${location} | SWOT Sri Lanka`,
    metaDescription: `Strategy, social media, content, SEO and performance marketing for businesses in ${location}, delivered by SWOT Sri Lanka.`,
    image,
    imageAlt,
    headline: `Sharper digital marketing for businesses in ${location}.`,
    intro: `${context} SWOT connects local market understanding with strategy, creative, media and measurement. We can work remotely or alongside teams in person, depending on the engagement.`,
    outcomes: ["Local search visibility", "Culturally relevant content", "Campaigns tied to business goals"],
    deliverables: ["Market and competitor review", "Digital strategy", "Social media and content", "SEO and local search", "Paid media", "Reporting and optimisation"],
    process: locationProcess,
    faq: [
      { question: `Do you work with businesses in ${location}?`, answer: `Yes. SWOT supports businesses in ${location} through focused projects and ongoing marketing engagements. The working model can combine remote collaboration with planned in-person sessions where useful.` },
      { question: "Can you create Sinhala, Tamil and English campaigns?", answer: "Yes. Multilingual work is planned around audience, meaning and cultural context, not treated as direct translation alone." },
      { question: "Which services can be combined?", answer: "Strategy, social media, content creation, SEO, paid media, influencer marketing, video and conversion work can be combined around one commercial objective." },
    ],
    keywords: [`digital marketing agency ${location.toLowerCase()}`, `social media marketing ${location.toLowerCase()}`, `seo company ${location.toLowerCase()}`, `content creation ${location.toLowerCase()}`],
  };
}

export const locations: SeoLandingPage[] = [
  locationPage("Sri Lanka", "sri-lanka", "Built for the way Sri Lanka searches, scrolls, compares and buys.", "/images/sri-lankan-creative-team.webp", "Sri Lankan marketing team building an islandwide campaign"),
  locationPage("Colombo", "colombo", "Colombo is a dense, competitive market where brand, speed and channel discipline matter.", "/images/colombo-campaign-wall.webp", "Campaign strategy wall in a Colombo creative studio"),
  locationPage("Kandy", "kandy", "Kandy businesses serve strong local communities while increasingly reaching islandwide audiences.", "/images/social-content-production.webp", "Content production planned for Sri Lankan regional audiences"),
  locationPage("Galle", "galle", "Galle combines local services, hospitality, tourism, property and export-ready creative businesses.", "/images/hospitality-campaign.webp", "Marketing campaign production on Sri Lanka's southern coast"),
];

export const locationBySlug = (slug: string) => locations.find((location) => location.slug === slug);
