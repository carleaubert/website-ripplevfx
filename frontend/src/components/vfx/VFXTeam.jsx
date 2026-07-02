import React, { useEffect, useRef } from 'react';
import { vfxTeam } from '../../mockData';
import { Card } from '../ui/card';
import { ExternalLink } from 'lucide-react';

const VFXTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500 inline-block">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Talented artists and technicians passionate about creating exceptional visual effects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vfxTeam.map((member, index) => (
            <Card
              key={member.id}
              className="team-card group relative overflow-hidden bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-500 opacity-0 translate-y-10 hover:scale-105 hover:z-10"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">{member.role}</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{member.credits}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-500 group-hover:w-full" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VFXTeam;