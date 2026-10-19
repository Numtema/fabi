import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { TestimonialExplorer } from '@/components/home/TestimonialExplorer';

export const metadata: Metadata = constructMetadata({
  title: 'Avis & Témoignages Clients (5/5) | L’Officine des Anges',
  description:
    'Consultez les 26 avis clients vérifiés sur AMEDCINE (note 5.0/5) pour Fabienne Dizy Olliveaud : massage Lemniscate, soins LaHoChi et initiations.',
  path: '/temoignages',
});

export default function TemoignagesPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-1 text-[#C2A064] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Retours d’Expérience Vérifiés
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Ce qu’ils retiennent de la rencontre
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Note de 5.0 / 5 basée sur 26 avis vérifiés publiés sur l’annuaire professionnel AMEDCINE. La douceur, la qualité d’écoute et la bienveillance reviennent dans chaque témoignage.
          </p>
        </div>

        <TestimonialExplorer />
      </div>
    </div>
  );
}
