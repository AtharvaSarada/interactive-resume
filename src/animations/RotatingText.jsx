import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * RotatingText Component
 * Cycles through an array of text with smooth fade transitions
 * Used for rotating job titles in the hero section
 */
const RotatingText = ({
  texts = [],
  interval = 3000,
  className = '',
  transitionDuration = 0.5
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const variants = {
    enter: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      scale: 0.95
    },
    center: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(4px)',
      scale: 0.95
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: transitionDuration,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

/**
 * RotatingTextSlide Component
 * Slides text in from the side instead of fading
 */
export const RotatingTextSlide = ({
  texts = [],
  interval = 3000,
  className = '',
  direction = 'up' // 'up', 'down', 'left', 'right'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const getVariants = () => {
    const slideDistance = 30;

    switch (direction) {
      case 'up':
        return {
          enter: { opacity: 0, y: slideDistance },
          center: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -slideDistance }
        };
      case 'down':
        return {
          enter: { opacity: 0, y: -slideDistance },
          center: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: slideDistance }
        };
      case 'left':
        return {
          enter: { opacity: 0, x: slideDistance },
          center: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -slideDistance }
        };
      case 'right':
        return {
          enter: { opacity: 0, x: -slideDistance },
          center: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: slideDistance }
        };
      default:
        return {
          enter: { opacity: 0, y: slideDistance },
          center: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -slideDistance }
        };
    }
  };

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={getVariants()}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

/**
 * RotatingTextFlip Component
 * Flips text with a 3D rotation effect
 */
export const RotatingTextFlip = ({
  texts = [],
  interval = 3000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const variants = {
    enter: {
      opacity: 0,
      rotateX: 90,
      scale: 0.9
    },
    center: {
      opacity: 1,
      rotateX: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      rotateX: -90,
      scale: 0.9
    }
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ perspective: '1000px' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
