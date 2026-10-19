export const siteConfig = {
  name: "L’Officine des Anges",
  fullName: "L’Officine des Anges × Fabienne Dizy Olliveaud",
  practitioner: "Fabienne Dizy Olliveaud",
  tagline: "Revenir à soi, doucement.",
  description:
    "Soins énergétiques, LaHoChi, massage Lemniscate, méditation, aromathérapie et créations sur mesure en Seine-Maritime. Présentiel et accompagnements à distance.",
  url: process.env.APP_URL || "https://officinedesanges.fr",
  yearFounded: 2015,
  business: {
    addressStatus: "pending-confirmation" as const,
    region: "Seine-Maritime",
    area: "Secteur Le Havre / Lillebonne / Lintot",
    phoneStatus: "TODO_CONFIRM" as const,
    email: "contact@officinedesanges.fr",
    workingHours: "Sur rendez-vous du lundi au samedi",
    remoteAvailable: true,
  },
  reviews: {
    source: "AMEDCINE",
    rating: 5.0,
    count: 26,
    verifiedLabel: "Avis vérifiés",
  },
  social: {
    instagram: "https://instagram.com/TODO_CONFIRM",
    facebook: "https://facebook.com/TODO_CONFIRM",
  },
  disclaimer:
    "Les pratiques énergétiques, le massage Lemniscate, la radiesthésie et l'aromathérapie proposés par Fabienne Dizy Olliveaud s'inscrivent dans une démarche de bien-être, de relaxation et d'exploration personnelle. Elles ne constituent en aucun cas un acte médical ou thérapeutique et ne se substituent jamais à un suivi médical ou psychologique conventionnel.",
};
