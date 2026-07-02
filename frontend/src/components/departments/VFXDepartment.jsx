import React from 'react';
import Hero from '../Hero';
import VFXProjects from '../vfx/VFXProjects';
import VFXServices from '../vfx/VFXServices';
import VFXAbout from '../vfx/VFXAbout';
import VFXTeam from '../vfx/VFXTeam';
import Clients from '../Clients';
import Contact from '../Contact';

const VFXDepartment = () => {
  return (
    <>
      <Hero />
      <div className="dissolve-section">
        <VFXProjects />
      </div>
      <div className="dissolve-section">
        <VFXServices />
      </div>
      <div className="dissolve-section">
        <VFXAbout />
      </div>
      <div className="dissolve-section">
        <VFXTeam />
      </div>
      <div className="dissolve-section">
        <Clients />
      </div>
      <div className="dissolve-section">
        <Contact />
      </div>
    </>
  );
};

export default VFXDepartment;