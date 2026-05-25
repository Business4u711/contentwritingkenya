import { motion } from "motion/react";
import { ArrowUpRight, BarChart2, Check } from "lucide-react";
import { useState } from "react";

const metrics = [
  { label: "Organic Traffic", value: "+430%", detail: "Sustained YoY" },
  { label: "Lead Growth", value: "+290%", detail: "Qualified Inbound" },
  { label: "Conversion Rate", value: "5X", detail: "Post-Optimization" },
  { label: "Google Rankings", value: "#1", detail: "High-Volume Keywords" },
];

const cinematicCases = [
  {
    id: "01",
    client: "Global Fintech SaaS",
    challenge: "Stagnant organic growth and heavy reliance on paid acquisition (CAC > $400).",
    strategy: "Deployed a programmatic SEO architecture and semantic topic clusters targeting enterprise B2B intent.",
    results: [
      "Scaled organic pipeline to $5M ARR",
      "Captured #1 for 40+ high-value keywords",
      "Reduced blended CAC by 65%"
    ],
    growth: "+620% Organic Revenue"
  },
  {
    id: "02",
    client: "African eCommerce Giant",
    challenge: "Losing market share to international competitors and suffering from poor technical foundation.",
    strategy: "Full technical SEO migration, faceted navigation optimization, and dynamic internal linking.",
    results: [
      "Dominated 12 African markets",
      "Generated 2.4M new organic sessions",
      "Tripled organic revenue within 8 months"
    ],
    growth: "3.2X Organic Sales"
  }
];

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="results" className="py-32 relative bg-[#050505] overflow-hidden pt-40 border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="flex justify-center items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-white/50">
            <span className="w-10 h-[1px] bg-white/20"></span>
            <span>Verifiable Impact</span>
            <span className="w-10 h-[1px] bg-white/20"></span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-heading font-black leading-none uppercase tracking-tighter mb-8">
            Engineered <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>Dominance.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We don't hide behind ambiguous reports. We deliver measurable, transformative business growth through elite technical execution.
          </p>
        </div>

        {/* Global Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group border-white/5 hover:border-brand-blue/30 transition-colors cursor-default block h-full w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <BarChart2 className="w-6 h-6 text-brand-blue/50 mb-4 group-hover:text-brand-blue transition-colors" />
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-brand-gold mb-1">
                {metric.label}
              </div>
              <div className="text-[9px] uppercase tracking-widest text-white/40">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Case Study Viewer */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-8">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Select Case File</span>
              <div className="h-px flex-1 bg-white/10" />
           </div>

           <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Controls */}
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                {cinematicCases.map((study, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveCase(idx)}
                    className={`text-left p-6 border-l-2 transition-all ${
                      activeCase === idx 
                        ? 'border-brand-gold bg-white/5 shadow-2xl' 
                        : 'border-white/10 hover:border-white/30 opacity-50 hover:opacity-100'
                    }`}
                  >
                     <div className="text-[10px] uppercase font-mono text-brand-gold mb-2">File {study.id}</div>
                     <div className="text-xl font-heading font-bold text-white uppercase tracking-tight">{study.client}</div>
                  </button>
                ))}
              </div>

              {/* View */}
              <div className="w-full lg:w-2/3 glass-panel border border-white/10 min-h-[400px] relative overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
                
                {cinematicCases.map((study, idx) => (
                  <div 
                    key={idx}
                    className={`p-8 md:p-12 relative z-10 transition-opacity duration-500 absolute inset-0 overflow-y-auto ${activeCase === idx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  >
                     <div className="flex justify-between items-start mb-12">
                       <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none pr-8">
                         {study.client}
                       </h3>
                       <div className="text-right shrink-0">
                         <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Growth Outcome</div>
                         <div className="text-xl md:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">{study.growth}</div>
                       </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-12 mb-12">
                       <div>
                         <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 border-b border-white/10 pb-2">The Challenge</p>
                         <p className="text-white/70 font-light text-sm leading-relaxed">{study.challenge}</p>
                       </div>
                       <div>
                         <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 border-b border-white/10 pb-2">Our Strategy</p>
                         <p className="text-white/70 font-light text-sm leading-relaxed">{study.strategy}</p>
                       </div>
                     </div>

                     <div className="bg-white/5 border border-white/5 p-6 md:p-8">
                       <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-6">Execution Results</p>
                       <ul className="space-y-4">
                         {study.results.map((res, rIdx) => (
                           <li key={rIdx} className="flex items-start gap-3">
                             <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                             <span className="text-white font-medium">{res}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Global CTA */}
        <div className="glass-panel border-white/10 p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center">
           <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
           
           <div className="flex flex-col justify-between items-center gap-8 relative z-10 w-full max-w-2xl">
             <div>
               <h3 className="text-2xl font-heading font-bold uppercase tracking-tight text-white mb-4">Access Full Corporate Intelligence</h3>
               <p className="text-white/60 font-light text-sm">Explore in-depth breakdowns of our enterprise SEO and content strategies, complete with live revenue dashboards.</p>
             </div>
             <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 uppercase bg-white text-black font-bold text-[10px] tracking-widest hover:bg-brand-blue hover:text-white transition-colors shrink-0 max-w-xs w-full">
               <span>Request Access</span><ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
             </a>
           </div>
        </div>
        
      </div>
    </section>
  );
}
