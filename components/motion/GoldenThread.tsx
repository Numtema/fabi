'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface GoldenThreadProps {
  variant?: 'hero' | 'lemniscate' | 'timeline' | 'listen' | 'settle' | 'subtle';
  className?: string;
  progress?: number;
}

export function GoldenThread({
  variant = 'hero',
  className = '',
}: GoldenThreadProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === 'lemniscate') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 500 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[540px] overflow-visible"
        >
          {/* Continuous ∞ Lemniscate formula */}
          <motion.path
            d="M 250,120 C 310,40 450,40 450,120 C 450,200 310,200 250,120 C 190,40 50,40 50,120 C 50,200 190,200 250,120 Z"
            stroke="#C2A064"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0.2, opacity: 0.3 }}
            animate={
              shouldReduceMotion
                ? { pathLength: 1, opacity: 0.75 }
                : {
                    pathLength: [0.1, 1, 0.95],
                    pathOffset: [0, 1],
                    opacity: [0.5, 0.85, 0.6],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          {/* Subtle second pass for depth */}
          <path
            d="M 250,120 C 310,40 450,40 450,120 C 450,200 310,200 250,120 C 190,40 50,40 50,120 C 50,200 190,200 250,120 Z"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'timeline') {
    return (
      <div className={`relative h-full w-[2px] ${className}`}>
        <div className="absolute inset-0 bg-[#152A34]/15" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C2A064] to-[#C8A66A]"
          initial={{ height: '0%' }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C2A064] shadow-[0_0_8px_rgba(194,160,100,0.5)]" />
      </div>
    );
  }

  if (variant === 'listen') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 300 40" fill="none" className="w-full max-w-[280px] h-8">
          <motion.path
            d="M 10,20 Q 75,5 150,20 T 290,20"
            stroke="#C2A064"
            strokeWidth="1.2"
            strokeLinecap="round"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    d: [
                      'M 10,20 Q 75,10 150,20 T 290,20',
                      'M 10,20 Q 75,28 150,20 T 290,20',
                      'M 10,20 Q 75,10 150,20 T 290,20',
                    ],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    );
  }

  // Hero / default subtle golden thread
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-60"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M -50,220 C 250,90 450,310 750,180 C 950,90 1100,260 1250,190"
          stroke="#C2A064"
          strokeWidth="1.3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1 }
              : {
                  pathLength: 1,
                  d: [
                    'M -50,220 C 250,90 450,310 750,180 C 950,90 1100,260 1250,190',
                    'M -50,210 C 260,110 440,290 740,200 C 960,110 1090,240 1250,200',
                    'M -50,220 C 250,90 450,310 750,180 C 950,90 1100,260 1250,190',
                  ],
                }
          }
          transition={{
            pathLength: { duration: 1.8, ease: 'easeOut' },
            d: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </svg>
    </div>
  );
}
