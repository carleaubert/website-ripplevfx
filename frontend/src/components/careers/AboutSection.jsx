import React from 'react';

const AboutSection = () => {
  return (
    <div className="mb-20">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ripple VFX Studios</h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            Founded by Carle and Aymeric, two French artists with over a decade of experience at leading VFX studios including MPC, Ripple VFX Studios is a Vancouver-based visual effects and digital production company.
          </p>
          <p>
            We specialize in <strong className="text-white">Nuke compositing, digital matte painting, motion graphics, and AI-powered creative solutions</strong> for film, television, advertising, and digital media.
          </p>
          <p>
            Beyond visual effects, our <strong className="text-white">Ripple Digital</strong> division creates custom websites, mobile applications, AI solutions, and SaaS platforms for businesses looking to innovate.
          </p>
          <p className="text-white font-semibold mt-6">
            We&apos;re always looking for talented artists, developers, and creative technologists who share our passion for excellence and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
