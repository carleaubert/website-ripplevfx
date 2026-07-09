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
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="scroll-animate text-4xl md:text-6xl font-bold mb-8 opacity-0 translate-y-[-30px] hover:scale-105 transition-transform duration-500 inline-block">
            About Ripple VFX
          </h2>

          {/* Image floated to the right on desktop, stacked on mobile */}
          <div className="scroll-animate relative opacity-0 translate-x-[30px] float-none lg:float-right lg:w-[45%] lg:ml-8 mb-8 lg:mb-0" style={{ transitionDelay: '0.15s' }}>
            <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden group">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e"
                alt="VFX Studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Text content that wraps around the image */}
          <div className="text-content">
            <p className="scroll-animate text-lg text-gray-400 mb-6 leading-relaxed opacity-0 translate-y-[-20px]" style={{ transitionDelay: '0.2s' }}>
              Ripple VFX was founded by Carle and Aymeric, two French artists brought together by their passion for visual effects and cinematic storytelling.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-6 leading-relaxed opacity-0 translate-y-[-20px]" style={{ transitionDelay: '0.25s' }}>
              Their journey began at MPC, where they first met and started building a strong professional connection. Over the following decade, they continued to collaborate and grow their expertise while working at some of the industry's leading visual effects studios. Through different projects, teams, and creative challenges, they developed a deep understanding of what it takes to deliver high-quality visual effects in a demanding production environment.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-6 leading-relaxed opacity-0 translate-y-[-20px]" style={{ transitionDelay: '0.3s' }}>
              After years of experience across feature films and episodic productions, Carle and Aymeric decided to create something of their own — a studio built on their shared values, technical expertise, and commitment to excellence.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-6 leading-relaxed opacity-0 translate-y-[-20px]" style={{ transitionDelay: '0.35s' }}>
              Ripple VFX was created with the vision of bringing together artistic creativity, technical innovation, and efficient workflows to support modern visual effects production. Through their combined experience and shared knowledge of the visual effects industry, Carle and Aymeric have developed a strong understanding of both the creative and technical challenges behind complex productions. Their goal is to create a flexible and collaborative environment where expertise, innovation, and creativity come together to develop efficient workflows and deliver exceptional visual effects.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-6 leading-relaxed opacity-0 translate-y-[-20px] clear-both lg:clear-none" style={{ transitionDelay: '0.4s' }}>
              More than just a VFX studio, Ripple VFX is built around collaboration, problem-solving, and a passion for finding smarter ways to create exceptional imagery. By combining over a decade of experience, a deep understanding of production pipelines, and a commitment to quality, they aim to be a reliable creative partner for productions of all sizes.
            </p>
            <p className="scroll-animate text-lg text-gray-400 mb-8 leading-relaxed opacity-0 translate-y-[-20px]" style={{ transitionDelay: '0.45s' }}>
              Their mission is to bring a fresh approach to visual effects by creating strong partnerships, supporting artists, and delivering seamless imagery that serves the story while maintaining the highest standards of quality.
            </p>
          </div>

          {/* Clear float */}
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
};

export default VFXAbout;