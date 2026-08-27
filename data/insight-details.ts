import type { Faq } from "./types";
import type { InsightSection } from "./insights";

export type InsightDetail = {
  takeaways: string[];
  extraSections: InsightSection[];
  faq: Faq[];
  relatedServices: string[];
  keywords: string[];
  resources?: { title: string; href: string; publisher: string }[];
};

export const insightDetails: Record<string, InsightDetail> = {
  "social-media-strategy-sri-lanka": {
    takeaways: ["Begin with a business and audience change, not a posting quota", "Give each platform a distinct role", "Plan language and cultural context from the idea stage", "Use reports to decide what changes next"],
    extraSections: [
      { heading: "Build a content architecture", paragraphs: ["Turn the strategy into a small set of repeatable content pillars. Each pillar should connect an audience need with something the brand can credibly show, explain or prove. This creates consistency without making every post look the same.", "Within each pillar, define formats that match the team\'s production reality. A founder-led explanation, product demonstration, customer question, behind-the-scenes sequence and campaign idea all require different preparation. A strategy that depends on daily high-production video will fail if the team can only shoot once a month."], bullets: ["Audience question or tension", "Brand point of view", "Repeatable format", "Channel and frequency", "Expected audience action"] },
      { heading: "Design the operating rhythm", paragraphs: ["A calendar also needs owners, deadlines and an approval route. Decide who supplies information, who checks factual and cultural accuracy, who can approve reactive content and how customer issues move from the social team to operations.", "Use a monthly planning cycle and a shorter weekly learning cycle. The monthly view protects campaign coherence. The weekly view allows the team to respond to performance, comments, stock, service capacity and relevant moments without rebuilding the entire plan."], bullets: ["Monthly priorities and campaign moments", "Weekly production and publishing check", "Community escalation rules", "Named owner for every approval", "A short record of what the team learned"] },
      { heading: "Use a practical scorecard", paragraphs: ["Select a small group of measures for each content job. Discovery content may be judged by relevant reach and early watch retention. Educational content may need deeper watch time, saves or useful comments. Activation content should connect to clicks, messages, leads, purchases or another defined action.", "Do not compare every format using one average engagement rate. A ten-second product hook and a detailed customer explanation have different jobs. Compare like with like, then review whether the full channel is contributing to the customer journey."] },
    ],
    faq: [
      { question: "How often should a Sri Lankan business post on social media?", answer: "There is no universal number. Choose a rhythm the team can sustain with useful, platform-appropriate content. Consistent quality and learning are more valuable than a high volume of filler posts." },
      { question: "Should the same post go on Facebook, Instagram, TikTok and LinkedIn?", answer: "The central idea can travel, but the hook, format, pace, caption and next action should reflect how people use each platform. Simple reposting usually misses that context." },
      { question: "Should content be in Sinhala, Tamil or English?", answer: "Choose language by audience, situation and brand voice. Multilingual campaigns should adapt meaning and tone from the concept stage rather than translate completed English copy word for word." },
    ],
    relatedServices: ["social-media-marketing", "content-creation", "meta-ads"],
    keywords: ["social media strategy sri lanka", "social media marketing sri lanka", "social media plan sri lanka", "social media management sri lanka"],
  },
  "seo-guide-sri-lankan-businesses": {
    takeaways: ["Map one primary intent to each important page", "Solve crawl and indexation problems before scaling content", "Use distinct service and location pages, not copied variations", "Measure qualified organic outcomes, not rankings alone"],
    extraSections: [
      { heading: "Create a search architecture that can grow", paragraphs: ["Start with the business categories and decisions customers actually make. A simple architecture may include a main services page, focused service pages, platform or industry pages where the offer genuinely differs, location pages with real local value, and articles that answer questions before a buyer is ready to enquire.", "Connect these page types with descriptive internal links. An article about choosing ad platforms should lead to the relevant paid-media services. A location page should link to the services available there. Every priority page should be reachable through ordinary HTML links and should not depend on a site search box or client-side interaction to be discovered."], bullets: ["One canonical URL for each purpose", "A descriptive title and visible main heading", "A clear route from learning to service evaluation", "Relevant links from established pages", "No orphan pages or copied city blocks"] },
      { heading: "Build evidence into the content", paragraphs: ["Useful SEO content answers the question completely enough for a reader to make progress. Explain tradeoffs, fit, process, limitations, costs or cost drivers, and what information is needed next. Original examples, checklists, decision frameworks and clearly labelled experience add more value than rewriting the current search results.", "Trust also comes from transparency. Show who the business is, how to contact it, where it operates and how the advice was reviewed. Avoid invented authors, unsupported awards, fake reviews and automatic date changes. Update a page when the underlying guidance or service has materially changed."],
      },
      { heading: "Use a 90-day SEO operating plan", paragraphs: ["In the first month, establish reliable measurement, crawl the site, confirm indexation and map current pages to priority intent. Fix barriers that prevent search engines or visitors from using the site. In the second month, improve the most commercially important pages and their internal links. In the third, publish the highest-value supporting resources and begin credible outreach or local authority work.", "Review results by page group and query intent. Watch qualified clicks, impressions, conversions, index coverage and page experience. A ranking movement is useful evidence, but the business outcome matters more."], bullets: ["Days 1 to 30: measurement, crawl, indexation and intent map", "Days 31 to 60: service pages, local signals and internal links", "Days 61 to 90: original resources, authority and iteration"] },
    ],
    faq: [
      { question: "Can a new Sri Lankan website rank quickly?", answer: "A technically clear site can be discovered quickly, but competitive commercial visibility usually takes sustained work. Timing depends on demand, competition, current authority, content quality and how well the site satisfies the search." },
      { question: "How many keywords should one page target?", answer: "Plan around one primary intent and the closely related questions a useful answer naturally covers. Search systems understand variations, so repeating a long keyword list is unnecessary and can make the page worse." },
      { question: "Is SEO a one-time project?", answer: "Initial technical and structural work can be project-based, but search demand, competitors, content and websites change. Important pages should be monitored and improved as new evidence appears." },
    ],
    relatedServices: ["seo", "web-conversion", "content-creation"],
    keywords: ["seo sri lanka", "seo guide sri lanka", "seo services sri lanka", "search engine optimisation sri lanka", "seo company sri lanka"],
    resources: [
      { title: "SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", publisher: "Google Search Central" },
      { title: "Creating helpful, reliable, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", publisher: "Google Search Central" },
      { title: "Link best practices for Google", href: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable", publisher: "Google Search Central" },
    ],
  },
  "google-ads-vs-meta-ads-sri-lanka": {
    takeaways: ["Google often captures expressed demand, while Meta often creates discovery", "Start with unit economics and sales capacity", "Creative and landing pages are part of media performance", "Use a defined test budget and decision rule"],
    extraSections: [
      { heading: "Use a channel decision matrix", paragraphs: ["Score each channel against demand visibility, visual demonstration, audience definition, average order or lead value, sales cycle and the evidence already available. Google Search becomes more attractive when people actively describe the need. Meta becomes more attractive when the offer is easy to demonstrate, the audience can be recognised through interests or behaviour, or discovery is part of the purchase.", "For B2B, professional services and considered purchases, the first conversion may be a qualified enquiry rather than a sale. For e-commerce, product margin, repeat purchase and fulfilment capacity matter. The channel decision should reflect the business model, not a generic platform benchmark."], bullets: ["Can customers describe the need in a search?", "Does the product benefit from visual demonstration?", "Can a meaningful conversion be tracked?", "Can the team follow up at the speed and quality required?", "Is the landing experience ready for the traffic?"] },
      { heading: "Plan the first six weeks", paragraphs: ["Before launch, confirm ownership, billing, access, conversion events, landing pages and creative. During the first two weeks, protect data quality and remove obvious waste without making constant structural changes. During weeks three and four, compare message, query or creative patterns. By weeks five and six, decide what deserves another test, what should stop and whether another channel would cover a missing part of the journey.", "Document the hypothesis behind each major change. If targeting, creative, offer and page all change together, the result may improve but the team will not know why. Controlled learning makes the next budget decision stronger."],
      },
      { heading: "Read attribution with care", paragraphs: ["Platform reports use different attribution rules and each platform has an incentive to claim influence. Compare platform data with analytics, CRM, order or call data where possible. Ask whether lead quality, revenue and customer acquisition economics support the same conclusion.", "Do not expect one report to capture every assisted journey perfectly. Use a consistent decision model, annotate major changes and look for agreement across multiple signals rather than treating one number as absolute truth."] },
    ],
    faq: [
      { question: "Is Google Ads or Meta Ads cheaper in Sri Lanka?", answer: "Cost varies by audience, category, competition, objective, creative and conversion quality. A cheaper click or lead is not necessarily a better customer. Compare qualified outcome cost and value." },
      { question: "Can a small business run both platforms?", answer: "Yes, but splitting a limited budget can prevent either test from learning. Start with the channel that gives the clearest answer, then add the second when it has a defined role." },
      { question: "How long should an ad test run?", answer: "Use enough time and budget to observe meaningful conversions while accounting for the normal sales delay. The right duration depends on traffic, conversion rate and purchase cycle, not a fixed number of days." },
    ],
    relatedServices: ["google-ads", "meta-ads", "performance-marketing"],
    keywords: ["google ads vs facebook ads sri lanka", "google ads sri lanka", "meta ads sri lanka", "digital advertising sri lanka", "performance marketing sri lanka"],
    resources: [
      { title: "What to track based on advertising goals", href: "https://support.google.com/google-ads/answer/1722036", publisher: "Google Ads Help" },
      { title: "About the search terms report", href: "https://support.google.com/google-ads/answer/2472708/about-the-search-terms-report", publisher: "Google Ads Help" },
    ],
  },
  "content-calendar-sri-lanka": {
    takeaways: ["Build the calendar from audience questions and campaign priorities", "Use local moments only when the brand has something relevant to add", "Plan one production for multiple purposeful assets", "Keep room for response and learning"],
    extraSections: [
      { heading: "Build the month in layers", paragraphs: ["Start with fixed business moments such as launches, intake periods, events, promotions and service deadlines. Add the audience questions that recur in sales, support and comments. Then add brand-building formats that should appear consistently even when there is no campaign.", "Only after those layers are clear should the team fill exact dates. This prevents the calendar from becoming a sequence of disconnected observance posts and product reminders."], bullets: ["Business and campaign moments", "Recurring audience questions", "Proof and trust content", "Brand memory formats", "Responsive space"] },
      { heading: "Write a usable content brief", paragraphs: ["Every item should name the audience, content job, central message, format, platform, source material, owner, approval date and next action. The brief does not need to be long, but it should remove ambiguity before design or production begins.", "For multilingual work, include the intended language and cultural context in the brief. Let writers develop natural expressions for each audience while protecting the same strategic meaning."],
      },
      { heading: "Review the calendar as a system", paragraphs: ["At month end, group results by content job and format rather than selecting only the biggest post. Identify which hooks earned attention, which explanations held it, which proof created questions and which activation moved people to act.", "Carry those lessons into the next calendar. Keep successful structures, change weak assumptions and retire ideas that repeatedly fail their intended job. A calendar becomes valuable when it records learning, not just output."] },
    ],
    faq: [
      { question: "How far ahead should a content calendar be planned?", answer: "Plan fixed campaigns and production several weeks ahead, then keep part of the calendar flexible for performance learning, operational changes and relevant current moments." },
      { question: "What should a monthly content calendar include?", answer: "Include the audience, purpose, message, format, platform, language, owner, due dates, approval status and next action for each item. Add campaign and production notes where needed." },
      { question: "Can one shoot supply a full month?", answer: "Often it can, when the team plans a varied asset list in advance. The result should be adapted into distinct formats and messages rather than publishing near-identical cuts all month." },
    ],
    relatedServices: ["content-creation", "social-media-marketing", "video-production"],
    keywords: ["content calendar sri lanka", "social media content plan sri lanka", "content creation sri lanka", "monthly social media plan"],
  },
  "digital-marketing-cost-sri-lanka": {
    takeaways: ["Separate professional fees, media spend and production costs", "Compare the people and operating model behind each proposal", "Start with the smallest scope that can answer a real business question", "Clarify ownership, revisions, reporting and exclusions"],
    extraSections: [
      { heading: "Understand the main pricing models", paragraphs: ["A fixed project suits a defined output such as an audit, strategy, campaign launch, website or production. A monthly retainer suits ongoing planning, publishing, optimisation and reporting. A day rate or specialist block can support an internal team. Performance-linked fees may work only when revenue, attribution, margins and responsibilities are defined clearly.", "The model should match the uncertainty and operating rhythm. A fixed fee for an undefined, constantly changing scope creates tension. An ongoing retainer for a one-off decision creates unnecessary cost."], bullets: ["Project: defined outcome and timeline", "Retainer: recurring team and decision cadence", "Production: crew, talent, locations and post-production", "Media management: campaign operation separate from ad spend", "Advisory: senior input for an internal team"] },
      { heading: "Ask for a comparable scope", paragraphs: ["Two proposals with the same service label can contain very different work. Ask each provider to state the number and type of original assets, channels, production assumptions, community coverage, campaign management, meeting rhythm, reporting depth and senior involvement.", "Confirm taxes, third-party subscriptions, creator fees, travel, overtime and out-of-scope rates. Make account ownership, source files, usage rights and data access explicit before work begins."],
      },
      { heading: "Set a budget from the decision backwards", paragraphs: ["Define the commercial result, current baseline, customer value and the uncertainty the programme needs to reduce. Then estimate the strategy, production, distribution and measurement required to test it properly. This produces a more responsible budget than choosing an arbitrary monthly amount and filling it with activity.", "Protect a portion for learning. New offers and untested creative need iteration. If every rupee is committed to the first idea, the campaign cannot respond intelligently when evidence arrives."] },
    ],
    faq: [
      { question: "Why do digital marketing quotes in Sri Lanka vary so much?", answer: "The label may hide differences in seniority, original production, channels, response coverage, media management, reporting and strategic involvement. Compare the operating scope, not the headline fee alone." },
      { question: "Is ad spend included in an agency fee?", answer: "Usually it is separate, but every proposal should state this clearly. Platform spend, creator fees, production and software may also be separate." },
      { question: "Should a new business start with a retainer?", answer: "Not always. An audit, strategy sprint, content pilot or focused campaign can clarify the offer and channel before an ongoing programme is justified." },
    ],
    relatedServices: ["digital-marketing", "performance-marketing", "content-creation"],
    keywords: ["digital marketing cost sri lanka", "digital marketing packages sri lanka", "social media marketing prices sri lanka", "marketing agency fees sri lanka"],
  },
  "local-seo-sri-lanka": {
    takeaways: ["Keep the business identity accurate and consistent", "Create location pages only when they provide distinct local value", "Ask real customers for honest reviews without incentives or pressure", "Earn local mentions through genuine relationships"],
    extraSections: [
      { heading: "Optimise the complete local journey", paragraphs: ["A local result is useful only if the next steps work. Confirm the profile links to the right page, calls are answered, opening hours are current, directions are accurate and the website explains the service available in that area. Add clear contact and booking routes for mobile visitors.", "Use photos that help a customer recognise the location, team, service or product. Keep seasonal hours and temporary changes current. Local SEO is partly an information quality discipline."],
      },
      { heading: "Match structured data to visible facts", paragraphs: ["Use Organisation or LocalBusiness structured data that reflects information people can also see on the website. Include the real name, canonical URL, contact details and physical address only when accurate. Markup should clarify the page, not invent ratings, prices or service areas.", "Keep location URLs stable and include canonical pages in the XML sitemap. Link to each important location through normal navigation or contextual links so customers and crawlers can find it."],
      },
      { heading: "Audit local visibility every quarter", paragraphs: ["Check profile accuracy, category choice, duplicate listings, review response, landing-page quality, local citations and the queries producing impressions or actions. Compare findings with calls, bookings, directions and qualified enquiries.", "Treat sudden changes carefully. A ranking tool, personal search and Search Console may show different views. Look for a consistent pattern across locations, queries and real customer actions before making large changes."], bullets: ["Business details and eligibility", "Profile ownership and access", "Location page indexation", "Review request and response process", "Local links, mentions and conversions"] },
    ],
    faq: [
      { question: "Does every business qualify for a Google Business Profile?", answer: "No. Google requires eligible businesses to make in-person contact with customers during stated hours, with limited exceptions. Online-only brands and lead-generation businesses are not eligible." },
      { question: "Should keywords be added to the Google Business Profile name?", answer: "Use the real-world business name as consistently represented in branding and signage. Adding unnecessary services, locations or taglines can violate Google\'s guidelines." },
      { question: "How many location pages should a business create?", answer: "Create pages for genuine locations or service areas only when each page can explain distinct, useful information. Avoid copying one page and changing only the place name." },
    ],
    relatedServices: ["seo", "digital-marketing", "web-conversion"],
    keywords: ["local seo sri lanka", "google business profile sri lanka", "local search sri lanka", "seo company sri lanka", "google maps marketing sri lanka"],
    resources: [
      { title: "Guidelines for representing your business on Google", href: "https://support.google.com/business/answer/3038177", publisher: "Google Business Profile Help" },
      { title: "Business eligibility and ownership guidelines", href: "https://support.google.com/business/answer/13763036", publisher: "Google Business Profile Help" },
    ],
  },
};
