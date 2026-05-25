import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified action
    window.location.href = `mailto:hello@contentwritingkenya.com?subject=Free SEO Content Audit Request&body=Website: ${url}%0D%0AEmail: ${email}`;
  };

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-y border-brand-border">
      <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-panel border-brand-primary/30 p-8 md:p-16 text-center shadow-xl">
          <div className="inline-block px-3 py-1 bg-brand-cta/20 text-brand-cta border border-brand-cta/30 text-[10px] uppercase tracking-widest font-bold mb-6">
            Free Value Offer
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight uppercase tracking-tighter mb-4 text-brand-text">
            Get a <span className="text-brand-cta">Free</span> SEO Content Audit
          </h2>
          
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Send us your website URL and we'll record a personalized 5-minute video breakdown showing you exactly why your current copy isn't converting and how to fix it to start capturing leads.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-10">
            <input 
              type="text" 
              placeholder="Your Website URL" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-brand-surface-light border border-brand-border px-6 py-4 text-brand-text focus:outline-none focus:border-brand-primary transition-colors font-light text-sm"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-brand-surface-light border border-brand-border px-6 py-4 text-brand-text focus:outline-none focus:border-brand-primary transition-colors font-light text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-cta text-brand-bg hover:bg-brand-cta-hover transition-colors px-8 py-4 font-bold uppercase text-[10px] tracking-widest flex justify-center items-center gap-2"
            >
              Get Free Audit <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-brand-text-muted">
            <span>Need an instant chat?</span>
            <a 
              href="https://wa.me/254715855361" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
