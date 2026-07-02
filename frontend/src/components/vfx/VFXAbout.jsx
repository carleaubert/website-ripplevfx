import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const VFXAbout = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="scroll-animate text-4xl md:text-6xl font-bold mb-6 opacity-0 translate-x-[-30px] hover:scale-105 transition-transform duration-500 inline-block">
              About Ripple VFX
            </h2>
            <p className="scroll-animate text-xl text-gray-400 mb-6 leading-relaxed opacity-0 translate-x-[-30px]" style={{ transitionDelay: '0.1s' }}>
              Ripple VFX is a state-of-the-art visual effects studio dedicated to pushing the
              boundaries of what's possible in digital storytelling.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-6 leading-relaxed opacity-0 translate-x-[-30px]" style={{ transitionDelay: '0.2s' }}>
              Based in the heart of the entertainment industry, we specialize in creating
              stunning visual effects for feature films, episodic television, and high-end
              commercial projects. Our team of award-winning artists and technicians brings
              decades of combined experience to every project.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-8 leading-relaxed opacity-0 translate-x-[-30px]" style={{ transitionDelay: '0.3s' }}>
              We believe in the power of collaboration, innovation, and technical excellence.
              Our approach combines cutting-edge technology with artistic vision to deliver
              results that exceed expectations and help tell unforgettable stories.
            </p>
          </div>

          <div className="scroll-animate relative opacity-0 translate-x-[30px]" style={{ transitionDelay: '0.2s' }}>
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="VFX Artist Working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFXAbout;