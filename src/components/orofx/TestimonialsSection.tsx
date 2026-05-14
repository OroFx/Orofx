import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();
  const trustpilotScore = useCountUp(48, 1500, 0, isVisible);

  const testimonials = [
    {
      name: t('test.t1.name'),
      role: t('test.t1.role'),
      text: t('test.t1.text'),
      profit: '+14%',
      period: t('test.t1.period'),
    },
    {
      name: t('test.t2.name'),
      role: t('test.t2.role'),
      text: t('test.t2.text'),
      profit: '+21%',
      period: t('test.t2.period'),
    },
    {
      name: t('test.t3.name'),
      role: t('test.t3.role'),
      text: t('test.t3.text'),
      profit: '+9%',
      period: t('test.t3.period'),
    },
  ];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2E8BFF]/4 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-[#2E8BFF] text-sm font-semibold tracking-widest uppercase mb-4">
              {t('test.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('test.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
                {t('test.headline2')}
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={star <= 4 ? '#FBBF24' : 'none'} stroke={star <= 4 ? '#FBBF24' : '#9CA3AF'} strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">{(trustpilotScore / 10).toFixed(1)}/5.0</span>
              <span className="text-[#9CA3AF] text-sm">{t('test.verified')}</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <AnimatedSection key={i} delay={i * 200}>
              <div className="h-full p-6 rounded-2xl border border-white/5 bg-[#151821]/60 backdrop-blur-sm hover:border-[#2E8BFF]/20 transition-all duration-500 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-emerald-400/5 border border-emerald-400/10">
                  <span className="text-emerald-400 font-bold text-lg">{item.profit}</span>
                  <span className="text-[#9CA3AF] text-xs">{item.period}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E8BFF] to-[#5BA4FF] flex items-center justify-center text-white font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-[#9CA3AF] text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
