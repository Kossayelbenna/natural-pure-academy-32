import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string[];
  structuredData?: Record<string, unknown>;
  noindex?: boolean;
}

// Global Organization JSON-LD — injected on every page
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://natural-and-pure.org/#organization",
  "name": "NATURAL&PURE",
  "legalName": "NATURALPURE CORPORATION",
  "url": "https://natural-and-pure.org",
  "logo": "https://natural-and-pure.org/favicon.ico",
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19580 West Indian School Rd",
      "addressLocality": "Buckeye",
      "addressRegion": "AZ",
      "postalCode": "85396",
      "addressCountry": "US"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "contact@natural-and-pure.org",
      "contactType": "Research Inquiries"
    },
    {
      "@type": "ContactPoint",
      "email": "contact@natural-and-pure.org",
      "contactType": "General Inquiries"
    }
  ],
  "sameAs": [],
  "nonprofitStatus": "Nonprofit501c3",
  "taxID": "98-1830546",
  "description": "NATURALPURE CORPORATION is an Arizona nonprofit corporation dedicated to democratizing evidence-based nutrition education through artificial intelligence and Claude API-powered research analysis.",
  "knowsAbout": ["Nutritional Science", "Evidence-Based Medicine", "Artificial Intelligence", "Public Health", "Dietary Supplements"]
};

// WebSite JSON-LD — for Google Sitelinks Search Box
const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://natural-and-pure.org/#website",
  "url": "https://natural-and-pure.org",
  "name": "NATURAL&PURE — AI-Powered Nutritional Science",
  "description": "A nonprofit research organization democratizing evidence-based nutrition education through artificial intelligence.",
  "publisher": {
    "@id": "https://natural-and-pure.org/#organization"
  },
  "inLanguage": "en-US"
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-default.jpg',
  keywords = [],
  structuredData,
  noindex = false,
}) => {
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://natural-and-pure.org${ogImage}`;

  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Author & E-E-A-T */}
      <meta name="author" content="NATURALPURE CORPORATION" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content="NATURAL&PURE" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Nonprofit organization */}
      <meta name="organization-type" content="nonprofit" />
      <meta name="organization-ein" content="98-1830546" />

      {/* Global Schema.org: Organization */}
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>

      {/* Global Schema.org: WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(WEBSITE_SCHEMA)}
      </script>

      {/* Page-specific Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;