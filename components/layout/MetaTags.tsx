// components/layout/MetaTags.tsx
import Head from 'next/head'

interface MetaTagsProps {
  title: string
  description: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  url?: string
  keywords?: string
  schema?: 'organization' | 'product' | 'person'
  schemaData?: any
}

export default function MetaTags({
  title,
  description,
  ogImage = '/images/og/default-og.jpg',
  ogType = 'website',
  url = 'https://aogreenfields.com',
  keywords = 'real estate, premium communities, Telangana, residential projects, DTCP approved, RERA certified',
  schema,
  schemaData
}: MetaTagsProps) {
  const fullTitle = title.includes('AO Green Fields') ? title : `${title} | AO Green Fields`
  const fullUrl = url.startsWith('http') ? url : `https://aogreenfields.com${url}`

  // Default Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AO Green Fields",
    "url": "https://aogreenfields.com",
    "logo": "https://aogreenfields.com/images/logos/AOGF-logo.png",
    "description": "Premium residential communities across Telangana. Building thoughtful spaces where location intelligence meets lifestyle design.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7337537773",
      "contactType": "customer service",
      "email": "reach@aogreenfields.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "106, Sri Krupa Arcade, Botanical Gardens Road",
      "addressLocality": "Kondapur",
      "addressRegion": "Telangana",
      "postalCode": "500084",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/aogreenfields",
      "https://facebook.com/aogreenfields",
      "https://instagram.com/aogreenfields"
    ]
  }

  // Product Schema for Nandanavanam
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nandanavanam - Wellness Community",
    "description": "150 exclusive living spaces in Telangana's Golden Quadrilateral with lifetime wellness membership",
    "brand": {
      "@type": "Brand",
      "name": "AO Green Fields"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Total Units",
        "value": "150"
      },
      {
        "@type": "PropertyValue", 
        "name": "Total Area",
        "value": "34 Acres"
      },
      {
        "@type": "PropertyValue",
        "name": "Plot Sizes",
        "value": "400-1200 sq yds"
      }
    ]
  }

  const getSchema = () => {
    if (schema === 'organization' || !schema) return organizationSchema
    if (schema === 'product') return { ...productSchema, ...schemaData }
    return schemaData
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="AO Green Fields" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="AO Green Fields" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@aogreenfields" />
      <meta name="twitter:creator" content="@aogreenfields" />
      
      {/* WhatsApp Specific */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* LinkedIn Specific */}
      <meta property="og:image:alt" content={title} />
      
      {/* Facebook Specific */}
      <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#181441" />
      <meta name="msapplication-TileColor" content="#181441" />
      
      {/* Google Tag Manager - Add your GTM ID */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `
        }}
      />
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema())
        }}
      />
    </Head>
  )
}