import { Hero } from "../components/Hero";
import { Trust } from "../components/Trust";
import { AuthorityPositioning } from "../components/AuthorityPositioning";
import { ComparisonSection } from "../components/ComparisonSection";
import { SEOConversionSystem } from "../components/SEOConversionSystem";
import { CompanyStory } from "../components/CompanyStory";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CaseStudies } from "../components/CaseStudies";
import { ProofSamples } from "../components/ProofSamples";
import { Pricing } from "../components/Pricing";
import { LeadMagnet } from "../components/LeadMagnet";
import { GlobalAuthority } from "../components/GlobalAuthority";
import { FAQ } from "../components/FAQ";
import { BlogPreview } from "../components/BlogPreview";
import { FinalCTA } from "../components/FinalCTA";
import { Contact } from "../components/Contact";
import { AIAuditEngine } from "../components/AIAuditEngine";
import { LiveRankTracker } from "../components/LiveRankTracker";
import { ProgrammaticSEO } from "../components/ProgrammaticSEO";

export function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityPositioning />
      <ComparisonSection />
      <AIAuditEngine />
      <Trust />
      <SEOConversionSystem />
      <Services />
      <ProofSamples />
      <ProgrammaticSEO />
      <CaseStudies />
      <WhyChooseUs />
      <LeadMagnet />
      <Pricing />
      <GlobalAuthority />
      <FAQ />
      <BlogPreview />
      <FinalCTA />
      <Contact />
    </>
  );
}
