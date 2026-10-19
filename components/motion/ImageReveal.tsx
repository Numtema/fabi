'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  radius?: string;
}

export function ImageReveal({
  children,
  className = '',
  delay = 0,
  radius = '44px',
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        clipPath: `inset(12% 0 0 0 round ${radius})`,
        opacity: 0.4,
      }}
      whileInView={{
        clipPath: `inset(0% 0 0 0 round ${radius})`,
        opacity: 1,
      }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
