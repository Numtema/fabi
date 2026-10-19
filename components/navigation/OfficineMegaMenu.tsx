'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { creations } from '@/content/creations';

interface OfficineMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OfficineMegaMenu({ isOpen, onClose }: OfficineMegaMenuProps) {
  const [activeCreation, setActiveCreation] = useState(creations[0]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[820px] max-w-[94vw] bg-[#FCF8F0]/96 backdrop-blur-2xl border border-[#152A34]/10 rounded-[36px] shadow-[0_24px_64px_rgba(6,56,64,0.18)] p-5 z-50 overflow-hidden"
          onMouseLeave={onClose}
          role="region"
          aria-label="Menu de L’Officine"
        >
          <div className="grid grid-cols-12 gap-5">
            {/* Left Column: Creations categories */}
            <div className="col-span-6 flex flex-col justify-between">
              <div>
                <div className="mb-3 px-2">
                  <span className="text-[10px] tracking-widest uppercase text-[#C2A064] font-medium">
                    L’Atelier Botanique & Vibratoire
                  </span>
                  <h3 className="font-editorial text-[22px] text-[#063840]">
                    Les Créations de L’Officine
                  </h3>
                </div>

                <div className="space-y-1">
                  {creations.map((item) => {
                    const isActive = activeCreation.id === item.id;
                    return (
                      <Link
                        key={item.id}
                        href={`/creations`}
                        onClick={onClose}
                        onMouseEnter={() => setActiveCreation(item)}
                        onFocus={() => setActiveCreation(item)}
                        className={`group block p-2.5 rounded-[20px] transition-all duration-200 ${
                          isActive
                            ? 'bg-[#E8DDCA]/60 text-[#063840]'
                            : 'hover:bg-[#E8DDCA]/35 text-[#152A34]/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10.5px] uppercase tracking-wider text-[#C2A064] font-medium">
                            {item.category}
                          </span>
                          <ArrowUpRight
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isActive
                                ? 'text-[#C2A064] translate-x-0.5 -translate-y-0.5'
                                : 'text-[#152A34]/30'
                            }`}
                          />
                        </div>
                        <h4 className="text-[14px] font-medium text-[#092C31]">
                          {item.name}
                        </h4>
                        <p className="text-[11.5px] text-[#74776F] line-clamp-1">
                          {item.tagline}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-[#152A34]/10 mt-2">
                <Link
                  href="/officine"
                  onClick={onClose}
                  className="inline-flex items-center space-x-1.5 text-[12px] font-medium text-[#07515B] hover:text-[#C2A064] transition-colors"
                >
                  <span>Découvrir l’histoire & l’âme de L’Officine</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A064]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Still life object visual */}
            <div className="col-span-6 bg-[#F7F2E8] rounded-[28px] p-4 flex flex-col justify-between border border-[#152A34]/6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCreation.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden mb-3">
                    <Image
                      src={activeCreation.image}
                      alt={activeCreation.name}
                      fill
                      sizes="340px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-[#063840]/80 text-[#FCF8F0] backdrop-blur-md text-[10px]">
                      {activeCreation.size}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-editorial text-[20px] text-[#063840] leading-tight mb-1">
                      {activeCreation.name}
                    </h4>
                    <p className="text-[12px] text-[#74776F] line-clamp-2 leading-relaxed mb-3">
                      {activeCreation.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#152A34]/8">
                      {activeCreation.notes.slice(0, 3).map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="text-[10px] text-[#07515B] bg-[#E8DDCA]/50 px-2 py-0.5 rounded-full"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
