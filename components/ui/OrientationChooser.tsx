'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrientationOption {
  id: string;
  label: string;
  suggestion: string;
  targetUrl: string;
  targetTitle: string;
}

const options: OrientationOption[] = [
  {
    id: 'soin',
    label: 'Recevoir un soin énergétique doux sans manipulation',
    suggestion: 'Le LaHoChi ou une séance énergétique globale pourrait être une porte d’entrée naturelle pour retrouver calme et recentrage.',
    targetUrl: '/soins-energetiques',
    targetTitle: 'Découvrir les Soins Énergétiques & LaHoChi',
  },
  {
    id: 'corps',
    label: 'Passer par le corps et vivre un lâcher-prise physique',
    suggestion: 'Le massage Lemniscate (1h30) est idéal pour apaiser le système nerveux par un geste continu sans rupture.',
    targetUrl: '/massage-lemniscate',
    targetTitle: 'Découvrir le Massage Lemniscate',
  },
  {
    id: 'respirer',
    label: 'Ralentir, respirer et apaiser le flot mental',
    suggestion: 'Une séance guidée de méditation ou de relaxation profonde vous aidera à réhabiter votre souffle en douceur.',
    targetUrl: '/meditation',
    targetTitle: 'Découvrir la Méditation',
  },
  {
    id: 'pendule',
    label: 'Questionner l’invisible et poser des repères avec le pendule',
    suggestion: 'Une consultation de radiesthésie intuitive permettra de faire le point avec clarté et discernement.',
    targetUrl: '/radiesthesie',
    targetTitle: 'Découvrir la Radiesthésie',
  },
  {
    id: 'parfum',
    label: 'Explorer les bienfaits olfactifs et créer mon univers',
    suggestion: 'L’univers végétal de l’Officine ou un atelier de parfum sur mesure répondra à votre sensibilité olfactive.',
    targetUrl: '/aromatherapie',
    targetTitle: 'Découvrir l’Aromathérapie & Parfums',
  },
  {
    id: 'atelier',
    label: 'Apprendre une pratique et m’initier en petit groupe',
    suggestion: 'Un atelier d’initiation au pendule ou de création aromatique vous permettra d’expérimenter en toute convivialité.',
    targetUrl: '/ateliers-formations',
    targetTitle: 'Découvrir les Ateliers & Formations',
  },
];

export function OrientationChooser() {
  const [selected, setSelected] = useState<OrientationOption | null>(null);

  return (
    <div className="rounded-[36px] bg-[#FCF8F0] p-6 sm:p-10 border border-[#152A34]/10 shadow-[0_20px_50px_rgba(6,56,64,0.08)]">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <span className="text-[10px] uppercase tracking-widest text-[#C2A064] font-medium block mb-2">
          Orientation Bienveillante
        </span>
        <h3 className="font-editorial text-[26px] sm:text-[34px] text-[#063840] leading-tight">
          Qu’est-ce qui vous appelle aujourd’hui ?
        </h3>
        <p className="text-[13px] text-[#74776F] mt-2 font-light">
          Sélectionnez ce qui résonne avec votre besoin actuel pour découvrir l’accompagnement adapté.
        </p>
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt)}
              className="text-left p-4 rounded-[22px] bg-white border border-[#152A34]/8 hover:border-[#C2A064] hover:shadow-md transition-all text-[#152A34] text-[13.5px] leading-snug flex items-center justify-between group"
            >
              <span>{opt.label}</span>
              <ArrowRight className="w-4 h-4 text-[#C2A064] shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-xl mx-auto bg-[#E8DDCA]/50 rounded-[28px] p-6 sm:p-8 text-center space-y-4 border border-[#C2A064]/40"
          >
            <div className="w-10 h-10 rounded-full bg-[#07515B] text-[#FCF8F0] flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5 text-[#C2A064]" />
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#063840] font-light leading-relaxed">
              « {selected.suggestion} »
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={selected.targetUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
              >
                <span>{selected.targetTitle}</span>
                <ArrowRight className="w-4 h-4 text-[#C2A064]" />
              </Link>

              <button
                onClick={() => setSelected(null)}
                className="inline-flex items-center space-x-1.5 text-[12px] text-[#74776F] hover:text-[#063840] transition-colors py-2 px-3"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Explorer un autre besoin</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
