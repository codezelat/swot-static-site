export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "social-media-strategy-sri-lanka",
    title: "How to build a social media strategy for Sri Lanka",
    description: "A practical framework for choosing audiences, platforms, content roles and measures before filling another monthly calendar.",
    category: "Social",
    published: "2026-08-27",
    updated: "2026-08-27",
    readTime: "8 min read",
    image: "/images/social-content-production.webp",
    imageAlt: "Colombo street with a red tuk-tuk and bold abstract campaign posters",
    intro: "A useful social media strategy is not a list of posts. It is a set of decisions about who matters, what the brand can credibly contribute, how each channel helps and which audience actions are worth measuring.",
    sections: [
      {
        heading: "Start with the business move",
        paragraphs: [
          "Before choosing platforms or formats, define what needs to change in the business. A launch may need fast awareness and education. A service business may need qualified conversations. A retailer may need repeatable product demand. These are different jobs and should produce different content systems.",
          "A good objective is specific enough to guide creative choices. 'Increase engagement' is rarely enough. Define the audience, the decision stage and the action that would demonstrate progress.",
        ],
      },
      {
        heading: "Give every platform a job",
        paragraphs: [
          "Facebook, Instagram, TikTok, LinkedIn and YouTube do not need identical calendars. The audience may overlap, but their expectations and behaviours change by platform.",
          "Choose channels where the audience and content capability genuinely fit. It is better to run two channels with a clear role than publish weak variations across six.",
        ],
        bullets: [
          "Discovery: earn the first moment of attention",
          "Understanding: explain the value or difference",
          "Trust: demonstrate expertise, people and proof",
          "Action: make the next step obvious and low-friction",
        ],
      },
      {
        heading: "Plan for Sri Lankan context",
        paragraphs: [
          "Language is part of context, but context is more than translation. Tone, humour, timing, family influence, regional differences, payment behaviour and platform habits all affect how a message is understood.",
          "Sinhala, Tamil and English content should be developed around meaning and audience relevance. A direct translation may be grammatically correct while still feeling unfamiliar or forced.",
        ],
      },
      {
        heading: "Measure what helps the next decision",
        paragraphs: [
          "Reach, views and engagement can be useful diagnostic signals, but they are not the whole outcome. Connect them to website behaviour, enquiries, qualified leads, sales or another business measure where possible.",
          "A monthly report should explain what happened, why the team believes it happened and what will change next. The purpose of measurement is better action, not a longer deck.",
        ],
      },
    ],
  },
  {
    slug: "seo-guide-sri-lankan-businesses",
    title: "SEO for Sri Lankan businesses: the practical guide",
    description: "How to build technical access, useful service pages, local relevance and content authority without stuffing keywords.",
    category: "SEO",
    published: "2026-08-27",
    updated: "2026-08-27",
    readTime: "10 min read",
    image: "/images/seo-search-strategy.webp",
    imageAlt: "Sri Lankan creative team reviewing campaign research in a studio",
    intro: "SEO works when search engines can understand the site and people find the page genuinely useful. The practical work is a combination of technical clarity, intent-led architecture, original content, local signals and consistent improvement.",
    sections: [
      {
        heading: "Map intent before writing pages",
        paragraphs: [
          "A person searching for a digital marketing agency is making a different decision from someone searching for a social media calendar template. One is commercial, the other informational. They need different pages.",
          "Create a keyword and intent map that assigns one clear purpose to each important page. This reduces duplication and helps internal links guide people naturally between learning and buying decisions.",
        ],
      },
      {
        heading: "Build service pages with real depth",
        paragraphs: [
          "A strong service page should explain the problem, approach, deliverables, process, fit, limitations and common questions. Exact phrases can appear naturally in titles and copy, but repetition is not a substitute for useful information.",
          "Do not create dozens of near-identical location or service pages. Each page should contain distinct local or service-specific value and a genuine route to action.",
        ],
      },
      {
        heading: "Fix technical access and page experience",
        paragraphs: [
          "Search engines need stable URLs, crawlable links, accurate canonical tags, clean status codes, useful titles, structured data and an XML sitemap. Visitors need fast mobile pages, readable content and controls that work.",
          "Technical SEO is not a one-time plugin setting. It is the continuing discipline of making sure content can be discovered, interpreted and used without avoidable friction.",
        ],
        bullets: ["Indexation and canonical checks", "Core Web Vitals and mobile layout", "Internal linking and orphan pages", "Structured data and metadata", "Redirects and broken links"],
      },
      {
        heading: "Earn local relevance honestly",
        paragraphs: [
          "For businesses serving Sri Lankan locations, local relevance can come from a complete Google Business Profile, consistent business details, helpful location content, local partnerships, reviews and mentions from relevant organisations.",
          "Authority should be earned through useful work and credible relationships. Buying large volumes of unrelated links or producing thin AI pages creates risk without building a durable brand.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads-sri-lanka",
    title: "Google Ads or Meta Ads: where should your budget go?",
    description: "A decision framework for choosing between demand capture and demand creation in the Sri Lankan market.",
    category: "Performance",
    published: "2026-08-27",
    updated: "2026-08-27",
    readTime: "7 min read",
    image: "/images/performance-marketing-team.webp",
    imageAlt: "Bold campaign artwork displayed on a Colombo street",
    intro: "Google Ads and Meta Ads are not interchangeable traffic sources. Google often captures existing intent. Meta often creates or redirects attention. The right starting point depends on the offer, market and evidence available.",
    sections: [
      {
        heading: "Choose based on buying behaviour",
        paragraphs: [
          "If customers actively search for the service and can describe the need, Google Search may provide a direct route to qualified demand. If the product is visual, unfamiliar, impulse-friendly or driven by discovery, Meta may create the first interest more efficiently.",
          "Many journeys use both. A person may discover an offer on Instagram, compare options on Google and return through remarketing. Channel reports should not pretend that every decision belongs to one click.",
        ],
      },
      {
        heading: "Check the economics before the platform",
        paragraphs: [
          "Start with gross value, margin, repeat purchase, lead quality, sales capacity and the conversion rate of the current journey. A low cost per lead is not useful if the team cannot convert those leads or the orders are unprofitable.",
          "Budget should be large enough to test a meaningful hypothesis, but controlled enough to protect the business while the offer, creative and page are still learning.",
        ],
      },
      {
        heading: "Creative is a media variable",
        paragraphs: [
          "On Meta, creative often determines who stops and how the platform finds responders. On Google, ad relevance, query quality and the landing page strongly affect the usefulness of the click. Neither platform can rescue a weak offer indefinitely.",
          "Build a testing plan before launch: which message, format, audience or landing-page assumption is each variation meant to test? This turns creative production into structured learning.",
        ],
      },
      {
        heading: "Start with the clearest answer, then diversify",
        paragraphs: [
          "Choose the channel that offers the clearest, most economical first test. Define the success and stop conditions. Once the team understands the offer and conversion path, add channels to cover other parts of the journey rather than duplicating spend blindly.",
        ],
      },
    ],
  },
  {
    slug: "content-calendar-sri-lanka",
    title: "A useful content calendar for Sri Lankan brands",
    description: "Build a monthly system around audience questions, campaign moments and reusable production instead of filler posts.",
    category: "Content",
    published: "2026-08-27",
    updated: "2026-08-27",
    readTime: "6 min read",
    image: "/images/colombo-campaign-wall.webp",
    imageAlt: "Creative team planning a content calendar with printed layouts",
    intro: "The calendar is the output of a strategy, not the strategy itself. A useful month balances audience value, brand memory, commercial moments and the team's real production capacity.",
    sections: [
      { heading: "Define four content jobs", paragraphs: ["A simple system can include content that attracts, explains, proves and activates. These jobs create variety without turning the calendar into unrelated ideas.", "Map each proposed post to one job and one audience question. If the role is unclear, the post may be filler."], bullets: ["Attract attention with a relevant hook", "Explain the offer or category", "Prove expertise, quality or experience", "Activate a clear next step"] },
      { heading: "Use local moments selectively", paragraphs: ["Sri Lankan cultural and calendar moments can create relevance, but not every brand needs a post for every holiday. Participate when the brand has a meaningful contribution and the audience fit is real.", "Plan Sinhala, Tamil and English versions around the intended audience and tone. Avoid reducing cultural relevance to translated greetings."] },
      { heading: "Design production for reuse", paragraphs: ["Plan a shoot around a full asset list: master video, short hooks, still frames, product details, interviews and channel-specific crops. This creates efficiency without publishing identical content everywhere.", "Keep enough capacity for responsive content when the market changes. A calendar should guide the team, not prevent it from reacting intelligently."] },
    ],
  },
  {
    slug: "digital-marketing-cost-sri-lanka",
    title: "What does digital marketing cost in Sri Lanka?",
    description: "The variables behind project, retainer, production and media costs, plus what to clarify before comparing proposals.",
    category: "Strategy",
    published: "2026-08-27",
    updated: "2026-08-27",
    readTime: "7 min read",
    image: "/images/ecommerce-content-studio.webp",
    imageAlt: "A colourful campaign installation on a Colombo wall",
    intro: "There is no responsible universal price for digital marketing. Cost depends on the scope, seniority, production, platforms, media budget, approval complexity and the amount of learning required. A useful proposal makes those variables visible.",
    sections: [
      { heading: "Separate fees from media spend", paragraphs: ["Agency or specialist fees pay for strategy, management, creative, production and reporting. Media spend is paid to platforms for distribution. These should be shown separately so the business understands where the budget goes.", "Production, creators, talent, locations, software and travel may also be separate. Ask what is included and what triggers an additional cost."] },
      { heading: "Compare the operating model", paragraphs: ["A low monthly fee may include limited strategic time, reused templates or a narrow posting scope. A higher fee may include senior strategy, original production, faster iteration and deeper measurement. Neither is automatically right for every business.", "Compare who will do the work, the decision cadence, deliverable limits, approval process, account ownership and how learning will be documented."] },
      { heading: "Buy the smallest useful scope", paragraphs: ["If the business is not ready for an ongoing programme, begin with an audit, strategy sprint, campaign test or content pilot. The scope should be large enough to answer a real question and small enough to manage risk.", "The objective is not the cheapest activity. It is the clearest route to a business outcome and the knowledge needed to invest more responsibly."], bullets: ["What business result is this scope designed to influence?", "Which deliverables and revisions are included?", "Who owns the accounts, data and final assets?", "How will performance and decisions be reported?"] },
    ],
  },
  {
    slug: "local-seo-sri-lanka",
    title: "Local SEO in Sri Lanka: how to improve nearby discovery",
    description: "A practical checklist for Google Business Profile, location pages, reviews, citations and consistent local information.",
    category: "SEO",
    published: "2026-08-27",
    updated: "2026-08-27",
    readTime: "7 min read",
    image: "/images/b2b-thought-leadership.webp",
    imageAlt: "Sri Lankan team working together on local market research",
    intro: "Local SEO helps a business appear when people search for a nearby or location-specific solution. It is especially important for clinics, hospitality, property, retail, professional services and any organisation serving defined areas.",
    sections: [
      { heading: "Make business information consistent", paragraphs: ["Use the same business name, address, phone and website details across your website, Google Business Profile and credible directories. Inconsistent information creates confusion for both customers and search systems.", "Choose the most accurate primary business category and complete the services, hours, description, images and other available profile fields."] },
      { heading: "Create useful location pages", paragraphs: ["A location page should explain what is offered in that place, who it helps, how service is delivered and what a local customer needs to know. Changing only the city name across copied pages does not create meaningful value.", "Connect location pages through clear navigation and internal links. Use accurate titles, headings, canonical tags and structured data without stuffing every nearby suburb into the copy."] },
      { heading: "Build a responsible review process", paragraphs: ["Invite genuine customers to share honest feedback and make the request easy. Do not manufacture reviews or pressure customers to leave only positive ratings.", "Respond professionally, protect private information and use recurring feedback to improve the actual service. Review quality begins offline."] },
      { heading: "Earn local authority", paragraphs: ["Local partnerships, chambers, industry groups, events, community work and useful regional resources can create relevant mentions and links. Focus on genuine relationships rather than buying unrelated directory packages."] },
    ],
  },
];

export const insightBySlug = (slug: string) => insights.find((insight) => insight.slug === slug);
