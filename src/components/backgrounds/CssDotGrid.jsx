import React from 'react';

/**
 * CSS-only Dot Grid Background Component
 * Optimized for performance - no JavaScript animations
 * Uses CSS background patterns
 */
const CssDotGrid = ({
  dotSize = 1,
  dotColor = 'rgba(102, 126, 234, 0.3)',
  gap = 40,
  className = '',
}) => {
  const dotGridStyle = {
    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${gap}px ${gap}px`,
    backgroundPosition: 'center center',
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={dotGridStyle}
    />
  );
};

export default CssDotGrid;
