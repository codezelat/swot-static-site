import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("How We Work", "SWOT engagement models and campaign blueprints for focused launches, ongoing growth and connected marketing systems.", "/work");

const models = [
  { title: "Strategy sprint", text: "A focused audit and decision plan for teams that need direction before committing to execution." },
  { title: "Campaign pod", text: "Strategy, creative, media and measurement connected around a launch, offer or intake." },
  { title: "Growth partner", text: "An ongoing operating rhythm for content, channels, experimentation and reporting." },
];

export default function WorkPage() {
  return (
    <main id="main" className="inner-main">
      <section className="index-hero"><div className="section-shell"><Reveal><h1>THE WORK STARTS WITH THE RIGHT QUESTION.</h1></Reveal><Reveal><p>No borrowed case studies or vague promises. We define the business move, build the right team and make the evidence visible.</p></Reveal></div></section>
      <section className="section-pad paper-texture"><div className="section-shell"><div className="section-topline"><h2 className="display-heading">WAYS TO WORK<br />WITH SWOT.</h2></div><div className="related-grid">{models.map((model) => <div className="related-card" key={model.title}><h3>{model.title}</h3><p>{model.text}</p><Link className="text-link" href="/contact">Discuss the fit <ArrowUpRight size={16} /></Link></div>)}</div></div></section>
      <section className="section-pad deliverables-section"><div className="section-shell deliverables-layout"><Reveal><h2>WHAT EVERY ENGAGEMENT SHOULD MAKE CLEAR.</h2></Reveal><ol className="deliverable-list">{["The commercial goal", "The audience decision", "The role of each channel", "The creative hypothesis", "The measurement plan", "The next decision date"].map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>
      <section className="home-cta section-pad"><div className="section-shell cta-grid"><Reveal><h2 className="display-heading light">BRING THE PROBLEM.<br />WE WILL FIND THE MOVE.</h2></Reveal><div /><Link className="button button-lime" href="/contact">Start a project <ArrowRight size={18} /></Link></div></section>
    </main>
  );
}
