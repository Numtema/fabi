import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Wind, Headphones, Users } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Méditation & Relaxation Profonde en Seine-Maritime | L’Officine des Anges',
  description:
    'Séances individuelles et cercles de méditation guidée avec Fabienne Dizy Olliveaud. Retrouver l’apaisement mental et le souffle.',
  path: '/meditation',
});

export default function MeditationPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            PRÉSENCE & SOUFFLE
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Méditation & Relaxation
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[26px] text-[#07515B]">
            Apprendre à s’arrêter, respirer et réhabiter le corps
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Dans un quotidien surchargé, la méditation guidée offre un refuge intérieur pour déposer la charge mentale. Fabienne vous accompagne à travers la voix, le souffle et des silences bienveillants.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/10 bg-[#E8DDCA]">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
            alt="Méditation et retour au calme intérieur"
            fill
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                Formats disponibles
              </span>
              <span className="font-editorial text-[22px]">
                Individuel sur mesure ou cercle de partage
              </span>
            </div>
            <Link
              href="/chambre-ecoute"
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
            >
              <Headphones className="w-4 h-4" />
              <span>Tester La Chambre d’Écoute</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[36px] bg-white border border-[#152A34]/8 shadow-sm space-y-4">
            <Wind className="w-6 h-6 text-[#07515B]" />
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Séance Individuelle
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              45 min à 1h d’accompagnement sur mesure. Nous ciblons les zones de tension corporelle, apprenons à déverrouiller le diaphragme et installons un ancrage reproductible chez vous au quotidien.
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#E8DDCA]/45 border border-[#152A34]/8 space-y-4">
            <Users className="w-6 h-6 text-[#07515B]" />
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Cercles Collectifs
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Des temps partagés en groupe restreint pour vivre la résonance du silence commun. Organisés ponctuellement en présentiel en Seine-Maritime ou en visioconférence.
            </p>
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
