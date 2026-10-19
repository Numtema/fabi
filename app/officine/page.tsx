import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Droplets, Calendar } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { OfficineCabinet } from '@/components/officine/OfficineCabinet';

export const metadata: Metadata = constructMetadata({
  title: 'L’Officine des Anges | L’Atelier Botanique & Vibratoire',
  description:
    'L’Officine des Anges par Fabienne Dizy Olliveaud : création artisanale de brumes auriques, élixirs floraux, parfums d’ambiance et parfums sur mesure.',
  path: '/officine',
});

export default function OfficinePage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            L’Âme de L’Officine
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            L’Officine des Anges
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[28px] text-[#07515B]">
            Une apothicairerie contemporaine dédiée au calme et au végétal
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Fondée en 2015 par Fabienne Dizy Olliveaud, L’Officine des Anges est née du désir de prolonger chez soi l’état de présence et de paix contacté en séance.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/8">
              <Image
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
                alt="Flacons en verre ambré et matières végétales de L'Officine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-[15px] sm:text-[17px] text-[#152A34]/85 font-light leading-relaxed">
            <h2 className="font-editorial text-[30px] sm:text-[38px] text-[#063840] leading-tight">
              Des matières nobles, des flacons ambrés et le temps long.
            </h2>
            <p>
              Dans son atelier, Fabienne sélectionne des huiles essentielles pures, des hydrolats biologiques et des infusions de plantes sauvages. Chaque flacon en verre ambré protège les principes actifs de la lumière et honore une tradition d’artisanat soigné.
            </p>
            <p>
              Sprays de protection ou d’ancrage, brumes auriques pour purifier l’atmosphère, ou parfum d’exception formulé lors d’un tête-à-tête : chaque geste prolonge la philosophie de Présence 1.618.
            </p>
            <div className="pt-2">
              <Link
                href="/creations"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
              >
                <span>Découvrir toutes les créations</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Cabinet Component */}
        <div className="pt-8">
          <OfficineCabinet />
        </div>
      </div>
    </div>
  );
}
