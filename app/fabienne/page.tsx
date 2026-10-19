import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = constructMetadata({
  title: 'Fabienne Dizy Olliveaud | Parcours, Pratique & Écoute',
  description:
    'Découvrez le parcours de Fabienne Dizy Olliveaud : praticienne en soins énergétiques, LaHoChi, massage Lemniscate et fondatrice de L’Officine des Anges en Seine-Maritime.',
  path: '/fabienne',
});

export default function FabiennePage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Fondatrice & Praticienne
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Fabienne Dizy Olliveaud
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[28px] text-[#07515B]">
            « Accompagner avec délicatesse, écouter avant de proposer. »
          </p>
        </div>

        {/* 5 / 7 Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-xl border border-[#152A34]/10 bg-[#E8DDCA]">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                alt="Portrait de Fabienne Dizy Olliveaud"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 text-center text-[11px] text-[#74776F] font-mono">
              Praticienne en Seine-Maritime depuis 2015
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
            <h2 className="font-editorial text-[30px] sm:text-[38px] text-[#063840] leading-tight">
              Un cheminement au service de la présence.
            </h2>
            <p>
              Le parcours de Fabienne connaît une bascule profonde en 2014. Cette étape de vie l’invite à ralentir, à approfondir le travail énergétique, la méditation, la résonance du corps et l’intuition.
            </p>
            <p>
              Dès 2015, elle officialise son activité en Seine-Maritime en créant L’Officine des Anges, un lieu dédié au ressourcement, à l’apaisement physique et mental et à la reconnexion avec sa propre intériorité.
            </p>
            <p className="text-[#07515B] italic font-normal">
              Dans l’approche de Fabienne, la notion d’Anges et de guidance traduit une sensibilité personnelle aux synchronicités, à la bienveillance universelle et aux énergies subtiles qui nous entourent. Ces dimensions nourrissent son écoute sans jamais être imposées à la personne consultante.
            </p>
          </div>
        </div>

        {/* Qualifications & Éthique */}
        <div className="rounded-[40px] bg-[#E8DDCA]/45 p-8 sm:p-12 border border-[#152A34]/8 space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#07515B] font-semibold block mb-1">
              Engagements & Formations
            </span>
            <h3 className="font-editorial text-[28px] sm:text-[34px] text-[#063840]">
              Un cadre éthique et rigoureux
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Reiki Mikao Usui (Niveaux 1 & 2)',
                desc: 'Formation traditionnelle à l’imposition des mains et à l’harmonisation des centres d’énergie.',
              },
              {
                title: 'Pratique du LaHoChi & Magnétisme',
                desc: 'Pratique énergétique douce reconnue pour sa haute fréquence d’apaisement.',
              },
              {
                title: 'Formation en Géobiologie',
                desc: 'Étude des influences telluriques et de l’harmonie énergétique des lieux de vie.',
              },
              {
                title: 'Massage Énergétique Lemniscate',
                desc: 'Maîtrise de la gestuelle en huit ininterrompue enveloppant tout le schéma corporel.',
              },
              {
                title: 'Radiesthésie & Maniement du Pendule',
                desc: 'Utilisation méthodique de cadrans de Bovis avec discernement et neutralité bienveillante.',
              },
              {
                title: 'Aromathérapie & Parfumerie Végétale',
                desc: 'Assemblage de synergies d’huiles essentielles pures et d’élixirs artisanaux.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-[24px] bg-white border border-[#152A34]/6 space-y-1">
                <div className="flex items-center space-x-2 text-[#07515B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C2A064] shrink-0" />
                  <span className="text-[14px] font-semibold">{item.title}</span>
                </div>
                <p className="text-[12.5px] text-[#74776F] pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6 space-y-4">
          <h3 className="font-editorial text-[30px] text-[#063840]">
            Envie d’échanger avec Fabienne ?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#C2A064]" />
              <span>Prendre Rendez-vous</span>
            </Link>
            <Link
              href="/prestations"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#E8DDCA] text-[#063840] text-[13px] font-medium uppercase tracking-wider hover:bg-[#D7C4A3] transition-colors"
            >
              <span>Découvrir les prestations</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
