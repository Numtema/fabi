'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { faqList } from '@/content/faq';
import { Reveal } from '@/components/motion/Reveal';

export function HomeFAQ() {
  const [openId, setOpenId] = useState<string | null>(faqList[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FCF8F0] text-[#152A34] border-t border-[#152A34]/8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
              Questions Fréquentes
            </span>
            <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[54px] leading-[1] text-[#063840]">
              Réponses & Éclairages
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#74776F] mt-3 font-light">
              Des explications claires et transparentes sur le déroulement des séances et l’éthique de Fabienne.
            </p>
          </div>
        </Reveal>

        {/* Minimal Editorial Accordion */}
        <div className="divide-y divide-[#152A34]/10 border-y border-[#152A34]/10">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5 sm:py-6">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-[20px] sm:text-[24px] text-[#063840] group-hover:text-[#07515B] transition-colors pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                      isOpen
                        ? 'bg-[#07515B] text-[#FCF8F0] border-[#07515B] rotate-45'
                        : 'bg-[#E8DDCA]/40 text-[#07515B] border-[#152A34]/8 group-hover:bg-[#E8DDCA]'
                    }`}
                  >
                    <Plus className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] sm:text-[15.5px] text-[#74776F] pt-4 leading-relaxed font-light pr-8">
                        {item.answer}
                      </p>
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
