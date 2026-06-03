import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TELEGRAM_URL = 'https://t.me/OroFxBot';

interface FooterProps {
  onOpenContact: () => void;
  onOpenComplaint: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenComplaint }) => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5" style={{ background: '#090B0F' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E8BFF] to-[#5BA4FF] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Oro<span className="text-[#2E8BFF]">Fx</span></span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-sm mb-6">{t('footer.desc')}</p>
            <div className="space-y-2 mb-6">
              <button onClick={() => window.open(TELEGRAM_URL, '_blank')} className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#2E8BFF] transition-colors text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E8BFF]" />{t('paths.p1.title')}
              </button>
              <button onClick={onOpenContact} className="flex items-center gap-2 text-[#9CA3AF] hover:text-emerald-400 transition-colors text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{t('paths.p2.title')}
              </button>
              <button onClick={onOpenComplaint} className="flex items-center gap-2 text-[#9CA3AF] hover:text-amber-400 transition-colors text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />{t('paths.p3.title')}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#151821] border border-white/5 flex items-center justify-center text-[#9CA3AF] hover:text-[#2E8BFF] hover:border-[#2E8BFF]/30 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('footer.navigate')}</h4>
            <ul className="space-y-3">
              {[
                { label: t('nav.howItWorks'), id: 'how-it-works' },
                { label: t('nav.transparency'), id: 'transparency' },
                { label: t('nav.benefits'), id: 'benefits' },
                { label: t('nav.openBroker'), id: 'recovery' },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-[#9CA3AF] hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('footer.getStarted')}</h4>
            <ul className="space-y-3">
              <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#2E8BFF] transition-colors duration-300 text-sm">{t('footer.joinTelegram')}</a></li>
              <li><button onClick={onOpenContact} className="text-[#9CA3AF] hover:text-emerald-400 transition-colors duration-300 text-sm">{t('paths.p2.cta')}</button></li>
              <li><button onClick={onOpenComplaint} className="text-[#9CA3AF] hover:text-amber-400 transition-colors duration-300 text-sm">{t('paths.p3.cta')}</button></li>
              <li><a href="mailto:support@orofx.ch" className="text-[#9CA3AF] hover:text-[#2E8BFF] transition-colors duration-300 text-sm">{t('footer.support')}: support@orofx.ch</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF]/60 text-xs">&copy; {new Date().getFullYear()} OroFx. {t('footer.rights')}</p>
          <p className="text-[#9CA3AF]/40 text-xs max-w-md text-center sm:text-right">{t('footer.risk')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
