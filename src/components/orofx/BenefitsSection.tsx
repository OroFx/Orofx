import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRight, Target, ShieldCheck, Zap, BarChart2, Clock, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: <Brain className="w-6 h-6" />, title: t('benefits.b1.title'), desc: t('benefits.b1.desc') },
    { icon: <Clock className="w-6 h-6" />, title: t('benefits.b2.title'), desc: t('benefits.b2.desc') },
    { icon: <Zap className="w-6 h-6" />, title: t('benefits.b3.title'), desc: t('benefits.b3.desc') },
    { icon: <Target className="w-6 h-6" />, title: t('benefits.b4.title'), desc: t('benefits.b4.desc') },
    { icon: <ShieldCheck className="w-6 h-6" />, title: t('benefits.b5.title'), desc: t('benefits.b5.desc') },
    { icon: <BarChart2 className="w-6 h-6" />, title: t('benefits.b6.title'), desc: t('benefits.b6.desc') },
  ];

  return (
    <section id="benefits" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2E8BFF]/4 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-[#2E8BFF] text-sm font-semibold tracking-widest uppercase mb-4">
              {t('benefits.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('benefits.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
                {t('benefits.headline2')}
              </span>
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              {t('benefits.desc')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-[#151821]/40 hover:border-[#2E8BFF]/20 hover:bg-[#151821]/80 transition-all duration-500 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2E8BFF]/10 flex items-center justify-center text-[#2E8BFF] group-hover:bg-[#2E8BFF]/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-[#9CA3AF] text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#2E8BFF]/10 rounded-3xl blur-[40px]" />
              <div className="relative">
                {/* Signal Card */}
                <div className="rounded-2xl border border-[#2E8BFF]/20 bg-[#151821] p-6 max-w-sm mx-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">{t('benefits.signalLabel')}</span>
                    </div>
                    <span className="text-[#9CA3AF] text-xs">{t('benefits.signalTime')}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white text-2xl font-bold">EUR/USD</span>
                      <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-bold">BUY</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-[#9CA3AF] text-sm">{t('benefits.signalEntry')}</span>
                      <span className="text-white font-mono font-semibold">1.0842</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-[#9CA3AF] text-sm">{t('benefits.signalSL')}</span>
                      <span className="text-red-400 font-mono font-semibold">1.0810</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-[#9CA3AF] text-sm">{t('benefits.signalTP')}</span>
                      <span className="text-emerald-400 font-mono font-semibold">1.0905</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[#9CA3AF] text-xs">{t('benefits.signalRR')}</span>
                      <span className="text-[#2E8BFF] font-semibold text-sm">1:2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 text-[#9CA3AF] text-sm">
                <ArrowRight className="w-4 h-4 text-[#2E8BFF]" />
                <span>{t('benefits.signalHint')}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
