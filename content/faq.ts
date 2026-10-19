export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Général' | 'Soins' | 'Massage' | 'Officine' | 'Ateliers';
}

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Général',
    question: 'Comment choisir la pratique qui me correspond ?',
    answer: 'Il n’y a pas de parcours unique. Si vous ressentez une grande fatigue physique ou le besoin de lâcher-prise par le corps, le massage Lemniscate est tout particulièrement indiqué. Si vous cherchez un rééquilibrage doux sans déshabillage ou préférez un rendez-vous à distance, les soins énergétiques (LaHoChi, Reiki) sont idéaux. Vous pouvez également utiliser notre module d’orientation ou simplement envoyer un message à Fabienne pour échanger préalablement.'
  },
  {
    id: 'faq-2',
    category: 'Général',
    question: 'Comment se déroule un premier rendez-vous ?',
    answer: 'Toute séance débute par un accueil bienveillant et un temps d’écoute où vous pouvez exposer librement ce qui vous amène, sans aucun jugement. Fabienne vous présente le déroulement exact de la séance avant de commencer. Après le soin, un temps de dépose et de partage vous permet d’intégrer vos ressentis avant de repartir à votre rythme.'
  },
  {
    id: 'faq-3',
    category: 'Soins',
    question: 'Peut-on recevoir une séance à distance ?',
    answer: 'Oui. Dans l’approche de Fabienne, les soins énergétiques (comme le LaHoChi) et les recherches au pendule peuvent parfaitement être réalisés à distance. Nous fixons un créneau précis durant lequel vous êtes confortablement allongé chez vous au calme. Un appel téléphonique a lieu juste avant et immédiatement après la séance pour échanger sur vos ressentis.'
  },
  {
    id: 'faq-4',
    category: 'Soins',
    question: 'Qu’est-ce que le LaHoChi dans l’approche de Fabienne ?',
    answer: 'Dans la tradition du LaHoChi, cette pratique est décrite comme une harmonisation énergétique par apposition des mains. Le praticien canalise une fréquence de lumière et de sérénité douce pour aider le corps et l’esprit à retrouver leur équilibre naturel. Cela se pratique habillé, allongé confortablement sur le dos.'
  },
  {
    id: 'faq-5',
    category: 'Massage',
    question: 'Qu’est-ce que le massage Lemniscate ?',
    answer: 'Le massage Lemniscate doit son nom au chiffre huit couché (∞), symbole de mouvement continu et d’infinité. Fabienne réalise des gestes doux, réguliers et enveloppants qui relient le corps de la tête aux pieds, favorisant une reconnexion profonde et une détente musculaire durable.'
  },
  {
    id: 'faq-6',
    category: 'Massage',
    question: 'Le massage Lemniscate implique-t-il forcément un contact direct ?',
    answer: 'Pour les personnes qui éprouvent des difficultés avec le contact physique ou qui sont hypersensibles, Fabienne peut tout à fait adapter sa gestuelle, en effectuant les mouvements de lemniscate dans le champ aurique proche sans contact direct, ou par-dessus un linge doux.'
  },
  {
    id: 'faq-7',
    category: 'Massage',
    question: 'Combien de temps dure la séance de massage Lemniscate ?',
    answer: 'Le rendez-vous dure environ 1h30 au total. Ce temps comprend l’accueil initial, le massage complet ainsi qu’un moment d’atterrissage privilégié autour d’une boisson chaude biologique.'
  },
  {
    id: 'faq-8',
    category: 'Officine',
    question: 'Que propose L’Officine des Anges ?',
    answer: 'L’Officine des Anges réunit les créations olfactives et artisanales de Fabienne : brumes auriques, élixirs floraux et aromatiques, senteurs d’intérieur et conception de parfums personnalisés sur mesure créés avec des huiles essentielles de haute qualité.'
  },
  {
    id: 'faq-9',
    category: 'Ateliers',
    question: 'Fabienne propose-t-elle des séances de groupe ou ateliers ?',
    answer: 'Oui. Fabienne anime régulièrement des ateliers d’initiation à la radiesthésie (pendule), des ateliers de création olfactive, ainsi que des cercles de méditation et de relaxation guidée en petits groupes pour favoriser la convivialité et la qualité d’apprentissage.'
  },
  {
    id: 'faq-10',
    category: 'Général',
    question: 'Ces pratiques remplacent-elles un suivi médical conventionnel ?',
    answer: 'Absolument pas. Les accompagnements proposés par Fabienne Dizy Olliveaud sont des démarches complémentaires de bien-être, de relaxation et de développement personnel. Ils ne constituent jamais un acte médical ou un diagnostic, et ne doivent en aucun cas interrompre ou modifier un traitement médical prescrit par un professionnel de santé.'
  }
];
