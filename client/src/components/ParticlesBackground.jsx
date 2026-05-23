import React, { useEffect } from "react";

const ParticlesBackground = ({ isDarkMode }) => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Minimal floating orbs effect
    class FloatingOrb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 40;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.04 + 0.01;
        this.color = isDarkMode
          ? `rgba(88, 166, 255, ${this.opacity})`
          : `rgba(9, 105, 218, ${this.opacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x - this.size > canvas.width) this.x = -this.size;
        if (this.x + this.size < 0) this.x = canvas.width + this.size;
        if (this.y - this.size > canvas.height) this.y = -this.size;
        if (this.y + this.size < 0) this.y = canvas.height + this.size;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Soft blur effect using gradient
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size,
        );
        gradient.addColorStop(
          0,
          isDarkMode
            ? `rgba(88, 166, 255, ${this.opacity * 0.6})`
            : `rgba(9, 105, 218, ${this.opacity * 0.6})`,
        );
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create floating orbs
    const orbsArray = [];
    const orbCount = 3; // Very minimal - just 3 orbs

    for (let i = 0; i < orbCount; i++) {
      orbsArray.push(new FloatingOrb());
    }

    // Animation loop
    const animate = () => {
      // Clear with fade effect for smooth trails
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all orbs
      for (let i = 0; i < orbsArray.length; i++) {
        orbsArray[i].update();
        orbsArray[i].draw();
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ filter: "blur(80px)" }}
    />
  );
};

export default ParticlesBackground;
