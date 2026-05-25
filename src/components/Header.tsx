import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, LayoutDashboard, Briefcase, FileSearch, Building2, BarChart2, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const mainLinks = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Location", href: "/location" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Initialize from document.documentElement class or assume dark for existing users
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return nextTheme;
    });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled ? "py-4 glass-panel" : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-sm rotate-45 mr-1" />
            <span className="font-heading font-bold text-xl uppercase tracking-tighter ml-2">
              Content Writing Kenya
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-text-muted">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-brand-text transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-brand-text text-brand-bg text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all"
            >
              Book Strategy Call
            </a>
            
            <button onClick={toggleTheme} className="hover:text-brand-text transition-colors p-1" aria-label="Toggle Theme">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50 text-brand-text">
            <button onClick={toggleTheme} aria-label="Toggle Theme">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-2xl font-heading mb-auto uppercase tracking-wider font-bold">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 w-full py-4 text-center rounded-none bg-brand-primary text-brand-bg font-bold text-[11px] uppercase tracking-widest"
            >
              Start Your Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
