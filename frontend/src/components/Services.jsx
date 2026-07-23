import React, { useEffect, useRef } from 'react';
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
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
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500 inline-block">
            Our Services
          </h2>
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
                key={service.id}
                className="service-card group bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-500 p-8 opacity-0 translate-y-10 hover:scale-105 hover:bg-gray-900/80 relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with multiple animations */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-500 relative">
                  <IconComponent className="w-8 h-8 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-all duration-300 group-hover:translate-x-2 relative">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-500 group-hover:w-full" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;