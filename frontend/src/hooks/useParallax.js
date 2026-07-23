import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for mouse parallax effect
 * @param {number} movementFactor - Multiplier for mouse movement (default: 30)
 * @returns {Object} mousePosition - {x, y} coordinates for parallax
 */
export const useMouseParallax = (movementFactor = 30) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * movementFactor,
      y: (e.clientY / window.innerHeight - 0.5) * movementFactor
    });
  }, [movementFactor]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return mousePosition;
};

/**
 * Custom hook for scroll tracking
 * @returns {number} scrollY - Current scroll position
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollY;
};
