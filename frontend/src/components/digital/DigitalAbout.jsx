import React, { useEffect, useRef } from 'react';

const DigitalAbout = () => {
  const sectionRef = useRef(null);

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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="scroll-animate text-4xl md:text-6xl font-bold mb-8 opacity-0 translate-y-10 hover:scale-105 transition-transform duration-500 inline-block">
            About Ripple Digital
          </h2>
          <p className="scroll-animate text-xl text-gray-400 mb-8 leading-relaxed opacity-0 translate-y-10" style={{ transitionDelay: '0.1s' }}>
            Ripple Digital builds modern digital products, websites, AI solutions, and applications that help businesses grow.
          </p>
          <p className="scroll-animate text-lg text-gray-400 leading-relaxed opacity-0 translate-y-10" style={{ transitionDelay: '0.2s' }}>
            We combine cutting-edge technology with creative design to deliver solutions that are not only beautiful but also functional and scalable. From responsive websites to intelligent mobile applications, we create digital experiences that drive results and transform how businesses connect with their customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalAbout;