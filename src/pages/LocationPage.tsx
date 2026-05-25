import { motion } from "motion/react";
import { FinalCTA } from "../components/FinalCTA";
import { MessageCircle, Mail, MapPin, Building2, Phone } from "lucide-react";

export function LocationPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-16">
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
          <span className="w-10 h-[1px] bg-brand-gold"></span>
          <span>Global Presence</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white mb-6">
          Find Us
        </h1>
        <p className="text-white/60 font-light text-lg max-w-2xl leading-relaxed">
          <strong className="text-white">Content Writing Kenya</strong><br/>
          We provide enterprise-grade SEO and content writing services in Kenya and globally.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 mb-32">
        <div className="flex flex-col gap-6">
          <div className="glass-panel p-8 border-white/10 flex flex-col justify-center gap-6 relative overflow-hidden bg-[#0a0a0f]">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0">
                 <Building2 className="w-5 h-5 text-brand-gold" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                  <p className="text-white/50 text-sm">Nairobi, Kenya</p>
               </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 border-white/10 flex flex-col justify-center gap-6 relative overflow-hidden bg-[#0a0a0f]">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0">
                 <Mail className="w-5 h-5 text-brand-blue" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2">Direct Inquiries</h3>
                  <a href="mailto:hello@contentwritingkenya.com" className="text-white/50 hover:text-white transition-colors text-sm">
                    hello@contentwritingkenya.com
                  </a>
               </div>
            </div>
          </div>

          <a href="https://wa.me/254715855361" target="_blank" rel="noopener noreferrer" className="group glass-panel p-8 border-white/10 flex items-center justify-between gap-6 relative overflow-hidden hover:border-[#25D366]/50 transition-colors bg-[#0a0a0f]">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                 <MessageCircle className="w-6 h-6 text-[#25D366]" fill="currentColor" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-1">WhatsApp Business</h3>
                  <p className="text-white/50 text-sm">Instant response team</p>
               </div>
             </div>
             <Phone className="w-4 h-4 text-white/20 group-hover:text-[#25D366] transition-colors" />
          </a>
        </div>

        <div className="glass-panel p-2 border-white/10 rounded-xl overflow-hidden h-full min-h-[400px] lg:h-[500px] bg-black">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.1895690226!2d36.68258380436577!3d-1.303204998748303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1716386802179!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Nairobi, Kenya Map"
            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
      
      <FinalCTA />
    </div>
  );
}
