import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Maximize2, 
  X, 
  Grid2X2, 
  HardHat, 
  Sparkles, 
  Hammer, 
  Building2, 
  Compass
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'construction' | 'interiors' | 'utility' | 'renovations'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: Grid2X2 },
    { id: 'construction', label: 'Construction', icon: Building2 },
    { id: 'interiors', label: 'Interiors & Joinery', icon: Sparkles },
    { id: 'renovations', label: 'Renovations', icon: Hammer },
    { id: 'utility', label: 'Trades & Utilities', icon: HardHat },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-brand-charcoal text-white relative border-t border-brand-slate/40">
      {/* Structural visual grid accents */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="w-[1px] h-full bg-white absolute left-1/4" />
        <div className="w-[1px] h-full bg-white absolute left-2/4" />
        <div className="w-[1px] h-full bg-white absolute left-3/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold font-serif block mb-3">Portfolio of Works</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-white leading-tight">
            Harare Construction & Interiors Registry
          </h2>
          <div className="h-[2px] w-20 bg-brand-gold mx-auto mt-6 mb-4" />
          <p className="text-xs md:text-sm text-brand-gray-light/80 leading-relaxed font-light">
            An authentic archive of our real physical installations. No stock footage or conceptual renders—pure skilled craftsmanship executed across Harare's premium residences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 text-xs uppercase tracking-wider font-mono px-5 py-3 transition-all duration-300 border cursor-pointer ${
                  isActive 
                    ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-lg shadow-brand-gold/10' 
                    : 'bg-brand-dark/60 text-brand-gray-light border-brand-slate/30 hover:border-brand-gold/40 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-brand-dark border border-brand-slate/30 hover:border-brand-gold/40 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-charcoal border-b border-brand-slate/20">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-10 group-hover:opacity-0 transition-opacity" />
                  
                  {/* Category Accent Badge */}
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-widest bg-brand-dark/90 border border-brand-slate/40 text-brand-gold px-2.5 py-1">
                    {item.category}
                  </span>

                  {/* Location Pin Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[9px] font-mono tracking-wider bg-brand-dark/95 border border-brand-slate/40 text-brand-gray-light px-2.5 py-1">
                    <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                    {item.location}
                  </div>

                  {/* Maximize Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brand-dark/40 backdrop-blur-xs">
                    <div className="p-3 bg-brand-gold text-brand-dark border border-brand-gold hover:scale-110 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white group-hover:text-brand-gold transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-gray-light/75 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-brand-slate/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-gold">
                      // Registry Reference
                    </span>
                    <span className="text-[10px] font-mono text-brand-slate uppercase font-semibold">
                      #{item.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* empty search backup (though we always have matching uploads) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-brand-dark border border-brand-slate/30">
            <span className="text-brand-gold font-mono uppercase text-xs tracking-wider block">No archived files found</span>
            <p className="text-xs text-brand-gray-light font-light mt-1">Please select another category tab above.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal Dialog */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#060707]/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedItem(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative bg-brand-dark border border-brand-slate/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl flex flex-col lg:grid lg:grid-cols-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-brand-dark/90 hover:bg-brand-gold hover:text-brand-dark text-brand-gold transition-colors border border-brand-slate/40 cursor-pointer"
                aria-label="Close interactive modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Media viewport (LHS or Top) */}
              <div className="lg:col-span-7 bg-brand-charcoal relative aspect-video lg:aspect-auto lg:h-full flex items-center justify-center border-b lg:border-b-0 lg:border-r border-brand-slate/30 min-h-[300px] lg:min-h-[500px]">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[500px] lg:max-h-none"
                />
              </div>

              {/* Specific descriptive panels (RHS) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-brand-dark">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block">
                      // Archived Specimen
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white leading-snug">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <div className="h-[1px] w-12 bg-brand-gold" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-charcoal text-brand-gold p-2 border border-brand-slate/30">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-brand-slate block uppercase">Property Location</span>
                        <span className="text-xs text-white font-medium">{selectedItem.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-brand-charcoal text-brand-gold p-2 border border-brand-slate/30">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-brand-slate block uppercase">Specialty Discipline</span>
                        <span className="text-xs text-white uppercase font-bold text-brand-gold">{selectedItem.category} works</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-gray-light/80 leading-relaxed font-light">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-slate/20">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      const contactEl = document.getElementById('contact');
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-brand-gold hover:bg-white text-brand-dark border border-brand-gold font-bold font-sans text-xs tracking-widest py-3.5 uppercase transition-all duration-300 text-center block cursor-pointer"
                  >
                    Select this quality level
                  </button>
                  <span className="text-[9px] font-mono text-brand-slate text-center block mt-3 uppercase tracking-wider">
                    Site references available upon request
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
