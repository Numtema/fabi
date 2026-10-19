import { siteConfig } from "@/config/site";
import { faqList } from "@/content/faq";

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.practitioner,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fr-FR",
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.practitioner,
    jobTitle: "Praticienne en soins énergétiques & formatrice",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    description:
      "Praticienne certifiée en LaHoChi, Reiki Mikao Usui, massage Lemniscate, radiesthésie et aromathérapie en Seine-Maritime depuis 2015.",
    url: `${siteConfig.url}/fabienne`,
    knowsAbout: [
      "LaHoChi",
      "Massage Lemniscate",
      "Reiki Usui",
      "Radiesthésie",
      "Aromathérapie",
      "Méditation",
      "Géobiologie"
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.fullName,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    email: siteConfig.business.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.business.region,
      addressCountry: "FR",
      description: siteConfig.business.area,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Seine-Maritime / Normandie & consultations à distance",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: siteConfig.reviews.count.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
