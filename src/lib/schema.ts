const BASE_URL = 'https://daugavietephotography.com';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Photographer',
  name: 'Daugaviete Photography',
  url: BASE_URL,
  email: 'sieva@daugavietephotography.com',
  telephone: '+371 00 000 000',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LV',
    addressLocality: 'Riga',
  },
  areaServed: { '@type': 'Country', name: 'Latvia' },
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: '€€',
  sameAs: [
    'https://instagram.com/daugavietephotography',
  ],
};

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    provider: {
      '@type': 'Photographer',
      name: 'Daugaviete Photography',
      url: BASE_URL,
    },
    areaServed: { '@type': 'Country', name: 'Latvia' },
    url: `${BASE_URL}/${slug}`,
  };
}
