import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";

const packages = [
  {
    name: "Starter SEO",
    price: "40k",
    currency: "KES",
    period: "/month",
    description: "For startups and local businesses aiming to establish strong foundations.",
    features: [
      "Technical SEO Audit",
      "Local SEO Optimization",
      "Keyword Research (Up to 20)",
      "2 SEO Blog Articles/Month",
      "On-Page Optimization",
      "Basic Monthly Reporting"
    ],
    highlight: false,
    cta: "Start Local Growth"
  },
  {
    name: "Business SEO",
    price: "75k",
    currency: "KES",
    period: "/month",
    description: "For scaling brands needing aggressive growth and wider market capture.",
    features: [
      "Advanced Technical SEO",
      "Competitor Analysis",
      "Keyword Research (Up to 50)",
      "4 High-Intent SEO Articles/Month",
      "Content Strategy Hubs",
      "Foundational Link Building",
      "Conversion Rate Optimization (CRO)"
    ],
    highlight: true,
    cta: "Scale Your Brand"
  },
  {
    name: "Enterprise SEO",
    price: "150k+",
    currency: "KES",
    period: "/month",
    description: "For high-growth companies and eCommerce brands requiring advanced dominance.",
    features: [
      "Full eCommerce/Enterprise scale SEO",
      "Unlimited Target Keywords",
      "Aggressive Topic Clusters (8+ Assets/mo)",
      "Premium Link Building outreach",
      "Custom Data Studio Dashboards",
      "Executive Consulting (Bi-weekly)",
      "Dedicated Revenue Strategist"
    ],
    highlight: false,
    cta: "Dominate Market"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-brand-charcoal overflow-hidden border-t border-white/5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
            <span className="w-10 h-[1px] bg-brand-gold"></span>
            <span>Investment Plans</span>
            <span className="w-10 h-[1px] bg-brand-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-6">
            Growth is an <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-gold)' }}>Investment.</span>
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto">
             We do not offer cheap deliverables. We provide enterprise-grade digital systems engineered directly for revenue generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-end">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`glass-panel border-white/10 relative flex flex-col h-full ${
                pkg.highlight 
                  ? "border-t-2 border-t-brand-gold shadow-[0_-5px_30px_-15px_rgba(197,160,89,0.3)] lg:-mt-8" 
                  : ""
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Recommended for Growth
                </div>
              )}
              
              <div className="p-8 border-b border-white/5">
                <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-white mb-2">{pkg.name}</h3>
                <p className="text-white/50 text-xs font-light min-h-[40px] mb-6 leading-relaxed bg">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-heading font-black text-white">{pkg.price}</span>
                  <span className="text-sm font-bold text-white/50">{pkg.currency}</span>
                  <span className="text-xs text-white/30 uppercase tracking-widest ml-1">{pkg.period}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4">
                      <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`w-full py-4 flex items-center justify-center font-bold uppercase text-[10px] tracking-widest transition-all ${
                    pkg.highlight 
                      ? "bg-brand-gold text-black hover:bg-white" 
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
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
