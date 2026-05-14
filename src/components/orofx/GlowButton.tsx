import React from 'react';
interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'large';
}
const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  size = 'default'
}) => {
  const baseClasses = `
    relative font-semibold rounded-xl transition-all duration-300 cursor-pointer
    ${size === 'large' ? 'px-10 py-5 text-lg' : 'px-8 py-4 text-base'}
  `;
  if (variant === 'primary') {
    return <button onClick={onClick} className={`${baseClasses} bg-[#2E8BFF] text-white hover:bg-[#5BA4FF] hover:shadow-[0_0_40px_rgba(46,139,255,0.5)] active:scale-[0.97] ${className}`}>
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </button>;
  }
  return <button onClick={onClick} className={`${baseClasses} bg-transparent text-white border border-[#2E8BFF]/40 hover:border-[#2E8BFF] hover:bg-[#2E8BFF]/10 hover:shadow-[0_0_30px_rgba(46,139,255,0.2)] active:scale-[0.97] ${className}`}>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>;
};
export default GlowButton;