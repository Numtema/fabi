import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Radiesthésie & Pendule en Seine-Maritime | L’Officine des Anges',
  description:
    'Consultations de radiesthésie et travail au pendule avec cadrans de Bovis par Fabienne Dizy Olliveaud en Seine-Maritime et à distance.',
  path: '/radiesthesie',
});

export default function RadiesthesiePage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            EXPLORATION & INTUITION
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Radiesthésie & Pendule
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[26px] text-[#07515B]">
            Poser des repères clairs avec neutralité et discernement
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            La radiesthésie est une démarche d’écoute vibratoire qui permet d’interroger les équilibres personnels ou d’ambiance. Complétée par une formation en géobiologie, la pratique de Fabienne offre un éclairage précieux dans les phases de questionnement.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/10 bg-[#E8DDCA]">
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
            alt="Séance de radiesthésie avec cadrans et pendule"
            fill
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                Format
              </span>
              <span className="font-editorial text-[22px]">
                45 min à 1h · En présentiel ou sur plan / à distance
              </span>
            </div>
            <Link
              href="/prendre-rendez-vous"
              className="px-6 py-2.5 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
            >
              Prendre RDV
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[36px] bg-white border border-[#152A34]/8 shadow-sm space-y-4">
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Une méthode rigoureuse et bienveillante
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Loin des prédictions sensationnalistes, Fabienne utilise le pendule comme un amplificateur de résonance. À l’aide de cadrans spécialisés (taux vibratoire, compatibilités, blocages énergétiques), chaque recherche est documentée avec soin.
            </p>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Cette consultation vous aide à prendre du recul, à valider des intuitions et à réaligner vos décisions avec ce qui fait sens pour vous.
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#E8DDCA]/45 border border-[#152A34]/8 space-y-4">
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Ateliers d’initiation également proposés
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Vous souhaitez apprendre à manier le pendule pour vous-même ? Fabienne anime des ateliers en petit comité pour poser des bases saines, s’entraîner et démystifier la pratique en toute simplicité.
            </p>
            <Link
              href="/ateliers-formations"
              className="inline-flex items-center space-x-1.5 text-[13px] text-[#07515B] font-medium hover:text-[#C2A064] transition-colors"
            >
              <span>Découvrir l’atelier initiation pendule</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/prendre-rendez-vous"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#C2A064]" />
            <span>Prendre rendez-vous</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
