import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "What are digital marketing services?",
    answer: "Digital marketing encompasses all marketing efforts that use an electronic device or the internet. We leverage search engines, social media, email, and websites to connect with current and prospective customers. At Kenya SEO Experts, we focus on engineering conversion-focused digital growth systems."
  },
  {
    question: "Why hire a Nairobi SEO agency?",
    answer: "Hiring a Nairobi-based agency gives you a unique geographic advantage. We combine an intimate understanding of emerging African markets with world-class, globally competitive SEO strategies. You receive enterprise-level expertise and performance without the exorbitant overhead of Silicon Valley agencies."
  },
  {
    question: "How much does SEO cost in Kenya?",
    answer: "Our SEO packages are designed as investments, not expenses. Starter packages begin at 40k KES/month, designed for scaling local businesses. Enterprise engagements tailored for aggressive market dominance start at 150k+ KES/month. Everything we do is tied directly to projected ROI."
  },
  {
    question: "Can SEO help B2B companies?",
    answer: "Absolutely. In fact, B2B SEO is one of the highest ROI channels available. Decision-makers use Google to research enterprise solutions. We build authoritative content clusters that position your brand in front of C-level executives exactly when they are searching for solutions you provide."
  },
  {
    question: "How long does SEO take?",
    answer: "SEO is a compounding growth strategy, much like a financial index fund. While technical fixes can yield immediate bumps, establishing topical authority and capturing high-volume, highly competitive keywords typically requires 3 to 6 months of consistent, high-EEAT content execution and authority building."
  },
  {
    question: "What results can I expect?",
    answer: "We focus on revenue metrics over vanity metrics. You can expect significant improvements in organic traffic footprint, higher domain authority, increased search visibility for transactional keywords, and most importantly, a measurable increase in qualified inbound leads and conversions."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative bg-brand-charcoal overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span>Knowledge Base</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-6">
              Strategic <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>Intelligence</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-sm">
              We operate with absolute transparency. Find answers to common questions about our methodology, the SEO timeline, and the ROI you can expect from a partnership.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-brand-gold transition-colors">
              Still have questions? <span className="text-brand-gold">→</span>
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "glass-panel border border-white/5 transition-all duration-300",
                    isOpen ? "bg-white/5 border-l-2 border-l-brand-gold" : "hover:border-white/20"
                  )}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left"
                  >
                    <span className="font-heading font-bold uppercase tracking-wide text-white/90 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-brand-gold transition-transform duration-300", 
                        isOpen && "rotate-180"
                      )} 
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-white/60 font-light leading-relaxed md:text-sm">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
