import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useLanguage } from '@/contexts/LanguageContext';
import GlowButton from './GlowButton';
import TradingChart from './TradingChart';

const TELEGRAM_URL = 'https://t.me/OroFxBot';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenComplaint: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenComplaint }) => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t } = useLanguage();
  const winningTrades = useCountUp(7, 2000, 0, isVisible);
  const activeTraders = useCountUp(2143, 2500, 0, isVisible);
  const monthlyGain = useCountUp(9, 2000, 0, isVisible);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0D0F14' }}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(https://d64gsuwffb70l.cloudfront.net/69a99c4dc049533ccd31d2fe_1772723358523_99e6e295.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />

      {/* Animated Chart Background */}
      <div className="absolute inset-0 opacity-15">
        <TradingChart className="w-full h-full" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F14] via-transparent to-[#0D0F14]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14]/80 via-transparent to-[#0D0F14]/80" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#2E8BFF]/8 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2E8BFF]/30 bg-[#2E8BFF]/10 mb-8 transition-all duration-1000" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <span className="w-2 h-2 rounded-full bg-[#2E8BFF] animate-pulse" />
          <span className="text-[#5BA4FF] text-sm font-medium">{t('hero.badge')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-1000 delay-200" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}>
          {t('hero.headline1')}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
            {t('hero.headline2')}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}>
          {t('hero.sub1')}
          <br className="hidden sm:block" />
          {t('hero.sub2')}
        </p>

        {/* CTA Buttons - 3 Wege */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-500" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}>
          {/* Telegram */}
          <GlowButton size="large" onClick={() => window.open(TELEGRAM_URL, '_blank')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {t('hero.ctaPrimary')}
          </GlowButton>

          {/* Investor Anfrage */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            {t('paths.p2.cta')}
          </button>

          {/* Beschwerde */}
          <button
            onClick={onOpenComplaint}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {t('paths.p3.cta')}
          </button>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-700" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}>
          {[
            { value: winningTrades, label: t('hero.stat1'), suffix: '' },
            { value: activeTraders, label: t('hero.stat2'), suffix: '' },
            { value: monthlyGain, label: t('hero.stat3'), suffix: '%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-[#9CA3AF]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;