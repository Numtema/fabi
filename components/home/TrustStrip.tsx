'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Star, MapPin, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

export function TrustStrip() {
  return (
    <section className="relative w-full py-8 bg-[#092C31] border-y border-[#FCF8F0]/10">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-[#E8DDCA]/80">
            {/* 01: Année */}
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#07515B]/50 border border-[#C2A064]/30 flex items-center justify-center shrink-0 text-[#C2A064]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[13px] font-medium text-[#FCF8F0] block">
                  Depuis 2015
                </span>
                <span className="text-[11px] text-[#E8DDCA]/60 font-light">
                  10 ans de pratique & d’accompagnement
                </span>
              </div>
            </div>

            {/* 02: Territoire */}
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#07515B]/50 border border-[#C2A064]/30 flex items-center justify-center shrink-0 text-[#C2A064]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[13px] font-medium text-[#FCF8F0] block">
                  Seine-Maritime
                </span>
                <span className="text-[11px] text-[#E8DDCA]/60 font-light">
                  En cabinet & soins à distance
                </span>
              </div>
            </div>

            {/* 03: Avis Vérifiés */}
            <Link
              href="/temoignages"
              className="flex items-center space-x-3.5 group hover:text-[#FCF8F0] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#07515B]/50 border border-[#C2A064]/30 flex items-center justify-center shrink-0 text-[#C2A064] group-hover:bg-[#C2A064] group-hover:text-[#092C31] transition-colors">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-[13px] font-medium text-[#FCF8F0] block group-hover:text-[#C2A064] transition-colors">
                  5.0 / 5 · Avis AMEDCINE
                </span>
                <span className="text-[11px] text-[#E8DDCA]/60 font-light">
                  26 retours clients vérifiés
                </span>
              </div>
            </Link>

            {/* 04: Éthique & Bienveillance */}
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#07515B]/50 border border-[#C2A064]/30 flex items-center justify-center shrink-0 text-[#C2A064]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[13px] font-medium text-[#FCF8F0] block">
                  Éthique & Bienveillance
                </span>
                <span className="text-[11px] text-[#E8DDCA]/60 font-light">
                  Cadre bienveillant sans jugement
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
