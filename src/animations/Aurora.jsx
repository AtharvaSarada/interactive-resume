import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Aurora Background Animation Component
 * Creates a flowing gradient background effect with multiple color layers
 * Used in Hero and Contact sections
 */
const Aurora = ({ colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'], className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Aurora animation parameters
    const waves = colors.map((color, index) => ({
      color,
      offset: index * Math.PI / 2,
      speed: 0.0005 + index * 0.0002,
      amplitude: 100 + index * 50,
      frequency: 0.001 + index * 0.0005,
    }));

    const animate = () => {
      time++;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each wave layer
      waves.forEach((wave, index) => {
        ctx.save();

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        const opacity = 0.15 - index * 0.02;

        gradient.addColorStop(0, `${wave.color}00`);
        gradient.addColorStop(0.5, `${wave.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${wave.color}00`);

        ctx.fillStyle = gradient;

        // Draw wave
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 + time * wave.speed * 0.8) * (wave.amplitude * 0.5);

          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();

        // Add blur effect
        ctx.filter = 'blur(40px)';

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: 0.6,
          mixBlendMode: 'screen'
        }}
      />
      {/* Additional gradient overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.4) 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default Aurora;
