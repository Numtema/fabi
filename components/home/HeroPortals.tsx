'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const portals = [
  {
    tag: 'RECEVOIR',
    title: 'Soins Énergétiques',
    subtitle: 'LaHoChi · Magnétisme · Reiki',
    description: 'Un temps d’accueil et d’harmonisation pour déposer ce qui pèse et retrouver l’équilibre.',
    href: '/soins-energetiques',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'RALENTIR',
    title: 'Massage Lemniscate',
    subtitle: 'Un geste doux, rythmé, continu',
    description: 'Le huit infini dessiné d’un bout à l’autre du corps, pour un lâcher-prise physique absolu.',
    href: '/massage-lemniscate',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'COMPOSER',
    title: 'Aromathérapie & Créations',
    subtitle: 'Sprays · Élixirs · Parfum sur mesure',
    description: 'L’univers végétal de l’Officine pour prolonger le bien-être chez soi ou créer son sillage.',
    href: '/officine',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  },
];

export function HeroPortals() {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-[#092C31]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#FCF8F0]/10">
            <div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#C2A064] font-medium block mb-1">
                Trois portes d’entrée
              </span>
              <h2 className="font-editorial text-[28px] md:text-[40px] text-[#FCF8F0] leading-tight">
                Choisir selon votre besoin du moment
              </h2>
            </div>
            <p className="text-[13px] md:text-[14px] text-[#E8DDCA]/70 max-w-md mt-2 md:mt-0 font-light">
              Que vous cherchiez à relâcher le corps, apaiser le mental ou explorer l’olfaction, chaque porte ouvre vers un espace dédié.
            </p>
          </div>
        </Reveal>

        {/* Spatial Arched Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {portals.map((portal, idx) => (
            <Reveal key={portal.tag} delay={idx * 0.12}>
              <Link
                href={portal.href}
                className="group relative flex flex-col justify-between h-[420px] md:h-[480px] rounded-[36px] sm:rounded-[44px] overflow-hidden p-6 sm:p-7 border border-[#FCF8F0]/15 transition-all duration-500 hover:border-[#C2A064]/60 hover:shadow-[0_20px_50px_rgba(6,56,64,0.5)]"
              >
                {/* Background Image with Architectural Arch Treatment */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={portal.image}
                    alt={portal.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063840] via-[#063840]/60 to-transparent" />
                </div>

                {/* Top: Portal Tag & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#FCF8F0]/15 backdrop-blur-md text-[#FCF8F0] text-[10px] uppercase tracking-[0.22em] font-medium border border-white/10">
                    {portal.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FCF8F0]/15 backdrop-blur-md flex items-center justify-center text-[#FCF8F0] transition-transform duration-300 group-hover:bg-[#C2A064] group-hover:text-[#092C31] group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom: Editorial Copy */}
                <div className="relative z-10 pt-16">
                  <span className="text-[11px] text-[#C2A064] tracking-wide block mb-1">
                    {portal.subtitle}
                  </span>
                  <h3 className="font-editorial text-[26px] sm:text-[30px] text-[#FCF8F0] leading-tight mb-2 group-hover:text-[#E8DDCA] transition-colors">
                    {portal.title}
                  </h3>
                  <p className="text-[12.5px] text-[#E8DDCA]/80 leading-relaxed font-light line-clamp-2">
                    {portal.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
