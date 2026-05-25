import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";
import { FinalCTA } from "../components/FinalCTA";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, Globe, FileText, Code } from "lucide-react";

export function ServicesPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-24">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
          <span className="w-10 h-[1px] bg-brand-primary"></span>
          <span>Our Solutions</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-text mb-6">
          Enterprise Services
        </h1>
        <p className="text-brand-text-muted font-light text-lg max-w-2xl leading-relaxed">
          We engineer comprehensive digital dominance through technical architecture, algorithmic mastery, and high-velocity content production.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid md:grid-cols-2 gap-8">
        {[
          { name: "Technical SEO", path: "/services/technical-seo", icon: <Code className="w-6 h-6" />, desc: "Core Web Vitals, JS Rendering, Information Architecture" },
          { name: "Content Architecture", path: "/services/content-architecture", icon: <FileText className="w-6 h-6" />, desc: "Topical Maps, Programmatic Deployment, EEAT" },
          { name: "Authority Acquisition", path: "/services/authority", icon: <Globe className="w-6 h-6" />, desc: "Digital PR, Link Graph Optimization, Brand Salience" },
          { name: "Conversion Analytics", path: "/services/analytics", icon: <BarChart2 className="w-6 h-6" />, desc: "CRO, LTV Modeling, Enterprise Tracking" }
        ].map((srv, idx) => (
          <Link to={srv.path} key={idx}>
            <motion.div 
              className="glass-panel p-8 border-brand-border group hover:border-brand-accent/20 transition-colors h-full flex flex-col justify-between"
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="w-12 h-12 bg-brand-surface-light flex items-center justify-center rounded text-brand-primary mb-6 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-2">{srv.name}</h3>
                <p className="text-brand-text-muted text-sm">{srv.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-faint group-hover:text-brand-text transition-colors">
                Explore Solution <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <Services />
      <CaseStudies />
      <FinalCTA />
    </div>
  );
}
