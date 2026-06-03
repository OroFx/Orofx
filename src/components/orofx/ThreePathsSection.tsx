import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const TELEGRAM_URL = 'https://t.me/OroFxBot';

interface ThreePathsProps {
  onOpenContact: () => void;
  onOpenComplaint: () => void;
}

const ThreePathsSection: React.FC<ThreePathsProps> = ({ onOpenContact, onOpenComplaint }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const paths = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#2E8BFF]">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      number: '01',
      title: t('paths.p1.title'),
      desc: t('paths.p1.desc'),
      cta: t('paths.p1.cta'),
      action: () => window.open(TELEGRAM_URL, '_blank'),
      color: 'from-[#2E8BFF]/20 to-[#2E8BFF]/5',
      border: 'border-[#2E8BFF]/30',
      buttonStyle: 'bg-[#2E8BFF] hover:bg-[#5BA4FF] text-white',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      number: '02',
      title: t('paths.p2.title'),
      desc: t('paths.p2.desc'),
      cta: t('paths.p2.cta'),
      action: onOpenContact,
      color: 'from-emerald-500/20 to-emerald-500/5',
      border: 'border-emerald-500/30',
      buttonStyle: 'bg-emerald-500 hover:bg-emerald-400 text-white',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      number: '03',
      title: t('paths.p3.title'),
      desc: t('paths.p3.desc'),
      cta: t('paths.p3.cta'),
      action: onOpenComplaint,
      color: 'from-amber-500/20 to-amber-500/5',
      border: 'border-amber-500/30',
      buttonStyle: 'bg-amber-500 hover:bg-amber-400 text-white',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: '#0D0F14' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-[#9CA3AF] text-sm font-medium">{t('paths.label')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border ${path.border} bg-gradient-to-b ${path.color} p-8 flex flex-col transition-all duration-1000`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="text-xs font-bold text-[#6B7280] mb-4">{path.number}</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {path.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1 mb-6">{path.desc}</p>
              <button
                onClick={path.action}
                className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 ${path.buttonStyle}`}
              >
                {path.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePathsSection;