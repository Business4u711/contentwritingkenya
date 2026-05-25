import { Hero } from "../components/Hero";
import { Trust } from "../components/Trust";
import { CompanyStory } from "../components/CompanyStory";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CaseStudies } from "../components/CaseStudies";
import { Pricing } from "../components/Pricing";
import { ROICalculator } from "../components/ROICalculator";
import { GlobalAuthority } from "../components/GlobalAuthority";
import { Portfolio } from "../components/Portfolio";
import { FAQ } from "../components/FAQ";
import { BlogPreview } from "../components/BlogPreview";
import { FinalCTA } from "../components/FinalCTA";
import { Contact } from "../components/Contact";
import { AIAuditEngine } from "../components/AIAuditEngine";
import { LiveRankTracker } from "../components/LiveRankTracker";
import { ProgrammaticSEO } from "../components/ProgrammaticSEO";
import { EnterprisePortalDashboard } from "../components/EnterprisePortalDashboard";

export function HomePage() {
  return (
    <>
      <Hero />
      <AIAuditEngine />
      <LiveRankTracker />
      <Trust />
      <ProgrammaticSEO />
      <CompanyStory />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <EnterprisePortalDashboard />
      <Pricing />
      <ROICalculator />
      <GlobalAuthority />
      <Portfolio />
      <FAQ />
      <BlogPreview />
      <FinalCTA />
      <Contact />
    </>
  );
}
