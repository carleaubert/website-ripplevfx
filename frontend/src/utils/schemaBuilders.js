/**
 * Schema builders for structured data / SEO
 */

export const buildOrganizationSchema = () => ({
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
    { "@type": "City", "name": "Vancouver" },
    { "@type": "State", "name": "British Columbia" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "Worldwide" }
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
    "Visual Effects", "VFX Compositing", "Nuke Compositing",
    "Digital Matte Painting", "Motion Graphics", "3D Animation",
    "AI-Powered Creative Solutions", "Web Development",
    "Mobile App Development", "SaaS Platforms"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/ripplevfxstudios/",
    "https://ripplevfxstudios.com"
  ]
});

export const buildVFXServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Visual Effects Production",
  "provider": {
    "@type": "Organization",
    "name": "Ripple VFX Studios"
  },
  "areaServed": "Worldwide",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  },
  "category": [
    "VFX Compositing", "Digital Matte Painting", "Motion Graphics",
    "3D Animation", "Color Grading", "Roto & Paint"
  ]
});

export const buildDigitalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Technology Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Ripple Digital"
  },
  "areaServed": "Worldwide",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  },
  "category": [
    "Web Development", "Mobile App Development", "AI Solutions",
    "SaaS Platforms", "UI/UX Design"
  ]
});

export const buildWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ripple VFX Studios",
  "url": "https://ripplevfxstudios.com",
  "description": "Visual effects and digital production studio in Vancouver",
  "publisher": {
    "@type": "Organization",
    "name": "Ripple VFX Studios"
  }
});

export const buildBreadcrumbSchema = (department) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ripplevfxstudios.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": department === 'vfx' ? "VFX Services" : "Digital Services",
      "item": `https://ripplevfxstudios.com#${department === 'vfx' ? 'services' : 'digital'}`
    }
  ]
});
