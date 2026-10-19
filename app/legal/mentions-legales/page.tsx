import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: 'Mentions Légales | L’Officine des Anges',
  description: 'Mentions légales du site officiel de L’Officine des Anges et de Fabienne Dizy Olliveaud.',
  path: '/legal/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <div className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="font-editorial text-[36px] sm:text-[48px] text-[#063840]">
          Mentions Légales
        </h1>

        <div className="space-y-6 text-[14px] sm:text-[15px] text-[#152A34]/85 leading-relaxed font-light">
          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              1. Édition du site
            </h2>
            <p>
              Le site <strong>L’Officine des Anges</strong> est édité par Fabienne Dizy Olliveaud, praticienne en bien-être et accompagnements holistiques depuis 2015.
            </p>
            <p className="mt-1">
              Localisation : Seine-Maritime, Normandie, France. <br />
              Contact : contact@officinedesanges.fr
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé sur une infrastructure Cloud sécurisée avec déploiement Next.js.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              3. Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus (textes, photographies, univers graphique Présence 1.618, marques et logos L’Officine des Anges) sont protégés par le droit d’auteur et la législation française et internationale. Toute reproduction non autorisée est strictement interdite.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-[22px] text-[#063840] mb-1">
              4. Avertissement déontologique
            </h2>
            <p>
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
