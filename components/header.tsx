"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { primaryNav } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlay = pathname === "/";

  return (
    <header className={`site-header ${overlay ? "site-header-overlay" : "site-header-solid"}`}>
      <div className="header-inner">
        <Logo inverse={overlay || open} />
        <nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className="mobile-project-link" href="/contact" onClick={() => setOpen(false)}>
            Start a project <ArrowUpRight size={17} />
          </Link>
        </nav>
        <Link className="button button-lime header-cta" href="/contact">
          Start a project <ArrowUpRight size={17} />
        </Link>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
