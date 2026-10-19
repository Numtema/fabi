'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Wind, Heart, Users } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

export function MeditationGroup() {
  return (
    <section className="relative w-full py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#E8DDCA]/35 text-[#152A34] border-t border-[#152A34]/6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
              Méditation & Cercles Partagés
            </span>
            <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[56px] leading-[1] text-[#063840]">
              Ralentir. Respirer. Écouter.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#74776F] mt-4 font-light leading-relaxed">
              Fabienne propose des temps de méditation et de relaxation profonde, en séance individuelle comme au sein de cercles intimes en Seine-Maritime.
            </p>
          </Reveal>
        </div>

        {/* 2 Formats Cards: Individuel & Collectif "ENSEMBLE" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Individuel */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-[36px] bg-[#FCF8F0] p-8 border border-[#152A34]/8 flex flex-col justify-between shadow-[0_12px_36px_rgba(6,56,64,0.06)]">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#07515B]/10 text-[#07515B] flex items-center justify-center mb-5">
                  <Wind className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#C2A064] font-medium">
                  Séance Sur Mesure
                </span>
                <h3 className="font-editorial text-[26px] sm:text-[30px] text-[#063840] mb-3">
                  Méditation Individuelle
                </h3>
                <p className="text-[14px] text-[#74776F] leading-relaxed mb-6 font-light">
                  Un accompagnement personnalisé au cabinet pour installer une respiration ventrale stable, traverser une phase d’anxiété ou s’ancrer dans un rituel quotidien adapté à votre rythme.
                </p>
              </div>

              <div className="pt-4 border-t border-[#152A34]/8 flex items-center justify-between">
                <span className="text-[12px] text-[#07515B] font-medium">45 min à 1h15</span>
                <Link
                  href="/meditation"
                  className="inline-flex items-center space-x-1.5 text-[12px] font-medium uppercase tracking-wider text-[#07515B] hover:text-[#C2A064]"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Ensemble */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-[36px] bg-[#063840] text-[#FCF8F0] p-8 border border-[#FCF8F0]/10 flex flex-col justify-between shadow-[0_16px_44px_rgba(6,56,64,0.25)]">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 text-[#C2A064] flex items-center justify-center mb-5">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#C2A064] font-medium">
                  Le Cercle · Ensemble
                </span>
                <h3 className="font-editorial text-[26px] sm:text-[30px] text-[#FCF8F0] mb-3">
                  Séances de Groupe & Cercles
                </h3>
                <p className="text-[14px] text-[#E8DDCA]/80 leading-relaxed mb-6 font-light">
                  La force d’un groupe bienveillant pour poser le mental, partager des visualisations guidées et vivre une profonde communion silencieuse. Groupes privés, associations ou particuliers.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[12px] text-[#C2A064] font-medium">Groupes restreints</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
                >
                  <span>Parler de mon projet</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
