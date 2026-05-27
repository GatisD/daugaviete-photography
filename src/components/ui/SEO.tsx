import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object;
}

const BASE_URL = 'https://daugavietephotography.com';

export default function SEO({ title, description, path, image = '/og-image.jpg', type = 'website', jsonLd }: Props) {
  const fullTitle = `${title} | Daugaviete Photography`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <html lang="lv" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="lv_LV" />
      <meta property="og:site_name" content="Daugaviete Photography" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
