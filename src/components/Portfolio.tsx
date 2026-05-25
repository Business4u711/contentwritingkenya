import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="py-32 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-4 uppercase tracking-tighter">
              Our <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>Signature</span> Work
            </h2>
            <p className="text-brand-text-muted text-lg max-w-lg font-light">
              A curated selection of high-performance digital assets engineered for market leaders.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold border-b border-brand-border pb-1 hover:border-brand-accent transition-colors">
            View Full Portfolio <span className="text-brand-accent">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer"
          >
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#12141d] to-brand-charcoal overflow-hidden relative border border-brand-border mb-6">
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Mock UI Element inside */}
              <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-brand-bg border border-brand-border shadow-2xl p-6 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700">
                <div className="w-1/3 h-4 bg-brand-surface-light mb-4" />
                <div className="w-full h-8 bg-brand-accent/20 mb-4" />
                <div className="w-full h-24 bg-brand-surface-light" />
              </div>
            </div>
            <h3 className="text-3xl font-heading font-black text-brand-text mb-2 uppercase tracking-tight group-hover:text-brand-accent transition-colors">
              B2B SaaS Revamp
            </h3>
            <p className="text-brand-accent font-bold text-[10px] uppercase tracking-widest">Enterprise Web Design & SEO Copywriting</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative cursor-pointer md:mt-12"
          >
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#1a1c18] to-brand-charcoal overflow-hidden relative border border-brand-border mb-6">
              <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Mock UI Element inside */}
              <div className="absolute top-[10%] left-[10%] w-[80%] h-[120%] bg-brand-bg border border-brand-border shadow-2xl p-6 group-hover:-translate-y-4 transition-transform duration-700 flex gap-4">
                 <div className="w-1/2 h-full bg-brand-surface-light" />
                 <div className="w-1/2 flex flex-col gap-4">
                    <div className="h-1/3 w-full bg-brand-primary/20" />
                    <div className="h-2/3 w-full bg-brand-surface-light" />
                 </div>
              </div>
            </div>
            <h3 className="text-3xl font-heading font-black text-brand-text mb-2 uppercase tracking-tight group-hover:text-brand-primary transition-colors">
              E-Commerce Scaling
            </h3>
            <p className="text-brand-primary font-bold text-[10px] uppercase tracking-widest">Performance Marketing & Conversion Funnels</p>
          </motion.div>
          
          <a href="#" className="md:hidden inline-flex items-center justify-center gap-2 text-brand-text-muted hover:text-brand-text px-6 py-4 border border-brand-border rounded-full mt-4 bg-brand-surface-light transition-all w-full text-sm font-medium uppercase tracking-widest">
            View Full Portfolio <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
