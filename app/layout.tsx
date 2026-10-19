import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { LivingFooter } from '@/components/footer/LivingFooter';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { constructMetadata } from '@/lib/seo';
import { getWebsiteSchema, getPersonSchema, getLocalBusinessSchema, getFAQSchema } from '@/lib/jsonld';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata({
  title: 'L’Officine des Anges | Fabienne Dizy Olliveaud — Soins énergétiques en Seine-Maritime',
  description:
    'Découvrez l’univers de Fabienne Dizy Olliveaud : LaHoChi, soins énergétiques, massage Lemniscate, radiesthésie, méditation, aromathérapie et créations sur mesure en Seine-Maritime.',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchemas = [
    getWebsiteSchema(),
    getPersonSchema(),
    getLocalBusinessSchema(),
    getFAQSchema(),
  ];

  return (
    <html lang="fr" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchemas),
          }}
        />
      </head>
      <body
        className="font-sans bg-[#092C31] text-[#152A34] min-h-screen antialiased selection:bg-[#07515B] selection:text-[#FCF8F0]"
        suppressHydrationWarning
      >
        <MotionProvider>
          {/* Header */}
          <Header />

          {/* Main content shell */}
          <main className="w-full overflow-x-hidden pt-2">
            {children}
          </main>

          {/* Living Footer */}
          <LivingFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
