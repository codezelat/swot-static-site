import type { ServiceSeoDetail } from "./types";

export const serviceDetails: Record<string, ServiceSeoDetail> = {
  "digital-marketing": {
    scopeNote: "The useful starting point is not a list of channels. It is a shared view of the commercial goal, audience, offer, customer journey and evidence already available. From there, we define the smallest connected programme that can create and measure progress.",
    goodFit: ["Several channels are active but do not work as one system", "The team needs a clear priority before increasing spend", "A launch or growth target needs strategy, creative and media together"],
    decisions: [
      { title: "Where to compete", text: "Choose the audiences, needs and market spaces where the offer has a credible advantage." },
      { title: "What each channel does", text: "Assign discovery, education, conversion or retention roles instead of copying activity everywhere." },
      { title: "What earns more budget", text: "Agree on business signals and decision thresholds before campaigns begin." },
    ],
    measures: ["Qualified demand", "Conversion rate", "Customer acquisition cost", "Revenue contribution"],
    relatedInsights: ["digital-marketing-cost-sri-lanka", "google-ads-vs-meta-ads-sri-lanka", "social-media-strategy-sri-lanka"],
  },
  "social-media-marketing": {
    scopeNote: "Social media management should create a recognisable presence and a useful path to action. We define a role for each platform, build repeatable content pillars and connect organic publishing, community response and paid amplification where it adds value.",
    goodFit: ["Posting is regular but the brand still feels inconsistent", "The calendar needs original photo, video and copy", "Social attention needs a clearer route to enquiries or sales"],
    decisions: [
      { title: "Platform roles", text: "Select channels by audience behaviour, content capability and the job each platform can perform." },
      { title: "Content system", text: "Balance attention, explanation, proof and activation across a realistic monthly rhythm." },
      { title: "Community standard", text: "Set response tone, escalation routes and service expectations before conversations arrive." },
    ],
    measures: ["Relevant reach", "Watch quality", "Engaged actions", "Enquiries and assisted conversions"],
    relatedInsights: ["social-media-strategy-sri-lanka", "content-calendar-sri-lanka", "google-ads-vs-meta-ads-sri-lanka"],
  },
  "content-creation": {
    scopeNote: "Content performs better when the idea, production plan and distribution need are solved together. We plan master assets and channel variations before production, so a shoot creates a coherent body of useful work instead of disconnected posts.",
    goodFit: ["The brand needs an original visual and verbal direction", "A campaign requires many formats from one production", "Ongoing channels need a dependable content engine"],
    decisions: [
      { title: "The audience truth", text: "Anchor every concept in a real tension, question, desire or behaviour." },
      { title: "The asset architecture", text: "Plan hero work, cut-downs, stills, copy and crops against actual placements." },
      { title: "The production rhythm", text: "Match ambition to approvals, locations, talent, budget and monthly capacity." },
    ],
    measures: ["Hook and watch performance", "Saves and shares", "Asset reuse", "Post-click action"],
    relatedInsights: ["content-calendar-sri-lanka", "social-media-strategy-sri-lanka", "digital-marketing-cost-sri-lanka"],
  },
  "performance-marketing": {
    scopeNote: "Performance marketing is an operating loop across offer, creative, media, landing experience and measurement. We make the test question explicit, protect the learning budget and scale only when conversion quality and business economics support it.",
    goodFit: ["Paid campaigns generate activity but not clear commercial learning", "Creative fatigue is limiting campaign efficiency", "The business needs a controlled route from test to scale"],
    decisions: [
      { title: "The conversion", text: "Choose the event closest to business value that can be measured reliably." },
      { title: "The test sequence", text: "Prioritise offer, audience, creative and page hypotheses instead of changing everything at once." },
      { title: "The scale rule", text: "Increase budget against qualified results, capacity and marginal efficiency." },
    ],
    measures: ["Qualified cost per result", "Conversion value", "Marginal return", "Lead or order quality"],
    relatedInsights: ["google-ads-vs-meta-ads-sri-lanka", "digital-marketing-cost-sri-lanka", "social-media-strategy-sri-lanka"],
  },
  seo: {
    scopeNote: "SEO compounds when technical access, page architecture, useful content and credible authority improve together. We prioritise the searches that matter to the business, then strengthen the site in an order that search engines and customers can understand.",
    goodFit: ["Important services are difficult to find through organic search", "The site has content but no clear intent or internal-link structure", "Local discovery and sustainable non-paid demand are priorities"],
    decisions: [
      { title: "Search intent", text: "Separate research questions, comparisons and commercial decisions into the right page types." },
      { title: "Technical priority", text: "Resolve crawl, indexation, canonical, performance and rendering issues by likely impact." },
      { title: "Authority plan", text: "Create original resources and earn relevant mentions without link schemes or mass pages." },
    ],
    measures: ["Qualified organic clicks", "Non-brand visibility", "Indexed priority pages", "Organic enquiries and revenue"],
    relatedInsights: ["seo-guide-sri-lankan-businesses", "local-seo-sri-lanka", "content-calendar-sri-lanka"],
  },
  "google-ads": {
    scopeNote: "Google Ads works best when query intent, campaign structure, conversion tracking and the landing page agree. We control irrelevant demand, match the message to the search and judge performance using qualified outcomes rather than click volume alone.",
    goodFit: ["Customers actively search for the product or service", "Existing campaigns spend without clear query control", "The business can track leads, bookings, calls or purchases"],
    decisions: [
      { title: "Demand groups", text: "Separate brand, category, competitor and problem-led searches by intent and value." },
      { title: "Query control", text: "Review search terms, exclusions, match behaviour and geography throughout the campaign." },
      { title: "Post-click match", text: "Send each high-value intent to a page that keeps the promise made in the ad." },
    ],
    measures: ["Search impression share", "Qualified conversion rate", "Cost per qualified result", "Conversion value"],
    relatedInsights: ["google-ads-vs-meta-ads-sri-lanka", "digital-marketing-cost-sri-lanka", "seo-guide-sri-lankan-businesses"],
  },
  "meta-ads": {
    scopeNote: "Meta Ads needs a steady supply of useful creative and a trustworthy conversion signal. We connect audience hypotheses, message angles, formats and landing-page evidence so the account learns from meaningful variation.",
    goodFit: ["The offer benefits from visual discovery or demonstration", "Facebook and Instagram are generating leads of uneven quality", "The team needs a disciplined creative testing system"],
    decisions: [
      { title: "Message angles", text: "Turn real motivations, objections and product differences into distinct creative tests." },
      { title: "Signal quality", text: "Check events, attribution context and lead feedback before trusting platform optimisation." },
      { title: "Creative rotation", text: "Refresh hooks and formats based on fatigue and learning, not an arbitrary posting quota." },
    ],
    measures: ["Thumb-stop and watch signals", "Qualified cost per result", "Landing-page conversion", "Purchase or lead value"],
    relatedInsights: ["google-ads-vs-meta-ads-sri-lanka", "social-media-strategy-sri-lanka", "content-calendar-sri-lanka"],
  },
  "tiktok-marketing": {
    scopeNote: "TikTok strategy begins with formats people choose to watch, not polished advertising resized for a vertical screen. We build repeatable ideas, creator-style production and a learning rhythm that respects current account and market eligibility.",
    goodFit: ["The audience discovers products through short-form video", "The brand can show people, process, personality or transformation", "A repeatable organic or creator content format is needed"],
    decisions: [
      { title: "Format ownership", text: "Choose repeatable structures the brand can sustain beyond one trend." },
      { title: "Creator voice", text: "Protect authenticity while making the message, disclosures and usage requirements clear." },
      { title: "Watch learning", text: "Use retention, rewatches, comments and actions to shape the next production batch." },
    ],
    measures: ["Early retention", "Completion and rewatches", "Relevant engagement", "Profile and website action"],
    relatedInsights: ["social-media-strategy-sri-lanka", "content-calendar-sri-lanka", "google-ads-vs-meta-ads-sri-lanka"],
  },
  "influencer-marketing": {
    scopeNote: "Creator campaigns need audience fit, clear governance and planned content rights. We assess credibility and relevance, define the campaign job and measure the audience response beyond the public follower count.",
    goodFit: ["A trusted voice can explain or demonstrate the offer", "The brand needs local cultural or community relevance", "Creator content will also support paid or owned channels"],
    decisions: [
      { title: "Creator fit", text: "Review audience, content history, professionalism, brand conflicts and engagement quality." },
      { title: "Rights and disclosure", text: "Agree usage, duration, edits, exclusivity, approvals and clear sponsorship disclosure." },
      { title: "Campaign evidence", text: "Use links, codes, platform data and brand-lift signals appropriate to the objective." },
    ],
    measures: ["Relevant audience reach", "Content quality", "Tracked visits or codes", "Qualified actions"],
    relatedInsights: ["social-media-strategy-sri-lanka", "content-calendar-sri-lanka", "digital-marketing-cost-sri-lanka"],
  },
  "branding-creative": {
    scopeNote: "A brand system should make the business easier to recognise, explain and grow. We connect positioning, messages, voice and visual principles, then show how the system behaves across real campaign and customer touchpoints.",
    goodFit: ["The offer has changed but the brand story has not", "Campaigns feel inconsistent across teams and channels", "A launch needs a distinctive position and creative platform"],
    decisions: [
      { title: "Position", text: "Define the relevant difference the business can support consistently." },
      { title: "Message system", text: "Build a hierarchy from the central promise to proof, objections and channel-specific expressions." },
      { title: "Creative rules", text: "Create recognisable principles that guide future work without making every asset identical." },
    ],
    measures: ["Message understanding", "Brand recognition", "Creative consistency", "Campaign response"],
    relatedInsights: ["social-media-strategy-sri-lanka", "content-calendar-sri-lanka", "digital-marketing-cost-sri-lanka"],
  },
  "video-production": {
    scopeNote: "Marketing video production should begin with the audience, placement and asset plan. We develop the master story and cut-down requirements before the shoot so the production captures what every channel actually needs.",
    goodFit: ["A launch needs a hero film and channel variations", "The brand needs a repeatable bank of social video", "Product, service or customer value is easier to show than describe"],
    decisions: [
      { title: "Story and hook", text: "Define what must be understood and why someone should keep watching." },
      { title: "Production design", text: "Align treatment, talent, locations, styling, schedule and budget to the idea." },
      { title: "Delivery map", text: "Plan aspect ratios, durations, captions, safe areas and paid-media versions in advance." },
    ],
    measures: ["Watch retention", "Message recall", "Asset coverage", "Post-view action"],
    relatedInsights: ["content-calendar-sri-lanka", "social-media-strategy-sri-lanka", "digital-marketing-cost-sri-lanka"],
  },
  "web-conversion": {
    scopeNote: "A conversion page should continue the promise that earned the visit and make the next decision easy. We combine message hierarchy, evidence, usability, speed, form design and analytics into one focused journey.",
    goodFit: ["Campaign traffic arrives but does not convert consistently", "The page serves too many audiences or actions at once", "A new offer needs a fast, measurable landing experience"],
    decisions: [
      { title: "Primary action", text: "Choose one next step that matches visitor intent and the sales process." },
      { title: "Decision evidence", text: "Place clear benefits, proof, answers and risk reducers where questions arise." },
      { title: "Experiment order", text: "Prioritise message, offer and friction changes by evidence and potential impact." },
    ],
    measures: ["Conversion rate", "Qualified submissions", "Form completion", "Page speed and engagement"],
    relatedInsights: ["google-ads-vs-meta-ads-sri-lanka", "seo-guide-sri-lankan-businesses", "digital-marketing-cost-sri-lanka"],
  },
};
