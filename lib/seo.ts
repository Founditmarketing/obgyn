export const SITE_URL = 'https://www.alexjosephmd.com';

export const DEFAULT_OG_IMAGE = {
  url: '/images/clinic_logo_joseph.png',
  width: 640,
  height: 640,
  alt: "Dr. Alex Joseph OBGYN",
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
