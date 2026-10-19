'use client';

import React from 'react';
import { Reveal } from '@/components/motion/Reveal';

export function QuoteInterlude() {
  return (
    <section className="relative w-full py-28 md:py-44 px-6 sm:px-12 bg-[#092C31] text-[#FCF8F0] overflow-hidden flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block mb-6">
            Respiration & Écoute
          </span>
          <p className="text-[20px] sm:text-[28px] md:text-[36px] uppercase tracking-[0.06em] text-[#E8DDCA]/80 font-light leading-snug mb-4">
            Il existe des moments où l’on n’a pas besoin d’aller plus vite.
          </p>
          <p className="font-editorial italic text-[36px] sm:text-[52px] md:text-[68px] text-[#C8A66A] leading-[1.02]">
            Mais d’écouter autrement.
          </p>
        </Reveal>

        <div className="mt-10 flex items-center justify-center space-x-3 text-[#C2A064]/50">
          <div className="h-[1px] w-12 bg-[#C2A064]/30" />
          <span className="text-[12px] font-editorial tracking-widest text-[#C2A064]">1.618</span>
          <div className="h-[1px] w-12 bg-[#C2A064]/30" />
        </div>
      </div>
    </section>
  );
}
