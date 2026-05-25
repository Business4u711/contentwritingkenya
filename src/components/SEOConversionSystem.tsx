import { motion } from "motion/react";

export function SEOConversionSystem() {
  const steps = [
    {
      num: "01",
      title: "Semantic Keyword Discovery",
      desc: "We extract high-intent, low-competition keywords your competitors are ignoring. We focus on search intent, not just raw volume, to bring buyer-ready traffic."
    },
    {
      num: "02",
      title: "Competitor Gap Analysis",
      desc: "We analyze the top 10 ranking pages for your target keywords to find exact content gaps, allowing us to build an objectively superior article."
    },
    {
      num: "03",
      title: "SEO Content Structure Planning",
      desc: "Before writing, we architect the H1/H2/H3 layouts, ensuring readability, entity salience, and optimized NLP (Natural Language Processing) signals for Google."
    },
    {
      num: "04",
      title: "Conversion-Focused Writing",
      desc: "Traffic without leads is a vanity metric. We integrate psychological triggers, clear CTAs, and frictionless user flows to convert readers into paying clients."
    },
    {
      num: "05",
      title: "Optimization & Delivery",
      desc: "Every piece of website copywriting and blog content undergoes rigorous meta-data refinement, internal linking structuring, and final polish before you hit publish."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-text-muted">
            <span className="w-10 h-[1px] bg-brand-primary"></span>
            <span>Our Methodology</span>
            <span className="w-10 h-[1px] bg-brand-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-6 text-brand-text">
            The SEO Content <br className="hidden md:block"/> <span className="text-brand-accent">Conversion System</span>
          </h2>
          <p className="max-w-2xl mx-auto text-brand-text-muted font-light text-lg">
            Stop guessing with your content writing in Kenya. We utilize a rigid, step-by-step editorial architecture designed to engineer predictable search dominance and lead generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 relative">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-brand-border z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center md:items-start lg:items-center text-center lg:text-center md:text-left bg-brand-bg lg:bg-transparent p-6 lg:p-0 rounded lg:rounded-none border lg:border-none border-brand-border mb-4 lg:mb-0">
              <div className="w-20 h-20 bg-brand-primary text-brand-bg rounded-none flex items-center justify-center font-heading font-black text-3xl mb-6 shadow-xl shrink-0">
                {step.num}
              </div>
              <h3 className="text-lg font-heading font-bold uppercase tracking-tight text-brand-text mb-3 min-h-[56px] flex items-center justify-center lg:justify-center md:justify-start w-full">
                {step.title}
              </h3>
              <p className="text-brand-text-muted font-light text-xs leading-relaxed max-w-[250px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
