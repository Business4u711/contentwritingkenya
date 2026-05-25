import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MouseEffect } from "./components/MouseEffect";
import { AIChatAssistant } from "./components/AIChatAssistant";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

// Pages
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { TechnicalSEOPage } from "./pages/TechnicalSEOPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { ToolsPage } from "./pages/ToolsPage";
import { ROIAnalyzerPage } from "./pages/ROIAnalyzerPage";
import { AuditEnginePage } from "./pages/AuditEnginePage";
import { LocationPage } from "./pages/LocationPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-1 w-full"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/services/technical-seo" element={<PageWrapper><TechnicalSEOPage /></PageWrapper>} />
        <Route path="/industries" element={<PageWrapper><IndustriesPage /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudiesPage /></PageWrapper>} />
        <Route path="/tools" element={<PageWrapper><ToolsPage /></PageWrapper>} />
        <Route path="/tools/roi-calculator" element={<PageWrapper><ROIAnalyzerPage /></PageWrapper>} />
        <Route path="/tools/audit" element={<PageWrapper><AuditEnginePage /></PageWrapper>} />
        <Route path="/location" element={<PageWrapper><LocationPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-bg min-h-screen selection:bg-brand-primary/30 selection:text-brand-primary text-brand-text font-sans overflow-x-hidden w-full h-full flex flex-col pt-24">
        <MouseEffect />
        <AIChatAssistant />
        <FloatingWhatsApp />
        <Header />
        
        <AnimatedRoutes />
        
        <Footer />
      </div>
    </Router>
  );
}
