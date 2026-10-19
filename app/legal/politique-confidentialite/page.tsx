import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Politique de Confidentialité | L’Officine des Anges',
  description: 'Politique de protection des données personnelles de L’Officine des Anges.',
  path: '/legal/politique-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="font-editorial text-[36px] sm:text-[48px] text-[#063840]">
          Politique de Confidentialité
        </h1>

        <div className="space-y-6 text-[14px] sm:text-[15px] text-[#152A34]/85 leading-relaxed font-light">
          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              1. Collecte des données
            </h2>
            <p>
              Les seules données collectées sur ce site sont celles que vous transmettez volontairement via le formulaire de contact (nom, adresse e-mail, téléphone éventuel et message).
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              2. Utilisation et conservation
            </h2>
            <p>
              Ces données sont utilisées exclusivement pour vous répondre, organiser vos rendez-vous et assurer le suivi de vos séances. Elles ne sont jamais cédées, vendues ou partagées avec des tiers.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              3. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles par simple demande écrite à contact@officinedesanges.fr.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
