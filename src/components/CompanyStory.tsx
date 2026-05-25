import { motion } from "motion/react";
import { ArrowRight, Compass, Target, Shield, Zap, Heart, BarChart3, TrendingUp, Globe } from "lucide-react";

const values = [
  { text: "Results-Driven", icon: TrendingUp },
  { text: "Transparency", icon: Compass },
  { text: "Innovation", icon: Zap },
  { text: "Partnership", icon: Heart },
  { text: "Excellence", icon: Target },
  { text: "Ethical SEO", icon: Shield },
  { text: "Data Intelligence", icon: BarChart3 },
  { text: "Long-Term Growth", icon: Globe },
];

export function CompanyStory() {
  return (
    <section id="story" className="py-32 relative bg-brand-charcoal border-y border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span>Our Narrative</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-8">
              From Local Roots to <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>Global Dominance</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light leading-relaxed mb-8">
              <p>
                Kenya SEO Experts (Content Writing Kenya) was founded in Nairobi with a singular mission: to demystify SEO and help businesses achieve sustainable digital growth. 
              </p>
              <p>
                We saw the problem with digital marketing in Africa — too many agencies relying on outdated tactics, producing weak content, and focusing on vanity metrics rather than real, measurable revenue.
              </p>
              <p>
                We envisioned a different path. A path defined by ethical SEO leadership, data intelligence, and world-class execution that allows African brands to compete on the global stage, and international brands to tap into elite expertise.
              </p>
            </div>
            
            <div className="glass-panel p-6 border-l-4 border-l-brand-gold">
              <p className="text-lg font-heading font-semibold text-white mb-2 uppercase tracking-tight">Our Mission</p>
              <p className="text-white/60 font-light italic">
                "To empower businesses with ethical, world-class SEO and digital growth strategies that create sustainable competitive advantage."
              </p>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px]">
            {/* Visual Abstract Map/Graph */}
            <div className="absolute inset-0 glass-panel border border-white/10 p-8 flex flex-col justify-end group overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
               
               <svg viewBox="0 0 100 100" className="absolute top-10 left-10 w-[150%] h-[150%] text-brand-blue/20 stroke-current stroke-[0.2]">
                 <path d="M0,80 Q25,40 50,60 T100,20" fill="none" className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                 <path d="M0,90 Q30,60 60,70 T100,40" fill="none" className="text-brand-gold/20 stroke-current drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
               </svg>
               
               <div className="relative z-20">
                 <div className="inline-block px-3 py-1 bg-white flex items-center justify-center text-black text-[10px] uppercase tracking-widest font-bold mb-4">
                   Nairobi HQ
                 </div>
                 <h3 className="text-3xl font-heading font-black uppercase text-white mb-2">Global Operations</h3>
                 <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Executing for ambitious brands worldwide.</p>
               </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div>
          <div className="flex items-center gap-2 mb-10 text-center justify-center uppercase tracking-[0.3em] text-[10px] font-bold text-white/50">
            <span className="w-10 h-[1px] bg-white/20"></span>
            <span>Core Values</span>
            <span className="w-10 h-[1px] bg-white/20"></span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-panel p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-colors cursor-default border-t border-white/5 border-l border-white/5"
                >
                  <Icon className="w-6 h-6 text-brand-gold" />
                  <span className="text-white/80 font-bold uppercase tracking-widest text-[10px]">{val.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
