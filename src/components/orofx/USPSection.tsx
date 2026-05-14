import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Shield, Wallet, TrendingUp, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const USPSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Wallet className="w-6 h-6" />, title: t('usp.feat1.title'), desc: t('usp.feat1.desc') },
    { icon: <Lock className="w-6 h-6" />, title: t('usp.feat2.title'), desc: t('usp.feat2.desc') },
    { icon: <Shield className="w-6 h-6" />, title: t('usp.feat3.title'), desc: t('usp.feat3.desc') },
    { icon: <TrendingUp className="w-6 h-6" />, title: t('usp.feat4.title'), desc: t('usp.feat4.desc') },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0B0D12' }}>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#2E8BFF]/6 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection>
              <p className="text-[#2E8BFF] text-sm font-semibold tracking-widest uppercase mb-4">
                {t('usp.label')}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t('usp.headline1')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
                  {t('usp.headline2')}
                </span>
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                {t('usp.desc1')}
              </p>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                {t('usp.desc2')}
                <span className="text-white font-semibold">
                  {t('usp.desc2Bold')}
                </span>
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="p-6 rounded-2xl border border-white/5 bg-[#151821]/80 backdrop-blur-sm hover:border-[#2E8BFF]/30 hover:bg-[#151821] transition-all duration-500 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#2E8BFF]/10 flex items-center justify-center text-[#2E8BFF] mb-4 group-hover:bg-[#2E8BFF]/20 group-hover:shadow-[0_0_20px_rgba(46,139,255,0.2)] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
