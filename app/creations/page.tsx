import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { creations } from '@/content/creations';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Les Créations Olfactives | L’Officine des Anges',
  description:
    'Découvrez le catalogue des créations de Fabienne Dizy Olliveaud : brumes auriques, élixirs floraux, parfums d’ambiance et parfum sur mesure.',
  path: '/creations',
});

export default function CreationsPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Catalogue Artisanal
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Les Créations de L’Officine
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Chaque formule est préparée avec soin à partir d’huiles essentielles nobles et d’ingrédients de haute qualité. Pour commander ou recevoir des conseils personnalisés, échangez directement avec Fabienne.
          </p>
        </div>

        {/* Creations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {creations.map((item) => (
            <div
              key={item.id}
              className="rounded-[36px] overflow-hidden bg-white border border-[#152A34]/8 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:border-[#C2A064]/40 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#063840]/80 text-[#FCF8F0] backdrop-blur-md text-[10px] uppercase tracking-wider font-medium">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="font-editorial text-[26px] sm:text-[30px] text-[#063840] leading-tight">
                      {item.name}
                    </h3>
                    <p className="font-editorial italic text-[15px] text-[#A35F27] mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-[13.5px] text-[#74776F] font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#07515B] font-semibold block mb-1">
                      Notes olfactives principales :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.notes.map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="text-[11px] bg-[#E8DDCA]/60 text-[#07515B] px-2.5 py-0.5 rounded-full"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-[12px] text-[#74776F] pt-2 border-t border-[#152A34]/6 space-y-1">
                    <p><strong>Contenance :</strong> {item.size}</p>
                    <p><strong>Conseil :</strong> {item.usage}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-[#152A34]/6 mt-auto">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full bg-[#063840] text-[#FCF8F0] text-[12.5px] font-medium uppercase tracking-wider hover:bg-[#07515B] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C2A064]" />
                  <span>Me renseigner auprès de Fabienne</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
