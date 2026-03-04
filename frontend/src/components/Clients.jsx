import React from 'react';
import { clients } from '../mockData';

const Clients = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Trusted By Industry Leaders</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've had the privilege of working with some of the biggest names in entertainment
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {client.logo}
                </div>
                <p className="text-sm text-gray-500 mt-2">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="text-5xl font-bold mb-2">50+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold mb-2">15+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold mb-2">25+</div>
            <p className="text-gray-400">Team Members</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold mb-2">100%</div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;