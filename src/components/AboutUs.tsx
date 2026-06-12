import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Award, 
  Users, 
  Eye, 
  Target, 
  BookOpen, 
  CheckSquare, 
  Briefcase,
  Users2
} from 'lucide-react';
import { CORE_VALUES } from '../data';

// Map icon name string to icon components
const IconMap: { [key: string]: any } = {
  Shield: Shield,
  Cpu: Cpu,
  Award: Award,
  Users: Users,
};

export default function AboutUs() {
  const whyFourHundredPoints = [
    {
      title: 'Single Point of Accountability',
      desc: 'Eliminate the friction of coordinating multiple independent contractors. We oversee everything under one standard.'
    },
    {
      title: 'Consistent Workmanship',
      desc: 'Each master tradesman on our crew operates under strict quality-assurance guidelines. Perfect finishes, every time.'
    },
    {
      title: 'Clean, Professional Site Presence',
      desc: 'We maintain pristine, safe, clutter-free worksites across Harare, respecting your property and neighborhood.'
    },
    {
      title: 'Reliable Timelines & Communication',
      desc: 'You receive scheduled progress updates. We hit our milestones, backed by professional project management throughout each phase.'
    }
  ];

  const whoWeWorkWith = [
    { title: 'Homeowners', desc: 'Seeking luxury alterations, modern kitchen makeovers, or complete premium builds.' },
    { title: 'Property Developers', desc: 'Looking for prompt, high-end turn-key residential and commercial structure delivery.' },
    { title: 'Interior Designers', desc: 'Requiring exact cabinetry tolerances and seamless coordination for built-in solutions.' },
    { title: 'Commercial Clients', desc: 'Demanding compliant medium-scale builds, layouts and electrical installations.' }
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark text-white relative">
      {/* Visual background structural lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="w-full h-[1px] bg-white absolute top-1/4" />
        <div className="w-full h-[1px] bg-white absolute top-2/4" />
        <div className="w-full h-[1px] bg-white absolute top-3/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Company Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold font-serif block">Company Profile</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-white leading-tight">
              A Harare Standard for Skilled Trades
            </h2>
            <div className="h-[2px] w-20 bg-brand-gold" />
            
            <p className="text-sm md:text-base text-brand-gray-light leading-relaxed font-light">
              <strong>FOUR HUNDRED</strong> is a premier skilled trades and luxury interiors company based in Harare. We specialize in bringing multiple disciplines—construction, custom joinery, electrical, plumbing, and fine finish detailing—under one unified management of execution.
            </p>
            <p className="text-xs md:text-sm text-brand-gray-light/80 leading-relaxed font-light italic border-l-2 border-brand-gold pl-4 py-1">
              "Our approach is simple: fewer projects, better execution, consistent outcomes. We commit ourselves to precision, durability, and a clean professional site presence."
            </p>
          </div>

          {/* Why Four Hundred Cards */}
          <div className="lg:col-span-6 bg-brand-charcoal border border-brand-slate/40 p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckSquare className="w-5 h-5 text-brand-gold" />
              <h3 className="font-serif text-xl font-medium tracking-wide text-white uppercase">
                Why Choose Four Hundred?
              </h3>
            </div>
            
            <div className="space-y-4">
              {whyFourHundredPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-4 border-b border-brand-slate/20 last:border-0 last:pb-0">
                  <span className="font-mono text-xs font-bold text-brand-gold bg-brand-dark px-2 py-0.5 border border-brand-slate/30">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs text-brand-gray-light/70 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-brand-charcoal/70 border border-brand-slate/30 p-8 flex flex-col justify-between group hover:border-brand-gold/25 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-brand-dark p-3 text-brand-gold border border-brand-slate/45 group-hover:border-brand-gold/50 transition-colors">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium tracking-wide text-white">Our Vision</h3>
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mt-1">Specialist Choice</span>
              </div>
            </div>
            <p className="text-sm text-brand-gray-light/90 leading-relaxed font-light">
              To be the leading infrastructural development specialist partner of choice in Harare and Zimbabwe, recognized for pristine, modern execution and architectural integrity.
            </p>
          </div>

          <div className="bg-brand-charcoal/70 border border-brand-slate/30 p-8 flex flex-col justify-between group hover:border-brand-gold/25 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-brand-dark p-3 text-brand-gold border border-brand-slate/45 group-hover:border-brand-gold/50 transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium tracking-wide text-white">Our Mission</h3>
                <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mt-1">Value Creation</span>
              </div>
            </div>
            <p className="text-sm text-brand-gray-light/90 leading-relaxed font-light">
              To create value through providing exceptional quality construction services and bespoke interior products at an affordable cost that dynamically align with our clients' needs.
            </p>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-widest font-mono text-brand-gold font-bold">Operational Ethics</span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white tracking-normal mt-2">
              Our Guiding Values
            </h3>
            <p className="text-xs text-brand-gray-light/70 font-light mt-2">
              These pillars define how each carpenter, bricklayer, electrician, and site supervisor conducts work on your property.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const DynamicIcon = IconMap[val.icon] || Shield;
              return (
                <div key={idx} className="bg-brand-charcoal border border-brand-slate/40 p-6 flex flex-col justify-between text-center group hover:bg-brand-dark transition-all duration-300">
                  <div className="mx-auto bg-brand-dark group-hover:bg-brand-charcoal w-12 h-12 flex items-center justify-center text-brand-gold mb-4 border border-brand-slate/40 rounded-xs">
                    <DynamicIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-sans group-hover:text-brand-gold transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs text-brand-gray-light/80 font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who We Work With Section */}
        <div className="bg-brand-charcoal border border-brand-slate/40 p-8 sm:p-10">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-slate/30">
            <Users2 className="w-5 h-5 text-brand-gold" />
            <h3 className="font-serif text-lg font-medium text-white tracking-widest uppercase">
              Who We Work With
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeWorkWith.map((audience, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs uppercase font-mono text-brand-gold font-semibold block">
                  // {audience.title}
                </span>
                <p className="text-xs text-brand-gray-light/80 leading-relaxed font-light">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
