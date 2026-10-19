'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Compass, Droplet, Users } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

interface Workshop {
  id: string;
  title: string;
  category: string;
  duration: string;
  format: string;
  audience: string;
  description: string;
  icon: typeof Compass;
}

const workshopList: Workshop[] = [
  {
    id: 'ws-pendule',
    title: 'Initiation à la Radiesthésie & au Pendule',
    category: 'Radiesthésie Pratique',
    duration: 'Demi-journée (3h30)',
    format: 'En présentiel · Petit groupe (4 à 6 personnes)',
    audience: 'Débutants ou curieux souhaitant poser des bases éthiques',
    description: 'Apprendre à tenir le pendule, définir sa convention mentale, manipuler les cadrans de Bovis et pratiquer sans dérive ni superstition.',
    icon: Compass,
  },
  {
    id: 'ws-parfum',
    title: 'Atelier Création de Parfum d’Ambiance',
    category: 'Aromathérapie Créative',
    duration: '3 heures',
    format: 'En présentiel à l’Officine · 4 personnes',
    audience: 'Amoureux des fragrances et du bien-être végétal',
    description: 'Découverte des familles olfactives, composition pas à pas d’une brume personnalisée et repartir avec son flacon ambré gravé.',
    icon: Droplet,
  },
  {
    id: 'ws-meditation',
    title: 'Cercle de Méditation & Relaxation Sonore',
    category: 'Pratique Collective',
    duration: '1h30 en soirée ou week-end',
    format: 'En présentiel ou visioconférence guidée',
    audience: 'Toute personne en quête d’un temps de dépose mental',
    description: 'Une parenthèse pour relâcher les tensions corporelles, respirer ensemble et s’imprégner d’un état de calme régénérant.',
    icon: Users,
  },
];

export function Workshops() {
  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] border-t border-[#152A34]/8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#152A34]/10">
            <div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                Transmission & Pédagogie
              </span>
              <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[56px] leading-[1] text-[#063840]">
                Apprendre. Expérimenter. Transmettre.
              </h2>
            </div>
            <p className="text-[14px] text-[#74776F] max-w-md mt-3 md:mt-0 font-light leading-relaxed">
              Des temps d’initiation en petit comité pour développer votre autonomie, affiner votre sensibilité et explorer le monde végétal et vibratoire.
            </p>
          </div>
        </Reveal>

        {/* Editorial Workshops List */}
        <div className="space-y-4">
          {workshopList.map((ws, idx) => {
            const Icon = ws.icon;
            return (
              <Reveal key={ws.id} delay={idx * 0.1}>
                <div className="group rounded-[32px] p-6 sm:p-8 bg-white/70 border border-[#152A34]/10 hover:border-[#C2A064]/50 hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start space-x-5 flex-1">
                    <div className="w-12 h-12 rounded-full bg-[#E8DDCA]/60 text-[#07515B] flex items-center justify-center shrink-0 group-hover:bg-[#07515B] group-hover:text-[#FCF8F0] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#C2A064] font-semibold bg-[#063840]/5 px-2.5 py-0.5 rounded-full">
                          {ws.category}
                        </span>
                        <span className="text-[11px] text-[#74776F]">
                          {ws.format}
                        </span>
                      </div>
                      <h3 className="font-editorial text-[24px] sm:text-[28px] text-[#063840] leading-tight">
                        {ws.title}
                      </h3>
                      <p className="text-[13.5px] text-[#74776F] font-light max-w-2xl">
                        {ws.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-3.5 sm:gap-5 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#152A34]/8 w-full lg:w-auto">
                    <div className="flex items-center justify-between sm:block text-left lg:text-right">
                      <span className="text-[12px] text-[#07515B] font-semibold block">
                        {ws.duration}
                      </span>
                      <span className="text-[11.5px] text-[#74776F]">
                        Dates sur demande
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[11.5px] sm:text-[12px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors shadow-sm"
                    >
                      <span>Recevoir le programme</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A064]" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
