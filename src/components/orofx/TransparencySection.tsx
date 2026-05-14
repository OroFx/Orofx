import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { Activity, BarChart3, Clock, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const tradeHistory = [
  { pair: 'EUR/USD', type: 'BUY', entry: '1.0842', sl: '1.0810', tp: '1.0905', result: '+63 pips', status: 'win', time: '14:32' },
  { pair: 'GBP/JPY', type: 'SELL', entry: '188.450', sl: '188.750', tp: '187.900', result: '+55 pips', status: 'win', time: '11:15' },
  { pair: 'USD/CHF', type: 'BUY', entry: '0.8765', sl: '0.8740', tp: '0.8820', result: '+55 pips', status: 'win', time: '09:48' },
  { pair: 'XAU/USD', type: 'SELL', entry: '2045.50', sl: '2052.00', tp: '2032.00', result: '-65 pips', status: 'loss', time: '08:22' },
  { pair: 'EUR/GBP', type: 'BUY', entry: '0.8590', sl: '0.8565', tp: '0.8640', result: '+50 pips', status: 'win', time: '16:05' },
  { pair: 'USD/JPY', type: 'SELL', entry: '149.850', sl: '150.150', tp: '149.300', result: '+55 pips', status: 'win', time: '13:20' },
  { pair: 'AUD/USD', type: 'BUY', entry: '0.6542', sl: '0.6520', tp: '0.6585', result: '+43 pips', status: 'win', time: '07:45' },
];

const TransparencySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();
  const totalPips = useCountUp(256, 2500, 0, isVisible);
  const winRate = useCountUp(86, 2000, 0, isVisible);
  const [visibleRows, setVisibleRows] = useState(0);

  const features = [
    { icon: <Activity className="w-5 h-5" />, label: t('trans.feat1') },
    { icon: <BarChart3 className="w-5 h-5" />, label: t('trans.feat2') },
    { icon: <Clock className="w-5 h-5" />, label: t('trans.feat3') },
    { icon: <Eye className="w-5 h-5" />, label: t('trans.feat4') },
  ];

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setVisibleRows(prev => {
          if (prev >= tradeHistory.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="transparency" ref={ref} className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0B0D12' }}>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2E8BFF]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-[#2E8BFF] text-sm font-semibold tracking-widest uppercase mb-4">
              {t('trans.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('trans.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8BFF] to-[#5BA4FF]">
                {t('trans.headline2')}
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#2E8BFF]/20 bg-[#151821]/60 text-[#5BA4FF] text-sm font-medium"
              >
                {f.icon}
                {f.label}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-[#151821]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-white">{totalPips}</div>
              <div className="text-xs text-[#9CA3AF] mt-1">{t('trans.totalPips')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#151821]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{winRate}%</div>
              <div className="text-xs text-[#9CA3AF] mt-1">{t('trans.winRate')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#151821]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-white">7</div>
              <div className="text-xs text-[#9CA3AF] mt-1">{t('trans.tradesToday')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#151821]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-[#2E8BFF]">6/1</div>
              <div className="text-xs text-[#9CA3AF] mt-1">{t('trans.winLoss')}</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="rounded-2xl border border-white/5 bg-[#151821]/60 backdrop-blur-sm overflow-hidden">
            <div className="hidden sm:grid grid-cols-7 gap-4 px-6 py-4 border-b border-white/5 text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider">
              <div>{t('trans.tableTime')}</div>
              <div>{t('trans.tablePair')}</div>
              <div>{t('trans.tableType')}</div>
              <div>{t('trans.tableEntry')}</div>
              <div>{t('trans.tableSL')}</div>
              <div>{t('trans.tableTP')}</div>
              <div className="text-right">{t('trans.tableResult')}</div>
            </div>

            {tradeHistory.map((trade, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 sm:grid-cols-7 gap-2 sm:gap-4 px-6 py-4 border-b border-white/5 last:border-b-0 transition-all duration-500 ${
                  i < visibleRows ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className="text-[#9CA3AF] text-sm hidden sm:block">{trade.time}</div>
                <div className="text-white font-semibold text-sm">{trade.pair}</div>
                <div className={`text-sm font-semibold ${trade.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {trade.type}
                </div>
                <div className="text-[#9CA3AF] text-sm hidden sm:block">{trade.entry}</div>
                <div className="text-red-400/60 text-sm hidden sm:block">{trade.sl}</div>
                <div className="text-emerald-400/60 text-sm hidden sm:block">{trade.tp}</div>
                <div className={`text-sm font-bold text-right ${trade.status === 'win' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {trade.result}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="mt-8 rounded-2xl border border-white/5 bg-[#151821]/60 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#9CA3AF] text-sm font-medium">{t('trans.cumProfit')}</span>
              <span className="text-emerald-400 text-sm font-bold">+256 pips</span>
            </div>
            <div className="h-32 relative">
              <svg viewBox="0 0 700 120" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="profitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[30, 60, 90].map(y => (
                  <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#1E2330" strokeWidth="0.5" />
                ))}
                <path
                  d="M0 100 L100 85 L200 70 L300 55 L350 65 L400 45 L500 30 L600 20 L700 10 L700 120 L0 120 Z"
                  fill="url(#profitGradient)"
                  className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />
                <path
                  d="M0 100 L100 85 L200 70 L300 55 L350 65 L400 45 L500 30 L600 20 L700 10"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />
              </svg>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransparencySection;
