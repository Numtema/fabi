'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';
import { reviews, ReviewItem } from '@/content/reviews';
import { Reveal } from '@/components/motion/Reveal';

export function TestimonialExplorer() {
  const [activeId, setActiveId] = useState<string>(reviews[0].id);
  const [selectedFilter, setSelectedFilter] = useState<string>('Tous');

  const filters = ['Tous', 'Massage', 'Soins', 'Distance', 'Formation', 'Guidance'];

  const filteredReviews = selectedFilter === 'Tous'
    ? reviews
    : reviews.filter((r) => r.category === selectedFilter);

  const activeReview = reviews.find((r) => r.id === activeId) || filteredReviews[0] || reviews[0];

  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] border-t border-[#152A34]/8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#152A34]/10">
            <div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                Témoignages Vérifiés
              </span>
              <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[54px] leading-[1] text-[#063840]">
                Des mots après la rencontre.
              </h2>
            </div>
            <div className="mt-3 md:mt-0 flex items-center space-x-2 text-[13px] text-[#07515B] font-medium">
              <div className="flex text-[#C2A064]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>5.0 / 5 · 26 avis vérifiés sur AMEDCINE</span>
            </div>
          </div>
        </Reveal>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                selectedFilter === f
                  ? 'bg-[#07515B] text-[#FCF8F0] shadow-sm'
                  : 'bg-[#E8DDCA]/50 text-[#152A34]/80 hover:bg-[#E8DDCA]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 2 Columns: 65% Dominant Review Left, 35% Side Index Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Dominant Review (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 border border-[#152A34]/8 shadow-[0_20px_50px_rgba(6,56,64,0.06)] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#E8DDCA]/60 text-[11px] uppercase tracking-wider text-[#07515B] font-medium">
                      {activeReview.serviceName}
                    </span>
                    <span className="text-[11px] text-[#74776F]">
                      {activeReview.date}
                    </span>
                  </div>

                  <Quote className="w-10 h-10 text-[#C2A064]/30 mb-4" />

                  <h3 className="font-editorial text-[26px] sm:text-[34px] leading-tight text-[#063840] mb-4">
                    « {activeReview.title} »
                  </h3>

                  <p className="text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
                    {activeReview.fullText}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#152A34]/8 flex items-center justify-between">
                  <div>
                    <span className="font-editorial text-[18px] text-[#063840] block">
                      {activeReview.author}
                    </span>
                    <span className="text-[11px] text-[#7B8060] font-medium">
                      {activeReview.source}
                    </span>
                  </div>

                  <div className="flex text-[#C2A064]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Index (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
            {filteredReviews.map((r) => {
              const isActive = r.id === activeReview.id;
              return (
                <div
                  key={r.id}
                  onClick={() => setActiveId(r.id)}
                  className={`p-4 rounded-[22px] cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-[#07515B] text-[#FCF8F0] border-[#07515B] shadow-md'
                      : 'bg-white/70 text-[#152A34] border-[#152A34]/8 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className={isActive ? 'text-[#C2A064]' : 'text-[#7B8060]'}>
                      {r.category}
                    </span>
                    <span className={isActive ? 'text-white/60' : 'text-[#74776F]'}>
                      {r.author}
                    </span>
                  </div>
                  <h4 className={`text-[13.5px] font-medium line-clamp-1 ${
                    isActive ? 'text-[#FCF8F0]' : 'text-[#063840]'
                  }`}>
                    {r.title}
                  </h4>
                  <p className={`text-[12px] line-clamp-1 mt-1 font-light ${
                    isActive ? 'text-white/80' : 'text-[#74776F]'
                  }`}>
                    {r.quote}
                  </p>
                </div>
              );
            })}

            <div className="pt-3">
              <Link
                href="/temoignages"
                className="inline-flex items-center space-x-1.5 text-[12px] uppercase tracking-wider text-[#07515B] hover:text-[#C2A064] font-medium"
              >
                <span>Lire tous les avis sur AMEDCINE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
