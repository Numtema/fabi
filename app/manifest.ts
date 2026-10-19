import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'L’Officine',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#092C31',
    theme_color: '#063840',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
