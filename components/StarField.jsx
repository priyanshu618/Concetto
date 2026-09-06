"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let animationId;
    let angle = 0;

    const colors = [
      "#E85002",
      "#F16001",
      "#C10801",
      "#FF8A3D",
      "#FFD0A8",
      "#F9F9F9",
    ];

    const createStars = () => {
      const count = 200;

      stars = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * canvas.width * 2,
        y: (Math.random() - 0.5) * canvas.height * 1.5,
        z: Math.random() * canvas.width + 200,

        size: Math.random() * 2 + 0.4,
        speed: Math.random() * 10.0 + 0.5,

        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,

        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angle += 0.0018;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        /*
          Rotate around Y axis
        */
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        const rotatedX = star.x * cos - star.z * sin;
        const rotatedZ = star.x * sin + star.z * cos;

        /*
          Perspective projection
        */
        const perspective = 700 / (700 + rotatedZ);

        const screenX = centerX + rotatedX * perspective;
        const screenY = centerY + star.y * perspective;

        const size = star.size * perspective * 1.8;

        /*
          Move stars slightly toward viewer
        */
        star.z -= star.speed;

        if (star.z < -600) {
          star.z = canvas.width + 500;
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 1.5;
        }

        /*
          Twinkle
        */
        star.opacity += star.twinkle;

        if (star.opacity >= 1 || star.opacity <= 0.15) {
          star.twinkle *= -1;
        }

        /*
          Don't draw behind camera
        */
        if (rotatedZ < -650 || size <= 0) return;

        ctx.save();

        ctx.translate(screenX, screenY);

        ctx.globalAlpha = star.opacity;

        ctx.fillStyle = star.color;

        ctx.shadowBlur = Math.max(3, size * 6);
        ctx.shadowColor = star.color;

        /*
          Random star shapes
        */
        const shape = Math.floor(star.x * 10) % 4;

        if (shape === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
        }

        if (shape === 1) {
          // Diamond
          ctx.beginPath();
          ctx.moveTo(0, -size * 2);
          ctx.lineTo(size, 0);
          ctx.lineTo(0, size * 2);
          ctx.lineTo(-size, 0);
          ctx.closePath();
          ctx.fill();
        }

        if (shape === 2) {
          // Four-point star
          ctx.beginPath();
          ctx.moveTo(0, -size * 3);
          ctx.lineTo(size * 0.6, -size * 0.6);
          ctx.lineTo(size * 3, 0);
          ctx.lineTo(size * 0.6, size * 0.6);
          ctx.lineTo(0, size * 3);
          ctx.lineTo(-size * 0.6, size * 0.6);
          ctx.lineTo(-size * 3, 0);
          ctx.lineTo(-size * 0.6, -size * 0.6);
          ctx.closePath();
          ctx.fill();
        }

        if (shape === 3) {
          // Cross
          ctx.fillRect(
            -size * 0.4,
            -size * 2.5,
            size * 0.8,
            size * 5
          );

          ctx.fillRect(
            -size * 2.5,
            -size * 0.4,
            size * 5,
            size * 0.8
          );
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}