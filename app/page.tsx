import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Lightbulb, MapPin, Megaphone, PencilLine, Search, Target, Users } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { site } from "@/data/site";

const process = [
  { title: "Discover", text: "Uncover real opportunities.", icon: Search, className: "violet" },
  { title: "Define", text: "Translate insight into clear strategy.", icon: PencilLine, className: "orange" },
  { title: "Create", text: "Craft campaigns that convert.", icon: ArrowUpRight, className: "lime" },
  { title: "Optimise", text: "Test, learn and improve.", icon: BarChart3, className: "violet" },
];

const homeFaqs = [
  { question: "What does SWOT do?", answer: "SWOT is a digital marketing agency in Sri Lanka. We connect strategy, creative, social media, content, paid media, SEO and measurement around the business move that matters." },
  { question: "Who do you work with?", answer: "We work with Sri Lankan and international businesses that need clearer marketing decisions, stronger creative and connected execution. Engagements can support internal teams or operate end to end." },
  { question: "How do you work?", answer: "Every engagement follows four stages: discover the real situation, define the strategy, create the campaign system and optimise using useful evidence." },
  { question: "How long does it take to see results?", answer: "Timelines depend on the service, market and starting point. Paid campaign learning can begin quickly, while brand and organic search growth usually need sustained work. We define realistic milestones before starting." },
  { question: "What makes SWOT different?", answer: "We use the SWOT mindset as an operating system, not a workshop slide. Market insight, creative, media and measurement stay connected, with CodeZela technology support when the work needs a stronger digital product or website." },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 8);
  const featuredInsights = insights.slice(0, 3);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return (
    <main id="main">
      <section className="home-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <Reveal><h1 className="hero-title">MAKE EVERY<br />MARKETING MOVE<br />COUNT.</h1></Reveal>
          <Reveal delay={0.08} className="hero-copy">
            <p>{site.description}</p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/contact">Build my growth plan <ArrowRight size={18} /></Link>
              <Link className="button button-outline-light" href="/services">Explore services <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-image-wrap" aria-hidden="true">
          <Image src="/images/hero-strategist.webp" alt="" fill preload fetchPriority="high" sizes="(max-width: 900px) 90vw, 58vw" className="hero-person" />
        </div>
        <div className="hero-quadrant" aria-hidden="true"><span>S</span><span>W</span><span>O</span><span>T</span></div>
        <div className="hero-ticker" aria-hidden="true"><div>STRATEGY&nbsp; × &nbsp;CREATIVE&nbsp; × &nbsp;MEDIA&nbsp; × &nbsp;MEASUREMENT&nbsp; × &nbsp;STRATEGY&nbsp; × &nbsp;CREATIVE&nbsp; × &nbsp;MEDIA&nbsp; × &nbsp;MEASUREMENT</div></div>
        <div className="capability-rail">
          <div><Target /><span>Strategy</span></div><div><PencilLine /><span>Creative</span></div><div><Megaphone /><span>Media</span></div><div><BarChart3 /><span>Measurement</span></div>
        </div>
      </section>

      <section className="process-section section-pad paper-texture">
        <div className="section-shell process-layout">
          <Reveal className="section-heading-wrap"><h2 className="display-heading">FROM SWOT TO<br />SMARTER GROWTH.</h2></Reveal>
          <div className="process-grid">
            {process.map((step, index) => (
              <Reveal className="process-step" delay={index * 0.06} key={step.title}>
                <div className={`icon-block ${step.className}`}><step.icon /></div>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </Reveal>
            ))}
            <div className="process-mark" aria-hidden="true"><span>S</span><span>W</span><span>O</span><span>T</span></div>
          </div>
        </div>
      </section>

      <section className="services-home section-pad orange-section">
        <div className="section-shell services-home-grid">
          <Reveal className="services-intro"><h2 className="display-heading">EVERYTHING YOUR<br />MARKETING NEEDS.</h2><Link className="text-link" href="/services">See all services <ArrowRight size={17} /></Link></Reveal>
          <Reveal className="services-photo"><Image src="/images/sri-lankan-creative-team.webp" alt="Sri Lankan creative team planning a campaign" fill sizes="(max-width: 900px) 100vw, 42vw" /></Reveal>
          <div className="service-index">
            {featuredServices.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{service.shortTitle}</strong><ArrowUpRight size={18} /></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="local-section section-pad">
        <div className="section-shell">
          <Reveal className="local-heading"><h2 className="display-heading light">BUILT FOR THE WAY<br />SRI LANKA BUYS.</h2><p>Local understanding. Multilingual thinking. Islandwide ambition.</p></Reveal>
          <Reveal className="local-photo"><Image src="/images/colombo-campaign-wall.webp" alt="A red tuk-tuk passing a bold campaign wall in Colombo" fill sizes="(max-width: 900px) 100vw, 70vw" /></Reveal>
          <div className="market-labels"><span>සිංහල</span><span>தமிழ்</span><span>English</span><span><MapPin size={16} /> Colombo</span><span>Islandwide</span><span>Global</span></div>
        </div>
      </section>

      <section className="insights-home section-pad paper-texture">
        <div className="section-shell">
          <div className="section-topline"><Reveal><h2 className="display-heading">MARKETING MOVES<br />WORTH KNOWING.</h2></Reveal><Link className="text-link" href="/insights">View all insights <ArrowRight size={17} /></Link></div>
          <div className="insight-grid">
            {featuredInsights.map((insight, index) => (
              <Reveal delay={index * 0.06} key={insight.slug}>
                <article className="insight-card">
                  <Link className="insight-image" href={`/insights/${insight.slug}`}><Image src={insight.image} alt={insight.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" /></Link>
                  <span>{insight.category}</span><h3><Link href={`/insights/${insight.slug}`}>{insight.title}</Link></h3><Link className="text-link" href={`/insights/${insight.slug}`}>Read article <ArrowRight size={16} /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section section-pad paper-texture">
        <div className="section-shell why-grid">
          <Reveal><h2 className="display-heading">WHY SWOT?<br />CLEARER THINKING.<br />BETTER CREATIVE.<br />SMARTER SPEND.</h2></Reveal>
          <div className="why-list">
            {[{ icon: Target, title: "Commercial clarity", text: "Start with the real goal." }, { icon: MapPin, title: "Sri Lankan context", text: "Culture and behaviour understood." }, { icon: Users, title: "One connected team", text: "Strategy through measurement." }, { icon: BarChart3, title: "Open measurement", text: "See what moved and what is next." }].map((item, index) => (
              <Reveal className="why-item" delay={index * 0.05} key={item.title}><div className="icon-block lime"><item.icon /></div><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad paper-texture">
        <div className="section-shell faq-layout"><Reveal><h2 className="display-heading">FREQUENTLY ASKED.<br />PLAINLY ANSWERED.</h2></Reveal><FaqAccordion items={homeFaqs} /></div>
      </section>

      <section className="home-cta section-pad">
        <div className="section-shell cta-grid">
          <Reveal><h2 className="display-heading light">LET&apos;S MAKE THE<br />NEXT MOVE CLEAR.</h2></Reveal>
          <div className="decision-map" aria-hidden="true"><div>WHERE ARE<br />WE NOW?</div><div><Lightbulb /></div><div>WHERE DO WE<br />WANT TO GO?</div><div>WHAT IS THE<br />RIGHT MOVE?</div><div className="decision-dot">?</div><div>HOW WILL WE<br />MEASURE IT?</div></div>
          <div className="cta-actions"><Link className="button button-lime" href="/contact">Start a project <ArrowRight size={18} /></Link><a className="button button-outline-light" href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>
      </section>
      <JsonLd data={faqSchema} />
    </main>
  );
}
