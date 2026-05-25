import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

const processes = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and current market position." },
  { step: "02", title: "SEO Audit", desc: "Technical deep-dive into your website architecture and content gaps." },
  { step: "03", title: "Strategy", desc: "Formulating a robust SEO and content action plan aligned with revenue goals." },
  { step: "04", title: "Production", desc: "Creating high-EEAT content, optimized landing pages, and conversion copy." },
  { step: "05", title: "Optimization", desc: "Continuous on-page and technical optimizations for search engine dominance." },
  { step: "06", title: "Scale", desc: "Expanding topic clusters and aggressively building domain authority." },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter">
            The Enterprise <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>Methodology</span>
          </h2>
          <p className="text-white/60 text-lg font-light">
            A battle-tested process designed to minimize risk and maximize organic revenue.
          </p>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {processes.map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-add gap-6 md:gap-12 md:w-1/2",
                  idx % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right md:justify-end" : "md:ml-auto md:pl-12 md:flex-row-reverse md:text-left"
                )}
              >
                {/* Node */}
                <div className={cn(
                  "absolute left-6 md:left-auto md:right-0 w-8 h-8 bg-brand-black border-2 border-brand-blue flex items-center justify-center z-10 -translate-x-[15px] md:-translate-x-0 md:translate-x-1/2 top-0 mt-1",
                  idx % 2 !== 0 && "md:left-0 md:right-auto md:-translate-x-1/2"
                )}>
                  <div className="w-2 h-2 bg-brand-blue" />
                </div>
                
                <div className="ml-16 md:ml-0 flex-1">
                  <div className="glass-panel p-8 border-white/5 hover:border-brand-blue/30 transition-colors">
                     <span className="text-brand-blue font-bold uppercase tracking-widest text-[10px] mb-3 block">Step {process.step}</span>
                     <h3 className="text-2xl font-heading font-bold text-white mb-3 uppercase tracking-tight">
                       {process.title}
                     </h3>
                     <p className="text-white/50 leading-relaxed font-light">
                       {process.desc}
                     </p>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
