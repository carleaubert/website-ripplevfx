import React from 'react';
import { team } from '../mockData';
import { Card } from './ui/card';
import { ExternalLink } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Talented artists and technicians passionate about creating exceptional visual effects
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.credits}</p>

                {/* Link */}
                <button className="mt-4 flex items-center gap-2 text-white hover:text-gray-300 transition-colors group/link">
                  <span className="text-sm">View Work</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
            </Card>
          ))}
        </div>

        {/* Founders Section */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Founded on Passion</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Ripple VFX was founded by industry veterans who shared a vision of creating
              a studio that values both artistic excellence and team well-being. With decades
              of combined experience working on blockbuster films and acclaimed television
              series, our founders have built a culture that prioritizes creativity,
              innovation, and collaboration.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe that great visual effects come from great teams. That's why we've
              created an environment where artists can thrive, experiment, and push the
              boundaries of their craft while maintaining a healthy work-life balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;