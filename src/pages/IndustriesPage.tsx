import { motion } from "motion/react";
import { FinalCTA } from "../components/FinalCTA";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, ShoppingCart, TestTube, Briefcase, Stethoscope, Hotel } from "lucide-react";

export function IndustriesPage() {
  const industries = [
    { title: "SaaS & Enterprise", icon: <Building2 className="w-8 h-8" />, path: "/industries/saas", metrics: "+245% Demo Requests" },
    { title: "eCommerce", icon: <ShoppingCart className="w-8 h-8" />, path: "/industries/ecommerce", metrics: "$4.2M Avg Revenue Lift" },
    { title: "Technology", icon: <TestTube className="w-8 h-8" />, path: "/industries/technology", metrics: "Dominant Search Share" },
    { title: "Legal & Corporate", icon: <Briefcase className="w-8 h-8" />, path: "/industries/legal", metrics: "$50M+ Pipeline Gen" },
    { title: "Healthcare", icon: <Stethoscope className="w-8 h-8" />, path: "/industries/healthcare", metrics: "HIPAA Compliant Growth" },
    { title: "Real Estate & Hospitality", icon: <Hotel className="w-8 h-8" />, path: "/industries/real-estate", metrics: "Global Footprint Expansion" }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-24">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
          <span className="w-10 h-[1px] bg-brand-primary"></span>
          <span>Sectors</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-text mb-6">
          Industries We Dominate
        </h1>
        <p className="text-brand-text-muted font-light text-lg max-w-2xl leading-relaxed">
          Customized organic growth strategies tailored to the unique economic realities and competitive landscapes of billion-dollar sectors.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <Link to={ind.path} key={i}>
            <motion.div
              className="glass-panel p-8 border-brand-border group hover:border-brand-primary/20 hover:bg-brand-primary/5 transition-colors h-full"
              whileHover={{ y: -5 }}
            >
              <div className="text-brand-text-faint group-hover:text-brand-primary transition-colors mb-6">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">{ind.title}</h3>
              <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-8">
                {ind.metrics}
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-faint group-hover:text-brand-text transition-colors">
                View Case Studies <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <FinalCTA />
    </div>
  );
}
