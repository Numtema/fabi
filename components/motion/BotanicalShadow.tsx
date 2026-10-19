'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface BotanicalShadowProps {
  className?: string;
  variant?: 'left' | 'right' | 'center';
}

export function BotanicalShadow({
  className = '',
  variant = 'right',
}: BotanicalShadowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute z-0 overflow-hidden mix-blend-multiply opacity-[0.07] ${className}`}
    >
      <motion.svg
        viewBox="0 0 600 600"
        fill="currentColor"
        className="w-[450px] md:w-[680px] h-[450px] md:h-[680px] text-[#063840]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: variant === 'right' ? [0, 14, 0] : [0, -14, 0],
                y: [0, 10, 0],
                rotate: variant === 'right' ? [0, 2, 0] : [0, -2, 0],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Stylized olive branch & leaves botanical contour */}
        <path d="M 120 500 C 180 430, 260 380, 360 320 C 440 270, 500 180, 550 90" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 220 440 C 200 400, 220 370, 250 380 C 270 410, 250 440, 220 440 Z" />
        <path d="M 280 400 C 310 370, 340 380, 330 410 C 300 430, 280 420, 280 400 Z" />
        <path d="M 330 350 C 310 320, 330 290, 360 300 C 380 330, 360 360, 330 350 Z" />
        <path d="M 400 300 C 440 280, 460 295, 445 325 C 415 335, 395 320, 400 300 Z" />
        <path d="M 450 240 C 435 205, 460 185, 485 200 C 500 230, 480 255, 450 240 Z" />
        <path d="M 500 180 C 535 155, 555 170, 545 195 C 520 210, 495 200, 500 180 Z" />
        <path d="M 530 110 C 555 80, 575 95, 565 125 C 540 140, 520 130, 530 110 Z" />
      </motion.svg>
    </div>
  );
}
