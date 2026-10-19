import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Sparkles } from 'lucide-react';
import { journalArticles } from '@/content/journal';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return constructMetadata({
    title: `${article.title} | Journal L’Officine des Anges`,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
    image: article.image,
  });
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: '2024-10-14T08:00:00+02:00',
    author: {
      '@type': 'Person',
      name: siteConfig.practitioner,
      url: `${siteConfig.url}/fabienne`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <article className="w-full bg-[#FCF8F0] text-[#152A34] pt-28 pb-20 px-5 sm:px-8 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/journal"
            className="inline-flex items-center space-x-2 text-[12px] uppercase tracking-wider text-[#07515B] hover:text-[#C2A064] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux articles du Journal</span>
          </Link>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-wider text-[#C2A064] font-medium">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-editorial text-[36px] sm:text-[48px] md:text-[58px] leading-[1.04] text-[#063840]">
            {article.title}
          </h1>

          <p className="font-editorial italic text-[20px] sm:text-[24px] text-[#74776F] leading-snug">
            {article.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-[44px] overflow-hidden shadow-xl border border-[#152A34]/8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-[16px] sm:text-[18px] text-[#152A34]/85 leading-relaxed font-light">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Signature Box */}
        <div className="p-8 rounded-[36px] bg-[#E8DDCA]/45 border border-[#152A34]/8 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#C2A064]">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
              alt="Fabienne Dizy Olliveaud"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#07515B] font-semibold block">
              Par Fabienne Dizy Olliveaud
            </span>
            <p className="text-[13px] text-[#74776F] font-light leading-relaxed">
              Praticienne en soins énergétiques, massage Lemniscate et fondatrice de L’Officine des Anges en Seine-Maritime.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
