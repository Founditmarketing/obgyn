import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages = [
    'annual-well-woman-exam-alexandria',
    'colposcopy-exam-alexandria',
    'iud-insertion-removal-alexandria',
    'menopause-hormone-therapy-alexandria',
    'minimally-invasive-gynecological-surgery-alexandria',
    'obstetric-ultrasounds-3d-4d-alexandria',
    'pregnancy-care-delivery-alexandria',
    'teen-adolescent-gynecology-alexandria',
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const legalPages = ['privacy-policy', 'terms-of-service', 'hipaa-notice'].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/dr-alex-joseph`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/schedule`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/local-resources`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...servicePages,
    ...legalPages,
  ];
}
