import { motion } from "motion/react";
import { PenTool, Target, TrendingUp, CheckCircle2 } from "lucide-react";

export function AuthorityPositioning() {
  return (
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-text-muted">
          <span className="w-10 h-[1px] bg-brand-primary"></span>
          <span>Why Specialized Content Wins</span>
        </div>
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-6 text-brand-text">
            Why General Agencies <span className="text-brand-cta-alert">Fail</span> At Content.
          </h2>
          <p className="text-brand-text-muted text-lg leading-relaxed font-light mb-8">
            Most full-service digital marketing agencies treat content writing as an afterthought. They assign junior copywriters to pump out generic articles that never rank and never convert. In 2026, Google demands expertise, deep semantic optimization, and genuine intent resolution.
          </p>
          <p className="text-brand-text font-medium text-lg border-l-4 border-brand-primary pl-4">
            That's why I specialize <strong>only</strong> in SEO content writing. A specialized approach means your content dominates search results and turns readers into revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Intent-Driven Optimization",
              desc: "We don't just 'stuff keywords'. We map out your customer's exact search intent and structure the copy to provide the exact answers Google wants to see."
            },
            {
              icon: PenTool,
              title: "Expert Copywriting",
              desc: "Words that flow. We blend the psychology of high-converting copywriting with advanced SEO constraints so your brand always looks elite and authoritative."
            },
            {
              icon: TrendingUp,
              title: "Pre-Engineered to Rank",
              desc: "Every blog writing service and website copywriting project we touch is built from the ground up prioritizing technical semantics and competitor content gaps."
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-8 border-brand-border bg-brand-surface group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-surface-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors text-brand-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-brand-text mb-4">{item.title}</h3>
              <p className="text-brand-text-muted font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
