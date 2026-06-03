import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ComplaintFormModalProps {
  open: boolean;
  onClose: () => void;
}

const ComplaintFormModal: React.FC<ComplaintFormModalProps> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const resetForm = () => {
    setFirstName(''); setLastName(''); setEmail('');
    setPhone(''); setMessage(''); setStatus('idle');
  };

  const handleClose = () => { onClose(); setTimeout(resetForm, 300); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vorname: firstName.trim(),
          nachname: lastName.trim(),
          email: email.trim(),
          telefon: phone.trim(),
          nachricht: message.trim(),
          type: 'complaint',
        }),
      });
      if (!response.ok) throw new Error('Send failed');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border border-amber-500/20 shadow-2xl overflow-hidden"
        style={{ background: '#0D0F14' }}
      >
        {/* Amber glow */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t('complaint.title')}</h3>
              <p className="text-[#D1D5DB] text-base leading-relaxed mb-6">{t('complaint.success')}</p>
              <button
                onClick={handleClose}
                className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
              >
                OK
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{t('complaint.title')}</h3>
              </div>
              <p className="text-[#9CA3AF] text-sm mb-6">{t('complaint.subtitle')}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#D1D5DB] mb-1.5">
                      {t('complaint.firstName')} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#D1D5DB] mb-1.5">
                      {t('complaint.lastName')} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#D1D5DB] mb-1.5">
                    {t('complaint.email')} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#D1D5DB] mb-1.5">
                    {t('complaint.phone')} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#D1D5DB] mb-1.5">
                    {t('complaint.message')} <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                    {t('complaint.error')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 rounded-xl bg-amber-500 text-black font-bold text-sm transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? t('complaint.sending') : t('complaint.send')}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintFormModal;