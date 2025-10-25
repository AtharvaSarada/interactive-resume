import React from 'react';
import { motion } from 'framer-motion';

/**
 * SplitText Animation Component
 * Animates text character by character with staggered entrance
 * Used for hero name and headings
 */
const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 1.2,
  staggerDelay = 0.05,
  animationType = 'fadeUp' // 'fadeUp', 'fadeIn', 'scale', 'slideIn'
}) => {
  // Split text into characters while preserving spaces
  const characters = text.split('');

  // Animation variants based on type
  const variants = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)'
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }
    },
    fadeIn: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    },
    scale: {
      hidden: {
        opacity: 0,
        scale: 0.5
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    },
    slideIn: {
      hidden: {
        opacity: 0,
        x: -20
      },
      visible: {
        opacity: 1,
        x: 0
      }
    },
    bounce: {
      hidden: {
        opacity: 0,
        y: -50,
        scale: 0.5
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1
      }
    }
  };

  const selectedVariant = variants[animationType] || variants.fadeUp;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const child = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] // easeOut curve
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
          style={{
            // Preserve spaces
            whiteSpace: char === ' ' ? 'pre' : 'normal'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * SplitTextWords Component
 * Animates text word by word instead of character by character
 */
export const SplitTextWords = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.1
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={child}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * SplitTextLines Component
 * Animates text line by line
 */
export const SplitTextLines = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.15
}) => {
  // Split by newlines or <br> tags
  const lines = text.split('\n').filter(line => line.trim() !== '');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, index) => (
        <motion.div
          key={`line-${index}`}
          variants={child}
          className="overflow-hidden"
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SplitText;
