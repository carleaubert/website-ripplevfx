import { useEffect, useRef } from 'react';

/**
 * Custom hook for animating elements when they intersect with viewport
 * @param {string} selector - CSS selector for elements to animate
 * @param {number} delay - Delay multiplier between animations (in ms)
 * @param {number} threshold - Intersection threshold (0-1)
 */
export const useIntersectionAnimation = (selector = '.card', delay = 100, threshold = 0.1) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(selector);
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('visible');
              }, index * delay);
            });
          }
        });
      },
      { threshold }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect();
    };
  }, [selector, delay, threshold]);

  return sectionRef;
};
