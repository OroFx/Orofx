import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MapPin, Wifi, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BALI_IMG = 'https://d64gsuwffb70l.cloudfront.net/69a99c4dc049533ccd31d2fe_1772723387027_58ff2f15.png';
const CAFE_IMG = 'https://d64gsuwffb70l.cloudfront.net/69a99c4dc049533ccd31d2fe_1772723412672_9c3d3464.png';

const LifestyleSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0B0D12' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-amber-400/80 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('life.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('life.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                {t('life.headline2')}
              </span>
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              {t('life.desc')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={200}>
            <div className="relative group rounded-2xl overflow-hidden border border-white/5">
              <img
                src={BALI_IMG}
                alt="Trading from Bali"
                className="w-full h-[300px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">{t('life.bali.location')}</span>
                </div>
                <p className="text-white font-semibold text-lg">{t('life.bali.title')}</p>
                <p className="text-[#9CA3AF] text-sm">{t('life.bali.sub')}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="relative group rounded-2xl overflow-hidden border border-white/5">
              <img
                src={CAFE_IMG}
                alt="Trading from a cafe"
                className="w-full h-[300px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">{t('life.cafe.location')}</span>
                </div>
                <p className="text-white font-semibold text-lg">{t('life.cafe.title')}</p>
                <p className="text-[#9CA3AF] text-sm">{t('life.cafe.sub')}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600}>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Wifi className="w-4 h-4" />, text: t('life.pill1') },
              { icon: <MapPin className="w-4 h-4" />, text: t('life.pill2') },
              { icon: <Coffee className="w-4 h-4" />, text: t('life.pill3') },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-sm font-medium"
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LifestyleSection;
