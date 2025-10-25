import React, { useRef, useEffect } from "react";

const DotGrid = ({
  dotSize = 1,
  dotColor = "rgba(255, 255, 255, 0.3)",
  backgroundColor = "transparent",
  gap = 25,
  className = "",
  fade = true,
  interactive = false,
}) => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const container = canvas.parentElement;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);
      drawDots();
    };

    // Draw the dot grid
    const drawDots = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Calculate grid
      const cols = Math.ceil(rect.width / gap);
      const rows = Math.ceil(rect.height / gap);

      // Center the grid
      const offsetX = (rect.width - (cols - 1) * gap) / 2;
      const offsetY = (rect.height - (rows - 1) * gap) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * gap;
          const y = offsetY + j * gap;

          let opacity = 1;
          let size = dotSize;

          // Interactive mode - dots react to mouse
          if (interactive) {
            const dx = mousePosition.current.x - x;
            const dy = mousePosition.current.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
              const effect = 1 - distance / maxDistance;
              size = dotSize + effect * 3;
              opacity = 0.3 + effect * 0.7;
            } else {
              opacity = 0.3;
            }
          }

          // Fade effect at edges
          if (fade) {
            const fadeDistance = 100;
            const edgeFade = Math.min(
              x / fadeDistance,
              y / fadeDistance,
              (rect.width - x) / fadeDistance,
              (rect.height - y) / fadeDistance,
              1,
            );
            opacity *= edgeFade;
          }

          // Draw dot
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = dotColor.replace(/[\d.]+\)$/g, `${opacity})`);
          ctx.fill();
        }
      }
    };

    // Mouse move handler for interactive mode
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (interactive) {
        drawDots();
      }
    };

    // Animation loop for smooth interactive effects
    const animate = () => {
      if (interactive) {
        drawDots();
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      animate();
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
      }
    };
  }, [dotSize, dotColor, gap, fade, interactive]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <div className="absolute inset-0" style={{ backgroundColor }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
};

export default DotGrid;
