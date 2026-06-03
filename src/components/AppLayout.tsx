import React, { useState } from 'react';
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
import ContactFormModal from './orofx/ContactFormModal';
import ComplaintFormModal from './orofx/ComplaintFormModal';
import ThreePathsSection from './orofx/ThreePathsSection';
import RecoverySection from './orofx/RecoverySection';

const AppLayout: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [complaintOpen, setComplaintOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: '#0D0F14', color: '#FFFFFF' }}>
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <HeroSection
        onOpenContact={() => setContactOpen(true)}
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <TrustBadgesSection />
      <ThreePathsSection
        onOpenContact={() => setContactOpen(true)}
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <ProblemSection />
      <MarketRealitySection />
      <USPSection />
      <HowItWorksSection
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <TransparencySection />
      <BenefitsSection />
      <LifestyleSection />
      <RecoverySection
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection
        onOpenContact={() => setContactOpen(true)}
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenComplaint={() => setComplaintOpen(true)}
      />
      <ContactFormModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <ComplaintFormModal
        open={complaintOpen}
        onClose={() => setComplaintOpen(false)}
      />
    </div>
  );
};

export default AppLayout;