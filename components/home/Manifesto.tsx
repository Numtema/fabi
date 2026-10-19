'use client';

import React from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { BotanicalShadow } from '@/components/motion/BotanicalShadow';

export function Manifesto() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-10 bg-[#FCF8F0] text-[#152A34] overflow-hidden">
      {/* Subtle Botanical Shadow */}
      <BotanicalShadow variant="right" className="top-10 -right-20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block mb-4">
            Le Manifeste de L’Officine
          </span>
          <h2 className="font-editorial text-[36px] sm:text-[48px] md:text-[62px] leading-[1.02] text-[#063840] mb-8">
            Une approche qui commence <br />
            <span className="italic font-normal text-[#C8A66A]">par l’écoute.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-6 text-[17px] sm:text-[20px] md:text-[22px] leading-relaxed text-[#152A34]/85 font-light max-w-3xl mx-auto">
            <p>
              Il n’y a pas une seule manière de prendre soin de soi.
            </p>
            <p className="font-editorial text-[24px] sm:text-[28px] md:text-[32px] text-[#07515B] italic leading-tight">
              « Il y a votre histoire, votre sensibilité, votre rythme et ce qui demande aujourd’hui un peu plus d’espace. »
            </p>
            <p className="text-[16px] sm:text-[18px] text-[#74776F] leading-relaxed">
              Fabienne vous accompagne à travers différentes pratiques, choisies selon votre besoin, votre sensibilité et sa manière de travailler. Prendre le temps d’écouter avant de proposer.
            </p>
          </div>
        </Reveal>

        {/* Decorative architectural divider */}
        <div className="mt-12 flex items-center justify-center space-x-3 text-[#C2A064]">
          <div className="h-[1px] w-16 bg-[#C2A064]/40" />
          <span className="text-[13px] font-editorial">1.618</span>
          <div className="h-[1px] w-16 bg-[#C2A064]/40" />
        </div>
      </div>
    </section>
  );
}
