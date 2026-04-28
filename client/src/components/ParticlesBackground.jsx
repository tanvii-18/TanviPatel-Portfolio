import React, { useEffect, useState } from "react";

const ParticlesBackground = ({ isDarkMode }) => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    // Theme colors
    const particleColor = "rgba(102, 126, 234, ";
    const lineColor = "rgba(102, 126, 234, ";

    const bgGradientStart = isDarkMode
      ? "rgba(102, 126, 234, 0.1)"
      : "rgba(102, 126, 234, 0.05)";
    const bgGradientMid = isDarkMode
      ? "rgba(118, 75, 162, 0.05)"
      : "rgba(118, 75, 162, 0.02)";
    const bgGradientEnd = isDarkMode
      ? "rgba(10, 14, 39, 0)"
      : "rgba(255, 255, 255, 0)";

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `${particleColor}${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.strokeStyle = `${lineColor}${this.opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    // Create particles
    const particlesArray = [];
    const particleCount = Math.floor(window.innerWidth / 50);

    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula-like background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      );
      gradient.addColorStop(0, bgGradientStart);
      gradient.addColorStop(0.5, bgGradientMid);
      gradient.addColorStop(1, bgGradientEnd);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let particle of particlesArray) {
        particle.update();
        particle.draw();
      }

      // Draw connecting lines
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `${lineColor}${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isDarkMode]);

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0a0e27 0%, #1a0f3a 100%)"
    : "linear-gradient(135deg, #f8f9fb 0%, #e8ecf5 100%)";

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-all duration-300"
      style={{
        background: bgGradient,
      }}
    />
  );
};

export default ParticlesBackground;
