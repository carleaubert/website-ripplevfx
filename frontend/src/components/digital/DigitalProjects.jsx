import React from 'react';
import { digitalProjects } from '../../mockData';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

const DigitalProjects = () => {
  const sectionRef = useIntersectionAnimation('.project-card', 100, 0.1);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500 inline-block">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative digital solutions we're building
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {digitalProjects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card group relative overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-500 opacity-0 translate-y-10 hover:scale-105 hover:z-10 mx-auto w-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                <Badge className="absolute top-4 right-4 bg-white text-black animate-in fade-in slide-in-from-right-5 duration-500 group-hover:scale-110 transition-transform">
                  {project.status}
                </Badge>
              </div>

              <div className="p-6 relative">
                <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">{project.category}</p>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:translate-x-2 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-500 group-hover:w-full" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProjects;