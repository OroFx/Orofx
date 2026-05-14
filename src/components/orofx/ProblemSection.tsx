import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D0F14] to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-[#9CA3AF] text-lg sm:text-xl mb-8 font-medium tracking-wide uppercase">
            {t('problem.label')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('problem.line1')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('problem.line2')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('problem.line3')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <div className="my-12 sm:my-16">
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#9CA3AF] italic">
              {t('problem.still')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              {t('problem.notProfitable')}
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="w-16 h-[2px] bg-[#2E8BFF] mx-auto mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={900}>
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-3">
            {t('problem.notTheProblem')}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF] font-bold">
            {t('problem.badSignals')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
