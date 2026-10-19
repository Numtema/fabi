export interface ReviewItem {
  id: string;
  author: string;
  category: 'Soins' | 'Massage' | 'Distance' | 'Formation' | 'Guidance';
  serviceName: string;
  rating: number;
  date: string;
  source: string;
  title: string;
  quote: string;
  fullText: string;
}

export const reviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Céline M.',
    category: 'Massage',
    serviceName: 'Massage Lemniscate',
    rating: 5,
    date: 'Octobre 2024',
    source: 'AMEDCINE (Avis vérifié)',
    title: 'Une infinie douceur et un lâcher-prise total',
    quote: 'Le massage Lemniscate est une expérience extraordinaire. Ce mouvement continu en huit enveloppe tout le corps sans aucune interruption.',
    fullText: 'Le massage Lemniscate avec Fabienne est une expérience extraordinaire. Ce mouvement continu en huit enveloppe tout le corps sans aucune interruption. On perd toute notion du temps pour entrer dans un état de sérénité profonde. Fabienne a une délicatesse remarquable et l’accueil autour d’une tisane chaude permet de redescendre en douceur.'
  },
  {
    id: 'rev-2',
    author: 'Stéphane B.',
    category: 'Soins',
    serviceName: 'Séance LaHoChi & Énergétique',
    rating: 5,
    date: 'Septembre 2024',
    source: 'AMEDCINE (Avis vérifié)',
    title: 'Une écoute bienveillante qui fait un bien immense',
    quote: 'Fabienne sait écouter avant même de commencer. On se sent tout de suite accueilli sans le moindre jugement.',
    fullText: 'Fabienne sait écouter avant même de commencer. On se sent tout de suite accueilli sans le moindre jugement. La séance m’a apporté un apaisement physique et mental immédiat. Les tensions au niveau des épaules et de la poitrine se sont dissipées dès le lendemain. Je reviendrai avec confiance.'
  },
  {
    id: 'rev-3',
    author: 'Valérie D.',
    category: 'Distance',
    serviceName: 'Soin énergétique à distance',
    rating: 5,
    date: 'Juillet 2024',
    source: 'AMEDCINE (Avis vérifié)',
    title: 'Bluffée par la justesse de l’accompagnement à distance',
    quote: 'Habitant à plus de 200 km, j’ai testé le soin à distance. Les ressentis de chaleur étaient bien réels et le compte-rendu téléphonique très précis.',
    fullText: 'Habitant à plus de 200 km de la Seine-Maritime, j’ai fait l’expérience d’une séance à distance avec Fabienne. Pendant le temps convenu, j’ai ressenti une chaleur douce et un apaisement des pensées. Le débriefing qui a suivi était d’une grande pertinence et d’une immense sensibilité.'
  },
  {
    id: 'rev-4',
    author: 'Isabelle P.',
    category: 'Formation',
    serviceName: 'Initiation au Pendule',
    rating: 5,
    date: 'Mai 2024',
    source: 'AMEDCINE (Avis vérifié)',
    title: 'Clarté, pédagogie et humilité',
    quote: 'Fabienne démystifie le pendule avec beaucoup d’éthique et de pragmatisme. On repart avec des bases saines et de la confiance.',
    fullText: 'J’ai participé à l’atelier d’initiation à la radiesthésie. Fabienne démystifie le pendule avec beaucoup d’éthique et de pragmatisme. Pas de théories fumeuses : des exercices concrets, un livret clair, et surtout une écoute attentive des ressentis de chaque participant.'
  },
  {
    id: 'rev-5',
    author: 'Nathalie G.',
    category: 'Guidance',
    serviceName: 'Oracles & Radiesthésie',
    rating: 5,
    date: 'Mars 2024',
    source: 'AMEDCINE (Avis vérifié)',
    title: 'Un éclairage précieux dans un moment de transition',
    quote: 'L’alliance de son intuition et des cartes m’a permis de voir plus clair dans mes choix personnels, avec beaucoup de douceur.',
    fullText: 'La consultation avec Fabienne m’a apporté un éclairage très précieux lors d’une phase de réorientation personnelle. Ses mots résonnent juste, sans chercher à prédire l’avenir de manière sensationnelle, mais en offrant des pistes concrètes pour avancer sereinement.'
  },
  {
    id: 'rev-6',
    author: 'Claire V.',
    category: 'Soins',
    serviceName: 'Séance LaHoChi',
    rating: 5,
    date: 'Janvier 2024',
    source: 'AMEDCINE (Avis vérifié)',
    title: 'Un havre de paix et de ressourcement',
    quote: 'Le cabinet dégage une atmosphère de sérénité apaisante. Fabienne prend vraiment le temps qu’il faut.',
    fullText: 'Le cabinet de Fabienne dégage une atmosphère de sérénité dès qu’on franchit le pas de la porte. Elle prend le temps d’échanger, d’expliquer ce qu’elle va faire. On repart détendu, recentré et avec le cœur plus léger.'
  }
];
