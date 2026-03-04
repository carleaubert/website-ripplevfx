import React, { useState } from 'react';
import { projects } from '../mockData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Feature Film', 'TV Series', 'Action Film', 'Sci-Fi Film', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest work in visual effects across film, television, and digital media
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Badge */}
                <Badge className="absolute top-4 right-4 bg-white text-black">
                  {project.year}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;