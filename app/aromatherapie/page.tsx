import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Droplet, Sparkles, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Aromathérapie & Parfum Sur Mesure | L’Officine des Anges',
  description:
    'Découvrez les créations aromatiques et la confection de parfums sur mesure avec Fabienne Dizy Olliveaud en Seine-Maritime.',
  path: '/aromatherapie',
});

export default function AromatherapiePage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            COMPOSER & SOUVENIR
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Aromathérapie & Parfumerie
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[26px] text-[#07515B]">
            La mémoire olfactive au service de votre sérénité
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            L’odorat est le sens le plus intimement relié à nos souvenirs et à nos émotions. Fabienne vous fait découvrir des matières végétales pures et assemble avec vous des formules exclusives pour sublimer votre quotidien.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/10 bg-[#E8DDCA]">
          <Image
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80"
            alt="Flacons d'huiles essentielles et matières végétales précieuses"
            fill
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                Savoir-Faire
              </span>
              <span className="font-editorial text-[22px]">
                Huiles essentielles nobles & flacons en verre ambré
              </span>
            </div>
            <Link
              href="/creations"
              className="px-6 py-2.5 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
            >
              Voir les créations de l’Officine
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[36px] bg-white border border-[#152A34]/8 shadow-sm space-y-4">
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Parfum Sur Mesure
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Au cours d’un atelier olfactif individuel, vous explorez plusieurs accords (notes de tête, de cœur et de fond). Fabienne compose ensuite une formule personnalisée qui deviendra votre signature émotionnelle.
            </p>
            <p className="text-[13px] text-[#07515B] font-medium">
              Repartez avec votre flacon exclusif et sa formule nominative.
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#E8DDCA]/45 border border-[#152A34]/8 space-y-4">
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Brumes & Élixirs de L’Officine
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Découvrez la collection permanente de sprays auriques, de parfums d’ambiance et d’élixirs floraux élaborés artisanalement par Fabienne pour purifier vos lieux de vie et instaurer le calme.
            </p>
            <Link
              href="/officine"
              className="inline-flex items-center space-x-1.5 text-[13px] text-[#07515B] font-medium hover:text-[#C2A064] transition-colors"
            >
              <span>Découvrir l’Officine des Anges</span>
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
            <span>Réserver un atelier olfactif</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
