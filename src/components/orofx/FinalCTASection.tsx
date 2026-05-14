import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import GlowButton from './GlowButton';
import ContactFormModal from './ContactFormModal';
import { useLanguage } from '@/contexts/LanguageContext';

const TELEGRAM_URL = 'https://t.me/OroFxBot';


const FinalCTASection: React.FC = () => {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative py-24 sm:py-40 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#2E8BFF]/8 rounded-full blur-[150px]" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(46,139,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2E8BFF]/30 bg-[#2E8BFF]/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[#5BA4FF] text-sm font-medium">{t('cta.badge')}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            {t('cta.headline1')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
              {t('cta.headline2')}
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <p className="text-[#9CA3AF] text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('cta.desc')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={750}>
          <div className="max-w-2xl mx-auto mb-10 text-left rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-7 space-y-5">
            <p className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed">
              <span className="text-white font-semibold">{t('cta.guide.q1')}</span>{' '}
              <span className="text-[#5BA4FF]">→</span>{' '}
              {t('cta.guide.a1')}
            </p>
            <p className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed">
              <span className="text-white font-semibold">{t('cta.guide.q2')}</span>{' '}
              <span className="text-[#5BA4FF]">→</span>{' '}
              {t('cta.guide.a2')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <GlowButton size="large" onClick={() => window.open(TELEGRAM_URL, '_blank')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {t('cta.primary')}
            </GlowButton>

            <GlowButton size="large" variant="secondary" onClick={() => setContactOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {t('cta.contact')}
            </GlowButton>
          </div>
        </AnimatedSection>


        <AnimatedSection delay={1000}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#9CA3AF] text-sm">
            {[t('cta.check1'), t('cta.check2'), t('cta.check3')].map((check, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {check}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <ContactFormModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
};

export default FinalCTASection;
