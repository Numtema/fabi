'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const serviceOptions = [
  'Soins énergétiques & LaHoChi',
  'Massage Lemniscate',
  'Radiesthésie & Pendule',
  'Méditation & Relaxation',
  'Aromathérapie & Parfums',
  'Ateliers & Formations',
  'Accompagnement à distance',
  'Je ne sais pas encore',
];

export function FirstExchange() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Abstraction for form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: serviceOptions[0],
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative w-full px-2.5 sm:px-4 py-8 bg-[#092C31]">
      <div className="relative rounded-[40px] sm:rounded-[56px] md:rounded-[72px] overflow-hidden bg-gradient-to-b from-[#063840] to-[#092C31] text-[#FCF8F0] p-6 sm:p-12 md:p-16 border border-white/12 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 5 Cols: Warm editorial guidance */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                  Premier Contact
                </span>
                <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[56px] leading-[1.02] text-[#FCF8F0]">
                  Un premier échange suffit pour commencer.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4 text-[15px] sm:text-[17px] text-[#E8DDCA]/85 font-light leading-relaxed">
                  <p>
                    Vous savez déjà quelle pratique vous attire ? Ou vous hésitez encore ?
                  </p>
                  <p>
                    Écrivez simplement ce qui vous amène. Fabienne prendra le temps de vous lire et de vous répondre avec délicatesse afin de vous orienter au mieux.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-[13px] text-[#E8DDCA]/70">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#C2A064]" />
                    <span>Cabinet situé en Seine-Maritime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#C2A064]" />
                    <span>Séances possibles à distance sur créneau dédié</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7 bg-white/5 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 border border-white/10 backdrop-blur-md">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C2A064] text-[#092C31] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-editorial text-[28px] text-[#FCF8F0]">
                    Votre message a été transmis
                  </h3>
                  <p className="text-[14px] text-[#E8DDCA]/80 max-w-md mx-auto">
                    Merci pour votre confiance. Fabienne prendra connaissance de vos mots et reviendra vers vous sous 24 à 48 heures.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-[12px] uppercase tracking-wider text-[#FCF8F0] hover:bg-white/15"
                  >
                    Envoyer un autre mot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-[13px] text-amber-200 flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Veuillez renseigner votre nom, votre e-mail et votre message.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#E8DDCA]/70 mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full h-14 px-5 rounded-[22px] bg-white/8 border border-white/15 text-[#FCF8F0] placeholder:text-white/30 focus:outline-none focus:border-[#C2A064] text-[14px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#E8DDCA]/70 mb-1.5">
                        Adresse e-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.fr"
                        className="w-full h-14 px-5 rounded-[22px] bg-white/8 border border-white/15 text-[#FCF8F0] placeholder:text-white/30 focus:outline-none focus:border-[#C2A064] text-[14px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#E8DDCA]/70 mb-1.5">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 00 00 00 00"
                      className="w-full h-14 px-5 rounded-[22px] bg-white/8 border border-white/15 text-[#FCF8F0] placeholder:text-white/30 focus:outline-none focus:border-[#C2A064] text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#E8DDCA]/70 mb-1.5">
                      Je souhaite échanger à propos de
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-14 px-5 rounded-[22px] bg-[#063840] border border-white/15 text-[#FCF8F0] focus:outline-none focus:border-[#C2A064] text-[14px]"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#063840] text-[#FCF8F0]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#E8DDCA]/70 mb-1.5">
                      Votre message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez en quelques mots ce qui vous amène ou vos questions..."
                      className="w-full p-5 rounded-[24px] bg-white/8 border border-white/15 text-[#FCF8F0] placeholder:text-white/30 focus:outline-none focus:border-[#C2A064] text-[14px] resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-[#E8DDCA]/50 font-light">
                    Fabienne s’engage à préserver la stricte confidentialité de vos échanges. Vos coordonnées ne seront jamais transmises.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full h-14 rounded-full bg-[#C2A064] text-[#092C31] text-[13px] font-medium uppercase tracking-wider hover:bg-[#E8DDCA] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{status === 'submitting' ? 'Envoi en cours...' : 'Envoyer mon message à Fabienne'}</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
