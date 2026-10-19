'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, PhoneCall, Users } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

export function EnergeticIntroduction() {
  return (
    <section className="relative w-full py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 6 Columns Editorial */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                Approche Énergétique & LaHoChi
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[44px] md:text-[54px] leading-[1.04] text-[#063840]">
                Recevoir un temps d’écoute et de présence.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
                <p>
                  Fabienne pratique notamment le LaHoChi, le magnétisme et le Reiki Mikao Usui. Chaque rencontre commence par un temps d’échange sincère autour de votre état général et de ce qui vous amène.
                </p>
                <p>
                  Selon la modalité retenue, la séance se poursuit dans le calme, vêtu, confortablement allongé. En présentiel au cabinet ou à distance, la transmission s’effectue dans une douceur respectueuse.
                </p>
                <p>
                  Un temps de clôture permet ensuite d’atterrir, de partager les ressentis perçus et de formuler des clés bienveillantes pour prolonger les bienfaits au quotidien.
                </p>
              </div>
            </Reveal>

            {/* 3 Formats cards */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-[20px] bg-[#E8DDCA]/45 border border-[#152A34]/6">
                  <Sparkles className="w-4 h-4 text-[#C2A064] mb-1.5" />
                  <span className="text-[12.5px] font-medium text-[#063840] block">En cabinet</span>
                  <span className="text-[11px] text-[#74776F]">Seine-Maritime</span>
                </div>
                <div className="p-3.5 rounded-[20px] bg-[#E8DDCA]/45 border border-[#152A34]/6">
                  <PhoneCall className="w-4 h-4 text-[#C2A064] mb-1.5" />
                  <span className="text-[12.5px] font-medium text-[#063840] block">À distance</span>
                  <span className="text-[11px] text-[#74776F]">Partout en France</span>
                </div>
                <div className="p-3.5 rounded-[20px] bg-[#E8DDCA]/45 border border-[#152A34]/6">
                  <Users className="w-4 h-4 text-[#C2A064] mb-1.5" />
                  <span className="text-[12.5px] font-medium text-[#063840] block">En groupe</span>
                  <span className="text-[11px] text-[#74776F]">Ateliers & cercles</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/soins-energetiques"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium tracking-wide hover:bg-[#063840] transition-colors"
                >
                  <span>Découvrir le LaHoChi & les soins</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#E8DDCA] text-[#063840] text-[13px] font-medium tracking-wide hover:bg-[#D7C4A3] transition-colors"
                >
                  <span>Consulter les tarifs</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 6 Columns Atmosphere Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[1.2/1] rounded-[48px] overflow-hidden shadow-[0_24px_60px_rgba(6,56,64,0.12)] border border-[#152A34]/8">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
                alt="Espace de détente et d'harmonisation énergétique"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0]">
                <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                  Pratique & Écoute
                </span>
                <span className="font-editorial text-[22px]">
                  Un sas de déconnexion pour apaiser le rythme
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
