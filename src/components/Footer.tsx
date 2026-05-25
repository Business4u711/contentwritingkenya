import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-brand-bg pt-24 pb-8 border-t border-brand-border relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:pr-8">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-accent rotate-45 rounded-sm mr-1">
              </div>
              <span className="font-heading font-bold text-xl uppercase tracking-tighter ml-2 hover:text-brand-primary transition-colors">
                Content Writing Kenya
              </span>
            </Link>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6 font-light">
              The #1 premium SEO and content marketing agency in Africa. We build elite digital growth systems for ambitious brands.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', url: 'https://ke.linkedin.com/in/constance-hope-368335367' },
                { name: 'Truelancer', url: 'https://www.truelancer.com/content-writing-freelancers-in-thika' },
                { name: 'beBee', url: 'https://bebee.com/ke/services/content-writing/thika' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-brand-primary text-[10px] uppercase font-bold tracking-widest hover:text-brand-text transition-colors">
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Technical SEO', path: '/services/technical-seo' }, 
                { name: 'Content Architecture', path: '/services' }, 
                { name: 'Authority Acquisition', path: '/services' }, 
                { name: 'Conversion ROI', path: '/tools/roi-calculator' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-brand-text-muted hover:text-brand-accent transition-colors text-[11px] uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Industries', path: '/industries' },
                { name: 'Intelligence Hub', path: '/tools' },
                { name: 'Location', path: '/location' },
                { name: 'Contact', path: '/#contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-brand-text-muted hover:text-brand-text transition-colors text-[11px] uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">Contact & HQ</h4>
            <address className="text-brand-text-muted text-sm not-italic mb-6 leading-relaxed font-light">
              Workshop Ln, Thika, Kenya<br />
              <a href="mailto:hello@kenyaseoexperts.com" className="hover:text-brand-primary transition-colors block mt-2">hello@kenyaseoexperts.com</a>
              <a href="tel:+254715855361" className="hover:text-brand-accent transition-colors block">+254 715 855 361</a>
            </address>
            
            <Link to="/#contact" className="flex items-center gap-2 text-brand-primary font-bold text-[10px] uppercase tracking-widest hover:text-brand-text transition-colors border-b border-brand-primary/20 pb-1 w-max">
              Book Strategy Call <span className="text-brand-accent font-sans">→</span>
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-faint">
          <p>© {new Date().getFullYear()} Content Writing Kenya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-brand-text transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
