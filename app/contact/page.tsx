import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { FirstExchange } from '@/components/home/FirstExchange';

export const metadata: Metadata = constructMetadata({
  title: 'Contact & Échange avec Fabienne | L’Officine des Anges',
  description:
    'Contactez Fabienne Dizy Olliveaud pour poser vos questions, vous orienter vers la bonne pratique ou organiser une séance en Seine-Maritime ou à distance.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="w-full bg-[#092C31] text-[#FCF8F0] pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mb-8 text-center space-y-4">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C2A064] font-medium block">
          L’Écoute Avant Tout
        </span>
        <h1 className="font-editorial text-[42px] sm:text-[56px] md:text-[68px] leading-[0.98] text-[#FCF8F0]">
          Contact & Échange
        </h1>
        <p className="text-[15px] sm:text-[17px] text-[#E8DDCA]/80 font-light max-w-xl mx-auto leading-relaxed">
          N’hésitez pas à formuler votre demande ou vos interrogations en toute liberté. Fabienne vous répondra avec bienveillance.
        </p>
      </div>

      <FirstExchange />
    </div>
  );
}
