import React from 'react';
import AnimatedSection from './AnimatedSection';
import GlowButton from './GlowButton';
import { useLanguage } from '@/contexts/LanguageContext';

const TELEGRAM_URL = 'https://t.me/OroFxBot';

const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('how.step1.title'),
      desc: t('how.step1.desc'),
      action: t('how.step1.action'),
      url: TELEGRAM_URL,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: t('how.step2.title'),
      desc: t('how.step2.desc'),
      action: t('how.step2.action'),
      url: null,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      number: '03',
      title: t('how.step3.title'),
      desc: t('how.step3.desc'),
      action: null,
      url: null,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
  ];


  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#2E8BFF]/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[#2E8BFF] text-sm font-semibold tracking-widest uppercase mb-4">
              {t('how.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('how.headline')}
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
              {t('how.desc')}
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8 relative">
          <div className="hidden sm:block absolute top-[60px] left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-[#2E8BFF]/30 via-[#2E8BFF]/50 to-[#2E8BFF]/30" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 200}>
              <div className="relative text-center group">
                <div className="relative mx-auto w-[120px] h-[120px] mb-8">
                  <div className="absolute inset-0 rounded-full border border-[#2E8BFF]/20 group-hover:border-[#2E8BFF]/50 transition-all duration-500" />
                  <div className="absolute inset-3 rounded-full bg-[#151821] border border-white/5 flex items-center justify-center text-[#2E8BFF] group-hover:shadow-[0_0_30px_rgba(46,139,255,0.2)] transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#2E8BFF] flex items-center justify-center text-white text-xs font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                  {step.desc}
                </p>

                {step.action && step.url && (
                  <GlowButton
                    variant="secondary"
                    onClick={() => window.open(step.url!, '_blank')}
                  >
                    {step.action}
                  </GlowButton>
                )}

              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="text-center mt-16">
            <p className="text-[#9CA3AF] text-lg">
              {t('how.bottom')}<span className="text-white font-semibold">{t('how.bottomBold')}</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorksSection;
