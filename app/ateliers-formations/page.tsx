import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Compass, Droplet, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { Workshops } from '@/components/home/Workshops';

export const metadata: Metadata = constructMetadata({
  title: 'Ateliers, Initiations & Formations en Seine-Maritime | L’Officine des Anges',
  description:
    'Initiez-vous au pendule, apprenez la radiesthésie ou composez votre parfum d’ambiance lors des ateliers animés par Fabienne Dizy Olliveaud en Seine-Maritime.',
  path: '/ateliers-formations',
});

export default function AteliersFormationsPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            TRANSMETTRE & PARTAGER
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Ateliers & Initiations
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[28px] text-[#07515B]">
            Apprendre avec humilité, expérimenter en toute confiance
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Parce que l’autonomie est essentielle, Fabienne propose des temps d’initiation pratiques en petit comité (4 à 6 personnes) pour apprendre à écouter vos ressentis et manier les outils énergétiques avec éthique.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[28px] bg-white border border-[#152A34]/8 space-y-2">
            <span className="font-editorial text-[22px] text-[#063840] block">01 · Petits Groupes</span>
            <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
              Effectifs volontairement restreints pour garantir l’écoute individuelle et le confort de chacun.
            </p>
          </div>
          <div className="p-6 rounded-[28px] bg-white border border-[#152A34]/8 space-y-2">
            <span className="font-editorial text-[22px] text-[#063840] block">02 · Pédagogie Vivante</span>
            <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
              Pas de théorie pesante : des exercices pratiques concrets, des livrets clairs et du matériel fourni.
            </p>
          </div>
          <div className="p-6 rounded-[28px] bg-white border border-[#152A34]/8 space-y-2">
            <span className="font-editorial text-[22px] text-[#063840] block">03 · Éthique & Neutralité</span>
            <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
              Démystifier les pratiques intuitives et s’ancrer dans un respect total du libre-arbitre.
            </p>
          </div>
        </div>

        {/* Existing Workshops Component */}
        <Workshops />

        {/* Direct Contact CTA */}
        <div className="text-center rounded-[36px] bg-[#E8DDCA]/45 p-8 sm:p-12 border border-[#152A34]/8 space-y-4">
          <h3 className="font-editorial text-[28px] sm:text-[34px] text-[#063840]">
            Vous avez un projet de groupe ou une demande sur mesure ?
          </h3>
          <p className="text-[14px] text-[#74776F] max-w-xl mx-auto font-light">
            Associations, groupes d’amis ou ateliers privés : Fabienne adapte ses propositions selon votre lieu et vos envies.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
            >
              <span>Parler de mon projet</span>
              <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
