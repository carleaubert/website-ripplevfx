import React, { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { Play, ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Radial gradient that follows mouse */}
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
        />
        
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* Content with parallax */}
      <div 
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
      >
        {/* Logo with reveal animation */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
          <div className="relative inline-block">
            <img
              src="https://customer-assets.emergentagent.com/job_52f5f95f-336b-4a77-a760-c8c98d488dc8/artifacts/yt7c9ahv_b6f6364c-a487-49e5-a865-d75768bb5256.png"
              alt="Ripple VFX"
              className="h-32 w-auto mb-8 hover:scale-110 transition-transform duration-500"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-white/10 opacity-50 animate-pulse" />
          </div>
        </div>

        {/* Main heading with stagger animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="block animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            Creating Visual
          </span>
          <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Excellence</span>
          </span>
        </h1>

        {/* Description with reveal */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700 leading-relaxed">
          Ripple VFX is a cutting-edge visual effects studio specializing in feature films,
          episodic content, and commercial projects. We bring imagination to reality.
        </p>

        {/* CTA Buttons with stagger */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-900"
            onClick={() => alert('Demo reel would play here - currently mocked')}
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
            <span className="relative">Watch Our Reel</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000"
            onClick={scrollToProjects}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator with animation */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-all duration-500 cursor-pointer group animate-in fade-in duration-1000 delay-1200"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={32} className="animate-bounce group-hover:scale-125 transition-transform" />
        </div>
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;