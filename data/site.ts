export const site = {
  name: "SWOT",
  legalName: "SWOT by CodeZela Technologies",
  url: "https://swot.lk",
  email: "hello@swot.lk",
  description:
    "A digital marketing agency in Sri Lanka for strategy, creative, media and measurable growth.",
  shortDescription: "Strategy, creative, media and performance for Sri Lanka and beyond.",
  location: "Colombo, Sri Lanka",
  parent: {
    name: "CodeZela Technologies",
    url: "https://codezela.com",
  },
  network: [
    { name: "BYOW", href: "https://byow.lk" },
    { name: "RANDS", href: "https://rands.lk" },
    { name: "Ddigital", href: "https://ddigital.lk" },
    { name: "VAT0", href: "https://vat0.lk" },
    { name: "Plana", href: "https://plana.lk" },
  ],
} as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;
