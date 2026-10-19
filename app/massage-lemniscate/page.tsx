import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock, Coffee, ShieldCheck } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { GoldenThread } from '@/components/motion/GoldenThread';

export const metadata: Metadata = constructMetadata({
  title: 'Le Massage Lemniscate en Seine-Maritime | L’Officine des Anges',
  description:
    'Vivez le massage Lemniscate avec Fabienne Dizy Olliveaud : 1h30 d’un mouvement continu en huit reliant tout le corps dans une infinie douceur.',
  path: '/massage-lemniscate',
});

const stepsLemniscate = [
  { num: '01', title: 'Accueillir', desc: 'Prise de contact chaleureuse, verbalisation de vos tensions physiques et de vos préférences.' },
  { num: '02', title: 'S’installer', desc: 'Installation sur table de massage chauffée, couverture douce et respect absolu de la pudeur.' },
  { num: '03', title: 'Le mouvement en huit', desc: 'Gestuelle continue et rythmée traçant la lemniscate d’un bout à l’autre du corps sans coupure.' },
  { num: '04', title: 'Changer de position', desc: 'Passage en douceur sur le dos pour poursuivre l’onde enveloppante sur les bras, le ventre et la nuque.' },
  { num: '05', title: 'Revenir au calme', desc: 'Quelques minutes de silence habité pour laisser le corps savourer cette réunification totale.' },
  { num: '06', title: 'Échanger', desc: 'Retour progressif autour d’une tisane biologique chaude offerte pour clore la parenthèse.' },
];

export default function MassageLemniscatePage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Signature Gestuelle · Le Huit Allongé
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Le Massage Lemniscate
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[28px] text-[#07515B]">
            Le geste sans rupture pour réunifier le corps
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Inspiré du huit de l’infini (∞), le massage Lemniscate est un soin d’1h30 où le geste ne s’interrompt jamais. Une onde de bercement continue qui dénoue les blocages et apporte un lâcher-prise physique rare.
          </p>
        </div>

        {/* Visual & Golden Thread */}
        <div className="relative rounded-[44px] overflow-hidden bg-[#063840] p-6 sm:p-12 text-[#FCF8F0] shadow-xl border border-white/10">
          <GoldenThread variant="lemniscate" className="h-40 sm:h-48 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center">
            <div>
              <Clock className="w-5 h-5 text-[#C2A064] mx-auto mb-1.5" />
              <span className="text-[13px] font-semibold block text-[#FCF8F0]">1 h 30 de séance</span>
              <span className="text-[11px] text-[#E8DDCA]/70">Prise en charge complète</span>
            </div>
            <div>
              <Coffee className="w-5 h-5 text-[#C2A064] mx-auto mb-1.5" />
              <span className="text-[13px] font-semibold block text-[#FCF8F0]">Boisson chaude bio</span>
              <span className="text-[11px] text-[#E8DDCA]/70">Temps d’échange offert</span>
            </div>
            <div>
              <ShieldCheck className="w-5 h-5 text-[#C2A064] mx-auto mb-1.5" />
              <span className="text-[13px] font-semibold block text-[#FCF8F0]">Adaptabilité</span>
              <span className="text-[11px] text-[#E8DDCA]/70">Possible sans contact direct</span>
            </div>
          </div>
        </div>

        {/* 6 Step Specific Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#07515B] font-semibold block mb-1">
              Rituel de la Séance
            </span>
            <h2 className="font-editorial text-[32px] sm:text-[40px] text-[#063840]">
              Les six temps du massage Lemniscate
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {stepsLemniscate.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-[28px] bg-white border border-[#152A34]/8 shadow-sm space-y-2"
              >
                <span className="font-editorial text-[32px] text-[#C2A064] leading-none block">
                  {st.num}
                </span>
                <h3 className="font-editorial text-[22px] text-[#063840]">
                  {st.title}
                </h3>
                <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Touch-free Adaptation note */}
        <div className="p-8 rounded-[36px] bg-[#E8DDCA]/45 border border-[#152A34]/8 space-y-3">
          <h3 className="font-editorial text-[24px] text-[#063840]">
            Une bienveillance sur mesure pour chacun
          </h3>
          <p className="text-[14px] text-[#152A34]/80 font-light leading-relaxed">
            Pour les personnes pudiques, ayant vécu des traumatismes ou hypersensibles au contact cutané direct, Fabienne adapte intégralement la gestuelle. Le massage peut être effectué à travers un drapage de coton doux, ou bien les mouvements de lemniscate peuvent être réalisés dans le champ énergétique proche au-dessus du corps.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/prendre-rendez-vous"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#C2A064]" />
            <span>Réserver mon Massage Lemniscate</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
