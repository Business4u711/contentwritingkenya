import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FinalCTA } from "../components/FinalCTA";
import { Calculator, ShieldAlert, BarChart, ArrowRight } from "lucide-react";

export function ToolsPage() {
  const tools = [
    { title: "SEO ROI Calculator", desc: "Project 12-month revenue growth based on search velocity.", icon: <Calculator className="w-8 h-8" />, path: "/tools/roi-calculator" },
    { title: "AI Audit Engine", desc: "Run a real-time technical analysis of your domain architecture.", icon: <ShieldAlert className="w-8 h-8" />, path: "/tools/audit" },
    { title: "Rank Velocity Tracker", desc: "Live SERP volatility and keyword movement dashboard.", icon: <BarChart className="w-8 h-8" />, path: "/tools/rank-tracker" },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-24">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-accent">
          <span className="w-10 h-[1px] bg-brand-accent"></span>
          <span>Intelligence Hub</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-text mb-6">
          Engineering Tools
        </h1>
        <p className="text-brand-text-muted font-light text-lg max-w-2xl leading-relaxed">
          Access our internal suite of analytical engines to project growth, audit codebase health, and monitor algorithmic volatility.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <Link to={tool.path} key={i}>
            <motion.div
              className="glass-panel p-8 border-brand-border group hover:border-brand-accent/20 hover:bg-brand-accent/5 transition-colors h-full flex flex-col"
              whileHover={{ y: -5 }}
            >
              <div className="text-brand-accent mb-8">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">{tool.title}</h3>
              <p className="text-brand-text-muted mb-8 flex-1">{tool.desc}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-faint group-hover:text-brand-text transition-colors mt-auto">
                Launch Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <FinalCTA />
    </div>
  );
}
