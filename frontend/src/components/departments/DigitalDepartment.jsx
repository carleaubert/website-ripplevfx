import React from 'react';
import DigitalHero from '../digital/DigitalHero';
import DigitalProjects from '../digital/DigitalProjects';
import DigitalServices from '../digital/DigitalServices';
import DigitalAbout from '../digital/DigitalAbout';
import DigitalTeam from '../digital/DigitalTeam';
import Contact from '../Contact';

const DigitalDepartment = () => {
  return (
    <>
      <DigitalHero />
      <div className="dissolve-section">
        <DigitalProjects />
      </div>
      <div className="dissolve-section">
        <DigitalServices />
      </div>
      <div className="dissolve-section">
        <DigitalAbout />
      </div>
      <div className="dissolve-section">
        <DigitalTeam />
      </div>
      <div className="dissolve-section">
        <Contact />
      </div>
    </>
  );
};

export default DigitalDepartment;