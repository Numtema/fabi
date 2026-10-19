'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Calendar, Headphones, Sparkles, MapPin, Heart } from 'lucide-react';
import { OfficineSeal } from '@/components/ui/OfficineSeal';
import { LivingWordmark } from './LivingWordmark';
import { siteConfig } from '@/config/site';

export function LivingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full px-2 sm:px-3 pt-6 pb-4 bg-[#092C31] text-[#FCF8F0]">
      <div className="relative rounded-t-[54px] sm:rounded-t-[72px] md:rounded-t-[80px] bg-gradient-to-b from-[#063840] via-[#092C31] to-[#041E22] p-8 sm:p-14 md:p-20 border-t border-x border-white/12 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]">
        {/* Top Opening Room CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-6 pb-14 border-b border-white/10">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block">
            Clôture & Rendez-vous
          </span>
          <h2 className="font-editorial text-[38px] sm:text-[54px] md:text-[68px] leading-[0.98] text-[#FCF8F0]">
            Prendre le temps de se rencontrer.
          </h2>
          <p className="text-[15px] sm:text-[18px] text-[#E8DDCA]/80 font-light max-w-xl mx-auto">
            Que ce soit pour un massage Lemniscate, un soin énergétique LaHoChi ou une création olfactive, chaque démarche commence par un premier pas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#C2A064] text-[#092C31] text-[13px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre Rendez-vous</span>
            </Link>
            <Link
              href="/chambre-ecoute"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/15 text-[#FCF8F0] text-[13px] font-medium uppercase tracking-wider hover:bg-white/15 transition-colors"
            >
              <Headphones className="w-4 h-4 text-[#C2A064]" />
              <span>Écouter une méditation</span>
            </Link>
          </div>
        </div>

        {/* Living Monumental Wordmark */}
        <LivingWordmark />

        {/* Central Seal & Recessed Emblem */}
        <div className="flex flex-col items-center justify-center my-10">
          <div className="p-3 rounded-full bg-[#092C31]/90 border border-white/10 shadow-2xl">
            <OfficineSeal size="lg" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E8DDCA]/70 font-medium mt-3">
            Pratique holistique · Seine-Maritime · Depuis 2015
          </span>
        </div>

        {/* Structured Editorial Navigation Links */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-10 border-b border-white/10 text-[13px]">
          {/* Prestations */}
          <div className="space-y-3">
            <span className="text-[10.5px] uppercase tracking-widest text-[#C2A064] font-medium block">
              Prestations
            </span>
            <ul className="space-y-2 text-[#E8DDCA]/75 font-light">
              <li><Link href="/soins-energetiques" className="hover:text-white transition-colors">Soins énergétiques</Link></li>
              <li><Link href="/lahochi" className="hover:text-white transition-colors">LaHoChi</Link></li>
              <li><Link href="/massage-lemniscate" className="hover:text-white transition-colors">Massage Lemniscate</Link></li>
              <li><Link href="/radiesthesie" className="hover:text-white transition-colors">Radiesthésie</Link></li>
              <li><Link href="/meditation" className="hover:text-white transition-colors">Méditation</Link></li>
            </ul>
          </div>

          {/* L'Officine */}
          <div className="space-y-3">
            <span className="text-[10.5px] uppercase tracking-widest text-[#C2A064] font-medium block">
              L’Officine
            </span>
            <ul className="space-y-2 text-[#E8DDCA]/75 font-light">
              <li><Link href="/officine" className="hover:text-white transition-colors">L’Âme du lieu</Link></li>
              <li><Link href="/creations" className="hover:text-white transition-colors">Les Créations</Link></li>
              <li><Link href="/aromatherapie" className="hover:text-white transition-colors">Aromathérapie</Link></li>
              <li><Link href="/aromatherapie" className="hover:text-white transition-colors">Parfum sur mesure</Link></li>
            </ul>
          </div>

          {/* Transmettre */}
          <div className="space-y-3">
            <span className="text-[10.5px] uppercase tracking-widest text-[#C2A064] font-medium block">
              Transmettre
            </span>
            <ul className="space-y-2 text-[#E8DDCA]/75 font-light">
              <li><Link href="/ateliers-formations" className="hover:text-white transition-colors">Initiation Pendule</Link></li>
              <li><Link href="/ateliers-formations" className="hover:text-white transition-colors">Ateliers Parfums</Link></li>
              <li><Link href="/ateliers-formations" className="hover:text-white transition-colors">Cercles de Méditation</Link></li>
            </ul>
          </div>

          {/* Expérience */}
          <div className="space-y-3">
            <span className="text-[10.5px] uppercase tracking-widest text-[#C2A064] font-medium block">
              Expérience
            </span>
            <ul className="space-y-2 text-[#E8DDCA]/75 font-light">
              <li><Link href="/fabienne" className="hover:text-white transition-colors">Fabienne Dizy</Link></li>
              <li><Link href="/chambre-ecoute" className="hover:text-white transition-colors">La Chambre d’Écoute</Link></li>
              <li><Link href="/temoignages" className="hover:text-white transition-colors">Avis Vérifiés (5/5)</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Le Journal</Link></li>
            </ul>
          </div>

          {/* Pratique */}
          <div className="space-y-3">
            <span className="text-[10.5px] uppercase tracking-widest text-[#C2A064] font-medium block">
              Modalités
            </span>
            <ul className="space-y-2 text-[#E8DDCA]/75 font-light">
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Tarifs & Durées</Link></li>
              <li><Link href="/prestations#orientation" className="hover:text-white transition-colors">Trouver ma pratique</Link></li>
              <li><Link href="/prendre-rendez-vous" className="hover:text-white transition-colors">Réservation</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Territoire */}
          <div className="space-y-3">
            <span className="text-[10.5px] uppercase tracking-widest text-[#C2A064] font-medium block">
              Territoire
            </span>
            <p className="text-[12px] text-[#E8DDCA]/75 leading-relaxed font-light">
              Seine-Maritime <br />
              Secteur Le Havre / Lillebonne / Lintot <br />
              <span className="text-[#C2A064] text-[11px]">Consultations à distance partout en France</span>
            </p>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#E8DDCA]/50 font-light">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            {siteConfig.disclaimer}
          </p>

          <div className="flex items-center space-x-6 shrink-0">
            <Link href="/legal/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/legal/politique-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C2A064] hover:text-[#092C31] flex items-center justify-center transition-colors text-white"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-white/5 text-center text-[10.5px] text-[#E8DDCA]/40">
          © {new Date().getFullYear()} L’Officine des Anges · Fabienne Dizy Olliveaud · Présence 1.618 · Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
