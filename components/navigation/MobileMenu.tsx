'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { services } from '@/content/services';
import { creations } from '@/content/creations';
import { OfficineSeal } from '@/components/ui/OfficineSeal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>('services');

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#092C31]/95 backdrop-blur-2xl text-[#FCF8F0] overflow-y-auto px-5 py-6 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Bar inside Mobile Menu */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#FCF8F0]/10">
              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-[#FCF8F0]/10 border border-[#FCF8F0]/15 flex items-center justify-center text-[#FCF8F0] hover:bg-[#FCF8F0]/20 transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>

              <OfficineSeal size="sm" onClick={onClose} />

              <Link
                href="/prendre-rendez-vous"
                onClick={onClose}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-[#C2A064] text-[#092C31] text-[12px] font-medium"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>RDV</span>
              </Link>
            </div>

            {/* Navigation links & accordion */}
            <div className="mt-8 space-y-4">
              <Link
                href="/"
                onClick={onClose}
                className="block font-editorial text-[28px] text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
              >
                Accueil
              </Link>

              {/* Prestations Accordion */}
              <div className="border-t border-[#FCF8F0]/10 pt-3">
                <button
                  onClick={() => toggleSection('services')}
                  className="w-full flex items-center justify-between text-left py-2 font-editorial text-[28px] text-[#FCF8F0]"
                >
                  <span>Prestations</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C2A064] transition-transform duration-300 ${
                      openSection === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openSection === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-2.5 pt-2 pb-4 pl-2"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          href={`/${s.slug}`}
                          onClick={onClose}
                          className="flex items-center justify-between p-2 rounded-xl bg-[#FCF8F0]/5 border border-[#FCF8F0]/5 text-[#FCF8F0]/90"
                        >
                          <div>
                            <span className="text-[14px] font-medium block">{s.title}</span>
                            <span className="text-[11px] text-[#C2A064]">{s.duration} · {s.locationModes.join(' & ')}</span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-[#C2A064]" />
                        </Link>
                      ))}

                      <Link
                        href="/prestations#orientation"
                        onClick={onClose}
                        className="block text-[12px] text-[#C2A064] font-medium pt-2"
                      >
                        Trouver mon accompagnement →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* L'Officine Accordion */}
              <div className="border-t border-[#FCF8F0]/10 pt-3">
                <button
                  onClick={() => toggleSection('officine')}
                  className="w-full flex items-center justify-between text-left py-2 font-editorial text-[28px] text-[#FCF8F0]"
                >
                  <span>L’Officine des Anges</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C2A064] transition-transform duration-300 ${
                      openSection === 'officine' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openSection === 'officine' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-2 pt-2 pb-4 pl-2"
                    >
                      <Link
                        href="/officine"
                        onClick={onClose}
                        className="block text-[14px] font-medium text-[#FCF8F0]"
                      >
                        L’Âme de L’Officine
                      </Link>
                      <Link
                        href="/creations"
                        onClick={onClose}
                        className="block text-[14px] text-[#FCF8F0]/80"
                      >
                        Toutes les créations olfactives
                      </Link>
                      <Link
                        href="/aromatherapie"
                        onClick={onClose}
                        className="block text-[14px] text-[#FCF8F0]/80"
                      >
                        Parfum sur mesure
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Single links */}
              <div className="border-t border-[#FCF8F0]/10 pt-3 space-y-3 font-editorial text-[26px]">
                <Link
                  href="/fabienne"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  Fabienne Dizy Olliveaud
                </Link>
                <Link
                  href="/chambre-ecoute"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  La Chambre d’Écoute
                </Link>
                <Link
                  href="/ateliers-formations"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  Ateliers & Formations
                </Link>
                <Link
                  href="/journal"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  Journal
                </Link>
                <Link
                  href="/temoignages"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  Témoignages (5/5)
                </Link>
                <Link
                  href="/tarifs"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  Tarifs & Formats
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block text-[#FCF8F0] hover:text-[#C2A064] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Footer of Mobile Drawer */}
          <div className="pt-8 border-t border-[#FCF8F0]/10 text-[11px] text-[#FCF8F0]/60 space-y-1">
            <p className="text-[#C2A064] uppercase tracking-wider">
              Seine-Maritime · Présentiel & à distance
            </p>
            <p>Accompagnements holistiques & créations d’apothicaire depuis 2015</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
