import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";

const packages = [
  {
    name: "SEO Blog Writing",
    price: "From 15k",
    currency: "KES",
    period: "/mo",
    description: "Consistent, high-quality blog content engine engineered to rank for target keywords.",
    features: [
      "Semantic Keyword Mapping",
      "Competitor Gap Analysis",
      "2-4 SEO Blog Posts per Month",
      "Internal Linking Structure",
      "On-Page Optimization",
      "Meta Titles & Descriptions"
    ],
    highlight: false,
    cta: "Request Blog Pricing"
  },
  {
    name: "Website Copywriting",
    price: "From 45k",
    currency: "KES",
    period: "/project",
    description: "High-converting, SEO-optimized landing pages and core website copy.",
    features: [
      "Target Audience & Intent Research",
      "Core Pages (Home, About, Services)",
      "Conversion-Focused Hero Sections",
      "Persuasive Lead-Capture Copy",
      "SEO H1/H2/H3 Architecture",
      "Two Rounds of Revisions"
    ],
    highlight: true,
    cta: "Calculate Project Cost"
  },
  {
    name: "Elite SEO Content Package",
    price: "Custom",
    currency: "KES",
    period: "/mo",
    description: "Complete end-to-end SEO content dominance for scaling brands.",
    features: [
      "Full SEO Content Audit",
      "Topic Cluster Strategy",
      "High-Volume Content Production",
      "Landing Pages + Blog Hubs",
      "Technical SEO Alignments",
      "Dedicated Revenue Strategist",
      "Monthly KPI Tracking"
    ],
    highlight: false,
    cta: "Discuss Custom Plan"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-brand-surface overflow-hidden border-t border-brand-border">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
            <span className="w-10 h-[1px] bg-brand-primary"></span>
            <span>Investment Plans</span>
            <span className="w-10 h-[1px] bg-brand-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-6">
            Growth is an <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-gold)' }}>Investment.</span>
          </h2>
          <p className="text-brand-text-muted font-light max-w-xl mx-auto">
             We do not offer cheap deliverables. We provide enterprise-grade digital systems engineered directly for revenue generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-end">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`glass-panel border-brand-border relative flex flex-col h-full ${
                pkg.highlight 
                  ? "border-t-2 border-t-brand-gold shadow-[0_-5px_30px_-15px_rgba(197,160,89,0.3)] lg:-mt-8" 
                  : ""
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-brand-bg px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Recommended for Growth
                </div>
              )}
              
              <div className="p-8 border-b border-brand-border">
                <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-brand-text mb-2">{pkg.name}</h3>
                <p className="text-brand-text-muted text-xs font-light min-h-[40px] mb-6 leading-relaxed bg">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-heading font-black text-brand-text">{pkg.price}</span>
                  <span className="text-sm font-bold text-brand-text-muted">{pkg.currency}</span>
                  <span className="text-xs text-brand-text-faint uppercase tracking-widest ml-1">{pkg.period}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4">
                      <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-text-muted font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`w-full py-4 flex items-center justify-center font-bold uppercase text-[10px] tracking-widest transition-all ${
                    pkg.highlight 
                      ? "bg-brand-primary text-brand-bg hover:bg-brand-text" 
                      : "bg-brand-surface-light text-brand-text border border-brand-border hover:bg-brand-surface-light"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
