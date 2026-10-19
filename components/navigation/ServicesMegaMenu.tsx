'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Infinity as InfinityIcon, Compass, Wind, Droplet, BookOpen, HelpCircle } from 'lucide-react';
import { services, ServiceItem } from '@/content/services';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const [activeService, setActiveService] = useState<ServiceItem>(services[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Infinity':
        return <InfinityIcon className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Wind':
        return <Wind className="w-4 h-4" />;
      case 'Droplet':
        return <Droplet className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[860px] max-w-[94vw] bg-[#FCF8F0]/96 backdrop-blur-2xl border border-[#152A34]/10 rounded-[36px] shadow-[0_24px_64px_rgba(6,56,64,0.18)] p-5 z-50 overflow-hidden"
          onMouseLeave={onClose}
          role="region"
          aria-label="Menu des prestations"
        >
          <div className="grid grid-cols-12 gap-5">
            {/* Left Column: 58% Navigation rows */}
            <div className="col-span-7 flex flex-col justify-between space-y-1">
              <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
                {services.map((service, idx) => {
                  const isActive = activeService.id === service.id;
                  return (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      onClick={onClose}
                      onMouseEnter={() => setActiveService(service)}
                      onFocus={() => setActiveService(service)}
                      className={`group flex items-center justify-between p-2.5 rounded-[20px] transition-all duration-200 ${
                        isActive
                          ? 'bg-[#E8DDCA]/60 text-[#063840]'
                          : 'hover:bg-[#E8DDCA]/35 text-[#152A34]/80 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                            isActive
                              ? 'bg-[#07515B] text-[#F7F2E8] scale-105'
                              : 'bg-[#152A34]/5 text-[#07515B] group-hover:scale-105'
                          }`}
                        >
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[11px] font-mono text-[#C2A064]">
                              0{idx + 1}
                            </span>
                            <span className="text-[14px] font-medium text-[#092C31]">
                              {service.title}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-[#74776F] line-clamp-1">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive
                            ? 'text-[#C2A064] translate-x-0.5 -translate-y-0.5'
                            : 'text-[#152A34]/30 group-hover:text-[#07515B]'
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Orientation prompt */}
              <div className="pt-3 border-t border-[#152A34]/10 mt-2 flex items-center justify-between">
                <Link
                  href="/prestations#orientation"
                  onClick={onClose}
                  className="inline-flex items-center space-x-2 text-[12px] font-medium text-[#07515B] hover:text-[#C2A064] transition-colors group"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#C2A064]" />
                  <span>Je ne sais pas quel accompagnement choisir → M’orienter</span>
                </Link>
                <Link
                  href="/prestations"
                  onClick={onClose}
                  className="text-[11.5px] text-[#74776F] hover:text-[#07515B] transition-colors"
                >
                  Toutes les prestations
                </Link>
              </div>
            </div>

            {/* Right Column: 42% Visual Preview Frame */}
            <div className="col-span-5 bg-[#F7F2E8] rounded-[28px] p-4 flex flex-col justify-between border border-[#152A34]/6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden mb-3">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      sizes="340px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#063840]/80 text-[#FCF8F0] backdrop-blur-md text-[10px] tracking-wider uppercase font-medium">
                      {activeService.family}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-editorial text-[19px] text-[#063840] leading-tight mb-1">
                      {activeService.title}
                    </h4>
                    <p className="text-[12px] text-[#74776F] line-clamp-2 leading-relaxed mb-3">
                      {activeService.shortDescription}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-[#07515B] pt-2 border-t border-[#152A34]/8">
                      <span>{activeService.duration}</span>
                      <Link
                        href={`/${activeService.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center space-x-1 font-medium text-[#C2A064] hover:text-[#07515B] transition-colors"
                      >
                        <span>Découvrir</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Micro Trust Strip on Footer */}
          <div className="mt-4 pt-3 border-t border-[#152A34]/8 flex items-center justify-between text-[10px] tracking-wider uppercase text-[#74776F]">
            <span>Depuis 2015</span>
            <span>·</span>
            <span>Seine-Maritime</span>
            <span>·</span>
            <span>Présentiel & à distance</span>
            <span>·</span>
            <span className="text-[#07515B] font-semibold">5/5 avis vérifiés (AMEDCINE)</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
