import React from 'react';
import { services } from '../mockData';
import { Card } from './ui/card';
import { Film, Box, Zap, Layers, Palette, Sparkles } from 'lucide-react';

const iconMap = {
  Film: Film,
  Box: Box,
  Zap: Zap,
  Layers: Layers,
  Palette: Palette,
  Sparkles: Sparkles
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive VFX solutions tailored to bring your creative vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={index}
                className="group bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 p-8 animate-in fade-in slide-in-from-bottom-5 hover:bg-gray-900"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;