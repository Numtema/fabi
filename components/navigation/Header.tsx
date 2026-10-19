'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Calendar } from 'lucide-react';
import { OfficineSeal } from '@/components/ui/OfficineSeal';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { OfficineMegaMenu } from './OfficineMegaMenu';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'prestations' | 'officine' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] md:w-[min(calc(100vw-48px),1260px)] transition-all duration-300 ${
          scrolled
            ? 'h-[58px] md:h-[62px]'
            : 'h-[64px] md:h-[70px]'
        }`}
      >
        <div
          className={`relative w-full h-full rounded-full transition-all duration-300 flex items-center justify-between px-4 md:px-7 ${
            scrolled
              ? 'bg-[#FCF8F0]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(6,56,64,0.18)] border border-[#152A34]/12'
              : 'bg-[#FCF8F0]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(6,56,64,0.10)] border border-[#152A34]/8'
          }`}
        >
          {/* Mobile Layout: 3 zones */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#063840] hover:bg-[#152A34]/5 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative -top-1">
              <OfficineSeal scrolled={scrolled} size="sm" href="/" />
            </div>

            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#07515B] text-[#FCF8F0] text-[11px] font-medium tracking-wide shadow-sm"
            >
              <Calendar className="w-3 h-3 text-[#C2A064]" />
              <span>RDV</span>
            </Link>
          </div>

          {/* Desktop Left: Accueil, Prestations, L'Officine */}
          <nav className="hidden md:flex items-center space-x-7 flex-1 justify-start">
            <Link
              href="/"
              className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                pathname === '/' ? 'text-[#07515B] font-semibold' : 'text-[#152A34]/80 hover:text-[#07515B]'
              }`}
            >
              Accueil
            </Link>

            {/* Prestations trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('prestations')}
            >
              <button
                type="button"
                className={`inline-flex items-center space-x-1 text-[13.5px] font-medium tracking-wide transition-colors py-2 ${
                  activeMenu === 'prestations' || pathname.startsWith('/soins') || pathname.startsWith('/massage')
                    ? 'text-[#07515B] font-semibold'
                    : 'text-[#152A34]/80 hover:text-[#07515B]'
                }`}
                aria-expanded={activeMenu === 'prestations'}
              >
                <span>Prestations</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C2A064]" />
              </button>

              <ServicesMegaMenu
                isOpen={activeMenu === 'prestations'}
                onClose={() => setActiveMenu(null)}
              />
            </div>

            {/* L'Officine trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('officine')}
            >
              <button
                type="button"
                className={`inline-flex items-center space-x-1 text-[13.5px] font-medium tracking-wide transition-colors py-2 ${
                  activeMenu === 'officine' || pathname.startsWith('/officine') || pathname.startsWith('/creations')
                    ? 'text-[#07515B] font-semibold'
                    : 'text-[#152A34]/80 hover:text-[#07515B]'
                }`}
                aria-expanded={activeMenu === 'officine'}
              >
                <span>L’Officine</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C2A064]" />
              </button>

              <OfficineMegaMenu
                isOpen={activeMenu === 'officine'}
                onClose={() => setActiveMenu(null)}
              />
            </div>
          </nav>

          {/* Desktop Center: Le Sceau */}
          <div className="hidden md:flex items-center justify-center shrink-0 mx-4 relative -top-1">
            <OfficineSeal scrolled={scrolled} size="md" href="/" />
          </div>

          {/* Desktop Right: Fabienne, Journal, Témoignages, Prendre RDV */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <Link
              href="/fabienne"
              className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                pathname === '/fabienne' ? 'text-[#07515B] font-semibold' : 'text-[#152A34]/80 hover:text-[#07515B]'
              }`}
            >
              Fabienne
            </Link>

            <Link
              href="/chambre-ecoute"
              className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                pathname === '/chambre-ecoute' ? 'text-[#07515B] font-semibold' : 'text-[#152A34]/80 hover:text-[#07515B]'
              }`}
            >
              Écoute
            </Link>

            <Link
              href="/temoignages"
              className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                pathname === '/temoignages' ? 'text-[#07515B] font-semibold' : 'text-[#152A34]/80 hover:text-[#07515B]'
              }`}
            >
              Témoignages
            </Link>

            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#07515B] text-[#FCF8F0] text-[12.5px] font-medium tracking-wider uppercase hover:bg-[#063840] hover:shadow-[0_4px_16px_rgba(7,81,91,0.25)] transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C2A064]" />
              <span>Prendre RDV</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
