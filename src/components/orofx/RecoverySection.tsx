import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface RecoverySectionProps {
  onOpenComplaint: () => void;
}

const RecoverySection: React.FC<RecoverySectionProps> = ({ onOpenComplaint }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: t('recovery.feat1.title'),
      desc: t('recovery.feat1.desc'),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: t('recovery.feat2.title'),
      desc: t('recovery.feat2.desc'),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('recovery.feat3.title'),
      desc: t('recovery.feat3.desc'),
    },
  ];

  return (
    <section ref={ref} id="recovery" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#0A0C10' }}>
      {/* Amber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            className="transition-all duration-1000"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-40px)' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">{t('recovery.label')}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              {t('recovery.headline1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                {t('recovery.headline2')}
              </span>
            </h2>

            <p className="text-lg text-[#9CA3AF] leading-relaxed mb-10">
              {t('recovery.desc')}
            </p>

            {/* Partner logos */}
            <div className="flex items-center gap-4 mb-10">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-white font-bold text-sm">Binance</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-white font-bold text-sm">Crypto.com</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-white font-bold text-sm">+ mehr</span>
              </div>
            </div>

            <button
              onClick={onOpenComplaint}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {t('recovery.cta')}
            </button>
          </div>

          {/* Right */}
          <div
            className="transition-all duration-1000 delay-300"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(40px)' }}
          >
            <div className="space-y-4">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{feat.title}</h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Trust badge */}
              <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-amber-200 text-sm font-medium">
                    Keine Vorauszahlung · Kostenlose Fallbewertung · Vertraulich
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoverySection;