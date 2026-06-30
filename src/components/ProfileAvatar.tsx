import React from 'react';

interface ProfileAvatarProps {
  className?: string;
  size?: number;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className = '', size = 44 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`rounded-full shrink-0 ${className}`}
      style={{
        background: 'radial-gradient(circle at 50% 50%, #0c1c38 0%, #030712 100%)',
        border: '1.5px solid rgba(56, 189, 248, 0.3)',
        boxShadow: '0 0 20px rgba(14, 165, 233, 0.15)',
      }}
    >
      <defs>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="40%" stopColor="#0ea5e9" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      
      {/* Ambient Glow */}
      <circle cx="50%" cy="50%" r="38" fill="url(#starGlow)" opacity="0.6" />
      
      {/* Glowing 4-pointed Star / Sparkle */}
      <path
        d="M50 15 
           C52 35, 65 48, 85 50 
           C65 52, 52 65, 50 85 
           C48 65, 35 52, 15 50 
           C35 48, 48 35, 50 15 Z"
        fill="url(#starGrad)"
        style={{
          filter: 'drop-shadow(0px 0px 6px rgba(56, 189, 248, 0.7))',
        }}
      />
    </svg>
  );
};
