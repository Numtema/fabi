export interface ServiceItem {
  id: string;
  slug: string;
  family: 'RECEVOIR' | 'RALENTIR' | 'EXPLORER' | 'COMPOSER' | 'TRANSMETTRE';
  familyLabel: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  summary: string;
  image: string;
  iconName: string;
  duration: string;
  priceDisplay: string;
  locationModes: ('présentiel' | 'à distance')[];
  concreteLayer: string; // Layer 1: What happens concretely
  sensoryLayer: string;  // Layer 2: Sensations, rhythm, calm
  spiritualLayer: string; // Layer 3: Energy, intuition, subtle guidance
  processSteps: { title: string; description: string }[];
  keyPoints: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'soins-energetiques',
    slug: 'soins-energetiques',
    family: 'RECEVOIR',
    familyLabel: 'Soins énergétiques',
    title: 'Soins Énergétiques & LaHoChi',
    subtitle: 'LaHoChi · Magnétisme · Reiki Mikao Usui',
    shortDescription: 'Un temps d’accueil et d’harmonisation douce pour relâcher les tensions et retrouver la présence.',
    summary: 'Dans l’approche de Fabienne, les soins énergétiques associent l’écoute verbale attentive, l’imposition douce des mains ou le travail vibratoire à distance. Chaque séance s’adapte à votre ressenti actuel.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Sparkles',
    duration: 'Environ 1h à 1h15',
    priceDisplay: 'Sur demande / selon format',
    locationModes: ['présentiel', 'à distance'],
    concreteLayer: 'Temps d’échange préalable assis, installation habillée sur table de repos dans une pièce chauffée et calme, travail énergétique avec ou sans contact physique direct, puis bilan partagé.',
    sensoryLayer: 'Respiration ralentie, chaleur douce ressentie aux points de contact ou dans le corps, sensation de dépose progressive et d’apaisement mental.',
    spiritualLayer: 'Dans la vision de Fabienne, ce soin invite à réaligner les flux subtils, en s’appuyant sur les traditions du LaHoChi et du Reiki Usui, guidée par une écoute intuitive des besoins de l’âme.',
    processSteps: [
      { title: '01. Échanger', description: 'Accueillir votre état général, vos besoins du moment et vos sensibilités.' },
      { title: '02. S’installer', description: 'Installation confortable, vêtu, bercé par une ambiance sonore sereine.' },
      { title: '03. La séance', description: 'Harmonisation énergétique par apposition des mains ou projection douce à distance.' },
      { title: '04. L’intégration', description: 'Retour progressif, partage des ressentis mutuels et conseils bienveillants.' }
    ],
    keyPoints: [
      'Approche personnalisée issue de 10 ans de pratique',
      'Disponible en cabinet en Seine-Maritime ou à distance',
      'Aucune manipulation physique brusque',
      'Adapté à tous les âges et profils'
    ]
  },
  {
    id: 'massage-lemniscate',
    slug: 'massage-lemniscate',
    family: 'RALENTIR',
    familyLabel: 'Massage Lemniscate',
    title: 'Le Massage Lemniscate',
    subtitle: 'Le mouvement en huit sans rupture',
    shortDescription: 'Un massage fluide et continu en forme de lemniscate (∞), enveloppant la totalité du corps pour un lâcher-prise absolu.',
    summary: 'Le massage Lemniscate s’inspire du huit allongé, symbole de flux infini et de résonance harmonieuse. Réalisé avec des huiles douces, il relie le haut et le bas, l’avant et l’arrière, dans une continuité apaisante.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Infinity',
    duration: '1h30 (incluant temps d’échange)',
    priceDisplay: 'Sur demande',
    locationModes: ['présentiel'],
    concreteLayer: 'Séance d’1h30 comprenant l’accueil, un massage corporel rythmé et régulier sur l’ensemble du corps (dos, jambes, bras, nuque) avec des huiles végétales de qualité, suivi d’une boisson chaude offerte.',
    sensoryLayer: 'Un toucher enveloppant sans aucune coupure de mouvement, un bercement subtil qui dénoue les contractions musculaires et dissout le sentiment de dispersion.',
    spiritualLayer: 'La lemniscate rétablit la circulation entre les polarités du corps. Elle invite l’esprit à sortir de la linéarité pour entrer dans un espace méditatif de plénitude.',
    processSteps: [
      { title: '01. Accueillir', description: 'Prise de contact, écoute de vos attentes et explication du rythme.' },
      { title: '02. S’installer', description: 'Installation sur table de massage chauffée, intimité et pudeur rigoureusement préservées.' },
      { title: '03. Le mouvement en huit', description: 'Gestuelle ininterrompue dessinant des lemniscates d’un bout à l’autre du corps.' },
      { title: '04. Le retour & l’échange', description: 'Réveil tout en douceur autour d’une infusion bio pour clore la parenthèse.' }
    ],
    keyPoints: [
      'Geste continu unique et enveloppant',
      'Respect absolu de la pudeur et du confort thermique',
      'Option sans contact disponible pour les personnes hypersensibles',
      'Moment d’échange privilégié autour d’une tisane bienfaisante'
    ]
  },
  {
    id: 'radiesthesie',
    slug: 'radiesthesie',
    family: 'EXPLORER',
    familyLabel: 'Radiesthésie & Pendule',
    title: 'Radiesthésie & Exploration au Pendule',
    subtitle: 'Questionner l’invisible avec discernement',
    shortDescription: 'L’utilisation du pendule et de cadrans spécifiques pour éclairer des questionnements personnels ou des déséquilibres d’ambiance.',
    summary: 'Fabienne manie le pendule depuis de nombreuses années, complété par une formation en géobiologie. Cet outil intuitif permet de poser des repères clairs lors de transitions de vie.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Compass',
    duration: '45 min à 1h',
    priceDisplay: 'Sur demande',
    locationModes: ['présentiel', 'à distance'],
    concreteLayer: 'Formulation claire de vos interrogations, utilisation méthodique de cadrans de Bovis et de planches adaptées, synthèse claire des observations partagées.',
    sensoryLayer: 'Une attention posée dans le silence du cabinet, le balancement régulier du pendule qui focalise le calme et la concentration mutuelle.',
    spiritualLayer: 'Dans l’approche de Fabienne, le pendule est un amplificateur de l’intuition et de la résonance énergétique, jamais un oracle figé mais un miroir d’orientation.',
    processSteps: [
      { title: '01. Cadrage', description: 'Clarification des questions posées et de l’éthique de la séance.' },
      { title: '02. Mesures & Exploration', description: 'Recherche radiesthésique sur cadrans et supports dédiés.' },
      { title: '03. Synthèse', description: 'Interprétation prudente et constructive pour nourrir vos réflexions.' }
    ],
    keyPoints: [
      'Complété par une formation solide en géobiologie',
      'Éthique stricte : respect du libre-arbitre de chacun',
      'Peut être réalisé sur plan ou à distance',
      'Ateliers d’initiation également proposés'
    ]
  },
  {
    id: 'meditation',
    slug: 'meditation',
    family: 'EXPLORER',
    familyLabel: 'Méditation & Présence',
    title: 'Méditation & Relaxation Profonde',
    subtitle: 'Apprendre à s’arrêter et respirer',
    shortDescription: 'Des temps guidés d’assise ou d’allongement pour calmer le flot mental et réhabiter le corps en conscience.',
    summary: 'En séance individuelle ou lors de cercles intimes, Fabienne guide la voix et l’attention pour vous aider à traverser le tumulte quotidien et retrouver une oasis intérieure.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Wind',
    duration: '45 min à 1h15',
    priceDisplay: 'Sur demande / par atelier',
    locationModes: ['présentiel', 'à distance'],
    concreteLayer: 'Exercices de respiration ventrale douce, balayage corporel attentif, visualisations guidées par la voix posée de Fabienne et fond sonore harmonique.',
    sensoryLayer: 'Détente progressive des traits du visage, rythme cardiaque qui s’apaise, ancrage des pieds et du bassin sur le sol ou le coussin.',
    spiritualLayer: 'Un espace d’écoute intérieure où le mental s’efface au profit du cœur, permettant de renouer avec la guidance de son intuition profonde.',
    processSteps: [
      { title: '01. Arrivée', description: 'Déposer les soucis du jour et adopter une posture juste sans rigidité.' },
      { title: '02. Guidage', description: 'Voyage intérieur au son d’une narration bienveillante et de silences habités.' },
      { title: '03. Clôture', description: 'Retour ancré dans le présent avec des clés simples à reproduire chez soi.' }
    ],
    keyPoints: [
      'Accessible aux débutants comme aux pratiquants réguliers',
      'Format individuel sur-mesure ou en petit groupe bienveillant',
      'Passerelles sonores disponibles dans La Chambre d’Écoute'
    ]
  },
  {
    id: 'aromatherapie',
    slug: 'aromatherapie',
    family: 'COMPOSER',
    familyLabel: 'Aromathérapie & Parfumerie',
    title: 'Aromathérapie & Parfum Sur Mesure',
    subtitle: 'La mémoire végétale au service de l’âme',
    shortDescription: 'Découverte des synergies d’huiles essentielles pures et création d’un parfum ou spray d’ambiance personnalisé.',
    summary: 'L’olfaction est la voie la plus directe vers nos émotions. Fabienne vous accompagne dans le choix d’essences précieuses pour élaborer une signature olfactive qui soutient votre équilibre au quotidien.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Droplet',
    duration: '1h à 2h selon formule',
    priceDisplay: 'Sur devis / selon atelier',
    locationModes: ['présentiel'],
    concreteLayer: 'Rencontre olfactive autour de touches à sentir, sélection de notes de tête, de cœur et de fond, composition minutieuse en flacon ambré avec fiole nominative.',
    sensoryLayer: 'Fragrances de bergamote, d’encens oliban, de rose de Damas, de lavande fine et de cèdre noble éveillant des souvenirs apaisants et une joie feutrée.',
    spiritualLayer: 'L’arôme agit comme un talisman invisible. Respirer une création sur mesure permet de réactiver instantanément l’état de présence et de paix contacté en séance.',
    processSteps: [
      { title: '01. L’écoute olfactive', description: 'Test à l’aveugle de plusieurs matières premières végétales.' },
      { title: '02. L’assemblage', description: 'Harmonisation des proportions selon vos préférences et intentions.' },
      { title: '03. La création', description: 'Repartez avec votre flacon personnalisé et sa fiche d’accompagnement.' }
    ],
    keyPoints: [
      'Huiles essentielles pures et matières premières nobles',
      'Flacons en verre ambré protégeant les principes actifs de la lumière',
      'Idéal en rituel quotidien ou pour parfumer un lieu de ressourcement'
    ]
  },
  {
    id: 'ateliers-formations',
    slug: 'ateliers-formations',
    family: 'TRANSMETTRE',
    familyLabel: 'Ateliers & Formations',
    title: 'Ateliers, Initiations & Cercles',
    subtitle: 'Apprendre, expérimenter et transmettre',
    shortDescription: 'Moments privilégiés en petit comité pour s’initier au pendule, créer son parfum d’ambiance ou partager un cercle de méditation.',
    summary: 'Parce que l’autonomie et le partage sont au cœur de son engagement, Fabienne transmet ses connaissances avec simplicité, sans dogme ni ésotérisme excessif.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    iconName: 'BookOpen',
    duration: 'Demi-journée ou journée complète',
    priceDisplay: 'Calendrier sur demande',
    locationModes: ['présentiel'],
    concreteLayer: 'Groupes restreints de 4 à 8 personnes pour préserver la qualité des échanges, livret pédagogique fourni, matériel et fournitures inclus.',
    sensoryLayer: 'Ambiance chaleureuse autour d’une table commune, rires partagés, concentration sereine et bienveillance mutuelle sans jugement.',
    spiritualLayer: 'Une passerelle pour démystifier les pratiques intuitives et redonner à chacun confiance en sa propre sensibilité naturelle.',
    processSteps: [
      { title: '01. Théorie vivante', description: 'Fondements, précautions d’usage, respect de soi et éthique.' },
      { title: '02. Pratique guidée', description: 'Exercices pas à pas, corrections douces et mises en situation.' },
      { title: '03. Partage & intégration', description: 'Bilan de la session et pistes pour poursuivre chez soi en autonomie.' }
    ],
    keyPoints: [
      'Initiation au pendule & radiesthésie pratique',
      'Atelier création d’un parfum d’ambiance thérapeutique',
      'Cercles de méditation et relaxation collective'
    ]
  }
];
