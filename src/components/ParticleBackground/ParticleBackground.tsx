"use client";
import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleBackground: React.FC<{ speed: number }> = ({ speed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const createParticle = (x?: number, y?: number): Particle => ({
      x: x !== undefined ? x : Math.random() * canvas.width,
      y: y !== undefined ? y : Math.random() * canvas.height,
      vx: (Math.random() * 2 - 1) * speed,
      vy: (Math.random() * 2 - 1) * speed,
      radius: 2,
    });

    const initParticles = (count: number) => {
      particles = Array.from({ length: count }, () => createParticle());
    };

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;

        // Adjust particle positions and add new particles if necessary
        const targetCount = Math.floor((width * height) / 10_000);
        if (targetCount > particles.length) {
          const newParticles = Array.from(
            { length: targetCount - particles.length },
            () => createParticle(),
          );
          particles = [...particles, ...newParticles];
        } else {
          particles = particles.slice(0, targetCount);
        }

        particles.forEach((particle) => {
          if (particle.x > width) particle.x = width;
          if (particle.y > height) particle.y = height;
        });
      }
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) {
        particle.x = 0;
        particle.vx = -particle.vx;
      } else if (particle.x > canvas.width) {
        particle.x = canvas.width;
        particle.vx = -particle.vx;
      }

      if (particle.y < 0) {
        particle.y = 0;
        particle.vy = -particle.vy;
      } else if (particle.y > canvas.height) {
        particle.y = canvas.height;
        particle.vy = -particle.vy;
      }
    };

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255,0.25)";
      ctx.fill();
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    resizeCanvas();
    initParticles(Math.floor((canvas.width * canvas.height) / 5000));
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div className={styles.solidBackground}>
      <canvas ref={canvasRef} className={styles.particles} />
    </div>
  );
};

export default ParticleBackground;
