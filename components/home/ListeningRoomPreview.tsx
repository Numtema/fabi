'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Pause, Volume2, ArrowUpRight, Sparkles } from 'lucide-react';
import { listeningTracks, AudioTrack } from '@/content/listening';
import { GoldenThread } from '@/components/motion/GoldenThread';
import { Reveal } from '@/components/motion/Reveal';

export function ListeningRoomPreview() {
  const [activeTrack, setActiveTrack] = useState<AudioTrack>(listeningTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Gentle Web Audio API ambient tone synthesizer for authentic listening experience without broken external CDN audio
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      stopTone();
      setIsPlaying(false);
    } else {
      startTone();
      setIsPlaying(true);
    }
  };

  const startTone = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Relaxing 432Hz or 528Hz soft sine harmonic
      const freq = activeTrack.id === 'track-2' ? 528 : activeTrack.id === 'track-3' ? 396 : 432;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Low soft volume
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscRef.current = osc;
      gainRef.current = gain;
    } catch {
      // AudioContext fallback
    }
  };

  const stopTone = () => {
    if (gainRef.current && audioCtxRef.current) {
      try {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.6);
        setTimeout(() => {
          oscRef.current?.stop();
          oscRef.current?.disconnect();
        }, 600);
      } catch {
        // Safe cleanup
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 600);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      stopTone();
    };
  }, []);

  const handleSelectTrack = (track: AudioTrack) => {
    if (isPlaying) {
      stopTone();
      setIsPlaying(false);
    }
    setActiveTrack(track);
    setProgress(0);
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 bg-[#092C31] text-[#FCF8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C2A064] font-medium block mb-2">
                Espace Sonore & Méditation
              </span>
              <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[56px] leading-[1] text-[#FCF8F0]">
                La Chambre d’Écoute
              </h2>
            </div>
            <p className="font-editorial italic text-[20px] sm:text-[24px] text-[#C8A66A] mt-3 md:mt-0 max-w-md">
              Prendre quelques minutes. Et simplement écouter.
            </p>
          </div>
        </Reveal>

        {/* Golden thread wave when playing */}
        {isPlaying && (
          <div className="mb-6">
            <GoldenThread variant="listen" />
          </div>
        )}

        {/* 2 Columns: Dominant Player Left (60%), Track List Right (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Featured Player Object */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#063840] to-[#0B4650] border border-white/15 p-6 sm:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative aspect-square w-36 sm:w-48 rounded-[28px] overflow-hidden shrink-0 border border-white/15 shadow-md">
                  <Image
                    src={activeTrack.image}
                    alt={activeTrack.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#063840]/30" />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-wider text-[#C2A064] font-medium inline-block">
                    {activeTrack.category}
                  </span>
                  <h3 className="font-editorial text-[24px] sm:text-[28px] text-[#FCF8F0] leading-tight">
                    {activeTrack.title}
                  </h3>
                  <p className="text-[12px] text-[#E8DDCA]/80 font-light line-clamp-2">
                    {activeTrack.description}
                  </p>
                  <p className="text-[11px] font-mono text-[#C2A064]">
                    {activeTrack.audioFrequency} · {activeTrack.author}
                  </p>
                </div>
              </div>

              {/* Progress Bar & Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#C2A064] h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#E8DDCA]/60">
                    {isPlaying ? 'En lecture harmonieuse...' : 'En pause'}
                  </span>

                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-[#C2A064] text-[#092C31] flex items-center justify-center hover:bg-[#E8DDCA] transition-transform transform active:scale-95 shadow-[0_4px_20px_rgba(194,160,100,0.4)]"
                    aria-label={isPlaying ? 'Mettre en pause' : 'Écouter l’extrait'}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-[#E8DDCA]/60">
                    {activeTrack.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Other tracks list */}
          <div className="lg:col-span-5 space-y-3">
            {listeningTracks.map((track) => {
              const isSelected = activeTrack.id === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectTrack(track)}
                  className={`p-4 rounded-[24px] border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/10 border-[#C2A064]/60 text-white shadow-md'
                      : 'bg-white/5 border-white/8 text-[#E8DDCA]/70 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono ${
                      isSelected ? 'bg-[#C2A064] text-[#092C31]' : 'bg-white/10 text-[#C2A064]'
                    }`}>
                      {isSelected && isPlaying ? (
                        <Volume2 className="w-4 h-4" />
                      ) : (
                        <Play className="w-3.5 h-3.5 ml-0.5" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-editorial text-[18px] leading-tight text-[#FCF8F0]">
                        {track.title}
                      </h4>
                      <p className="text-[11px] text-[#E8DDCA]/60">
                        {track.category} · {track.duration}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-3">
              <Link
                href="/chambre-ecoute"
                className="inline-flex items-center space-x-2 text-[12px] uppercase tracking-wider text-[#C2A064] hover:text-white transition-colors"
              >
                <span>Accéder à toute La Chambre d’Écoute</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
