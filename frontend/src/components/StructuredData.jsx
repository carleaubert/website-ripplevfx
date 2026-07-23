import React from 'react';
import {
  buildOrganizationSchema,
  buildVFXServiceSchema,
  buildDigitalServiceSchema,
  buildWebsiteSchema,
  buildBreadcrumbSchema
} from '../utils/schemaBuilders';

const StructuredData = ({ department = 'both' }) => {
  const schemas = [];

  // Always include organization and website schemas
  schemas.push(buildOrganizationSchema());
  schemas.push(buildWebsiteSchema());

  // Add department-specific schemas
  if (department === 'vfx' || department === 'both') {
    schemas.push(buildVFXServiceSchema());
    if (department !== 'both') {
      schemas.push(buildBreadcrumbSchema('vfx'));
    }
  }

  if (department === 'digital' || department === 'both') {
    schemas.push(buildDigitalServiceSchema());
    if (department !== 'both') {
      schemas.push(buildBreadcrumbSchema('digital'));
    }
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
