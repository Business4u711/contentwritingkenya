import { motion } from "motion/react";
import { FinalCTA } from "../components/FinalCTA";
import { AIAuditEngine } from "../components/AIAuditEngine";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, Code2, Cpu, FileJson, Gauge, Blocks, Network } from "lucide-react";

export function TechnicalSEOPage() {
  return (
    <div className="pt-32 pb-16">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-24">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-blue">
          <Link to="/services" className="text-white/40 hover:text-white pb-1">Services</Link>
          <ChevronRight className="w-3 h-3 text-white/40" />
          <span className="pb-1">Technical SEO</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white mb-6 leading-tight">
          Algorithmic <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Perfection.</span>
        </h1>
        <p className="text-white/60 font-light text-lg max-w-2xl leading-relaxed mb-10">
          Clean architecture is the prerequisite to digital dominance. We re-engineer enterprise platforms to index perfectly, render instantly, and rank unstoppably.
        </p>
        <button className="px-8 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-brand-blue hover:text-white transition-colors">
          Audit My Tech Stack
        </button>
      </div>

      <AIAuditEngine />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
             <h2 className="text-3xl font-heading font-black uppercase tracking-tight text-white mb-6">Core Capabilities</h2>
             <p className="text-white/50 mb-12">Search engines operate on strict render budgets. If your JavaScript framework or server configuration causes latency, you lose rankings automatically. We fix the foundation.</p>
             
             <div className="space-y-6">
                {[
                  { icon: <Blocks />, title: "React/Next.js SEO", desc: "Server-side rendering (SSR) and hydration optimization for complex JavaScript applications." },
                  { icon: <Gauge />, title: "Core Web Vitals", desc: "LCP, CLS, and INP optimization to achieve perfect 100/100 Lighthouse scores." },
                  { icon: <Network />, title: "Crawl Budget Optimization", desc: "Log file analysis and architecture pruning for sites with 10M+ URLs." },
                  { icon: <FileJson />, title: "Advanced Schema", desc: "Custom JSON-LD implementation mapping your business entities directly into the Knowledge Graph." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:border-brand-blue/30 transition-colors">
                    <div className="text-brand-blue shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="glass-panel p-8 md:p-12 border-white/10 relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#050505]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-heading font-bold text-white mb-8 border-b border-white/10 pb-4">The Technical Playbook</h3>
            
            <ul className="space-y-6">
              {[
                "Comprehensive Codebase Audit",
                "Server-Side Rendering (SSR) Setup",
                "Dynamic Rendering Implementation",
                "Log File Deep Analysis",
                "Faceted Navigation Control",
                "Internationalization (Hreflang) Architecture",
                "Site Speed & Web Vitals Execution",
                "Schema Markup & Knowledge Graph Maps"
              ].map((play, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="font-light">{play}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
