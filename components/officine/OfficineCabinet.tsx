'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Droplets, Wind, Shield } from 'lucide-react';
import { creations, CreationItem } from '@/content/creations';
import { Reveal } from '@/components/motion/Reveal';

export function OfficineCabinet() {
  const [activeCategory, setActiveCategory] = useState<CreationItem['category']>('Sprays');

  const currentItem = creations.find((c) => c.category === activeCategory) || creations[0];

  const categories: CreationItem['category'][] = [
    'Sprays',
    'Élixirs',
    'Parfums d’ambiance',
    'Parfum sur mesure',
  ];

  return (
    <section className="relative w-full px-2.5 sm:px-4 py-8 bg-[#092C31]">
      <div className="relative rounded-[40px] sm:rounded-[60px] md:rounded-[76px] overflow-hidden bg-[#E8DDCA] text-[#152A34] p-6 sm:p-12 md:p-16 border border-[#152A34]/10 shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#A35F27] font-medium block mb-2">
                Le Cabinet d’Apothicaire
              </span>
              <h2 className="font-editorial text-[36px] sm:text-[50px] md:text-[64px] leading-[0.98] text-[#063840] mb-3">
                L’Officine des Anges
              </h2>
              <p className="font-editorial italic text-[20px] sm:text-[26px] text-[#07515B]">
                Des créations qui prolongent l’expérience.
              </p>
              <p className="text-[14px] sm:text-[15px] text-[#74776F] mt-3 font-light max-w-xl mx-auto">
                Fabienne imagine et prépare des synergies d’huiles essentielles nobles, flacons ambrés et parfums personnalisés pour votre quotidien.
              </p>
            </Reveal>
          </div>

          {/* Interactive Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium tracking-wide uppercase transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#063840] text-[#FCF8F0] shadow-md scale-105'
                      : 'bg-[#FCF8F0]/70 text-[#152A34]/80 hover:bg-[#FCF8F0]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3 Columns Display: Left Specs, Center Hero Object, Right Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FCF8F0] rounded-[44px] p-6 sm:p-10 border border-[#152A34]/8 shadow-lg">
            {/* Left Column (3 cols): Specs & Details */}
            <div className="lg:col-span-3 space-y-5 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A35F27] font-semibold block">
                      Contenance & Flacon
                    </span>
                    <span className="text-[13px] text-[#063840] font-medium">
                      {currentItem.size}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A35F27] font-semibold block">
                      Notes Botaniques
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {currentItem.notes.map((n, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#E8DDCA]/70 text-[#07515B] px-2.5 py-0.5 rounded-full font-medium"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A35F27] font-semibold block">
                      Conseil d’Usage
                    </span>
                    <p className="text-[12px] text-[#74776F] leading-relaxed">
                      {currentItem.usage}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Center Column (5 cols): Monumental Still-Life Photo */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[3/4] w-full max-w-[340px] rounded-[38px] overflow-hidden shadow-[0_20px_50px_rgba(6,56,64,0.22)] border border-[#152A34]/12"
                >
                  <Image
                    src={currentItem.image}
                    alt={currentItem.name}
                    fill
                    sizes="400px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#063840]/80 backdrop-blur-md text-[#FCF8F0] text-[10px] font-mono">
                    Artisanat · 1.618
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column (4 cols): Story & Inquiry CTA */}
            <div className="lg:col-span-4 space-y-5 order-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#07515B] font-medium">
                      {currentItem.category}
                    </span>
                    <h3 className="font-editorial text-[26px] sm:text-[32px] text-[#063840] leading-tight mt-1">
                      {currentItem.name}
                    </h3>
                    <p className="font-editorial italic text-[16px] text-[#A35F27] mt-1">
                      {currentItem.tagline}
                    </p>
                  </div>

                  <p className="text-[13.5px] text-[#152A34]/80 leading-relaxed font-light">
                    {currentItem.description}
                  </p>

                  <div className="pt-3 border-t border-[#152A34]/10 flex flex-col gap-2.5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#063840] text-[#FCF8F0] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#07515B] transition-colors"
                    >
                      <span>Me renseigner auprès de Fabienne</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/creations"
                      className="text-center text-[11.5px] text-[#74776F] hover:text-[#063840] transition-colors"
                    >
                      Découvrir tout le catalogue de L’Officine →
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
