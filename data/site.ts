export const site = {
  name: "SWOT",
  legalName: "SWOT by CodeZela Technologies",
  url: "https://swot.lk",
  email: "hello@swot.lk",
  description:
    "A digital marketing agency in Sri Lanka for strategy, creative, media and measurable growth.",
  shortDescription: "Strategy, creative, media and performance for Sri Lanka and beyond.",
  location: "Colombo, Sri Lanka",
  contact: {
    phoneDisplay: "+94 11 485 8899",
    phoneHref: "tel:+94114858899",
    streetAddress: "Level 12, Parkland Building, 33 Park Street",
    addressLine1: "Level 12, Parkland Building",
    addressLine2: "33 Park Street, Colombo 00200, Sri Lanka",
  },
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
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/CodezelaTechnologies" },
    { name: "Instagram", href: "https://www.instagram.com/codezela.t/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/codezela-technologies/" },
    { name: "YouTube", href: "https://www.youtube.com/@codezelatechnologies" },
    { name: "X", href: "https://twitter.com/CodezelaT" },
  ],
} as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;
