import type { Metadata } from 'next';
import { Calendar, Clock, MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { FirstExchange } from '@/components/home/FirstExchange';

export const metadata: Metadata = constructMetadata({
  title: 'Prendre Rendez-vous | L’Officine des Anges',
  description:
    'Réservez votre séance de massage Lemniscate, LaHoChi ou radiesthésie avec Fabienne Dizy Olliveaud en Seine-Maritime ou à distance.',
  path: '/prendre-rendez-vous',
});

export default function PrendreRendezVousPage() {
  return (
    <div className="w-full bg-[#092C31] text-[#FCF8F0] pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mb-8 text-center space-y-4">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block">
          Réservation & Disponibilités
        </span>
        <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#FCF8F0]">
          Prendre Rendez-vous
        </h1>
        <p className="text-[15px] sm:text-[17px] text-[#E8DDCA]/80 font-light max-w-xl mx-auto leading-relaxed">
          Sur rendez-vous du lundi au samedi. Indiquez la pratique souhaitée et vos préférences de créneau pour fixer votre séance.
        </p>

        {/* 3 Steps summary pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
          <div className="p-4 rounded-[22px] bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-[#C2A064] block">ÉTAPE 1</span>
            <span className="text-[13px] font-semibold text-white block">Envoyer votre demande</span>
            <p className="text-[11px] text-[#E8DDCA]/70">Remplir le formulaire ci-dessous avec vos créneaux souhaités.</p>
          </div>
          <div className="p-4 rounded-[22px] bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-[#C2A064] block">ÉTAPE 2</span>
            <span className="text-[13px] font-semibold text-white block">Confirmation du créneau</span>
            <p className="text-[11px] text-[#E8DDCA]/70">Fabienne vous répond sous 24h avec la confirmation de la date.</p>
          </div>
          <div className="p-4 rounded-[22px] bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-[#C2A064] block">ÉTAPE 3</span>
            <span className="text-[13px] font-semibold text-white block">La Rencontre</span>
            <p className="text-[11px] text-[#E8DDCA]/70">Accueil au cabinet ou appel de préparation pour la séance à distance.</p>
          </div>
        </div>
      </div>

      <FirstExchange />
    </div>
  );
}
