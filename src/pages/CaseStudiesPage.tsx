import { CaseStudies } from "../components/CaseStudies";
import { FinalCTA } from "../components/FinalCTA";
import { Portfolio } from "../components/Portfolio";

export function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-16">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
          <span className="w-10 h-[1px] bg-brand-primary"></span>
          <span>Proof of Work</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-text mb-6">
          The Vault.
        </h1>
        <p className="text-brand-text-muted font-light text-lg max-w-2xl leading-relaxed">
          We don't sell theory. We engineer revenue. Explore deep-dive technical post-mortems of our most aggressive search domination campaigns.
        </p>
      </div>

      <CaseStudies />
      <Portfolio />
      <FinalCTA />
    </div>
  );
}
