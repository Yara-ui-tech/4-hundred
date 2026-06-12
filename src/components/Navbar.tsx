import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Clock, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner (Flyer Header Details) */}
      <div className="bg-brand-dark/95 border-b border-brand-slate/40 text-xs text-brand-beige py-2.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Slogan details */}
          <div className="flex items-center gap-1.5 text-brand-gold text-[11px] uppercase tracking-wider font-medium">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
            Professional Harare Skilled Trades & Construction
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center items-center gap-y-1 gap-x-5 text-brand-gray-light/80 text-[11px] md:text-xs">
            <a href="tel:+263718221911" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+263 718 221 911</span>
            </a>
            <a href="mailto:info@fourhundred.co.zw" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>info@fourhundred.co.zw</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>197 Smuts Road, Harare</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 py-4 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-slate/60' 
          : 'bg-brand-dark/60 backdrop-blur-xs'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Horizontal Brand Name (Compact Logo presentation for nav) */}
          <button 
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="flex flex-col">
              <div className="font-serif text-lg font-bold tracking-[0.25em] text-white flex items-baseline">
                4<span className="text-brand-gold text-xs font-light relative -left-0.5" style={{ fontSize: '0.62em' }}>1</span>
                <span className="ml-1 uppercase">FOUR HUNDRED</span>
              </div>
              <span className="text-[8px] font-sans tracking-[0.18em] text-brand-gold/80 block uppercase leading-none mt-0.5">
                SKILLED TRADES. BUILT TO LAST.
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-brand-gray-light">
            <button 
              type="button" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-brand-gold font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection('about')} 
              className="hover:text-brand-gold font-medium transition-colors cursor-pointer"
            >
              Who We Are
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection('services')} 
              className="hover:text-brand-gold font-medium transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection('portfolio')} 
              className="hover:text-brand-gold font-medium transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-brand-gold font-medium transition-colors cursor-pointer"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/20"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-beige hover:text-brand-gold focus:outline-none cursor-pointer p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-brand-dark border-t border-brand-slate/40 mt-3 py-4 px-4 space-y-3 shadow-2xl animate-fade-in">
            <div className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-brand-beige">
              <button 
                type="button" 
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} 
                className="text-left py-2 border-b border-brand-slate/20 hover:text-brand-gold transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('about')} 
                className="text-left py-2 border-b border-brand-slate/20 hover:text-brand-gold transition-colors cursor-pointer"
              >
                Who We Are
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('services')} 
                className="text-left py-2 border-b border-brand-slate/20 hover:text-brand-gold transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('portfolio')} 
                className="text-left py-2 border-b border-brand-slate/20 hover:text-brand-gold transition-colors cursor-pointer"
              >
                Portfolio
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 border-b border-brand-slate/20 hover:text-brand-gold transition-colors cursor-pointer"
              >
                Contact
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-brand-gold text-brand-dark py-3 font-semibold text-center tracking-widest uppercase transition-colors cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
