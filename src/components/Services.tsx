import { motion } from "motion/react";
import { Search, PenTool, TrendingUp, MonitorSmartphone } from "lucide-react";

const serviceCategories = [
  {
    icon: Search,
    title: "Search Intelligence",
    services: ["SEO Services", "Technical SEO", "eCommerce SEO", "Local SEO"]
  },
  {
    icon: PenTool,
    title: "Content & Copy",
    services: ["Content Strategy", "Content Writing", "SEO Blog Writing", "Website Copywriting"]
  },
  {
    icon: TrendingUp,
    title: "Growth & Performance",
    services: ["Link Building", "Conversion Optimization", "Google Ads Management", "Social Media Advertising"]
  },
  {
    icon: MonitorSmartphone,
    title: "Strategy & Ecosystem",
    services: ["Digital Marketing Consulting", "WordPress Blog Management", "Brand Messaging", "Analytics & Reporting"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-brand-bg">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
              <span className="w-10 h-[1px] bg-brand-primary"></span>
              <span>Enterprise Service Ecosystem</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-none uppercase tracking-tighter">
              A Complete <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-blue)' }}>Lifecycle</span> <br />
              Growth Machine.
            </h2>
          </div>
          <p className="text-brand-text-muted max-w-sm text-lg leading-relaxed md:pb-2 font-light hidden md:block">
            Every service is engineered around one metric: Revenue. We don't just build traffic, we build comprehensive market authority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-10 group hover:bg-brand-surface-light transition-colors border-brand-border relative overflow-hidden"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[50px] group-hover:bg-brand-primary/10 transition-colors" />
                
                <div className="w-12 h-12 bg-brand-surface-light flex items-center justify-center mb-8 border border-brand-border group-hover:border-brand-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-text group-hover:text-brand-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-brand-text mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-text group-hover:to-brand-primary transition-all">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                  {category.services.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                       <span className="text-brand-text-muted text-[11px] uppercase tracking-widest font-bold font-sans group-hover:text-brand-text transition-colors">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
