import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SITE_URL = 'https://titano.ai';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

const Seo = ({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
}: SeoProps) => {
  // const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Titano" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Seo;
