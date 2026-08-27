export type Faq = {
  question: string;
  answer: string;
};

export type SeoLandingPage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  headline: string;
  intro: string;
  outcomes: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  faq: Faq[];
  keywords: string[];
};

export type ServiceSeoDetail = {
  scopeNote: string;
  goodFit: string[];
  decisions: { title: string; text: string }[];
  measures: string[];
  relatedInsights: string[];
};
