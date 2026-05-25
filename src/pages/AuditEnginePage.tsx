import { AIAuditEngine } from "../components/AIAuditEngine";
import { FinalCTA } from "../components/FinalCTA";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function AuditEnginePage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-12">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-blue">
          <Link to="/tools" className="text-white/40 hover:text-white pb-1">Tools</Link>
          <ChevronRight className="w-3 h-3 text-white/40" />
          <span className="pb-1">Audit Engine</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white mb-6">
          System Core Audit.
        </h1>
        <p className="text-white/60 font-light text-lg max-w-2xl leading-relaxed">
          Initialize a real-time deep scan of your target URL's JavaScript execution, Core Web Vitals, and semantic entity salience.
        </p>
      </div>

      <AIAuditEngine />
      
      {/* Expanded explanations for the tool page */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
         <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 border-white/10">
               <h3 className="text-xl font-bold text-white mb-4">JS Hydration</h3>
               <p className="text-white/50 text-sm">We analyze the time-to-interactive (TTI) gap caused by heavy client-side React/Vue bundles that block search engine rendering.</p>
            </div>
            <div className="glass-panel p-8 border-white/10">
               <h3 className="text-xl font-bold text-white mb-4">Vector Salience</h3>
               <p className="text-white/50 text-sm">Mapping your content's proximity to core industry entities within Google's Knowledge Graph using NLP analysis.</p>
            </div>
            <div className="glass-panel p-8 border-white/10">
               <h3 className="text-xl font-bold text-white mb-4">Vitals Profiling</h3>
               <p className="text-white/50 text-sm">Strict measurement against Chrome User Experience Report (CrUX) thresholds for LCP, CLS, and INP.</p>
            </div>
         </div>
      </div>

      <FinalCTA />
    </div>
  );
}
