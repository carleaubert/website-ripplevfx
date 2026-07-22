import React, { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { Play, ChevronDown, Sparkles, X } from 'lucide-react';

const MOUSE_MOVEMENT_FACTOR = 30;
const PARALLAX_SPEED = 15;

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showReelModal, setShowReelModal] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * MOUSE_MOVEMENT_FACTOR,
        y: (e.clientY / window.innerHeight - 0.5) * MOUSE_MOVEMENT_FACTOR
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
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* MP4 Video Background - Presentation Video */}
        <div 
          className="absolute w-full h-full flex items-center justify-center"
          style={{ 
            transform: `translateY(${parallaxOffset * 0.2}px)`,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
          >
            <source src="/assets/videos/presentation-reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 z-20">
          {[...Array(15)].map((_, i) => (
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
        className="relative z-30 container mx-auto px-6 text-center"
        style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
      >

        {/* Main heading with stagger animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="block animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 drop-shadow-2xl">
            Creating Visual
          </span>
          <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 drop-shadow-2xl">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Excellence</span>
          </span>
        </h1>

        {/* Description with reveal */}
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700 leading-relaxed drop-shadow-lg">
          Ripple VFX is a cutting-edge visual effects studio specializing in feature films,
          episodic content, and commercial projects. We bring imagination to reality.
        </p>

        {/* CTA Buttons with stagger */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-900"
            onClick={() => setShowReelModal(true)}
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

      {/* Demo Reel Modal */}
      {showReelModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setShowReelModal(false)}
        >
          <button
            onClick={() => setShowReelModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative w-full max-w-6xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
              style={{ objectFit: 'contain' }}
              src="/assets/videos/demo-reel.mp4"
            >
              <source src="/assets/videos/demo-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;