import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { journalArticles } from '@/content/journal';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Le Journal de L’Officine | Écrits & Réflexions',
  description:
    'Articles, récits de pratique et réflexions autour du massage Lemniscate, du LaHoChi, du pendule et de l’art de l’écoute par Fabienne Dizy Olliveaud.',
  path: '/journal',
});

export default function JournalPage() {
  const featured = journalArticles[0];
  const others = journalArticles.slice(1);

  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Édition & Coulisses
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Le Journal
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[28px] text-[#07515B]">
            Des mots posés pour nourrir la réflexion et éclairer les pratiques
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Plongez dans les fondements du massage Lemniscate, l’écoute bienveillante et l’utilisation éthique du pendule.
          </p>
        </div>

        {/* Featured Article */}
        {featured && (
          <Link
            href={`/journal/${featured.slug}`}
            className="group block rounded-[44px] overflow-hidden bg-white border border-[#152A34]/8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#063840]/85 text-[#FCF8F0] backdrop-blur-md text-[10px] uppercase tracking-wider font-medium">
                  {featured.category}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                <div className="flex items-center space-x-3 text-[11px] text-[#74776F]">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#C2A064]" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>

                <h2 className="font-editorial text-[28px] sm:text-[36px] text-[#063840] leading-tight group-hover:text-[#07515B] transition-colors">
                  {featured.title}
                </h2>

                <p className="text-[14px] text-[#74776F] font-light leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="pt-2 inline-flex items-center space-x-2 text-[12px] font-medium uppercase tracking-wider text-[#C2A064] group-hover:text-[#07515B] transition-colors">
                  <span>Lire l’article complet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Articles */}
        <div className="space-y-6">
          <h3 className="font-editorial text-[28px] sm:text-[32px] text-[#063840]">
            Autres lectures
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((art) => (
              <Link
                key={art.slug}
                href={`/journal/${art.slug}`}
                className="group rounded-[36px] overflow-hidden bg-white border border-[#152A34]/8 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#063840]/80 text-[#FCF8F0] backdrop-blur-md text-[10px] uppercase tracking-wider font-medium">
                      {art.category}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-[11px] text-[#74776F]">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h4 className="font-editorial text-[24px] text-[#063840] leading-tight group-hover:text-[#07515B] transition-colors">
                    {art.title}
                  </h4>

                  <p className="text-[13.5px] text-[#74776F] font-light leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#152A34]/6 mt-6 inline-flex items-center space-x-1.5 text-[12px] uppercase tracking-wider text-[#07515B] font-medium group-hover:text-[#C2A064] transition-colors">
                  <span>Lire la suite</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
