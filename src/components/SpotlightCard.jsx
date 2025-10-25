import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const SpotlightCard = ({ children, className = "", isSpecial = false }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
      }}
    >
      {/* Spotlight/Glare Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 100%)`,
          }}
        />
      )}

      {/* Electric Border Effect for Special Cards */}
      {isSpecial && isHovered && (
        <>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.4), transparent 100%)`,
              opacity: 0.6,
            }}
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-xl border-2 border-transparent animate-electric-border" />
          </div>
        </>
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>

      {/* Electric Border Animation Styles */}
      <style jsx>{`
        @keyframes electric-border {
          0% {
            border-color: rgba(102, 126, 234, 0.5);
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.3),
              0 0 20px rgba(102, 126, 234, 0.2);
          }
          50% {
            border-color: rgba(0, 212, 255, 0.8);
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5),
              0 0 40px rgba(0, 212, 255, 0.3),
              0 0 60px rgba(0, 212, 255, 0.2);
          }
          100% {
            border-color: rgba(102, 126, 234, 0.5);
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.3),
              0 0 20px rgba(102, 126, 234, 0.2);
          }
        }

        .animate-electric-border {
          animation: electric-border 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpotlightCard;
