'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Calendar, Compass } from 'lucide-react';
import { GoldenThread } from '@/components/motion/GoldenThread';
import { MagneticButton } from '@/components/motion/MagneticButton';

export function Hero() {
  return (
    <section className="relative w-full px-2.5 sm:px-3 md:px-4 pt-2.5 pb-6">
      {/* Monumental Architectural Shell: L'Écrin Vivant */}
      <div
        className="relative min-h-[92vh] md:min-h-[96vh] rounded-[32px] sm:rounded-[44px] md:rounded-[60px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 text-[#FCF8F0] shadow-[0_32px_80px_rgba(6,56,64,0.40)] border border-white/10"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, #0B4650 0%, #063840 50%, #092C31 100%)',
        }}
      >
        {/* Layer Z0 & Z1: Architectural atmosphere & subtle Mediterranean light */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2000&q=80"
            alt="Atmosphère minérale et lumineuse de L’Officine"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-luminosity filter brightness-110 contrast-95"
            referrerPolicy="no-referrer"
          />
          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#092C31] via-transparent to-[#092C31]/70" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#063840]/40 to-[#092C31]/90" />
        </div>

        {/* Layer Z4: Golden Thread */}
        <GoldenThread variant="hero" className="z-10" />

        {/* Top Spacer for floating header */}
        <div className="relative z-20 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium"
          >
            <span>Soins</span>
            <span>·</span>
            <span>Gestes</span>
            <span>·</span>
            <span>Fragrances</span>
            <span>·</span>
            <span>Présence</span>
          </motion.div>
        </div>

        {/* Center: Main Editorial Narrative */}
        <div className="relative z-20 my-auto py-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[12px] sm:text-[14px] uppercase tracking-[0.26em] text-[#E8DDCA]/80 mb-2 font-medium">
              Fabienne Dizy Olliveaud
            </span>
            <h1 className="font-editorial text-[3.8rem] sm:text-[5.5rem] md:text-[7.2rem] lg:text-[8.5rem] leading-[0.88] tracking-[-0.035em] text-[#FCF8F0] mb-4">
              L’Officine <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E8DDCA]">des Anges</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-editorial italic text-[24px] sm:text-[30px] md:text-[36px] text-[#C2A064] mb-5 leading-tight"
          >
            Revenir à soi, doucement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[15px] sm:text-[17px] md:text-[19px] text-[#FCF8F0]/85 font-light leading-relaxed max-w-2xl mb-8"
          >
            Soins énergétiques, massage Lemniscate, méditation, aromathérapie et créations sur mesure en Seine-Maritime. Certaines pratiques sont également proposées à distance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-1"
          >
            <MagneticButton className="w-full sm:w-auto">
              <Link
                href="/prendre-rendez-vous"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FCF8F0] text-[#063840] text-[13px] sm:text-[14px] font-medium tracking-wider uppercase hover:bg-[#E8DDCA] transition-all shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                <Calendar className="w-4 h-4 text-[#07515B]" />
                <span>Prendre Rendez-vous</span>
              </Link>
            </MagneticButton>

            <MagneticButton className="w-full sm:w-auto">
              <Link
                href="/prestations#orientation"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 text-[#FCF8F0] border border-white/20 text-[13px] sm:text-[14px] font-medium tracking-wider uppercase backdrop-blur-md transition-all"
              >
                <Compass className="w-4 h-4 text-[#C2A064]" />
                <span>Trouver mon accompagnement</span>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Microcopy & Scroll Cue */}
        <div className="relative z-20 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E8DDCA]/70 gap-3">
          <div className="flex items-center space-x-6">
            <span>Depuis 2015</span>
            <span>·</span>
            <span>Seine-Maritime</span>
          </div>

          <div className="flex items-center space-x-2 text-[#C2A064]">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>Faire défiler pour entrer dans l’Officine</span>
          </div>
        </div>
      </div>
    </section>
  );
}
