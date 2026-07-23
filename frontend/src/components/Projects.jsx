import React, { useState } from 'react';
import { projects } from '../mockData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useIntersectionAnimation('.project-card', 100, 0.1);
  const categories = ['All', 'Feature Film', 'TV Series', 'Action Film', 'Sci-Fi Film', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with scroll reveal */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500 inline-block">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest work in visual effects across film, television, and digital media
          </p>
        </div>

        {/* Filter with stagger animation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-110 ${
                filter === category
                  ? 'bg-white text-black shadow-2xl shadow-white/20'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              style={{
                animation: `slideInFromTop 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card group relative overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-500 opacity-0 translate-y-10 hover:scale-105 hover:z-10"
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Image with zoom effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Badge */}
                <Badge className="absolute top-4 right-4 bg-white text-black animate-in fade-in slide-in-from-right-5 duration-500 group-hover:scale-110 transition-transform">
                  {project.year}
                </Badge>
              </div>

              {/* Content with slide up effect */}
              <div className="p-6 relative">
                <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">{project.category}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Animated bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-500 group-hover:w-full" />
              
              {/* Corner glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;