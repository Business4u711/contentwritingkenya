import { FileText, LayoutTemplate, PenTool, ExternalLink } from "lucide-react";

export function ProofSamples() {
  const samples = [
    {
      type: "Sample Blog Post",
      title: "The Ultimate Guide to Real Estate Investment in Kenya (2026)",
      desc: "A 3,000-word SEO pillar page optimized for high-volume local keywords, featuring custom infographics and structured data.",
      icon: FileText
    },
    {
      type: "Landing Page Copy",
      title: "B2B SaaS Lead Generation Page",
      desc: "A high-converting landing page written for a Tech company. Resulted in a 4.2% conversion rate increase by restructuring the heroic offer and overcoming objections.",
      icon: LayoutTemplate
    },
    {
      type: "SEO Article Example",
      title: "Why Cyber Security Matters for Law Firms",
      desc: "An intent-driven long-form article focusing on low-competition, high-intent BOFU (Bottom of Funnel) search terms for legal tech consulting.",
      icon: PenTool
    },
    {
      type: "Mock Case Study",
      title: "Local Plumber Scales Revenue by 150%",
      desc: "(Sample demonstration) How localized SEO content and service page rewrites captured 80% of local search queries within 4 months.",
      icon: FileText
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-text-muted">
              <span className="w-10 h-[1px] bg-brand-primary"></span>
              <span>Content Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4 uppercase tracking-tighter text-brand-text">
              Proof & <span className="text-brand-accent">Samples</span>
            </h2>
            <p className="text-brand-text-muted text-lg max-w-xl font-light">
              We don't just talk about high-ranking, conversion-focused content. We write it daily. Explore our work across different verticals.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {samples.map((sample, idx) => (
            <div key={idx} className="glass-panel p-8 md:p-10 border-brand-border hover:border-brand-primary/50 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded bg-brand-surface border border-brand-border flex items-center justify-center">
                  <sample.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted bg-brand-surface-light px-3 py-1">
                  {sample.type}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-4 group-hover:text-brand-accent transition-colors">
                {sample.title}
              </h3>
              <p className="text-brand-text-muted font-light leading-relaxed mb-8">
                {sample.desc}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors border-b border-brand-border hover:border-brand-accent pb-1">
                Request Full Text <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
