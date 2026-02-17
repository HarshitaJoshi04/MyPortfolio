import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particlesCount = 100;
    const colors = ["rgba(255,255,255,0.7)"];

    let width, height;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // wrap around edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        this.draw();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle());
      }
    }

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;
