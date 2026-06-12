import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ArrowRight, ShieldAlert, FileText } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    <footer className="bg-[#0b0c0d] border-t border-brand-slate/60 text-white relative">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Logo and Brief description */}
          <div className="md:col-span-5 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size="sm" light={true} />
            <p className="text-xs text-brand-gray-light/60 max-w-sm leading-relaxed font-light font-sans">
              FOUR HUNDRED is a Harare-based skilled trades and luxury interiors builder delivering end-to-end residential and commercial builds. Built on precision, engineered for durability.
            </p>
            
            {/* Professional Quality Tag */}
            <div className="inline-flex items-center gap-2 bg-brand-charcoal/80 border border-brand-slate/40 px-3.5 py-1.5 text-[10px] uppercase font-mono tracking-widest text-brand-gold">
              <FileText className="w-3.5 h-3.5" />
              Elite Professional Standards
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">
              Specialists Shortcuts
            </h4>
            <ul className="space-y-3 text-xs text-brand-gray-light font-light uppercase tracking-widest text-[11px]">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Who We Work With
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Core Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Project Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Harare Direct details */}
          <div className="md:col-span-4 text-center md:text-left space-y-5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Direct Contact Lines
            </h4>
            
            <div className="space-y-3.5 text-xs text-brand-gray-light">
              <a href="tel:+263718221911" className="flex items-center justify-center md:justify-start gap-3 hover:text-brand-gold transition-colors">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-mono tracking-wider">+263 718 221 911</span>
              </a>

              <a href="mailto:info@fourhundred.co.zw" className="flex items-center justify-center md:justify-start gap-3 hover:text-brand-gold transition-colors">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-mono">info@fourhundred.co.zw</span>
              </a>

              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">197 Smuts Road, Harare, Zimbabwe</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Credits */}
      <div className="bg-[#060707] py-6 border-t border-brand-slate/20 text-center text-[10px] font-mono tracking-widest text-brand-slate/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="uppercase flex items-center gap-1">
            <span>© {currentYear}</span>
            <span className="text-brand-gold">Four Hundred</span>
            <span>- All Rights Reserved</span>
          </div>

          <div>
            <span>Harare Skilled Trades Bureau</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 text-brand-gold font-bold hover:text-white transition-colors cursor-pointer text-[10px]"
            aria-label="Scroll back to top"
          >
            TOP
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
