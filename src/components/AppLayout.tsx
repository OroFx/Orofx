import React from 'react';
import Navbar from './orofx/Navbar';
import HeroSection from './orofx/HeroSection';
import TrustBadgesSection from './orofx/TrustBadgesSection';
import ProblemSection from './orofx/ProblemSection';
import MarketRealitySection from './orofx/MarketRealitySection';
import USPSection from './orofx/USPSection';
import HowItWorksSection from './orofx/HowItWorksSection';
import TransparencySection from './orofx/TransparencySection';
import BenefitsSection from './orofx/BenefitsSection';
import LifestyleSection from './orofx/LifestyleSection';
import TestimonialsSection from './orofx/TestimonialsSection';
import FAQSection from './orofx/FAQSection';
import FinalCTASection from './orofx/FinalCTASection';
import Footer from './orofx/Footer';
import StickyTelegramCTA from './orofx/StickyTelegramCTA';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0D0F14', color: '#FFFFFF' }}>
      <Navbar />
      <HeroSection />
      <TrustBadgesSection />
      <ProblemSection />
      <MarketRealitySection />
      <USPSection />
      <HowItWorksSection />
      <TransparencySection />
      <BenefitsSection />
      <LifestyleSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyTelegramCTA />
    </div>
  );
};

export default AppLayout;
