import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center bg-[#FCF8F0] text-[#152A34] px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#07515B]/10 text-[#07515B] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-[#C2A064]" />
        </div>
        <span className="text-[11px] font-mono text-[#C2A064] uppercase tracking-widest block">
          Erreur 404
        </span>
        <h1 className="font-editorial text-[36px] sm:text-[44px] text-[#063840] leading-tight">
          Cette page semble s’être retirée dans le silence.
        </h1>
        <p className="text-[14px] text-[#74776F] font-light leading-relaxed">
          Le chemin que vous avez emprunté n’existe plus ou a été déplacé dans l’Officine.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Revenir à l’accueil</span>
          </Link>
          <Link
            href="/prestations"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E8DDCA] text-[#063840] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#D7C4A3] transition-colors"
          >
            <span>Explorer les prestations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
