import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  Mail, 
  Phone as PhoneIcon, 
  DollarSign, 
  MessageSquare, 
  CheckCircle, 
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Inbox
} from 'lucide-react';
import { QuoteInquiry } from '../types';
import { CORE_SERVICES } from '../data';

export default function ConsultationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('25000');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<QuoteInquiry[]>([]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    try {
      const existing = localStorage.getItem('four_hundred_inquiries');
      if (existing) {
        setSavedInquiries(JSON.parse(existing));
      }
    } catch (e) {
      console.warn("Storage access not available in current frame:", e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const newInquiry: QuoteInquiry = {
      id: 'FHR-' + Math.floor(1000 + Math.random() * 9000),
      clientName: name,
      email: email,
      phone: phone,
      serviceType: service || 'General Trades & Consultation',
      projectBudget: Number(budget) || 25000,
      message: message || 'Please arrange a site visit and project scoping advisory.',
      timestamp: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Received'
    };

    const updated = [newInquiry, ...savedInquiries];
    setSavedInquiries(updated);
    
    try {
      localStorage.setItem('four_hundred_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.error("Storage save failed:", e);
    }

    setIsSubmitted(true);
    
    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setBudget('25000');
    setMessage('');

    // Clear success state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  const clearHistory = () => {
    setSavedInquiries([]);
    try {
      localStorage.removeItem('four_hundred_inquiries');
    } catch {}
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal text-white relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold font-serif block mb-3">Schedule an Assessment</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-white mb-6">
            Initiate Your Project
          </h2>
          <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-brand-gray-light/80 leading-relaxed font-light">
            Tell us about your structural alterations, luxury interior, or built renovation scope. We will arrange a site assessment at your address in Harare.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* L: Professional Contacts Info, directly from flyers */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-brand-dark border border-brand-slate/40 p-6 sm:p-10">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-widest font-mono text-brand-gold font-bold">
                Harare HQ Office:
              </span>
              <h3 className="font-serif text-2xl font-semibold tracking-wide text-white">
                Under One Standard.
              </h3>
              <p className="text-xs text-brand-gray-light/80 leading-relaxed font-light">
                FOUR HUNDRED streamlines construction by managing multiple trade disciplines (electrical, plumbing, tiling, painting, finish joinery) under single-accountability stewardship. Contact us directly or log an inquiry here.
              </p>

              {/* Direct Info list from printed materials */}
              <div className="space-y-4 pt-6 border-t border-brand-slate/20 text-xs text-brand-gray-light">
                <a href="tel:+263718221911" className="flex items-start gap-4 p-3 border border-transparent hover:border-brand-slate/30 bg-brand-charcoal/30 hover:bg-brand-charcoal/60 transition-all duration-300">
                  <PhoneIcon className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold uppercase tracking-wider text-[10px] text-brand-gold">Direct Phone Line</span>
                    <span className="text-sm font-semibold tracking-wider text-white mt-0.5 block">+263 718 221 911</span>
                  </div>
                </a>

                <a href="mailto:info@fourhundred.co.zw" className="flex items-start gap-4 p-3 border border-transparent hover:border-brand-slate/30 bg-brand-charcoal/30 hover:bg-brand-charcoal/60 transition-all duration-300">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold uppercase tracking-wider text-[10px] text-brand-gold">Email Correspondence</span>
                    <span className="text-sm tracking-wide text-white mt-0.5 block">info@fourhundred.co.zw</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 border border-transparent bg-brand-charcoal/30">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold uppercase tracking-wider text-[10px] text-brand-gold">Physical Address</span>
                    <span className="text-sm text-white mt-0.5 block">197 Smuts Road, Harare, Zimbabwe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Scope helper */}
            <div className="bg-brand-charcoal/40 p-4 border border-brand-slate/30 text-xs">
              <span className="font-mono text-brand-gold uppercase text-[9px] block mb-1 font-bold">Consultation Approach:</span>
              <p className="text-[11px] leading-relaxed font-light text-brand-gray-light/70">
                Each commission undergoes structured initial reviews, detailed design assessments, material selections, and on-site trade validation.
              </p>
            </div>
          </div>

          {/* R: Client Form */}
          <div className="lg:col-span-7 bg-brand-dark border border-brand-slate/40 p-6 sm:p-10 relative">
            
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xs flex flex-col justify-center items-center text-center p-8 z-20 border border-brand-gold/30"
                >
                  <CheckCircle className="w-16 h-16 text-brand-gold mb-6 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono block mb-2">Inquiry Saved Successfully</span>
                  <h3 className="font-serif text-2xl text-white font-medium mb-4">Assessment Registered</h3>
                  <p className="text-xs text-brand-gray-light/80 max-w-sm leading-relaxed font-light mb-6">
                    Your request has been filed into our project coordinator database. You can track this specific commission request in the active log below!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="border border-brand-slate/50 text-[10px] tracking-widest text-brand-gold uppercase font-bold py-2.5 px-6 hover:bg-brand-charcoal/60 hover:border-brand-gold transition-all duration-300 cursor-pointer"
                  >
                    Send Another Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl font-medium text-white tracking-wide">
                  Submit Project Parameters
                </h3>
                <span className="text-[9px] font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20 uppercase">
                  Harare Service Core
                </span>
              </div>

              {/* Grid block name / email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block font-semibold">Your Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-brand-slate" />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Tendai Moyo" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-charcoal/60 border border-brand-slate/40 focus:border-brand-gold text-xs text-white pl-10 pr-3 py-3.5 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block font-semibold">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-brand-slate" />
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. tendai@domain.zw" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-charcoal/60 border border-brand-slate/40 focus:border-brand-gold text-xs text-white pl-10 pr-3 py-3.5 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Grid block phone / service selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block font-semibold">Phone Number / Whatsapp *</label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-3.5 w-4 h-4 text-brand-slate" />
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +263 718 221 911" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-brand-charcoal/60 border border-brand-slate/40 focus:border-brand-gold text-xs text-white pl-10 pr-3 py-3.5 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block font-semibold">Service Requirement</label>
                  <select 
                    id="service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-brand-charcoal border border-brand-slate/45 focus:border-brand-gold text-xs text-white p-3.5 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Specialty Work...</option>
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget input with slider binding option */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block font-semibold">Estimated Budget (USD)</label>
                <div className="relative">
                  <div className="absolute left-3 top-3.5 text-xs text-brand-gold font-mono font-bold">$</div>
                  <input 
                    type="number" 
                    id="project-budget"
                    placeholder="25000" 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-brand-charcoal/60 border border-brand-slate/40 focus:border-brand-gold text-xs text-white pl-8 pr-3 py-3.5 focus:outline-none transition-colors font-mono"
                  />
                  <span className="absolute right-3 top-3.5 text-[9px] font-mono text-brand-slate uppercase font-bold">
                    ESTIMATED
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block font-semibold">Scope Deliverables & Notes *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-brand-slate" />
                  <textarea 
                    rows={4}
                    id="client-message"
                    required
                    placeholder="Specify property layout, alterations or installation expectations. Mention Smuts Road distance if relative." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-brand-charcoal/60 border border-brand-slate/40 focus:border-brand-gold text-xs text-white pl-10 pr-3 py-3 focus:outline-none transition-colors resize-none leading-relaxed font-light"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark py-4 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                Log Inquiry & Schedule Assessment
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Portal Log displaying saved Inquiries from Client localstorage */}
        {savedInquiries.length > 0 && (
          <div className="mt-16 bg-brand-dark border border-brand-slate/40 p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-brand-slate/20">
              <div>
                <h4 className="font-serif text-lg font-medium text-white flex items-center gap-2">
                  <Inbox className="w-5 h-5 text-brand-gold" />
                  Real-time Consultations Registry
                </h4>
                <p className="text-xs text-brand-gray-light/60 font-light mt-0.5">
                  Saved locally in your active web browser. These are queued for professional trades review.
                </p>
              </div>

              <button
                onClick={clearHistory}
                className="text-[10px] uppercase font-mono tracking-widest text-brand-slate hover:text-red-400 font-bold transition-colors cursor-pointer border border-brand-slate/40 px-3 py-1 hover:border-red-400/40"
              >
                Clear History Logs
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedInquiries.map((inq) => (
                <div key={inq.id} className="bg-brand-charcoal/50 border border-brand-slate/40 p-5 relative overflow-hidden flex flex-col justify-between">
                  {/* Status Indicator banner */}
                  <div className="absolute top-0 right-0 h-1 w-20 bg-brand-gold" />
                  
                  <div>
                    <div className="flex justify-between items-center gap-2 mb-3">
                      <span className="text-[11px] font-mono font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20">
                        {inq.id}
                      </span>
                      <span className="text-[10px] font-mono text-brand-gray-light/50 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {inq.timestamp}
                      </span>
                    </div>

                    <h5 className="text-white font-medium text-sm capitalize mb-1">{inq.clientName}</h5>
                    <div className="text-[11px] text-brand-gray-light/60 space-y-0.5 mb-3 font-light">
                      <p>Email: <span className="text-white font-mono">{inq.email}</span></p>
                      <p>Phone: <span className="text-white font-mono">{inq.phone}</span></p>
                      <p>Specialty: <span className="text-brand-gold">{inq.serviceType}</span></p>
                      <p>Budget Target: <span className="text-white font-semibold font-mono">${inq.projectBudget?.toLocaleString()} USD</span></p>
                    </div>

                    <p className="text-xs text-brand-gray-light/75 bg-brand-dark/40 p-2.5 border border-brand-slate/20 leading-relaxed font-light mt-2 line-clamp-2 italic">
                      "{inq.message}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brand-slate/10 flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-slate">
                      Harare Region Hub
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-brand-gold flex items-center gap-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      Status: {inq.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
