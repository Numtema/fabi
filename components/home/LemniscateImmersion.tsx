'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, Coffee, ShieldCheck } from 'lucide-react';
import { GoldenThread } from '@/components/motion/GoldenThread';
import { Reveal } from '@/components/motion/Reveal';

export function LemniscateImmersion() {
  return (
    <section className="relative w-full px-2.5 sm:px-4 py-8 bg-[#092C31]">
      <div className="relative rounded-[40px] sm:rounded-[56px] md:rounded-[72px] overflow-hidden bg-gradient-to-b from-[#063840] via-[#07515B]/40 to-[#092C31] text-[#FCF8F0] p-6 sm:p-12 md:p-16 border border-[#FCF8F0]/12 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#07515B]/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header sequence */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <Reveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block mb-3">
                Signature Gestuelle · Le Huit Allongé
              </span>
              <h2 className="font-editorial text-[38px] sm:text-[54px] md:text-[68px] leading-[0.96] text-[#FCF8F0] mb-3">
                Le mouvement sans rupture.
              </h2>
              <p className="font-editorial italic text-[22px] sm:text-[28px] md:text-[34px] text-[#C8A66A]">
                Le huit devient geste.
              </p>
            </Reveal>
          </div>

          {/* Central Lemniscate Golden Animation */}
          <div className="my-6 md:my-10">
            <GoldenThread variant="lemniscate" className="h-44 sm:h-56" />
          </div>

          {/* Editorial Words Sequence */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#E8DDCA]/70 text-center my-6 py-4 border-y border-white/10">
            <span>Un mouvement</span>
            <span className="text-[#C2A064]">→</span>
            <span>Puis un autre</span>
            <span className="text-[#C2A064]">→</span>
            <span>Sans rupture</span>
            <span className="text-[#C2A064]">→</span>
            <span className="text-[#FCF8F0] font-semibold">Continuité absolue</span>
          </div>

          {/* Content & Imagery Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12">
            {/* 6 Columns: Atmosphere Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-[36px] sm:rounded-[44px] overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"
                  alt="Gestuelle continue et enveloppante du massage Lemniscate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter brightness-[0.8] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063840] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] text-[#C2A064] uppercase tracking-wider block font-medium">
                    Toucher conscient
                  </span>
                  <span className="font-editorial text-[20px] text-[#FCF8F0]">
                    Une chorégraphie apaisante reliant le haut et le bas
                  </span>
                </div>
              </div>
            </div>

            {/* 6 Columns: Descriptive & Key Points */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <p className="text-[15px] sm:text-[17px] text-[#E8DDCA]/90 font-light leading-relaxed">
                  Le massage Lemniscate doit son nom au mouvement du huit allongé (∞), symbole de continuité et d’harmonie des polarités.
                </p>
                <p className="text-[15px] sm:text-[17px] text-[#E8DDCA]/90 font-light leading-relaxed">
                  Fabienne réalise des gestes doux, rythmés et enveloppants sur l’avant et l’arrière du corps, de la tête aux pieds. Pour les personnes qui préfèrent éviter le contact direct ou qui ont une sensibilité particulière, Fabienne adapte avec délicatesse son approche.
                </p>
              </Reveal>

              {/* Ritual Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-[22px] bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-[#C2A064] mb-2" />
                  <span className="text-[13px] font-medium block text-[#FCF8F0]">Env. 1h30</span>
                  <span className="text-[11px] text-[#E8DDCA]/60">Séance complète</span>
                </div>
                <div className="p-4 rounded-[22px] bg-white/5 border border-white/10">
                  <Coffee className="w-4 h-4 text-[#C2A064] mb-2" />
                  <span className="text-[13px] font-medium block text-[#FCF8F0]">Tisane bio</span>
                  <span className="text-[11px] text-[#E8DDCA]/60">Échange d’atterrissage</span>
                </div>
                <div className="p-4 rounded-[22px] bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#C2A064] mb-2" />
                  <span className="text-[13px] font-medium block text-[#FCF8F0]">Option douce</span>
                  <span className="text-[11px] text-[#E8DDCA]/60">Possible sans contact</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="/massage-lemniscate"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#C2A064] text-[#092C31] text-[13px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
                >
                  <span>Découvrir le Massage Lemniscate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
