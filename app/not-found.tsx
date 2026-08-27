import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | SWOT",
  description: "The requested page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() { return <main id="main" className="state-page"><div><h1>404.</h1><p>That move does not exist.</p><Link className="button button-ink" href="/">Back to SWOT</Link></div></main>; }
