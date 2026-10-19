import { Hero } from '@/components/home/Hero';
import { HeroPortals } from '@/components/home/HeroPortals';
import { TrustStrip } from '@/components/home/TrustStrip';
import { Manifesto } from '@/components/home/Manifesto';
import { FabienneIntro } from '@/components/home/FabienneIntro';
import { ServiceHoverIndex } from '@/components/home/ServiceHoverIndex';
import { UniverseAccordion } from '@/components/home/UniverseAccordion';
import { EnergeticIntroduction } from '@/components/home/EnergeticIntroduction';
import { LemniscateImmersion } from '@/components/home/LemniscateImmersion';
import { PracticesEditorial } from '@/components/home/PracticesEditorial';
import { MeditationGroup } from '@/components/home/MeditationGroup';
import { ListeningRoomPreview } from '@/components/home/ListeningRoomPreview';
import { OfficineCabinet } from '@/components/officine/OfficineCabinet';
import { Workshops } from '@/components/home/Workshops';
import { StickyProcess } from '@/components/home/StickyProcess';
import { QuoteInterlude } from '@/components/home/QuoteInterlude';
import { TestimonialExplorer } from '@/components/home/TestimonialExplorer';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { FirstExchange } from '@/components/home/FirstExchange';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 02. Mediterranean Sculpted Hero */}
      <Hero />

      {/* 03. Service Portals (Recevoir, Ralentir, Composer) */}
      <HeroPortals />

      {/* 04. Discreet Editorial Trust Strip */}
      <TrustStrip />

      {/* 05. Breathing Manifesto */}
      <Manifesto />

      {/* 06. Fabienne Intro (5/7 asymmetric layout) */}
      <FabienneIntro />

      {/* 07. Interactive Service Hover Index */}
      <ServiceHoverIndex />

      {/* 08. Universe Image Accordion */}
      <UniverseAccordion />

      {/* 09. Energetic Introduction & LaHoChi */}
      <EnergeticIntroduction />

      {/* 10. Dark Lemniscate Immersion */}
      <LemniscateImmersion />

      {/* 11. Editorial Practice Chapters (Radiesthésie, Oracles, Aromathérapie) */}
      <PracticesEditorial />

      {/* 12. Meditation / Group Chapter (Ensemble) */}
      <MeditationGroup />

      {/* 13. La Chambre d’Écoute */}
      <ListeningRoomPreview />

      {/* 14. Officine Apothecary Stage */}
      <OfficineCabinet />

      {/* 15. Workshops & Transmission */}
      <Workshops />

      {/* 16. Sticky Process */}
      <StickyProcess />

      {/* 17. Typographic Interlude */}
      <QuoteInterlude />

      {/* 18. Testimonial Explorer */}
      <TestimonialExplorer />

      {/* 19. Home FAQ Accordion */}
      <HomeFAQ />

      {/* 20. First Exchange / Contact */}
      <FirstExchange />
    </div>
  );
}
