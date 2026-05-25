import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-brand-black pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:pr-8">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-brand-gold to-brand-blue rotate-45 rounded-sm mr-1">
              </div>
              <span className="font-heading font-bold text-xl uppercase tracking-tighter ml-2 hover:text-brand-gold transition-colors">
                Content Writing Kenya
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
              The #1 premium SEO and content marketing agency in Africa. We build elite digital growth systems for ambitious brands.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="text-brand-gold text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Technical SEO', path: '/services/technical-seo' }, 
                { name: 'Content Architecture', path: '/services' }, 
                { name: 'Authority Acquisition', path: '/services' }, 
                { name: 'Conversion ROI', path: '/tools/roi-calculator' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-brand-blue transition-colors text-[11px] uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Industries', path: '/industries' },
                { name: 'Intelligence Hub', path: '/tools' },
                { name: 'Contact', path: '/#contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">Contact & HQ</h4>
            <address className="text-white/50 text-sm not-italic mb-6 leading-relaxed font-light">
              Workshop Ln, Thika, Kenya<br />
              <a href="mailto:hello@kenyaseoexperts.com" className="hover:text-brand-gold transition-colors block mt-2">hello@kenyaseoexperts.com</a>
              <a href="tel:+254715855361" className="hover:text-brand-blue transition-colors block">+254 715 855 361</a>
            </address>
            
            <Link to="/#contact" className="flex items-center gap-2 text-brand-gold font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors border-b border-brand-gold/30 pb-1 w-max">
              Book Strategy Call <span className="text-brand-blue font-sans">→</span>
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Content Writing Kenya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
