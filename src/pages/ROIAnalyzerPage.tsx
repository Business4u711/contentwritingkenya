import { ROICalculator } from "../components/ROICalculator";
import { FinalCTA } from "../components/FinalCTA";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function ROIAnalyzerPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-12">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
          <Link to="/tools" className="text-brand-text-faint hover:text-brand-text pb-1">Tools</Link>
          <ChevronRight className="w-3 h-3 text-brand-text-faint" />
          <span className="pb-1">ROI Calculator</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-text mb-6">
          Growth Modeler.
        </h1>
        <p className="text-brand-text-muted font-light text-lg max-w-2xl leading-relaxed">
          Input your current baseline metrics to project the 12-month compounding revenue impact of an enterprise organic search campaign.
        </p>
      </div>

      <ROICalculator />
      <FinalCTA />
    </div>
  );
}
