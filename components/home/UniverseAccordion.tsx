'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

interface UniverseItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
}

const universes: UniverseItem[] = [
  {
    id: 'u-recevoir',
    tag: 'RECEVOIR',
    title: 'Soins Énergétiques',
    subtitle: 'LaHoChi · Reiki · Magnétisme',
    description: 'Une séance douce pour relâcher les tensions, en cabinet ou à distance.',
    href: '/soins-energetiques',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'u-ralentir',
    tag: 'RALENTIR',
    title: 'Massage Lemniscate',
    subtitle: 'Le mouvement en huit',
    description: '1h30 de bercement ininterrompu pour retrouver la fluidité du corps.',
    href: '/massage-lemniscate',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'u-explorer',
    tag: 'EXPLORER',
    title: 'Pendule & Oracles',
    subtitle: 'Radiesthésie intuitive',
    description: 'Poser des repères clairs et explorer les résonances avec discernement.',
    href: '/radiesthesie',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'u-composer',
    tag: 'COMPOSER',
    title: 'Aromathérapie',
    subtitle: 'Créations de l’Officine',
    description: 'Flacons ambrés, sprays auriques et création de votre parfum sur mesure.',
    href: '/officine',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'u-transmettre',
    tag: 'TRANSMETTRE',
    title: 'Ateliers & Cercles',
    subtitle: 'Initiations en petit comité',
    description: 'Apprendre le pendule, créer son parfum et partager des temps collectifs.',
    href: '/ateliers-formations',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
  },
];

export function UniverseAccordion() {
  const [activeId, setActiveId] = useState<string>('u-ralentir');

  return (
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-[#092C31] text-[#FCF8F0]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
              L’Écrin Vivant
            </span>
            <h2 className="font-editorial text-[32px] sm:text-[44px] md:text-[52px] leading-tight text-[#FCF8F0]">
              Cinq univers pour vous ressourcer
            </h2>
            <p className="text-[14px] text-[#E8DDCA]/75 mt-3 font-light">
              Explorez chaque atmosphère à travers ses sensations et ses rituels.
            </p>
          </div>
        </Reveal>

        {/* Desktop Horizontal Image Strip Accordion */}
        <div className="hidden md:flex gap-3 h-[480px] w-full">
          {universes.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                animate={{
                  flex: isActive ? 3.4 : 1,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative rounded-[36px] overflow-hidden cursor-pointer border transition-colors ${
                  isActive ? 'border-[#C2A064]/70 shadow-[0_16px_40px_rgba(0,0,0,0.4)]' : 'border-[#FCF8F0]/10 hover:border-[#FCF8F0]/30'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1200px) 40vw, 25vw"
                  className="object-cover filter brightness-[0.7] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092C31] via-[#063840]/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#063840]/80 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium text-[#C2A064] border border-[#C2A064]/30">
                      {item.tag}
                    </span>
                    {isActive && (
                      <Link
                        href={item.href}
                        className="w-9 h-9 rounded-full bg-[#FCF8F0] text-[#092C31] flex items-center justify-center hover:bg-[#C2A064] transition-colors"
                        aria-label={`Accéder à ${item.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>

                  <div>
                    <h3 className="font-editorial text-[24px] sm:text-[30px] leading-tight text-[#FCF8F0] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-[#C2A064] mb-2 font-medium">
                      {item.subtitle}
                    </p>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-[12.5px] text-[#E8DDCA]/80 font-light line-clamp-2 mb-3">
                          {item.description}
                        </p>
                        <Link
                          href={item.href}
                          className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-wider text-[#C2A064] hover:text-white font-medium"
                        >
                          <span>Découvrir l’espace</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Vertical Grid */}
        <div className="md:hidden space-y-4">
          {universes.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative block h-[220px] rounded-[28px] overflow-hidden border border-[#FCF8F0]/15 p-5 group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="95vw"
                className="object-cover filter brightness-[0.65]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092C31] via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#C2A064] font-medium bg-[#063840]/80 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-editorial text-[22px] text-[#FCF8F0]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#E8DDCA]/80 font-light line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
