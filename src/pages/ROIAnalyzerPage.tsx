import { ROICalculator } from "../components/ROICalculator";
import { FinalCTA } from "../components/FinalCTA";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function ROIAnalyzerPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-12">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
          <Link to="/tools" className="text-white/40 hover:text-white pb-1">Tools</Link>
          <ChevronRight className="w-3 h-3 text-white/40" />
          <span className="pb-1">ROI Calculator</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white mb-6">
          Growth Modeler.
        </h1>
        <p className="text-white/60 font-light text-lg max-w-2xl leading-relaxed">
          Input your current baseline metrics to project the 12-month compounding revenue impact of an enterprise organic search campaign.
        </p>
      </div>

      <ROICalculator />
      <FinalCTA />
    </div>
  );
}
