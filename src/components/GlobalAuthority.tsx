import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function GlobalAuthority() {
  return (
    <section id="global" className="py-32 relative bg-brand-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="w-full h-full text-white"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Simple abstract map / network illustration */}
          <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.2" className="animate-pulse" />
          <path d="M0,30 Q30,70 60,30 T100,50" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M0,70 Q40,40 70,60 T100,50" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <circle cx="20" cy="40" r="1" fill="currentColor" />
          <circle cx="50" cy="50" r="1.5" fill="currentColor" className="text-brand-gold" />
          <circle cx="80" cy="55" r="1" fill="currentColor" />
          <circle cx="70" cy="65" r="0.8" fill="currentColor" />
          <circle cx="30" cy="60" r="0.8" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-brand-blue/10 flex items-center justify-center mb-8 border border-brand-blue/20"
        >
          <Globe className="w-8 h-8 text-brand-blue" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[90px] font-heading font-black mb-8 max-w-5xl leading-[0.85] uppercase tracking-tighter"
        >
          A Billion-Dollar Standard, <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>Headquartered in Kenya.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-16 leading-relaxed"
        >
          We help brands across Kenya and beyond compete globally through world-class SEO, conversion copywriting, and strategic digital growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {[
            { label: "Global Reach", value: "24+" },
            { label: "Enterprise Partners", value: "150+" },
            { label: "Content Assets", value: "10k+" },
            { label: "Revenue Generated", value: "$45M+" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-8 border-white/5">
              <h4 className="text-4xl font-heading font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
