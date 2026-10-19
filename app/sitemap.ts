import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { services } from '@/content/services';
import { journalArticles } from '@/content/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/prestations`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prendre-rendez-vous`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fabienne`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/officine`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/creations`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/chambre-ecoute`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ateliers-formations`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/mentions-legales`,
      lastModified: new Date('2024-10-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/politique-confidentialite`,
      lastModified: new Date('2024-10-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic services
  services.forEach((s) => {
    routes.push({
      url: `${baseUrl}/${s.slug}`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Dedicated LaHoChi route
  routes.push({
    url: `${baseUrl}/lahochi`,
    lastModified: new Date('2024-10-15'),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // Dynamic journal articles
  journalArticles.forEach((art) => {
    routes.push({
      url: `${baseUrl}/journal/${art.slug}`,
      lastModified: new Date('2024-10-15'),
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  });

  return routes;
}
