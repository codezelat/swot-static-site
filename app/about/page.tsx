import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Lightbulb, MapPin, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About SWOT", "Meet the connected digital marketing practice from CodeZela Technologies, built around clearer strategy, better creative and measurable action.", "/about");

export default function AboutPage() {
  return (
    <main id="main" className="inner-main">
      <section className="inner-hero"><div className="section-shell inner-hero-grid"><Reveal><h1>FOUR QUESTIONS. ONE CLEARER MOVE.</h1></Reveal><Reveal className="inner-hero-copy" delay={.06}><p>SWOT turns strengths, weaknesses, opportunities and threats into a practical marketing operating system.</p><Link className="button button-lime" href="/contact">Start a project <ArrowRight size={18} /></Link></Reveal></div></section>
      <section className="section-pad paper-texture"><div className="section-shell content-intro"><Reveal><h2>WHY SWOT.</h2></Reveal><Reveal><p>Marketing becomes expensive when strategy, creative, media and measurement pull in different directions. SWOT exists to keep those decisions connected, with local context for Sri Lanka and technology depth from CodeZela Technologies.</p></Reveal></div></section>
      <section className="section-pad local-section"><div className="section-shell"><div className="local-heading"><Reveal><h2 className="display-heading light">BUILT IN SRI LANKA.<br />READY TO TRAVEL.</h2></Reveal><p>Colombo perspective, islandwide understanding and global standards.</p></div><div className="local-photo"><Image src="/images/sri-lankan-creative-team.webp" alt="Sri Lankan strategy and creative team collaborating in a Colombo studio" fill sizes="100vw" /></div></div></section>
      <section className="section-pad paper-texture"><div className="section-shell why-grid"><Reveal><h2 className="display-heading">THE QUESTIONS WE KEEP IN THE ROOM.</h2></Reveal><div className="why-list">{[{ icon: MapPin, title: "Where are we now?", text: "The market, business and audience as they really are." }, { icon: Target, title: "Where do we want to go?", text: "A commercial outcome clear enough to guide choices." }, { icon: Lightbulb, title: "What is the right move?", text: "The strongest strategy, message, creative and channel mix." }, { icon: BarChart3, title: "How will we measure it?", text: "Evidence that helps the team decide what comes next." }].map((item, index) => <Reveal className="why-item" key={item.title} delay={index * .05}><div className="icon-block lime"><item.icon /></div><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div></div></section>
    </main>
  );
}
