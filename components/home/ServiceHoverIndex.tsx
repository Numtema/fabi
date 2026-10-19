'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { services, ServiceItem } from '@/content/services';
import { Reveal } from '@/components/motion/Reveal';

export function ServiceHoverIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);

  const activeService = services[activeIndex] || services[0];

  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] border-t border-[#152A34]/8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#152A34]/10">
            <div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                Le Panorama des Accompagnements
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[44px] md:text-[54px] text-[#063840] leading-tight">
                Chaque pratique a sa résonance
              </h2>
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#74776F] max-w-sm mt-3 md:mt-0 font-light">
              Survolez chaque approche pour découvrir son intention, son rythme et ses modalités.
            </p>
          </div>
        </Reveal>

        {/* Desktop Layout: Split 50/50 with sticky visual left and interactive list right */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left: Dynamic Visual Frame */}
          <div className="col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] w-full rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(6,56,64,0.16)] border border-[#152A34]/10 bg-[#E8DDCA]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="45vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 text-[#FCF8F0]">
                    <span className="px-3 py-1 rounded-full bg-[#C2A064]/90 text-[#092C31] text-[10px] uppercase tracking-wider font-semibold mb-2 inline-block">
                      {activeService.family}
                    </span>
                    <h3 className="font-editorial text-[26px] leading-tight mb-2">
                      {activeService.title}
                    </h3>
                    <p className="text-[12.5px] text-[#E8DDCA]/90 line-clamp-2 font-light">
                      {activeService.shortDescription}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#E8DDCA]">
                      <span>{activeService.duration}</span>
                      <Link
                        href={`/${activeService.slug}`}
                        className="inline-flex items-center space-x-1 text-[#C2A064] font-medium hover:text-white transition-colors"
                      >
                        <span>En savoir plus</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Service Rows */}
          <div className="col-span-7 space-y-2">
            {services.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  className={`group relative rounded-[28px] p-6 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#E8DDCA]/50 border-[#C2A064]/40 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-[#E8DDCA]/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-5">
                      <span className={`text-[13px] font-mono transition-colors pt-1 ${
                        isActive ? 'text-[#C2A064]' : 'text-[#74776F]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#7B8060] font-medium block">
                          {item.familyLabel}
                        </span>
                        <h3 className={`font-editorial text-[26px] sm:text-[30px] leading-tight transition-colors ${
                          isActive ? 'text-[#063840]' : 'text-[#152A34]/70 group-hover:text-[#063840]'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-[13.5px] text-[#74776F] mt-1 line-clamp-1 transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-70'
                        }`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/${item.slug}`}
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shrink-0 ${
                        isActive
                          ? 'bg-[#07515B] text-[#FCF8F0] shadow-md scale-105'
                          : 'bg-[#152A34]/5 text-[#152A34]/40 group-hover:text-[#07515B]'
                      }`}
                      aria-label={`Découvrir ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Accordion View */}
        <div className="lg:hidden space-y-3">
          {services.map((item, idx) => {
            const isExpanded = mobileExpanded === idx;
            return (
              <div
                key={item.id}
                className="rounded-[24px] overflow-hidden border border-[#152A34]/10 bg-white/70"
              >
                <button
                  onClick={() => setMobileExpanded(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[12px] font-mono text-[#C2A064]">0{idx + 1}</span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#7B8060] block font-medium">
                        {item.family}
                      </span>
                      <h3 className="font-editorial text-[20px] text-[#063840]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#07515B] transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 space-y-4"
                    >
                      <div className="relative aspect-[16/9] w-full rounded-[18px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="90vw"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-[13px] text-[#74776F] leading-relaxed">
                        {item.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#152A34]/8">
                        <span className="text-[11px] text-[#07515B] font-medium">
                          {item.duration}
                        </span>
                        <Link
                          href={`/${item.slug}`}
                          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12px] font-medium"
                        >
                          <span>Découvrir</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
