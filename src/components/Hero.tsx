import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { ChevronDown, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { HERO_IMAGE } from '../data';

export default function Hero() {
  const handleScroll = (id: string) => {
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
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-brand-dark overflow-hidden pt-24">
      {/* Background Hero Image with Elegant Dimming Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury Modern Architecture in Harare by Four Hundred"
          className="w-full h-full object-cover scale-102 filter brightness-[0.35] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial overlay for architectural drafting board aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/90 opacity-80" />
      </div>

      {/* Decorative Blueprint Construction Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-1 opacity-[0.03] flex justify-between px-10">
        <div className="w-[1px] h-full bg-brand-beige" />
        <div className="w-[1px] h-full bg-brand-beige hidden md:block" />
        <div className="w-[1px] h-full bg-brand-beige hidden md:block" />
        <div className="w-[1px] h-full bg-brand-beige" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-6 lg:mt-10 flex flex-col items-center">
        {/* Logo and Slogan block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo size="lg" light={true} />
        </motion.div>

        {/* Small Intro text highlighting single accountability */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.0 }}
          className="text-brand-gray-light/95 max-w-2xl font-light text-sm md:text-base leading-relaxed tracking-wide text-center uppercase md:normal-case font-sans"
        >
          A Harare-based skilled trades & interiors company delivering end-to-end residential and commercial builds. Precision design. Engineered durability. Single point of accountability.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.0, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full max-w-md justify-center px-4"
        >
          <button
            onClick={() => handleScroll('services')}
            className="flex items-center justify-center gap-2 bg-white text-brand-dark font-sans font-bold hover:bg-brand-gold hover:text-brand-dark text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 shadow-xl cursor-pointer"
          >
            Our Work Focus
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => handleScroll('contact')}
            className="flex items-center justify-center gap-2 bg-transparent text-brand-beige hover:border-brand-gold border border-brand-slate/80 hover:text-brand-gold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 font-sans tracking-widest cursor-pointer"
          >
            Request Assessment
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
          </button>
        </motion.div>

        {/* Quick bullet summaries pulled directly from first turn */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.2 }}
          className="hidden md:flex justify-center items-center gap-x-8 mt-16 text-[10px] tracking-widest text-brand-gold/80 uppercase font-mono border-t border-b border-brand-slate/40 py-3 px-6"
        >
          <span>BUILDING & STRUCTURES</span>
          <span className="w-1.5 h-1.5 bg-brand-slate rounded-full" />
          <span>BESPOKE KITCHENS</span>
          <span className="w-1.5 h-1.5 bg-brand-slate rounded-full" />
          <span>MODERN BATHROOMS</span>
          <span className="w-1.5 h-1.5 bg-brand-slate rounded-full" />
          <span>COMPLIANT UTILITIES</span>
        </motion.div>
      </div>

      {/* Bounce-down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => handleScroll('about')}
          className="text-brand-gray-light/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer flex flex-col items-center gap-1"
          aria-label="Scroll to next section"
        >
          <span className="text-[9px] uppercase tracking-widest font-mono select-none">Begin Tour</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
