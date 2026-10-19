'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useFinePointer } from '@/hooks/useFinePointer';

export function LivingWordmark() {
  const isFine = useFinePointer();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden select-none py-6 my-4 border-y border-white/8">
      <motion.div
        animate={
          isFine && !shouldReduceMotion
            ? {
                x: [0, 4, 0, -4, 0],
              }
            : {}
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full text-center"
      >
        <span className="block font-editorial text-[13vw] lg:text-[11vw] leading-[0.82] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-[#FCF8F0]/30 to-[#FCF8F0]/5 uppercase pointer-events-none">
          L’Officine des Anges
        </span>
      </motion.div>
    </div>
  );
}
