import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p>{site.shortDescription}</p>
          <p className="footer-parent">
            A <a href={site.parent.url} target="_blank" rel="noreferrer">CodeZela Technologies</a> company.
          </p>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2>CodeZela network</h2>
          <ul>
            {site.network.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">{item.name}<ArrowUpRight size={13} /></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SWOT. All rights reserved.</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
