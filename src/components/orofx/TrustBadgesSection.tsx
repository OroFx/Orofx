import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { Shield, Users, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustBadgesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();
  const traders = useCountUp(2143, 2000, 0, isVisible);
  const trades = useCountUp(12847, 2500, 0, isVisible);
  const months = useCountUp(14, 1500, 0, isVisible);
  const pips = useCountUp(34520, 2500, 0, isVisible);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden" style={{ background: '#0D0F14' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D12] via-[#0D0F14] to-[#0D0F14]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, value: traders.toLocaleString() + '+', label: t('trust.activeTraders') },
              { icon: <TrendingUp className="w-6 h-6" />, value: trades.toLocaleString(), label: t('trust.totalTrades') },
              { icon: <Clock className="w-6 h-6" />, value: months + ' ' + t('trust.months'), label: t('trust.trackRecord') },
              { icon: <Shield className="w-6 h-6" />, value: pips.toLocaleString(), label: t('trust.totalPips') },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-white/5 bg-[#151821]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2E8BFF]/10 flex items-center justify-center text-[#2E8BFF] mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#9CA3AF] text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
