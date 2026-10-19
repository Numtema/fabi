import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { services } from '@/content/services';
import { constructMetadata } from '@/lib/seo';
import { OrientationChooser } from '@/components/ui/OrientationChooser';

export const metadata: Metadata = constructMetadata({
  title: 'Prestations & Accompagnements | L’Officine des Anges',
  description:
    'L’ensemble des soins et accompagnements de Fabienne Dizy Olliveaud : LaHoChi, soins énergétiques, massage Lemniscate, radiesthésie, méditation, aromathérapie.',
  path: '/prestations',
});

export default function PrestationsPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            L’Écrin des Soins
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Les Prestations
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Chaque accompagnement est un temps d’écoute et de présence sur mesure, pensé pour apaiser le corps, libérer l’esprit et retrouver votre rythme naturel.
          </p>
        </div>

        {/* Orientation Chooser Module */}
        <div id="orientation" className="scroll-mt-28">
          <OrientationChooser />
        </div>

        {/* Services List */}
        <div className="space-y-10">
          <div className="border-b border-[#152A34]/10 pb-4">
            <h2 className="font-editorial text-[30px] sm:text-[38px] text-[#063840]">
              Toutes les propositions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div
                key={s.id}
                className="rounded-[36px] overflow-hidden bg-white border border-[#152A34]/8 shadow-sm flex flex-col justify-between group hover:shadow-lg hover:border-[#C2A064]/50 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#063840]/80 text-[#FCF8F0] backdrop-blur-md text-[10px] uppercase tracking-wider font-medium">
                      {s.family}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10.5px] uppercase tracking-wider text-[#C2A064] font-semibold block">
                      {s.familyLabel}
                    </span>
                    <h3 className="font-editorial text-[24px] text-[#063840] leading-tight group-hover:text-[#07515B] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-[#74776F] leading-relaxed line-clamp-3 font-light">
                      {s.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#152A34]/6 mt-auto">
                  <div className="flex items-center justify-between text-[11.5px] text-[#07515B] mb-4 pt-4">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C2A064]" />
                      <span>{s.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C2A064]" />
                      <span>{s.locationModes.join(' & ')}</span>
                    </div>
                  </div>

                  <Link
                    href={`/${s.slug}`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
                  >
                    <span>Découvrir la pratique</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A064]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
