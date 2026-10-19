import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { services } from '@/content/services';
import { constructMetadata } from '@/lib/seo';

const service = services.find((s) => s.slug === 'soins-energetiques')!;

export const metadata: Metadata = constructMetadata({
  title: 'Soins Énergétiques & LaHoChi | L’Officine des Anges',
  description:
    'Séance de soins énergétiques, LaHoChi et Reiki Mikao Usui avec Fabienne Dizy Olliveaud en Seine-Maritime et à distance.',
  path: '/soins-energetiques',
});

export default function SoinsEnergetiquesPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            RECEVOIR · SOINS ÉNERGÉTIQUES
          </span>
          <h1 className="font-editorial text-[40px] sm:text-[54px] md:text-[66px] leading-[0.98] text-[#063840]">
            {service.title}
          </h1>
          <p className="font-editorial italic text-[22px] sm:text-[26px] text-[#07515B]">
            {service.subtitle}
          </p>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            {service.summary}
          </p>
        </div>

        {/* Media Frame */}
        <div className="relative aspect-[16/9] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/10 bg-[#E8DDCA]">
          <Image
            src={service.image}
            alt={service.title}
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
                Modalités
              </span>
              <span className="font-editorial text-[22px]">
                {service.duration} · En cabinet & à distance
              </span>
            </div>
            <Link
              href="/prendre-rendez-vous"
              className="px-6 py-2.5 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors"
            >
              Réserver ce soin
            </Link>
          </div>
        </div>

        {/* 3 Layers of Experience (Concrete, Sensory, Spiritual) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[30px] bg-white border border-[#152A34]/8 shadow-sm space-y-3">
            <span className="text-[10.5px] uppercase tracking-wider text-[#C2A064] font-semibold block">
              01 · Ce qui se passe concrètement
            </span>
            <h3 className="font-editorial text-[22px] text-[#063840]">
              L’Accueil & Le Déroulé
            </h3>
            <p className="text-[13px] text-[#74776F] leading-relaxed font-light">
              {service.concreteLayer}
            </p>
          </div>

          <div className="p-6 rounded-[30px] bg-white border border-[#152A34]/8 shadow-sm space-y-3">
            <span className="text-[10.5px] uppercase tracking-wider text-[#C2A064] font-semibold block">
              02 · L’Expérience Sensorielle
            </span>
            <h3 className="font-editorial text-[22px] text-[#063840]">
              Sensations & Apaisement
            </h3>
            <p className="text-[13px] text-[#74776F] leading-relaxed font-light">
              {service.sensoryLayer}
            </p>
          </div>

          <div className="p-6 rounded-[30px] bg-white border border-[#152A34]/8 shadow-sm space-y-3">
            <span className="text-[10.5px] uppercase tracking-wider text-[#C2A064] font-semibold block">
              03 · La Dimension Subtile
            </span>
            <h3 className="font-editorial text-[22px] text-[#063840]">
              Tradition & Résonance
            </h3>
            <p className="text-[13px] text-[#74776F] leading-relaxed font-light">
              {service.spiritualLayer}
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="rounded-[40px] bg-[#E8DDCA]/45 p-8 sm:p-12 border border-[#152A34]/8 space-y-6">
          <h3 className="font-editorial text-[28px] sm:text-[34px] text-[#063840]">
            Les étapes d’une séance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-[22px] bg-white border border-[#152A34]/6 space-y-1">
                <span className="font-editorial text-[18px] text-[#07515B] font-semibold block">
                  {step.title}
                </span>
                <p className="text-[12.5px] text-[#74776F] font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer & Bottom Action */}
        <div className="text-center pt-4 space-y-6">
          <div className="p-4 rounded-[20px] bg-[#07515B]/5 border border-[#07515B]/10 max-w-2xl mx-auto text-[12px] text-[#74776F] leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#C2A064] mx-auto mb-1" />
            <span>
              Les soins énergétiques constituent une démarche d’harmonisation et de bien-être complémentaire. Ils ne se substituent à aucun traitement médical.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#07515B] text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#C2A064]" />
              <span>Prendre rendez-vous avec Fabienne</span>
            </Link>
            <Link
              href="/lahochi"
              className="inline-flex items-center space-x-1.5 px-6 py-4 rounded-full bg-[#E8DDCA] text-[#063840] text-[13px] font-medium uppercase tracking-wider hover:bg-[#D7C4A3] transition-colors"
            >
              <span>Découvrir spécifiquement le LaHoChi</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
