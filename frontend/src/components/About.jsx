import React from 'react';
import { values } from '../mockData';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">About Ripple VFX</h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Ripple VFX is a state-of-the-art visual effects studio dedicated to pushing the
              boundaries of what's possible in digital storytelling.
            </p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Based in the heart of the entertainment industry, we specialize in creating
              stunning visual effects for feature films, episodic television, and high-end
              commercial projects. Our team of award-winning artists and technicians brings
              decades of combined experience to every project.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe in the power of collaboration, innovation, and technical excellence.
              Our approach combines cutting-edge technology with artistic vision to deliver
              results that exceed expectations and help tell unforgettable stories.
            </p>
            <div className="flex items-center gap-3 text-white group cursor-pointer">
              <span className="text-lg font-medium">Discover our process</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e"
                alt="VFX Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/20 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/20 rounded-lg" />
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;