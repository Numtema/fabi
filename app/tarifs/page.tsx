import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { services } from '@/content/services';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Tarifs & Durées des Séances | L’Officine des Anges',
  description:
    'Consultez les durées et modalités d’accompagnement pour le massage Lemniscate, les soins énergétiques LaHoChi et la radiesthésie avec Fabienne Dizy Olliveaud.',
  path: '/tarifs',
});

export default function TarifsPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block">
            Transparence & Modalités
          </span>
          <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#063840]">
            Tarifs & Formats
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#74776F] font-light leading-relaxed">
            Chaque accompagnement est un temps dédié, sans précipitation. Les modalités tarifaires sont communiquées avec clarté lors de notre premier contact.
          </p>
        </div>

        {/* Pricing & Formats Table */}
        <div className="space-y-4">
          {services.map((s) => (
            <div
              key={s.id}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-[#152A34]/8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C2A064]/40 transition-colors"
            >
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] uppercase tracking-wider text-[#C2A064] font-semibold bg-[#063840]/5 px-2.5 py-0.5 rounded-full inline-block">
                  {s.familyLabel}
                </span>
                <h3 className="font-editorial text-[24px] sm:text-[28px] text-[#063840]">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-[#74776F] font-light max-w-xl">
                  {s.shortDescription}
                </p>
                <div className="flex items-center space-x-2 text-[12px] text-[#07515B] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#C2A064]" />
                  <span>Durée : {s.duration}</span>
                  <span>·</span>
                  <span>{s.locationModes.join(' & ')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#152A34]/8 shrink-0 w-full sm:w-auto">
                <span className="text-[14px] font-medium text-[#063840]">
                  {s.priceDisplay}
                </span>
                <Link
                  href="/prendre-rendez-vous"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12px] font-medium uppercase tracking-wider hover:bg-[#063840] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C2A064]" />
                  <span>Réserver</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note on payment & cancellation */}
        <div className="p-8 rounded-[36px] bg-[#E8DDCA]/45 border border-[#152A34]/8 space-y-4">
          <h3 className="font-editorial text-[24px] text-[#063840]">
            Modalités pratiques & Déontologie
          </h3>
          <ul className="space-y-2 text-[13.5px] text-[#152A34]/80 font-light">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C2A064] shrink-0 mt-0.5" />
              <span>Paiement en cabinet (chèque ou espèces) ou par virement bancaire pour les séances à distance.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C2A064] shrink-0 mt-0.5" />
              <span>Tout rendez-vous peut être reporté sans frais en prévenant au moins 24 heures à l’avance.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C2A064] shrink-0 mt-0.5" />
              <span>Certaines mutuelles prennent en charge les séances de bien-être ou d’harmonisation : facture fournie sur demande.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
