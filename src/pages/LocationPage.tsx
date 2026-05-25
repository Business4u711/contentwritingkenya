import { motion } from "motion/react";
import { FinalCTA } from "../components/FinalCTA";
import { MessageCircle, Mail, MapPin, Building2, Phone } from "lucide-react";

export function LocationPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-16">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
          <span className="w-10 h-[1px] bg-brand-primary"></span>
          <span>Global Presence</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-text mb-6">
          Find Us
        </h1>
        <p className="text-brand-text-muted font-light text-lg max-w-2xl leading-relaxed">
          <strong className="text-brand-text">Content Writing Kenya</strong><br/>
          We provide enterprise-grade SEO and content writing services in Kenya and globally.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 mb-32">
        <div className="flex flex-col gap-6">
          <div className="glass-panel p-8 border-brand-border flex flex-col justify-center gap-6 relative overflow-hidden bg-brand-surface">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded bg-brand-surface-light flex items-center justify-center shrink-0">
                 <Building2 className="w-5 h-5 text-brand-primary" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">Headquarters</h3>
                  <p className="text-brand-text-muted text-sm">Nairobi, Kenya</p>
               </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 border-brand-border flex flex-col justify-center gap-6 relative overflow-hidden bg-brand-surface">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded bg-brand-surface-light flex items-center justify-center shrink-0">
                 <Mail className="w-5 h-5 text-brand-accent" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">Direct Inquiries</h3>
                  <a href="mailto:hello@contentwritingkenya.com" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">
                    hello@contentwritingkenya.com
                  </a>
               </div>
            </div>
          </div>

          <a href="https://wa.me/254715855361" target="_blank" rel="noopener noreferrer" className="group glass-panel p-8 border-brand-border flex items-center justify-between gap-6 relative overflow-hidden hover:border-[#25D366]/50 transition-colors bg-brand-surface">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                 <MessageCircle className="w-6 h-6 text-[#25D366]" fill="currentColor" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-brand-text mb-1">WhatsApp Business</h3>
                  <p className="text-brand-text-muted text-sm">Instant response team</p>
               </div>
             </div>
             <Phone className="w-4 h-4 text-brand-text-faint group-hover:text-[#25D366] transition-colors" />
          </a>
        </div>

        <div className="glass-panel p-2 border-brand-border rounded-xl overflow-hidden h-full min-h-[400px] lg:h-[500px] bg-black">
          <iframe 
            src="https://maps.google.com/maps?q=Content+Writing+Kenya,-1.0351672,37.0727604&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Content Writing Kenya Location Map"
            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
      
      <FinalCTA />
    </div>
  );
}
