import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import PortfolioShowcase from './components/PortfolioShowcase';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold/30 selection:text-brand-gold overflow-x-hidden">
      
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Full-Screen Visual Hero Banner */}
      <Hero />

      {/* 3. About Us Block (Vision, Mission, Values, audience targets) */}
      <AboutUs />

      {/* 4. Interactive Speciality Services Panel (Filter tabs & custom bullets) */}
      <Services />

      {/* 5. Real Image Portfolio & Project Registry */}
      <PortfolioShowcase />

      {/* 6. Form Intake and HTML5 consultation Log */}
      <ConsultationForm />

      {/* 7. Widescreen Footer Details */}
      <Footer />

    </div>
  );
}
