export interface JournalArticle {
  slug: string;
  title: string;
  category: 'Lemniscate' | 'Pratiques énergétiques' | 'Radiesthésie' | 'Aromathérapie';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'le-geste-continu-de-la-lemniscate',
    title: 'Le geste continu de la Lemniscate : quand le huit devient bercement',
    category: 'Lemniscate',
    date: '14 Octobre 2024',
    readTime: '5 min de lecture',
    excerpt: 'Pourquoi le tracé sans fin de l’infini apaise-t-il si profondément notre système nerveux ? Plongée dans l’art d’un massage qui refuse la rupture.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Dans notre quotidien saturé d’interruptions et de stimulations saccadées, le corps fait l’expérience permanente du morcellement. Chaque notification, chaque tâche interrompue crée une micro-rupture d’attention et de présence.',
      'Le massage Lemniscate répond à ce besoin fondamental de continuité. En traçant le huit allongé sur les lignes d’énergie et les contours du corps, le geste ne s’arrête jamais brutalement. Il ondule, passe d’une épaule à la hanche opposée, traverse le dos pour rejoindre la jambe, dans une onde harmonieuse.',
      'Ce mouvement pendulaire rappelle les rythmes primaires : le battement du cœur au repos, le flux et le reflux des marées, la respiration naturelle. Face à cette répétition bienveillante et sans heurt, le mental cesse de surveiller le prochain geste : il s’abandonne en confiance.',
      'En fin de séance, la sensation est souvent décrite comme une réunification : le haut et le bas, la droite et la gauche, ne sont plus dissociés mais reliés dans un même écrin de sérénité.'
    ]
  },
  {
    slug: 'l-art-de-l-ecoute-avant-le-soin',
    title: 'L’art de l’écoute avant le soin : créer l’espace pour déposer ce qui pèse',
    category: 'Pratiques énergétiques',
    date: '28 Septembre 2024',
    readTime: '4 min de lecture',
    excerpt: 'Un soin énergétique ne commence pas lorsque les mains se posent, mais dès les premiers mots partagés dans le calme du cabinet.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Il arrive fréquemment qu’une personne franchisse le seuil de l’Officine sans savoir exactement quelle pratique lui conviendra. Elle sait seulement qu’elle est fatiguée, débordée ou en quête d’un nouvel équilibre.',
      'C’est pourquoi le premier temps d’un accompagnement est toujours dédié au verbe et au silence. Écouter ce qui est dit, mais aussi entendre ce que la voix retient. Accueillir le rythme respiratoire, la posture, les tensions perceptibles.',
      'Que la séance s’oriente ensuite vers le LaHoChi, le magnétisme, le Reiki ou une harmonisation olfactive, ce sas initial garantit que le soin répondra à une intention partagée et juste, respectueuse du rythme propre de chacun.'
    ]
  },
  {
    slug: 'le-pendule-au-dela-du-mystere',
    title: 'Le pendule au-delà du mystère : un instrument d’orientation et de résonance',
    category: 'Radiesthésie',
    date: '12 Août 2024',
    readTime: '6 min de lecture',
    excerpt: 'Démystifier la radiesthésie pour la concevoir comme un prolongement délicat de l’intuition corporelle et de la sensibilité vibratoire.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Loin des clichés de divination infaillible, le pendule est avant tout un amplificateur neuromusculaire extrêmement subtil. Lorsque le radiesthésiste pose une convention mentale claire et fait le vide, le balancement traduit une perception énergétique que notre conscient ne sait pas toujours verbaliser immédiatement.',
      'Dans la pratique de Fabienne, complétée par son apprentissage de la géobiologie, le pendule sert d’outil d’exploration méthodique : identifier un niveau de vitalité, évaluer la compatibilité d’un choix, vérifier l’harmonie d’un espace de vie.',
      'Apprendre à tenir un pendule, c’est d’abord apprendre à faire taire le désir de résultat et cultiver une neutralité bienveillante. C’est tout le sens des ateliers d’initiation proposés à l’Officine.'
    ]
  }
];
