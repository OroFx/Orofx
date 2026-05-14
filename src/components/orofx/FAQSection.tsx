import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0B0D12' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-[#2E8BFF] text-sm font-semibold tracking-widest uppercase mb-4">
              {t('faq.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('faq.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
                {t('faq.headline2')}
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className={`rounded-2xl border transition-all duration-500 ${
                  openIndex === i
                    ? 'border-[#2E8BFF]/30 bg-[#151821]/80'
                    : 'border-white/5 bg-[#151821]/40 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-white font-semibold text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2E8BFF] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-[#9CA3AF] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
