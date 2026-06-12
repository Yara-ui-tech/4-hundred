import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Layout, 
  Sliders, 
  Zap, 
  Droplet, 
  Paintbrush, 
  ShieldCheck, 
  Hammer, 
  Compass,
  ArrowUpRight,
  CheckCircle2,
  ListFilter
} from 'lucide-react';
import Logo from './Logo';
import { CORE_SERVICES } from '../data';
import { ServiceItem } from '../types';

// Map icon string names to dynamic Lucide component nodes
const IconMap: { [key: string]: any } = {
  Wrench: Wrench,
  Layout: Layout,
  Sliders: Sliders,
  Zap: Zap,
  Droplet: Droplet,
  Paintbrush: Paintbrush,
  ShieldCheck: ShieldCheck,
  Hammer: Hammer,
  Compass: Compass,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'construction' | 'interiors' | 'utility' | 'planning'>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filterCategories = [
    { id: 'all', name: 'All Specialty Trades' },
    { id: 'construction', name: 'Structural & Builds' },
    { id: 'interiors', name: 'Bespoke Interiors' },
    { id: 'utility', name: 'Utility Engineering' },
    { id: 'planning', name: 'Planning & Care' },
  ];

  const filteredServices = CORE_SERVICES.filter(
    service => activeCategory === 'all' || service.category === activeCategory
  );

  const toggleExpand = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const handleBookConsultation = (serviceName: string) => {
    const contactForm = document.getElementById('contact');
    const serviceSelect = document.getElementById('service-select') as HTMLSelectElement;
    
    if (serviceSelect) {
      serviceSelect.value = serviceName;
      // Trigger native react change event if bound
      const event = new Event('change', { bubbles: true });
      serviceSelect.dispatchEvent(event);
    }

    if (contactForm) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactForm.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-charcoal text-white relative">
      {/* Visual Accent Block - Diagonal Lines */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-brand-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold font-serif block mb-3">Our Core Specialties</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-white mb-6">
            Elite Architectural Execution & Interiors
          </h2>
          <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-brand-gray-light/80 leading-relaxed font-light">
            FOUR HUNDRED brings seasoned builders and custom tradesmen under one unified standard of accountability. We undertake fewer commissions to guarantee meticulous execution.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-brand-slate/30 pb-6">
          <ListFilter className="w-4 h-4 text-brand-gold/60 mr-2 hidden sm:block" />
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id as any);
                setExpandedService(null);
              }}
              className={`px-4 py-2.5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 border cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-md shadow-brand-gold/10'
                  : 'bg-transparent text-brand-beige border-brand-slate/45 hover:text-brand-gold hover:border-brand-gold/60'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dynamic Services Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const DynamicIcon = IconMap[service.iconName] || Wrench;
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-brand-dark border border-brand-slate/40 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-brand-gold/50"
                  id={`service-card-${service.id}`}
                >
                  {/* Decorative Card Top Graphics */}
                  <div className="relative h-48 overflow-hidden bg-brand-charcoal">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-85"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/25 to-transparent" />
                    
                    {/* Compact structural tags */}
                    <span className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-[9px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 text-brand-gold border border-brand-slate/40">
                      {service.category}
                    </span>

                    {/* Floating Icon Emblem */}
                    <div className="absolute bottom-4 right-4 bg-brand-dark/90 p-3 text-brand-gold border border-brand-slate/50 rounded-xs shadow-lg">
                      <DynamicIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Descriptive Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide text-white mb-2 group-hover:text-brand-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-brand-gold/90 font-mono mb-4 text-[11px]">
                        {service.tagline}
                      </p>
                      
                      {/* Sub-bullets displayed structured */}
                      <ul className="space-y-2 mt-4">
                        {service.bulletPoints.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-brand-gray-light/90 leading-relaxed font-light">
                            <span className="text-brand-gold mt-1 shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core CTA */}
                    <div className="mt-8 pt-4 border-t border-brand-slate/20 flex items-center justify-between">
                      <button
                        onClick={() => handleBookConsultation(service.title)}
                        className="text-[10px] tracking-widest uppercase text-brand-gold hover:text-white font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        Schedule Consultation
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] font-mono text-brand-slate/80 font-bold select-none">
                        PRO-SERIES
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Integrated Core Payment Promise Banner from Flyer Page 4 */}
        <div className="mt-20 bg-brand-dark border border-brand-slate/40 p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent opacity-50" />
          <Logo size="sm" light={true} />
          <h3 className="text-xl md:text-2xl font-serif font-light text-white my-6 max-w-2xl mx-auto leading-relaxed">
            "Fewer projects, better execution, consistent results."
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs font-mono tracking-widest text-brand-gold uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              SINGLE POINT OF ACCOUNTABILITY
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              CONSISTENT WORKMANSHIP
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              RELIABLE TIMELINES
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
