import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ShieldAlert, Eye, AlertTriangle, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MarketRealitySection: React.FC = () => {
  const { t } = useLanguage();

  const scamItems = [
    { icon: <Eye className="w-6 h-6" />, title: t('market.scam1.title'), desc: t('market.scam1.desc') },
    { icon: <DollarSign className="w-6 h-6" />, title: t('market.scam2.title'), desc: t('market.scam2.desc') },
    { icon: <ShieldAlert className="w-6 h-6" />, title: t('market.scam3.title'), desc: t('market.scam3.desc') },
    { icon: <AlertTriangle className="w-6 h-6" />, title: t('market.scam4.title'), desc: t('market.scam4.desc') },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-red-400/80 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('market.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('market.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                {t('market.headline2')}
              </span>
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              {t('market.desc')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scamItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="relative group p-6 rounded-2xl border border-red-500/10 bg-[#151821]/60 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#2E8BFF]/20 bg-[#2E8BFF]/5">
              <div className="w-10 h-10 rounded-full bg-[#2E8BFF]/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium" dangerouslySetInnerHTML={{
                __html: t('market.badge').replace('<span>', '<span class="text-[#2E8BFF] font-bold">').replace('</span>', '</span>')
              }} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MarketRealitySection;
