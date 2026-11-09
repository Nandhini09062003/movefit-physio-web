import type { Variants } from 'framer-motion';
import type { AnimationType } from '../types/animatedText.types';

// Defined Animation Variants including distinct new styles
export const animationVariants: Record<AnimationType, { badge: Variants; title: Variants; subtitle: Variants }> = {
  fadeUp: {
    badge: { hidden: { opacity: 0, y: -18 }, visible: { opacity: 1, y: 0 } },
    title: { hidden: { opacity: 0, y: 42, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1 } },
    subtitle: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  },
  slideRight: {
    badge: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    title: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    subtitle: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  },
  scaleUp: {
    badge: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    title: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    subtitle: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  },
  blurIn: {
    badge: { hidden: { opacity: 0, filter: 'blur(8px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
    title: { hidden: { opacity: 0, filter: 'blur(12px)', y: 10 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0 } },
    subtitle: { hidden: { opacity: 0, filter: 'blur(6px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
  },
  typewriter: {
    badge: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
    title: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    subtitle: { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } },
  },
  splitWords: {
    badge: { hidden: { opacity: 0, y: -12 }, visible: { opacity: 1, y: 0 } },
    title: { hidden: { opacity: 0, y: 42, rotate: 4 }, visible: { opacity: 1, y: 0, rotate: 0 } },
    subtitle: { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } },
  },
  wordWave: {
    badge: { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } },
    title: { hidden: { opacity: 0, y: 20, rotate: -3, scaleY: 0.75 }, visible: { opacity: 1, y: 0, rotate: 0, scaleY: 1 } },
    subtitle: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  },
  // --- NEW DISTINCT ANIMATIONS ---
  elasticPop: {
    badge: { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } },
    title: { hidden: { opacity: 0, scale: 0.3, y: 30 }, visible: { opacity: 1, scale: 1, y: 0 } },
    subtitle: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  },
  perspectiveFlip: {
    badge: { hidden: { opacity: 0, rotateX: -90 }, visible: { opacity: 1, rotateX: 0 } },
    title: { hidden: { opacity: 0, rotateX: -60, y: 40 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
    subtitle: { hidden: { opacity: 0, rotateX: -30 }, visible: { opacity: 1, rotateX: 0 } },
  },
  skewSlide: {
    badge: { hidden: { opacity: 0, skewX: -20, x: -30 }, visible: { opacity: 1, skewX: 0, x: 0 } },
    title: { hidden: { opacity: 0, skewX: -15, x: -50 }, visible: { opacity: 1, skewX: 0, x: 0 } },
    subtitle: { hidden: { opacity: 0, skewX: -10, x: -20 }, visible: { opacity: 1, skewX: 0, x: 0 } },
  },
  neonGlow: {
    badge: { hidden: { opacity: 0, filter: 'brightness(0)' }, visible: { opacity: 1, filter: 'brightness(1)' } },
    title: { hidden: { opacity: 0, scale: 1.1, filter: 'brightness(2)' }, visible: { opacity: 1, scale: 1, filter: 'brightness(1)' } },
    subtitle: { hidden: { opacity: 0, filter: 'brightness(0.5)' }, visible: { opacity: 1, filter: 'brightness(1)' } },
  },
};