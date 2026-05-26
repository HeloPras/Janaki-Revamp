// lib/metadata.ts
import type { Metadata } from 'next';

// Base site URL - update this with your actual domain when deploying
const siteUrl = 'https://janakienergy.com';

// Default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: 'Janaki Energy - Sustainable Energy Solutions in Nepal',
    template: '%s | Janaki Energy',
  },
  description: 'Forward-thinking energy company committed to advancing sustainable development through innovative and reliable energy solutions in Nepal and beyond.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Janaki Energy Pvt. Ltd.',
    title: 'Janaki Energy - Sustainable Energy Solutions',
    description: 'Forward-thinking energy company committed to advancing sustainable development through innovative and reliable energy solutions.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Janaki Energy - Sustainable Energy Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janaki Energy - Sustainable Energy Solutions',
    description: 'Forward-thinking energy company committed to advancing sustainable development through innovative and reliable energy solutions.',
    images: [`${siteUrl}/images/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  keywords: [
    'renewable energy',
    'sustainable energy',
    'solar energy',
    'hydropower',
    'Nepal',
    'energy consultancy',
    'energy solutions',
    'clean energy',
    'green energy',
    'renewable power',
    'energy efficiency',
    'solar installation',
    'energy infrastructure',
    'energy development',
  ],
};

// Page-specific metadata helpers
interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export const generatePageMetadata = ({
  title,
  description,
  path,
  ogImage,
}: PageMetadataProps): Metadata => {
  const fullUrl = `${siteUrl}${path}`;
  const imageUrl = ogImage || `${siteUrl}/images/og-image.jpg`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
};

// Category-specific metadata
interface CategoryMetadata {
  title: string;
  description: string;
}

export const serviceCategories: Record<string, CategoryMetadata> = {
  solar: {
    title: 'Solar Energy Solutions',
    description: 'Custom solar energy systems for residential and commercial clients, maximizing efficiency and incorporating the latest industry advancements.',
  },
  hydropower: {
    title: 'Hydropower Development',
    description: 'Development, operation, and maintenance of small, mini, and large-scale hydropower projects with minimal environmental impact.',
  },
  consultancy: {
    title: 'Energy Consultancy Services',
    description: 'Expert guidance in technical, financial, and policy matters within the energy sector to help navigate complex challenges.',
  },
  feasibility: {
    title: 'Feasibility Studies',
    description: 'Thorough analyses for energy initiatives, addressing technical, financial, environmental, and social factors.',
  },
  renewable: {
    title: 'Renewable Energy Solutions',
    description: 'Comprehensive solutions for the development of renewable energy, including solar, wind, thermal, and bioenergy systems.',
  },
  'project-management': {
    title: 'Energy Project Management',
    description: 'Complete lifecycle management for energy projects from planning and design to financing, construction, and commissioning.',
  },
};