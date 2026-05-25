import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Loader2, BarChart2, Zap, Target, ShieldAlert, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AIAuditEngine() {
  const [step, setStep] = useState(0); // 0: input, 1: scanning, 2: results
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStep(2);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setStep(1);
      setProgress(0);
    }
  };

  return (
    <section id="audit" className="py-32 relative bg-brand-black overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-blue">
            <span className="w-10 h-[1px] bg-brand-blue"></span>
            <span>Neural Diagnostic System</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-none uppercase tracking-tighter mb-6">
            Predictive <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>SEO Audit</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 font-light max-w-md">
            Deploy our proprietary AI engines to analyze your digital architecture, uncover invisible revenue leaks, and engineer a roadmap for global search dominance.
          </p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.form 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleStart}
                className="space-y-4 max-w-md"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-white/30" />
                  </div>
                  <input 
                    type="url" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    placeholder="Enter your website URL..."
                    className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-blue transition-colors rounded-none font-light"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Industry" className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors font-light text-sm" />
                  <input type="text" placeholder="Target Market" className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors font-light text-sm" />
                </div>
                <button type="submit" className="w-full py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2">
                  Initiate Scan <Zap className="w-3 h-3" />
                </button>
              </motion.form>
            )}

            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-md bg-white/5 border border-white/10 p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
                <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-blue mb-6 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin" /> Analyzing Architecture...
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-white/50">
                    <span>Semantics Processing</span>
                    <span>{progress > 20 ? 'COMPLETE' : 'SCANNING...'}</span>
                  </div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-white/50">
                    <span>Backlink Graphing</span>
                    <span>{progress > 50 ? 'COMPLETE' : 'PENDING'}</span>
                  </div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-white/50">
                    <span>EEAT Validation</span>
                    <span>{progress > 80 ? 'COMPLETE' : 'PENDING'}</span>
                  </div>
                </div>

                <div className="w-full h-1 bg-white/10 overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-brand-blue"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="mt-2 text-right text-brand-blue text-[10px] font-mono">{progress}%</div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-brand-blue/10 border border-brand-blue p-6 inline-block">
                  <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-1">Status</p>
                  <p className="text-xl font-heading font-black text-white">Diagnostic Complete</p>
                </div>
                <p className="text-white/60 font-light text-sm max-w-sm">
                  We've identified 3 critical revenue bottlenecks and 5 immediate growth opportunities for <span className="text-white font-bold">{url}</span>.
                </p>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-brand-blue hover:text-white transition-colors">
                  Unlock Full Enterprise Report <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          
          <div className="w-full max-w-lg aspect-square relative z-10 glass-panel border border-white/5 flex items-center justify-center p-8">
             {/* Mock Dashboard / Neural Engine Visual */}
             
             {step === 0 && (
                <div className="text-white/20 flex flex-col items-center">
                  <Target className="w-24 h-24 mb-4 stroke-[0.5]" />
                  <p className="font-mono text-xs uppercase tracking-widest">Awaiting Input Target</p>
                </div>
             )}

             {step === 1 && (
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="absolute w-3/4 h-3/4 border-2 border-brand-blue/20 rounded-full animate-[spin_4s_linear_infinite]" />
                  <div className="absolute w-1/2 h-1/2 border-2 border-dashed border-brand-gold/30 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
                  <div className="absolute w-1/4 h-1/4 bg-brand-blue/10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-pulse" />
                  <BarChart2 className="w-8 h-8 text-brand-blue relative z-10" />
                </div>
             )}

             {step === 2 && (
               <div className="w-full h-full flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gray mb-1">Global Health Score</p>
                      <p className="text-6xl font-heading font-black text-white">42<span className="text-2xl text-white/30">/100</span></p>
                    </div>
                    <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center text-red-500">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                 </div>
                 
                 <div className="space-y-3">
                   <div className="bg-white/5 p-3 flex justify-between items-center text-xs">
                     <span className="text-white/70">Technical Architecture</span>
                     <span className="text-red-400 font-mono">Critical</span>
                   </div>
                   <div className="bg-white/5 p-3 flex justify-between items-center text-xs">
                     <span className="text-white/70">Content Semantics</span>
                     <span className="text-yellow-400 font-mono">Sub-optimal</span>
                   </div>
                   <div className="bg-white/5 p-3 flex justify-between items-center text-xs">
                     <span className="text-white/70">Domain Authority</span>
                     <span className="text-brand-blue font-mono">Moderate</span>
                   </div>
                 </div>
                 
                 <div className="bg-brand-blue/5 border border-brand-blue/20 p-4 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-2 h-full bg-brand-blue" />
                   <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-1">Warning</p>
                   <p className="text-white/80 font-light text-xs">Competitors are capturing 68% of your available semantic market share.</p>
                 </div>
               </div>
             )}
          </div>
        </div>

      </div>
    </section>
  );
}
