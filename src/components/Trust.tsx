import { motion } from "motion/react";
import { Star, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";

const testimonials = [
  {
    quote: "Excellent service! The SEO delivered outstanding results.",
    name: "Samuel M.",
    role: "E-commerce Founder",
    rating: 5,
  },
  {
    quote: "Professional, reliable, and worth every penny.",
    name: "Joyce K.",
    role: "Marketing Director",
    rating: 5,
  },
  {
    quote: "Amazing service, professional, timely, and very skilled in SEO. Good value for my money, excellent customer care.",
    name: "David O.",
    role: "Startup CEO",
    rating: 5,
  },
];

export function Trust() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-charcoal/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-white ml-2 text-lg">5.0</span>
            <span className="text-white/50 text-sm ml-1">Verified Google Rating</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase"
          >
            Trusted by <br/>Ambitious Brands
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass-panel p-8 group hover:bg-white/5 transition-colors"
            >
              <div className="flex text-brand-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current mr-1" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <h4 className="text-white font-bold flex items-center gap-1.5 text-[10px] uppercase tracking-widest mb-1">
                    {testimonial.name}
                    <CheckCircle className="w-3 h-3 text-brand-blue" />
                  </h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h4 className="text-5xl font-heading font-bold text-white mb-2">98%</h4>
            <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold">Client Retention</p>
          </div>
          <div>
            <h4 className="text-5xl font-heading font-bold text-white mb-2">3.2M</h4>
            <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold">Organic Visits Generated</p>
          </div>
          <div>
            <h4 className="text-5xl font-heading font-bold text-white mb-2">#1</h4>
            <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold">Rankings Achieved</p>
          </div>
          <div>
            <h4 className="text-5xl font-heading font-bold text-white mb-2">5X</h4>
            <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold">Average ROI</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
