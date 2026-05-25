import { motion } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisons = [
  {
    generic: "Focus on vanity metrics (traffic that doesn't convert)",
    elite: "Build revenue-focused systems and pipeline growth",
  },
  {
    generic: "Use outdated, risky SEO tactics",
    elite: "Deploy ethical, future-proof SEO architectures",
  },
  {
    generic: "Produce weak, AI-spammed content",
    elite: "Create high-EEAT, conversion-driven editorial content",
  },
  {
    generic: "Lack strategic depth and business acumen",
    elite: "Combine deep analytics, strategy, and market psychology",
  },
  {
    generic: "Standard reporting with no clear ROI",
    elite: "Operate with enterprise precision and clear revenue attribution",
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 relative bg-brand-surface overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
              <span className="w-10 h-[1px] bg-brand-primary"></span>
              <span>The Differentiator</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-none uppercase tracking-tighter">
              We Destroy <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-white)' }}>Mediocrity.</span>
            </h2>
          </div>
          <p className="text-brand-text-muted max-w-sm text-lg leading-relaxed md:pb-2 font-light hidden md:block">
            While most agencies sell deliverables, we engineer market dominance. Discover the difference between an agency and a growth partner.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-[2px] bg-brand-surface-light hidden md:block" />
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* Left Column - Generic */}
            <div className="md:pr-12 lg:pr-24 space-y-6">
              <h3 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-text-muted mb-10 pb-4 border-b border-brand-border text-center md:text-right">
                Generic Agencies
              </h3>
              
              {comparisons.map((item, idx) => (
                <motion.div
                  key={`generic-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 border-brand-border bg-black/40 flex gap-4 items-start"
                >
                  <XCircle className="w-5 h-5 text-brand-text-faint shrink-0 mt-0.5" />
                  <p className="text-brand-text-muted font-light text-sm">{item.generic}</p>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Kenya SEO Experts */}
            <div className="md:pl-12 lg:pl-24 space-y-6 mt-16 md:mt-0">
              <h3 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-primary mb-10 pb-4 border-b border-brand-primary/20 text-center md:text-left">
                Kenya SEO Experts
              </h3>
              
              {comparisons.map((item, idx) => (
                <motion.div
                  key={`elite-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 border-brand-primary/20 flex gap-4 items-start shadow-[0_0_30px_rgba(197,160,89,0.05)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors pointer-events-none" />
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5 relative z-10" />
                  <p className="text-brand-text font-medium text-sm relative z-10">{item.elite}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
