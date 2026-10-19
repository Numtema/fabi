'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { GoldenThread } from '@/components/motion/GoldenThread';

const steps = [
  {
    num: '01',
    title: 'Échanger',
    subtitle: 'Comprendre ce qui vous amène',
    description: 'Chaque rencontre débute par un sas de parole et d’écoute. Vous déposez librement vos ressentis, vos doutes ou vos souhaits. Fabienne affine avec vous la proposition de la séance.',
  },
  {
    num: '02',
    title: 'S’installer',
    subtitle: 'Créer l’espace de déconnexion',
    description: 'Vous vous installez confortablement, vêtu d’une tenue souple, sur une table chauffée ou un fauteuil relaxant. Une couverture douce, une ambiance olfactive discrète et un fond sonore apaisant vous enveloppent.',
  },
  {
    num: '03',
    title: 'La Séance',
    subtitle: 'Vivre l’expérience choisie',
    description: 'Qu’il s’agisse du mouvement continu du massage Lemniscate, de la douceur du LaHoChi ou de la précision du pendule, le soin se déroule dans un calme habité, sans brusquerie.',
  },
  {
    num: '04',
    title: 'L’Intégration',
    subtitle: 'Atterrir en douceur',
    description: 'Un temps est systématiquement préservé pour revenir à soi. Autour d’une boisson chaude offerte, vous partagez vos impressions et Fabienne vous transmet ses observations bienveillantes.',
  },
];

export function StickyProcess() {
  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] border-t border-[#152A34]/8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: 38.2% Sticky Desktop Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
            <Reveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                Le Déroulement d’un Soin
              </span>
              <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[54px] leading-[1.02] text-[#063840]">
                Comment se déroule un accompagnement ?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
                Chaque pratique possède son propre déroulé, adapté à votre sensibilité. Mais une chose demeure constante : prendre d’abord le temps d’échanger.
              </p>
              <p className="text-[14px] text-[#07515B] font-medium italic mt-2">
                Aucune précipitation, aucun protocole figé.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-2">
                <Link
                  href="/prendre-rendez-vous"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
                >
                  <span>Prendre rendez-vous</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 61.8% Scroll Steps */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8">
            {/* Vertical Golden Timeline behind steps */}
            <div className="absolute top-6 bottom-6 left-0 sm:left-4">
              <GoldenThread variant="timeline" />
            </div>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <Reveal key={step.num} delay={idx * 0.1}>
                  <div className="relative pl-6 sm:pl-8 rounded-[28px] p-6 sm:p-8 bg-white/75 border border-[#152A34]/8 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-editorial text-[36px] sm:text-[42px] text-[#C2A064] leading-none">
                        {step.num}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-[#7B8060] font-medium">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-editorial text-[24px] sm:text-[28px] text-[#063840] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#74776F] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
