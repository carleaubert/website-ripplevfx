import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ripple VFX Studios",
    "description": "Premium visual effects studio specializing in Nuke compositing, digital matte painting, motion graphics, and AI creative services",
    "url": "https://ripplevfxstudios.com",
    "logo": "https://ripplevfxstudios.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ripplevfxstudios",
      "https://www.instagram.com/ripplevfxstudios"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Carle Aubert"
      },
      {
        "@type": "Person",
        "name": "Aymeric Ballester"
      }
    ],
    "knowsAbout": [
      "Visual Effects",
      "VFX Compositing",
      "Nuke Compositing",
      "Digital Matte Painting",
      "Motion Graphics",
      "AI Creative Services",
      "Post Production",
      "Feature Film VFX",
      "Episodic VFX"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ripple VFX Studios",
    "image": "https://ripplevfxstudios.com/logo.png",
    "description": "Leading VFX studio in Vancouver offering premium visual effects, compositing, and creative services",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.282729",
      "longitude": "-123.120738"
    },
    "url": "https://ripplevfxstudios.com",
    "priceRange": "$$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
