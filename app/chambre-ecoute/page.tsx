import type { Metadata } from 'next';
import { Headphones } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { ListeningRoomPreview } from '@/components/home/ListeningRoomPreview';

export const metadata: Metadata = constructMetadata({
  title: 'La Chambre d’Écoute | Méditations & Sons Harmonisants',
  description:
    'Prendre quelques minutes et simplement écouter. Méditations guidées, paysages sonores et pauses de calme partagées par Fabienne Dizy Olliveaud.',
  path: '/chambre-ecoute',
});

export default function ChambreEcoutePage() {
  return (
    <div className="w-full bg-[#092C31] text-[#FCF8F0] pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-white/10 text-[#C2A064] flex items-center justify-center mx-auto mb-2">
          <Headphones className="w-6 h-6" />
        </div>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block">
          Espace de Recueillement Sonore
        </span>
        <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#FCF8F0]">
          La Chambre d’Écoute
        </h1>
        <p className="font-editorial italic text-[22px] sm:text-[28px] text-[#C8A66A]">
          Prendre quelques minutes. Et simplement écouter.
        </p>
        <p className="text-[14px] sm:text-[16px] text-[#E8DDCA]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Fabienne accompagne depuis longtemps ses pages de méditations et de fréquences douces qu’elle aime partager. Installez-vous confortablement, fermez les yeux et laissez le calme vous habiter.
        </p>
      </div>

      <ListeningRoomPreview />
    </div>
  );
}
