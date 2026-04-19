"use client";

import { useEffect, useRef } from "react";

type Flake = {
  d: number;
  r: number;
  x: number;
  y: number;
};

export default function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const flakeCount = window.innerWidth < 768 ? 40 : 80;
    const flakes: Flake[] = Array.from({ length: flakeCount }, () => ({
      d: Math.random() * flakeCount,
      r: Math.random() * 3 + 1,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));

    let animationFrameId = 0;
    let angle = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const moveFlakes = () => {
      angle += 0.01;

      flakes.forEach((flake) => {
        flake.y += Math.cos(angle + flake.d) + 1 + flake.r / 2;
        flake.x += Math.sin(angle) * 1.5;

        if (flake.y > height) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
      });
    };

    const drawFlakes = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(255,255,255,0.8)";
      context.beginPath();

      flakes.forEach((flake) => {
        context.moveTo(flake.x, flake.y);
        context.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
      });

      context.fill();
      moveFlakes();
      animationFrameId = window.requestAnimationFrame(drawFlakes);
    };

    resizeCanvas();
    drawFlakes();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
