import React from 'react';

const StructuredData = ({ department = 'both' }) => {
  // Organization Schema - Global
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ripple VFX Studios",
    "alternateName": ["Ripple VFX", "Ripple Digital"],
    "url": "https://ripplevfxstudios.com",
    "logo": "https://ripplevfxstudios.com/logo.png",
    "description": "Ripple VFX Studios is a Vancouver-based visual effects and digital production studio specializing in VFX compositing, digital matte painting, motion graphics, AI-powered creative solutions, and digital innovation.",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Vancouver"
      },
      {
        "@type": "State",
        "name": "British Columbia"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Worldwide"
      }
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Carle Aubert",
        "jobTitle": "Co-Founder & Senior VFX Compositor"
      },
      {
        "@type": "Person",
        "name": "Aymeric Ballester",
        "jobTitle": "Co-Founder & VFX Technical Director"
      }
    ],
    "foundingDate": "2024",
    "knowsAbout": [
      "Visual Effects",
      "VFX Compositing",
      "Nuke Compositing",
      "Digital Matte Painting",
      "Motion Graphics",
      "Color Grading",
      "Rotoscoping",
      "AI Creative Solutions",
      "Film Post Production",
      "Television Visual Effects",
      "Commercial VFX",
      "Web Development",
      "App Development",
      "AI Development",
      "Digital Solutions"
    ]
  };

  // VFX Service Schema
  const vfxServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ripple VFX - Visual Effects Production",
    "provider": {
      "@type": "Organization",
      "name": "Ripple VFX Studios"
    },
    "serviceType": "Visual Effects Production",
    "description": "Professional visual effects services including Nuke compositing, digital matte painting, motion graphics, color grading, and AI-enhanced VFX workflows for film, television, and advertising.",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VFX Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nuke Compositing",
            "description": "Expert Nuke compositing services with seamless integration of CGI elements and live-action footage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Matte Painting",
            "description": "Stunning digital matte painting for environment extensions and photoreal background replacements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motion Graphics",
            "description": "Dynamic motion graphics design for titles, UI elements, and broadcast graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Grading",
            "description": "Professional color correction and grading for feature films and episodic content"
          }
        }
      ]
    }
  };

  // Digital Agency Service Schema
  const digitalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ripple Digital - Digital Agency & Development",
    "provider": {
      "@type": "Organization",
      "name": "Ripple VFX Studios"
    },
    "serviceType": "Digital Agency Services",
    "description": "Technology and digital agency creating websites, applications, AI solutions, SaaS products, and digital tools for businesses in Vancouver and worldwide.",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development and web application creation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "Mobile and desktop application development for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Development",
            "description": "AI solutions, automation, and intelligent business tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Development",
            "description": "Software as a Service platform development and digital products"
          }
        }
      ]
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ripple VFX Studios",
    "image": "https://ripplevfxstudios.com/logo.png",
    "description": "Leading VFX studio and digital agency in Vancouver offering premium visual effects, compositing, web development, app development, and AI creative services",
    "@id": "https://ripplevfxstudios.com",
    "url": "https://ripplevfxstudios.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.282729,
      "longitude": -123.120738
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ripple VFX Studios",
    "url": "https://ripplevfxstudios.com",
    "description": "Visual effects studio and digital agency in Vancouver, British Columbia, Canada",
    "publisher": {
      "@type": "Organization",
      "name": "Ripple VFX Studios"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ripplevfxstudios.com/#search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {(department === 'vfx' || department === 'both') && (
        <script type="application/ld+json">
          {JSON.stringify(vfxServiceSchema)}
        </script>
      )}
      {(department === 'digital' || department === 'both') && (
        <script type="application/ld+json">
          {JSON.stringify(digitalServiceSchema)}
        </script>
      )}
    </>
  );
};

export default StructuredData;
