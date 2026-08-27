import type { Metadata, Viewport } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/data/site";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Digital Marketing Agency Sri Lanka | SWOT", template: "%s | SWOT Sri Lanka" },
  description: site.description,
  applicationName: "SWOT",
  category: "marketing",
  keywords: ["digital marketing Sri Lanka", "social media marketing Sri Lanka", "content creation Sri Lanka", "performance marketing Sri Lanka", "SEO Sri Lanka"],
  authors: [{ name: "SWOT", url: site.url }],
  creator: "SWOT by CodeZela Technologies",
  publisher: "CodeZela Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: site.url,
    siteName: "SWOT",
    title: "Digital Marketing Agency Sri Lanka | SWOT",
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: "SWOT | Digital Marketing Sri Lanka", description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7f4ec" }, { media: "(prefers-color-scheme: dark)", color: "#11100f" }] };

const organisation = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  logo: `${site.url}/brand/swot-mark.svg`,
  description: site.description,
  areaServed: [{ "@type": "Country", name: "Sri Lanka" }, { "@type": "Place", name: "Worldwide" }],
  address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
  knowsAbout: ["Digital marketing", "Social media marketing", "Content creation", "Performance marketing", "Search engine optimisation", "Advertising"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <JsonLd data={organisation} />
      </body>
    </html>
  );
}
