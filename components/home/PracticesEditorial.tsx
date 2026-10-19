'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Compass, Eye, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

export function PracticesEditorial() {
  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
        {/* Chapter 01: Radiesthésie / Pendule (Image Left, Copy Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(6,56,64,0.12)] border border-[#152A34]/8">
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
                alt="Radiesthésie et travail au pendule avec cadrans"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0]">
                <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                  Sensibilité & Géobiologie
                </span>
                <span className="font-editorial text-[22px]">
                  Un repère d’orientation dans les moments de doute
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <Reveal>
              <div className="flex items-center space-x-2 text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-[#C2A064] font-medium">
                <Compass className="w-4 h-4 text-[#C2A064]" />
                <span>Radiesthésie Intégrative</span>
              </div>
              <h2 className="font-editorial text-[32px] sm:text-[42px] md:text-[50px] leading-[1.04] text-[#063840]">
                Le pendule comme outil d’exploration.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
                <p>
                  La radiesthésie fait partie des outils complémentaires pratiqués par Fabienne. Elle travaille notamment avec un pendule et différents cadrans de Bovis dans le cadre de son approche intuitive.
                </p>
                <p>
                  Complétée par une formation en géobiologie, cette démarche vise à identifier les blocages d’ambiance ou à clarifier des choix personnels. Le pendule ne se substitue jamais à votre libre arbitre : il sert d’amplificateur de perception pour éclairer le chemin.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-2">
                <Link
                  href="/radiesthesie"
                  className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#07515B] hover:text-[#C2A064] transition-colors group"
                >
                  <span className="border-b border-[#07515B]/30 pb-0.5 group-hover:border-[#C2A064]">
                    Explorer la séance de radiesthésie
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Chapter 02: Oracles & Guidance (Copy Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <Reveal>
              <div className="flex items-center space-x-2 text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-[#C2A064] font-medium">
                <Eye className="w-4 h-4 text-[#C2A064]" />
                <span>Lecture Symbolique</span>
              </div>
              <h2 className="font-editorial text-[32px] sm:text-[42px] md:text-[50px] leading-[1.04] text-[#063840]">
                Quand l’image ouvre une autre lecture.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
                <p>
                  Fabienne utilise parfois les oracles en complément d’un accompagnement. Les cartes deviennent un support d’intuition, de réflexion et d’échange bienveillant.
                </p>
                <p>
                  Loin de toute prédiction théâtrale, les tirages invitent à changer d’angle de vue, à faire résonner des archétypes et à déverrouiller des prises de conscience avec douceur.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-2">
                <Link
                  href="/prestations"
                  className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#07515B] hover:text-[#C2A064] transition-colors group"
                >
                  <span className="border-b border-[#07515B]/30 pb-0.5 group-hover:border-[#C2A064]">
                    Découvrir l’accompagnement intuitif
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(6,56,64,0.12)] border border-[#152A34]/8">
              <Image
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80"
                alt="Tirage d'oracles et intuition bienveillante"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0]">
                <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                  Supports Symboliques
                </span>
                <span className="font-editorial text-[22px]">
                  Un miroir de l’instant pour éclairer ses choix
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 03: Aromathérapie (Image Left, Copy Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(6,56,64,0.12)] border border-[#152A34]/8">
              <Image
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80"
                alt="Flacons d'huiles essentielles et matières végétales de L'Officine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0]">
                <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                  Mémoire Olfactive
                </span>
                <span className="font-editorial text-[22px]">
                  Des synergies végétales pures pour habiter son calme
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <Reveal>
              <div className="flex items-center space-x-2 text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-[#C2A064] font-medium">
                <Sparkles className="w-4 h-4 text-[#C2A064]" />
                <span>L’Univers Olfactif</span>
              </div>
              <h2 className="font-editorial text-[32px] sm:text-[42px] md:text-[50px] leading-[1.04] text-[#063840]">
                La plante, le parfum, votre univers.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
                <p>
                  Fabienne compose des préparations à base d’huiles essentielles nobles, des brumes auriques, des parfums d’ambiance et des élixirs personnalisés.
                </p>
                <p>
                  Elle propose également la création d’un parfum sur mesure, pensé autour de vos préférences, de votre sensibilité et de l’univers olfactif que vous souhaitez explorer et emporter chez vous.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/aromatherapie"
                  className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#07515B] hover:text-[#C2A064] transition-colors group"
                >
                  <span className="border-b border-[#07515B]/30 pb-0.5 group-hover:border-[#C2A064]">
                    Découvrir l’aromathérapie
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                </Link>
                <Link
                  href="/officine"
                  className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#74776F] hover:text-[#063840] transition-colors"
                >
                  <span>Visiter L’Officine</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
