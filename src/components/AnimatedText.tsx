import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedHeadingProps } from '../types/animatedText.types';
import { animationVariants } from '../constants/animatedText.constants';

export const AnimatedText: React.FC<AnimatedHeadingProps> = ({
  badge,
  title,
  subtitle,
  animationType = 'fadeUp',
  animateOnMount = false,
  align = 'left',
  headingLevel = 'h2',
  titleClassName,
  titleStyle,
}) => {
  const selectedVariant = animationVariants[animationType];
  const words = typeof title === 'string' ? title.split(' ') : [];
  const MotionHeading = headingLevel === 'h1' ? motion.h1 : motion.h2;
  const titleTriggerProps = animateOnMount
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true, margin: '-50px' } };
  
  // Added new animations to the split array so they animate word-by-word
  const shouldSplitText = ['splitWords', 'wordWave', 'elasticPop', 'perspectiveFlip', 'skewSlide'].includes(animationType) && typeof title === 'string';

  return (
    <div style={{ textAlign: align, marginBottom: subtitle ? '2.5rem' : 0, overflow: 'hidden' }}>
      
      {/* 1. Category Badge */}
      {badge && (
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={selectedVariant.badge}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            display: 'inline-block',
            color: '#d32f2f',
            fontWeight: 700,
            fontSize: '0.825rem',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}
        >
          {badge}
        </motion.span>
      )}

      {/* 2. Main Title */}
      {shouldSplitText ? (
        <MotionHeading
          {...titleTriggerProps}
          className={titleClassName}
          style={{
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#111111',
            margin: 0,
            lineHeight: 1.2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            ...titleStyle,
          }}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={selectedVariant.title}
              transition={{
                duration: animationType === 'elasticPop' ? 0.5 : 0.6,
                delay: idx * 0.08,
                // Custom bouncy physics for elasticPop
                type: animationType === 'elasticPop' ? 'spring' : 'tween',
                bounce: animationType === 'elasticPop' ? 0.5 : undefined,
                ease: 'easeOut',
              }}
              style={{
                display: 'inline-block',
                whiteSpace: 'pre-wrap',
                transformOrigin: 'bottom center',
              }}
            >
              {word}
            </motion.span>
          ))}
        </MotionHeading>
      ) : (
        <MotionHeading
          {...titleTriggerProps}
          variants={selectedVariant.title}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className={titleClassName}
          style={headingLevel === 'h1' ? {
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#111111',
            margin: 0,
            lineHeight: 1.2,
            ...titleStyle,
          } : titleStyle}
        >
          {title}
        </MotionHeading>
      )}

      {/* 3. Subtitle Description */}
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={selectedVariant.subtitle}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: shouldSplitText ? words.length * 0.08 : 0.2,
          }}
          style={{
            color: '#444444',
            fontSize: '1.05rem',
            marginTop: '0.6rem',
            maxWidth: align === 'center' ? '700px' : '650px',
            marginInline: align === 'center' ? 'auto' : undefined
          }}
        >
          {subtitle}
        </motion.p>
      )}

    </div>
  );
};

export default AnimatedText;