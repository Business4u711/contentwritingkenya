import React, { useState } from "react";
import { MapPin, Mail, Phone, Calendar, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    goals: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.website) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", website: "", goals: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-brand-black border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span>Executive Contact</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-black leading-none uppercase tracking-tighter mb-6">
              Initiate <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-gold)' }}>Growth</span>
            </h2>
            
            <p className="text-white/60 font-light leading-relaxed mb-12 max-w-md">
              Secure an enterprise SEO consultation to discuss your revenue goals, market position, and the strategic path to search dominance.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@kenyaseoexperts.com" className="flex items-center gap-6 group w-max">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Direct Email</p>
                  <p className="text-lg font-heading font-semibold group-hover:text-brand-gold transition-colors">hello@kenyaseoexperts.com</p>
                </div>
              </a>
              
              <a href="tel:+254715855361" className="flex items-center gap-6 group w-max">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/50 transition-colors">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Direct Line</p>
                  <p className="text-lg font-heading font-semibold group-hover:text-brand-blue transition-colors">+254 715 855 361</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Global HQ</p>
                  <p className="text-lg font-heading font-semibold">Workshop Ln, Thika, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                  <Calendar className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Business Hours</p>
                  <p className="text-lg font-heading font-semibold">Mon–Fri: 9:00 AM – 5:00 PM (EAT)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12 border-white/10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[400px] space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                  </div>
                  <h3 className="text-3xl font-heading font-black uppercase text-white tracking-tighter">Inquiry Received</h3>
                  <p className="text-white/60 font-light text-sm max-w-sm mx-auto">
                    Our intelligence team is analyzing your domain. An executive strategist will contact you shortly to schedule your consultation.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-8 py-4 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight text-white mb-2">Request an SEO Audit</h3>
                  <p className="text-white/50 font-light text-sm mb-8">Fill the form to receive a detailed breakdown of your site's SEO standing.</p>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold">First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} disabled={status === "submitting"} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors font-light text-sm rounded-none disabled:opacity-50" placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} disabled={status === "submitting"} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors font-light text-sm rounded-none disabled:opacity-50" placeholder="Last Name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Work Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={status === "submitting"} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors font-light text-sm rounded-none disabled:opacity-50" placeholder="name@company.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Website URL *</label>
                      <input type="url" name="website" value={formData.website} onChange={handleInputChange} disabled={status === "submitting"} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors font-light text-sm rounded-none disabled:opacity-50" placeholder="https://yourwebsite.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Project Goals</label>
                      <textarea name="goals" rows={4} value={formData.goals} onChange={handleInputChange} disabled={status === "submitting"} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors font-light text-sm rounded-none resize-none disabled:opacity-50" placeholder="Tell us about your revenue goals..."></textarea>
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-xs">{errorMessage}</p>
                    )}
                    
                    <button type="submit" disabled={status === "submitting"} className="group relative w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === "submitting" ? (
                        <><Loader2 className="w-4 h-4 animate-spin text-black" /> Processing...</>
                      ) : (
                        <span>Submit Inquiry</span>
                      )}
                      <div className="absolute -bottom-1 -right-1 w-full h-full border border-white/20 z-0 group-hover:bottom-0 group-hover:right-0 transition-all pointer-events-none"></div>
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
