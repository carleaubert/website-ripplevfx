import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease'
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <img
            src="https://customer-assets.emergentagent.com/job_52f5f95f-336b-4a77-a760-c8c98d488dc8/artifacts/yt7c9ahv_b6f6364c-a487-49e5-a865-d75768bb5256.png"
            alt="Ripple VFX"
            className="h-32 w-auto mx-auto mb-8"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          Creating Visual
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
          Ripple VFX is a cutting-edge visual effects studio specializing in feature films,
          episodic content, and commercial projects. We bring imagination to reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 group"
            onClick={() => alert('Demo reel would play here - currently mocked')}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Our Reel
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-all duration-300 animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;