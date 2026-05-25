import { X, Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight uppercase tracking-tighter mb-4 text-brand-text">
            Specialists vs <span className="text-brand-text-muted line-through">Generalists</span>
          </h2>
          <p className="text-brand-text-muted text-lg font-light max-w-2xl mx-auto">
            Why hiring a "full-service digital marketing agency" for your content writing in Kenya often leads to diluted results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* General Agency */}
          <div className="glass-panel p-8 border-brand-border opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-heading font-bold text-brand-text-muted mb-6 uppercase tracking-tight text-center pb-4 border-b border-brand-border">
              "Full-Service" Agencies
            </h3>
            <ul className="space-y-4">
              {[
                "Treats content as a cheap add-on service",
                "Assigns generalized junior writers to technical tasks",
                "Focuses on vanity word counts over search intent",
                "Produces generic copy to fit cookie-cutter packages",
                "Juggles ads, social media, PR, and dev simultaneously"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-brand-cta-alert shrink-0 mt-0.5" />
                  <span className="text-brand-text-muted font-light text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialist */}
          <div className="glass-panel p-8 border-brand-primary/30 relative shadow-2xl bg-brand-bg transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-6 uppercase tracking-tight text-center pb-4 border-b border-brand-border">
              Content Writing Kenya (Us)
            </h3>
            <ul className="space-y-4">
              {[
                "Hyper-focused 100% on SEO and Content Conversion",
                "Expert-level strategic writers with industry authority",
                "Maps every word to user search intent & commercial value",
                "Crafts bespoke semantic structures to dominate Google",
                "Dedicated to making your website an inbound revenue asset"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                  <span className="text-brand-text font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
