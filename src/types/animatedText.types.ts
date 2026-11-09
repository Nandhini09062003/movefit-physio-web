import type { CSSProperties, ReactNode } from 'react';

export type AnimationType = 
  | 'fadeUp'       // Smooth upward float
  | 'slideRight'   // Left-to-right entrance
  | 'scaleUp'      // Subtle zoom-in
  | 'typewriter'   // Typed reveal
  | 'blurIn'       // Unblur & fade in
  | 'splitWords'   // Staggered word-by-word reveal
  | 'wordWave'    // Wave-like word motion with bounce
  | 'elasticPop'   // Springy pop-in effect
  | 'perspectiveFlip' // 3D flip with perspective
  | 'skewSlide'    // Skewed slide-in effect
  | 'neonGlow';

export interface AnimatedHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  animationType?: AnimationType;
  animateOnMount?: boolean;
  align?: 'left' | 'center' | 'right';
  headingLevel?: 'h1' | 'h2';
  titleClassName?: string;
  titleStyle?: CSSProperties;
}