'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debug
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center bg-[#FCF8F0] text-[#152A34] px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-[11px] font-mono text-[#C2A064] uppercase tracking-widest block">
          Une pause inattendue
        </span>
        <h1 className="font-editorial text-[36px] sm:text-[44px] text-[#063840] leading-tight">
          Un imprévu est survenu lors du chargement.
        </h1>
        <p className="text-[14px] text-[#74776F] font-light leading-relaxed">
          Veuillez nous en excuser. Vous pouvez réessayer de charger cette page ou revenir au calme de l’accueil.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Réessayer</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E8DDCA] text-[#063840] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#D7C4A3] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
