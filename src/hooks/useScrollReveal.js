import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    
    // Fallback: If reduced motion is on or IntersectionObserver is not supported, 
    // mark as revealed instantly so content isn't hidden.
    if (prefersReduced || !window.IntersectionObserver) {
      if (element) element.classList.add('is-revealed');
      return;
    }

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-revealed');
        if (!options.repeat) observer.unobserve(element);
      } else if (options.repeat) {
        element.classList.remove('is-revealed');
      }
    }, { 
      threshold: options.threshold || 0.15, 
      rootMargin: options.rootMargin || '0px 0px -50px 0px' 
    });

    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [prefersReduced, options.repeat, options.threshold, options.rootMargin]);

  return ref;
}
