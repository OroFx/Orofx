import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/i18n/translations';

const TELEGRAM_URL = 'https://t.me/OroFxBot';

const FlagDE = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-[2px] overflow-hidden flex-shrink-0">
    <rect width="20" height="4.67" fill="#000" />
    <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
    <rect y="9.33" width="20" height="4.67" fill="#FFCC00" />
  </svg>
);

const FlagEN = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-[2px] overflow-hidden flex-shrink-0">
    <rect width="20" height="14" fill="#012169" />
    <path d="M0 0 L20 14 M20 0 L0 14" stroke="#FFF" strokeWidth="2.4" />
    <path d="M0 0 L20 14 M20 0 L0 14" stroke="#C8102E" strokeWidth="1.2" />
    <path d="M10 0 V14 M0 7 H20" stroke="#FFF" strokeWidth="4" />
    <path d="M10 0 V14 M0 7 H20" stroke="#C8102E" strokeWidth="2.4" />
  </svg>
);

const FlagIT = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-[2px] overflow-hidden flex-shrink-0">
    <rect width="6.67" height="14" fill="#009246" />
    <rect x="6.67" width="6.67" height="14" fill="#FFF" />
    <rect x="13.33" width="6.67" height="14" fill="#CE2B37" />
  </svg>
);

const languageNames: Record<Language, string> = { en: 'English', de: 'Deutsch', it: 'Italiano' };
const languages: { code: Language; label: string; flag: React.ReactNode }[] = [
  { code: 'en', label: 'EN', flag: <FlagEN /> },
  { code: 'de', label: 'DE', flag: <FlagDE /> },
  { code: 'it', label: 'IT', flag: <FlagIT /> },
];
const languageOrder: Language[] = ['en', 'de', 'it'];

interface NavbarProps {
  onOpenContact: () => void;
  onOpenComplaint: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenComplaint }) => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (actionsRef.current && !actionsRef.current.contains(e.target as Node)) setActionsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const currentLang = languages.find(l => l.code === language) || languages[0];
  const cycleLanguage = () => {
    const nextIndex = (languageOrder.indexOf(language) + 1) % languageOrder.length;
    setLanguage(languageOrder[nextIndex]);
  };
  const nextLang = languages[(languageOrder.indexOf(language) + 1) % languageOrder.length];

  const pathLabel = language === 'de' ? 'Wähle deinen Weg' : language === 'it' ? 'Scegli il tuo percorso' : 'Choose your path';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0D0F14]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E8BFF] to-[#5BA4FF] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Oro<span className="text-[#2E8BFF]">Fx</span></span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: t('nav.howItWorks'), id: 'how-it-works' },
              { label: t('nav.transparency'), id: 'transparency' },
              { label: t('nav.benefits'), id: 'benefits' },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-[#9CA3AF] hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer">
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">

            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                {currentLang.flag}
                <span className="text-[#9CA3AF] text-xs font-semibold">{currentLang.label}</span>
                <ChevronDown className={`w-3 h-3 text-[#9CA3AF] transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 rounded-xl border border-white/10 bg-[#151821] backdrop-blur-xl shadow-2xl overflow-hidden">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => { setLanguage(lang.code); setLangOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${language === lang.code ? 'bg-[#2E8BFF]/10 text-[#5BA4FF]' : 'text-[#9CA3AF] hover:bg-white/5 hover:text-white'}`}>
                      {lang.flag}
                      <span>{languageNames[lang.code]}</span>
                      {language === lang.code && (
                        <svg className="w-4 h-4 ml-auto text-[#2E8BFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions Dropdown */}
            <div ref={actionsRef} className="relative">
              <button
                onClick={() => setActionsOpen(!actionsOpen)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 cursor-pointer border border-[#2E8BFF]/40 bg-[#2E8BFF]/10 hover:bg-[#2E8BFF]/20 hover:border-[#2E8BFF] hover:shadow-[0_0_30px_rgba(46,139,255,0.3)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5BA4FF]">
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                </svg>
                <span className="text-[#5BA4FF]">{pathLabel}</span>
                <ChevronDown className={`w-3 h-3 text-[#5BA4FF] transition-transform duration-200 ${actionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {actionsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 rounded-xl border border-white/10 bg-[#151821] backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider">{pathLabel}</p>
                  </div>

                  {/* Telegram */}
                  <button
                    onClick={() => { window.open(TELEGRAM_URL, '_blank'); setActionsOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-4 hover:bg-[#2E8BFF]/10 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#2E8BFF]/10 border border-[#2E8BFF]/30 flex items-center justify-center group-hover:bg-[#2E8BFF]/20 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#2E8BFF]">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">{t('paths.p1.title')}</p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{t('paths.p1.desc').substring(0, 40)}...</p>
                    </div>
                  </button>

                  {/* Investor */}
                  <button
                    onClick={() => { onOpenContact(); setActionsOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-4 hover:bg-emerald-500/10 transition-all duration-200 group border-t border-white/5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">{t('paths.p2.title')}</p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{t('paths.p2.desc').substring(0, 40)}...</p>
                    </div>
                  </button>

                  {/* Beschwerde */}
                  <button
                    onClick={() => { onOpenComplaint(); setActionsOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-4 hover:bg-amber-500/10 transition-all duration-200 group border-t border-white/5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">{t('paths.p3.title')}</p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{t('paths.p3.desc').substring(0, 40)}...</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={cycleLanguage} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              {nextLang.flag}
              <span className="text-[#9CA3AF] text-xs font-semibold">{nextLang.label}</span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 cursor-pointer">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0F14]/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {[
              { label: t('nav.howItWorks'), id: 'how-it-works' },
              { label: t('nav.transparency'), id: 'transparency' },
              { label: t('nav.benefits'), id: 'benefits' },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-[#9CA3AF] hover:text-white transition-colors duration-300 text-base font-medium py-2 cursor-pointer">
                {item.label}
              </button>
            ))}

            <div className="flex items-center gap-2 pt-2 pb-2">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => setLanguage(lang.code)} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all duration-300 cursor-pointer ${language === lang.code ? 'border-[#2E8BFF]/50 bg-[#2E8BFF]/10 text-[#5BA4FF]' : 'border-white/10 bg-white/5 text-[#9CA3AF] hover:bg-white/10'}`}>
                  {lang.flag}
                  <span className="text-xs font-semibold">{lang.label}</span>
                </button>
              ))}
            </div>

            <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider pt-2">{pathLabel}</p>

            <div className="space-y-3">
              <button onClick={() => { window.open(TELEGRAM_URL, '_blank'); setMobileMenuOpen(false); }} className="w-full flex items-center gap-3 py-3 px-4 rounded-xl border border-[#2E8BFF]/30 bg-[#2E8BFF]/10 hover:bg-[#2E8BFF]/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#2E8BFF]/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#2E8BFF]">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <span className="text-[#5BA4FF] text-sm font-semibold">{t('paths.p1.title')}</span>
              </button>
              <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="w-full flex items-center gap-3 py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span className="text-emerald-400 text-sm font-semibold">{t('paths.p2.title')}</span>
              </button>
              <button onClick={() => { onOpenComplaint(); setMobileMenuOpen(false); }} className="w-full flex items-center gap-3 py-3 px-4 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-amber-400 text-sm font-semibold">{t('paths.p3.title')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
