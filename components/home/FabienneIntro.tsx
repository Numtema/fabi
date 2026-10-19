'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { ImageReveal } from '@/components/motion/ImageReveal';
import { BotanicalShadow } from '@/components/motion/BotanicalShadow';

export function FabienneIntro() {
  return (
    <section className="relative w-full py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] overflow-hidden">
      <BotanicalShadow variant="left" className="bottom-0 -left-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* 5 Columns: Portrait */}
          <div className="lg:col-span-5 relative">
            <ImageReveal radius="52px">
              <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto rounded-[52px] overflow-hidden shadow-[0_24px_60px_rgba(6,56,64,0.14)] border border-[#152A34]/8">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                  alt="Fabienne Dizy Olliveaud, praticienne en soins énergétiques et créatrice de L’Officine des Anges"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0]">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C2A064] block font-medium">
                    Fondatrice & Praticienne
                  </span>
                  <span className="font-editorial text-[22px] sm:text-[24px]">
                    Fabienne Dizy Olliveaud
                  </span>
                </div>
              </div>
            </ImageReveal>

            {/* Subtle decorative offset element */}
            <div className="hidden sm:block absolute -bottom-5 -right-3 bg-[#E8DDCA] text-[#063840] px-4 py-2.5 rounded-full text-[12px] font-mono shadow-md border border-[#152A34]/10">
              Praticienne depuis 2015
            </div>
          </div>

          {/* 7 Columns: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-[#C2A064] font-medium block mb-2">
                Rencontre & Philosophie
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[44px] md:text-[54px] leading-[1.04] text-[#063840]">
                Un chemin devenu une manière d’accompagner.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
                <p>
                  Le parcours de Fabienne connaît un tournant profond en 2014. Cette étape personnelle l’amène à explorer la méditation, le travail énergétique, l’intuition et différentes approches holistiques.
                </p>
                <p>
                  Depuis 2015, elle développe en Seine-Maritime une pratique qui associe écoute, présence, énergie, toucher, pendule, aromathérapie et création sensorielle.
                </p>
                <p className="text-[14.5px] text-[#74776F] italic">
                  Fabienne parle également de guidance, d’Anges, d’intuition et du monde subtil. Ces dimensions nourrissent sa sensibilité personnelle et sa manière d’aborder chaque accompagnement, toujours dans le respect strict du libre arbitre et sans aucun dogme.
                </p>
              </div>
            </Reveal>

            {/* Proof Points List */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Reiki Mikao Usui (niveaux 1 & 2)',
                  'Pratique du LaHoChi & magnétisme',
                  'Formation en géobiologie & radiesthésie',
                  'Massage énergétique Lemniscate',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-[13px] text-[#07515B]">
                    <CheckCircle2 className="w-4 h-4 text-[#C2A064] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.3}>
              <div className="pt-4">
                <Link
                  href="/fabienne"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium tracking-wide hover:bg-[#063840] transition-colors"
                >
                  <span>Découvrir le parcours de Fabienne</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
