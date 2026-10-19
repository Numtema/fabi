export interface AudioTrack {
  id: string;
  title: string;
  category: 'Méditation' | 'Relaxation' | 'Son & Présence';
  duration: string;
  description: string;
  author: string;
  audioFrequency?: string;
  image: string;
}

export const listeningTracks: AudioTrack[] = [
  {
    id: 'track-1',
    title: 'Respiration & Dépose du Corps',
    category: 'Méditation',
    duration: '09:45',
    description: 'Une courte pause guidée pour déposer les tensions de la journée, ralentir le rythme respiratoire et revenir au centre.',
    author: 'Fabienne Dizy Olliveaud',
    audioFrequency: '432 Hz · Paix intérieure',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-2',
    title: 'La Vague Lemniscate',
    category: 'Relaxation',
    duration: '14:20',
    description: 'Paysage sonore doux et continu, évoquant le bercement infini de la lemniscate et la fluidité des gestes sans rupture.',
    author: 'Création sonore L’Officine',
    audioFrequency: '528 Hz · Transformation douce',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-3',
    title: 'Chant des Arômes & Méditation Végétale',
    category: 'Son & Présence',
    duration: '11:15',
    description: 'Immersion auditive conçue pour accompagner la respiration d’une huile essentielle ou l’allumage d’un parfum d’ambiance.',
    author: 'Sélection Fabienne',
    audioFrequency: '396 Hz · Ancrage terrestre',
    image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-4',
    title: 'Le Sanctuaire du Cœur',
    category: 'Méditation',
    duration: '16:30',
    description: 'Guidance apaisante pour ouvrir l’espace de la cage thoracique, relâcher les cuirasses émotionnelles et retrouver la confiance.',
    author: 'Fabienne Dizy Olliveaud',
    audioFrequency: '639 Hz · Harmonie du cœur',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80'
  }
];
