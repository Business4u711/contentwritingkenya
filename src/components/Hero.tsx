import { motion } from "motion/react";
import { ChevronRight, ArrowUpRight, BarChart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-10 h-[1px] bg-brand-primary"></span>
            <span className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em]">Africa's Elite SEO Growth Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl lg:text-[100px] font-heading font-black leading-[0.85] tracking-tighter mb-8 uppercase"
          >
            Built To <br className="hidden sm:block" />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-gold)' }}>Rank.</span> Engineered<br className="hidden sm:block" />
            To Convert.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-brand-text-muted max-w-xl mb-10 leading-relaxed font-light"
          >
            Kenya SEO Experts helps ambitious businesses scale through premium SEO, strategic content marketing, technical optimization, and conversion-focused digital growth systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-brand-cta text-brand-bg hover:bg-brand-cta-hover transition-colors font-bold uppercase text-xs tracking-widest flex items-center justify-center"
            >
              <span>Book Free SEO Audit</span>
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-brand-border -z-10 group-hover:bottom-0 group-hover:right-0 transition-all"></div>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-brand-border pb-1 hover:text-brand-cta transition-colors"
            >
              Get Growth Strategy <span className="text-brand-accent">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content / Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="bg-brand-surface border-l border-brand-border relative p-8 md:p-12 w-full max-w-lg flex flex-col justify-between h-full min-h-[500px]">
            {/* Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Metric Cards */}
            <div className="space-y-6 relative z-10 w-full mb-12">
              <div className="glass-panel p-6">
                <div className="text-brand-primary text-sm font-bold mb-1">+430%</div>
                <div className="text-2xl font-light tracking-tight">Organic Traffic Growth</div>
                <div className="mt-4 h-1 w-full bg-brand-surface-light">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-brand-primary" 
                  />
                </div>
              </div>

              <div className="glass-panel p-6">
                <div className="text-brand-accent text-sm font-bold mb-1 uppercase tracking-widest">#1 Rankings</div>
                <div className="text-2xl font-light tracking-tight">Global Search Authority</div>
                <div className="flex items-end gap-1 mt-4 h-14">
                  <div className="w-2 h-8 bg-brand-accent/40"></div>
                  <div className="w-2 h-10 bg-brand-accent/60"></div>
                  <div className="w-2 h-12 bg-brand-accent"></div>
                  <div className="w-2 h-6 bg-brand-accent/30"></div>
                  <div className="w-2 h-14 bg-brand-accent"></div>
                </div>
              </div>
            </div>

            {/* Testimonial Slider Preview */}
            <div className="relative z-10 mt-auto">
              <div className="flex text-brand-primary gap-1 mb-4">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="italic text-lg text-brand-text-muted leading-snug mb-4">
                "Professional, reliable, and worth every penny. The SEO delivered outstanding results for our real estate portfolio."
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold">
                Jane K. — Managing Director
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
