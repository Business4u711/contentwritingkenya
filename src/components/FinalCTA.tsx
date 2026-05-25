import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 relative border-t border-white/10 overflow-hidden bg-brand-charcoal">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 uppercase leading-[0.9]"
        >
          Ready to Dominate <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-gold)' }}>Search Rankings?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light"
        >
          If your business suffers from boring writing, weak SEO, low conversions, and invisible online presence — we transform your brand into a high-converting digital authority.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/#contact"
            className="group relative px-10 py-5 bg-brand-gold text-brand-black font-bold uppercase text-xs tracking-widest flex items-center justify-center"
          >
            <span>Start Your SEO Campaign</span>
            <div className="absolute -bottom-1 -right-1 w-full h-full border border-white/20 -z-10 group-hover:bottom-0 group-hover:right-0 transition-all"></div>
          </Link>
          <Link
            to="/#contact"
            className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-brand-blue transition-colors"
          >
            Get Proposal <span className="text-brand-blue">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
