import React, { useEffect, useRef } from 'react';
import { values } from '../mockData';
import { ArrowRight } from 'lucide-react';

const About = () => {
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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
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
            <div className="scroll-animate flex items-center gap-3 text-white group cursor-pointer opacity-0 translate-x-[-30px] hover:translate-x-2 transition-all duration-300" style={{ transitionDelay: '0.4s' }}>
              <span className="text-lg font-medium">Discover our process</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>

          {/* Image/Visual */}
          <div className="scroll-animate relative opacity-0 translate-x-[30px]" style={{ transitionDelay: '0.2s' }}>
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e"
                alt="VFX Studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative elements with animation */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="scroll-animate text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 translate-y-10 hover:scale-105 transition-transform duration-500 inline-block">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="scroll-animate group text-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer opacity-0 translate-y-10 hover:scale-110 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-lg font-semibold relative">
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