// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title, description, image, canonical, schema
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
    {schema && (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    )}
  </Helmet>
);
