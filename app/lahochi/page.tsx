import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Sparkles, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Séance LaHoChi en Seine-Maritime & à Distance | L’Officine des Anges',
  description:
    'Découvrez le LaHoChi avec Fabienne Dizy Olliveaud : une pratique énergétique douce par apposition des mains, en cabinet en Seine-Maritime ou à distance.',
  path: '/lahochi',
});

export default function LaHoChiPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Pratique Énergétique Fondamentale
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Le LaHoChi
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[26px] text-[#07515B]">
            Une fréquence de lumière et de douceur bienveillante
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Dans la tradition du LaHoChi, cette pratique est reconnue pour sa capacité à diffuser une onde d’apaisement profond dans le corps et l’esprit, sans manipulation physique brusque.
          </p>
        </div>

        {/* Atmosphere Photo */}
        <div className="relative aspect-[16/9] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/10 bg-[#E8DDCA]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
            alt="Séance de LaHoChi et calme bienfaisant"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063840]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-[#FCF8F0] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C2A064] block font-medium">
                Cadre du soin
              </span>
              <span className="font-editorial text-[22px]">
                Environ 1h15 · Séance habillée · Présentiel & à distance
              </span>
            </div>
            <Link
              href="/prendre-rendez-vous"
              className="px-6 py-2.5 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
            >
              Prendre RDV
            </Link>
          </div>
        </div>

        {/* Narrative Chapters: Ce que Fabienne nomme LaHoChi & Son approche */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[36px] bg-white border border-[#152A34]/8 shadow-sm space-y-4">
            <h2 className="font-editorial text-[26px] text-[#063840]">
              Dans l’approche de Fabienne
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Fabienne décrit le LaHoChi comme un sas où l’on s’abandonne en sécurité. Le praticien canalise cette fréquence énergétique bienfaisante et la transmet par des positions douces des mains au niveau de la tête, des épaules, du cœur et du bassin.
            </p>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              Il ne s’agit ni d’un dogme ni d’une promesse magique, mais d’un moment précieux où le corps retrouve l’espace nécessaire pour dissoudre ses micro-tensions accumulées.
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#E8DDCA]/40 border border-[#152A34]/8 space-y-4">
            <h2 className="font-editorial text-[26px] text-[#063840]">
              En cabinet ou à distance
            </h2>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              <strong>En cabinet :</strong> Vous êtes accueilli au calme en Seine-Maritime, installé confortablement et au chaud.
            </p>
            <p className="text-[14px] text-[#74776F] leading-relaxed font-light">
              <strong>À distance :</strong> Nous convenons d’un rendez-vous précis. Vous vous allongez chez vous dans le calme. Un appel téléphonique avant et après permet de poser l’intention et d’échanger sur vos ressentis.
            </p>
          </div>
        </div>

        {/* Before, During, After */}
        <div className="rounded-[40px] bg-white p-8 sm:p-12 border border-[#152A34]/8 space-y-8 shadow-sm">
          <h3 className="font-editorial text-[28px] sm:text-[34px] text-[#063840]">
            Comment se déroule votre rendez-vous
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#C2A064] block">01 / AVANT</span>
              <h4 className="font-editorial text-[20px] text-[#063840]">L’Échange Préalable</h4>
              <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
                Prendre le temps d’accueillir ce qui vous préoccupe et poser l’intention du soin en toute simplicité.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#C2A064] block">02 / PENDANT</span>
              <h4 className="font-editorial text-[20px] text-[#063840]">Le Temps d’Harmonisation</h4>
              <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
                45 à 50 minutes d’apposition douce. Beaucoup ressentent des vagues de chaleur, de picotements doux ou un sommeil réparateur.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#C2A064] block">03 / APRÈS</span>
              <h4 className="font-editorial text-[20px] text-[#063840]">Le Bilan Partagé</h4>
              <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
                Réveil progressif, restitution des perceptions de Fabienne et conseils bienveillants pour intégrer le soin.
              </p>
            </div>
          </div>
        </div>

        {/* Non-medical Disclaimer */}
        <div className="p-5 rounded-[24px] bg-[#07515B]/5 border border-[#07515B]/10 text-center max-w-2xl mx-auto text-[12px] text-[#74776F] leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#C2A064] mx-auto mb-1.5" />
          <span>
            Le LaHoChi est un accompagnement holistique de bien-être et de relaxation. Il ne constitue pas un acte médical et ne remplace en aucun cas votre médecin traitant ou tout traitement prescrit.
          </span>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/prendre-rendez-vous"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#C2A064]" />
            <span>Réserver une séance de LaHoChi</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
