import { motion } from "motion/react";
import { PlayCircle, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Algorithm Updates",
    title: "How to Survive the Latest Google Core Update with High-EEAT.",
    readTime: "8 min read",
    date: "Oct 12, 2026",
    type: "article"
  },
  {
    category: "Technical SEO",
    title: "The Ultimate Guide to Programmatic SEO for eCommerce Brands.",
    readTime: "12 min read",
    date: "Sep 28, 2026",
    type: "article"
  },
  {
    category: "Conversion",
    title: "Why Your Landing Pages Get Traffic But Zero Leads (And How to Fix It).",
    readTime: "6 min read",
    date: "Sep 15, 2026",
    type: "video"
  }
];

export function BlogPreview() {
  return (
    <section className="py-32 relative bg-brand-surface overflow-hidden border-t border-brand-border">
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-border pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
              <span className="w-10 h-[1px] bg-brand-primary"></span>
              <span>Advanced Content Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-brand-text mb-2">
              Media Ecosystem
            </h2>
          </div>
          <a href="#blog" className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-muted hover:text-brand-text transition-colors group">
            Access The Vault <ArrowRight className="w-4 h-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Featured Video / Article */}
          <div className="lg:col-span-7">
            <motion.div 
              className="group relative h-full min-h-[400px] bg-brand-surface border border-brand-border rounded-lg overflow-hidden block"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2">
                       <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/20 text-[10px] font-bold uppercase tracking-widest rounded">Origin Series</span>
                       <span className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest">Episode 04</span>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-brand-surface-light backdrop-blur border border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors cursor-pointer">
                      <PlayCircle className="w-6 h-6 text-brand-text ml-1" />
                   </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-text leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-text group-hover:to-brand-primary transition-all">
                  The Blueprint for Building a Billion-Dollar Content Moat.
                </h3>
                <p className="text-brand-text-muted font-light max-w-xl text-sm leading-relaxed mb-6 line-clamp-2">
                  Discover how enterprise SaaS companies use high-velocity content production and technical architecture to monopolize organic search results in competitive markets.
                </p>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-brand-text-faint">
                   <span>45 Min Masterclass</span>
                   <span className="w-1 h-1 bg-brand-surface-light rounded-full"></span>
                   <span>Strategy</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* List of articles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {posts.map((post, idx) => (
              <motion.a
                href="#post"
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex-1 flex flex-col justify-center p-6 bg-brand-surface hover:bg-brand-accent/5 rounded-lg transition-colors border border-brand-border hover:border-brand-accent/20 relative overflow-hidden"
              >
                {post.type === "video" && (
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 group-hover:text-brand-accent transition-all">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                )}
                <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-3 block border-l-2 border-brand-primary pl-2">
                  {post.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-brand-text group-hover:text-brand-text leading-snug transition-colors pr-8">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-bold text-brand-text-faint shrink-0 mt-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-brand-surface-light rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

        <div className="mt-12 sm:hidden text-center">
            <a href="#blog" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-muted hover:text-brand-accent transition-colors border-b border-brand-border pb-1 w-[fit-content] mx-auto">
              Access The Vault <ArrowRight className="w-3 h-3 text-brand-accent" />
            </a>
        </div>
      </div>
    </section>
  );
}
