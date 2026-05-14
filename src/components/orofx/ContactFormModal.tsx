import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      return;
    }
    setSending(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vorname: firstName.trim(),
          nachname: lastName.trim(),
          email: email.trim(),
          nachricht: message.trim(),
        }),
      });

      if (!response.ok) throw new Error('Send failed');

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : String(err));
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:py-12"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        style={{ background: '#0D0F14' }}
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#2E8BFF]/10 rounded-full blur-[100px] pointer-events-none" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t('contact.title')}</h3>
              <p className="text-[#D1D5DB] text-base leading-relaxed mb-6">
                {t('contact.success')}
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 rounded-xl bg-[#2E8BFF] text-white font-semibold hover:bg-[#5BA4FF] transition-colors"
              >
                OK
              </button>
            </div>
          ) : (
            <>
              <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t('contact.title')}
              </h3>
              <p className="text-[#9CA3AF] text-sm sm:text-base mb-6">
                {t('contact.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-[#D1D5DB] mb-1.5">
                      {t('contact.firstName')} <span className="text-[#2E8BFF]">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#2E8BFF] focus:bg-white/[0.05] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-[#D1D5DB] mb-1.5">
                      {t('contact.lastName')} <span className="text-[#2E8BFF]">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#2E8BFF] focus:bg-white/[0.05] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#D1D5DB] mb-1.5">
                    {t('contact.email')} <span className="text-[#2E8BFF]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#2E8BFF] focus:bg-white/[0.05] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#D1D5DB] mb-1.5">
                    {t('contact.message')} <span className="text-[#2E8BFF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#2E8BFF] focus:bg-white/[0.05] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                    {t('contact.error')}
                    {errorMsg && <div className="text-xs text-red-400/70 mt-1">{errorMsg}</div>}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 rounded-xl bg-[#2E8BFF] text-white font-semibold text-base transition-all duration-300 hover:bg-[#5BA4FF] hover:shadow-[0_0_40px_rgba(46,139,255,0.5)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#2E8BFF] disabled:hover:shadow-none"
                >
                  {sending ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;