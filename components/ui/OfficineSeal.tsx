'use client';

import React from 'react';
import Link from 'next/link';

interface OfficineSealProps {
  scrolled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'monumental';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function OfficineSeal({
  scrolled = false,
  size = 'md',
  className = '',
  href = '/',
  onClick,
}: OfficineSealProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-[7px]',
    md: scrolled ? 'w-[72px] h-[72px] text-[8px]' : 'w-[88px] h-[88px] text-[9px]',
    lg: 'w-24 h-24 text-[10px]',
    monumental: 'w-36 h-36 md:w-44 md:h-44 text-[12px]',
  }[size];

  const content = (
    <div
      onClick={onClick}
      className={`relative rounded-full flex items-center justify-center transition-all duration-500 group select-none shadow-[0_8px_24px_rgba(6,56,64,0.18)] ${sizeClasses} ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #FCF8F0 0%, #E8DDCA 65%, #D7C4A3 100%)',
        border: '1.5px solid rgba(194, 160, 100, 0.7)',
      }}
    >
      {/* Outer subtle gold accent ring */}
      <div className="absolute inset-[3px] rounded-full border border-[#C2A064]/40" />

      {/* Circular Curving Text via SVG */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full transform transition-transform duration-700 group-hover:rotate-6"
      >
        <path
          id="seal-text-path"
          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text
          className="uppercase tracking-[0.22em] fill-[#07515B] font-medium"
          style={{ fontSize: '7.8px' }}
        >
          <textPath href="#seal-text-path" startOffset="0%">
            L’OFFICINE DES ANGES · FABIENNE DIZY ·
          </textPath>
        </text>
      </svg>

      {/* Central Monogram & Lemniscate */}
      <div className="relative flex flex-col items-center justify-center z-10 text-[#07515B]">
        {/* Subtle Lemniscate glyph */}
        <svg
          viewBox="0 0 32 16"
          fill="none"
          className="w-5 h-3 text-[#C2A064]"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M16 8C19 3 28 3 28 8C28 13 19 13 16 8C13 3 4 3 4 8C4 13 13 13 16 8Z" />
        </svg>
        <span className="font-editorial text-[14px] md:text-[16px] tracking-widest text-[#063840] leading-none mt-0.5">
          OA
        </span>
        <span className="text-[6.5px] tracking-[0.18em] uppercase text-[#7B8060] font-sans mt-0.5">
          1.618
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Retour à l'accueil L’Officine des Anges">
        {content}
      </Link>
    );
  }

  return content;
}
