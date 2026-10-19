export interface CreationItem {
  id: string;
  slug: string;
  category: 'Élixirs' | 'Sprays' | 'Parfums d’ambiance' | 'Parfum sur mesure';
  name: string;
  tagline: string;
  description: string;
  notes: string[];
  size: string;
  usage: string;
  image: string;
  status: 'approved';
}

export const creations: CreationItem[] = [
  {
    id: 'spray-serenite',
    slug: 'spray-aurique-serenite',
    category: 'Sprays',
    name: 'Brume Aurique Sérénité',
    tagline: 'Purification douce et apaisement des espaces',
    description: 'Une synergie équilibrée de lavande vraie de haute altitude, d’encens oliban et de petit grain bigarade. Conçue pour vaporiser dans l’aura ou dans votre lieu de méditation.',
    notes: ['Lavande vraie', 'Encens Oliban', 'Petit Grain Bigarade', 'Hydrolat de Fleur d’Oranger'],
    size: 'Flacon verre ambré 100 ml avec pulvérisateur fin',
    usage: '2 à 3 pulvérisations au-dessus de la tête ou dans les quatre coins d’une pièce pour instaurer le calme.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80',
    status: 'approved'
  },
  {
    id: 'elixir-protection',
    slug: 'elixir-protection-archange',
    category: 'Élixirs',
    name: 'Élixir des Anges · Rayon Bleu',
    tagline: 'Ancrage, clarté mentale et bouclier de sérénité',
    description: 'Dans la vision de Fabienne, cet élixir associe des vibrations végétales de cèdre de l’Atlas et de sauge sclarée pour renforcer la sensation de sécurité intérieure et de présence alignée.',
    notes: ['Cèdre de l’Atlas', 'Sauge Sclarée', 'Baume de Copaïba', 'Infusion florale'],
    size: 'Flacon compte-gouttes ambré 30 ml',
    usage: 'Appliquer 1 goutte sur les poignets ou respirer au creux des mains lors des moments d’agitation.',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&q=80',
    status: 'approved'
  },
  {
    id: 'parfum-ambiance-officine',
    slug: 'parfum-ambiance-lecrin',
    category: 'Parfums d’ambiance',
    name: 'Senteur d’Intérieur · L’Écrin Vivant',
    tagline: 'L’atmosphère feutrée d’une officine méditerranéenne',
    description: 'Une diffusion chaleureuse combinant la fraîcheur des feuilles d’olivier froissées, la rondeur de la myrrhe et la vivacité de la bergamote mûrie au soleil.',
    notes: ['Feuille d’Olivier', 'Bergamote de Calabre', 'Myrrhe précieuse', 'Bois de Gaïac'],
    size: 'Flacon vaporisateur d’ambiance 100 ml',
    usage: 'Diffuser dans les pièces de vie pour transformer l’énergie du lieu en havre de repos.',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1000&q=80',
    status: 'approved'
  },
  {
    id: 'parfum-sur-mesure',
    slug: 'parfum-sur-mesure-atelier',
    category: 'Parfum sur mesure',
    name: 'Votre Signature Olfactive Personnelle',
    tagline: 'Une composition vivante née de vos ressentis',
    description: 'Au terme d’un entretien sensoriel individuel, Fabienne compose avec vous une formule exclusive, adaptée à votre signature émotionnelle et à votre vibration personnelle.',
    notes: ['Pyramide personnalisée', 'Essences nobles sélectionnées', 'Flacon gravé unique'],
    size: 'Flacon d’exception 50 ml ou 100 ml avec fiche de composition',
    usage: 'À porter au quotidien comme un talisman olfactif de retour à soi.',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80',
    status: 'approved'
  }
];
