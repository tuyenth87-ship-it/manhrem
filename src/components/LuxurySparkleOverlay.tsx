import React, { useEffect, useRef } from 'react';

interface LuxurySparkleOverlayProps {
  enabled?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  alphaSpeed: number;
  type: 'bokeh' | 'diamond' | 'gold-dust';
  color: string;
  rotation: number;
  rotationSpeed: number;
}

interface TrailSparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

export const LuxurySparkleOverlay: React.FC<LuxurySparkleOverlayProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const palette = [
      'rgba(251, 191, 36, ', // 24K Gold
      'rgba(253, 230, 138, ', // Champagne Foil
      'rgba(245, 158, 11, ', // Imperial Amber
      'rgba(255, 251, 235, ', // Crystal Diamond White-Gold
      'rgba(52, 211, 153, ', // Emerald Jewel Accent
    ];

    const isMobile = width < 768;
    const particleCount = isMobile ? 28 : 46;
    const particles: Particle[] = [];
    const trailSparkles: TrailSparkle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      const type: Particle['type'] =
        rand < 0.34 ? 'diamond' : rand < 0.68 ? 'gold-dust' : 'bokeh';
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: -Math.random() * 0.38 - 0.08,
        size:
          type === 'bokeh'
            ? Math.random() * 20 + 10
            : type === 'diamond'
            ? Math.random() * 6.5 + 4
            : Math.random() * 2.5 + 1.2,
        alpha: Math.random() * 0.65 + 0.15,
        alphaSpeed: (Math.random() * 0.014 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        type,
        color: palette[Math.floor(Math.random() * palette.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let lastPointerTime = 0;
    const spawnTrail = (clientX: number, clientY: number) => {
      const now = performance.now();
      if (now - lastPointerTime < 28) return;
      lastPointerTime = now;

      for (let i = 0; i < 2; i++) {
        trailSparkles.push({
          x: clientX + (Math.random() - 0.5) * 18,
          y: clientY + (Math.random() - 0.5) * 18,
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.7) * 1.2,
          size: Math.random() * 5.5 + 3.5,
          life: 0,
          maxLife: 28 + Math.random() * 18,
          color: palette[Math.floor(Math.random() * 4)],
        });
      }
      if (trailSparkles.length > 50) {
        trailSparkles.splice(0, trailSparkles.length - 50);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      spawnTrail(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        spawnTrail(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const drawDiamondStar = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      outerRadius: number,
      rotation: number,
      colorPrefix: string,
      alpha: number
    ) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rotation);
      context.beginPath();
      const innerRadius = outerRadius * 0.24;
      for (let i = 0; i < 4; i++) {
        const angleOuter = (i * Math.PI) / 2;
        const angleInner = angleOuter + Math.PI / 4;
        if (i === 0) {
          context.moveTo(Math.cos(angleOuter) * outerRadius, Math.sin(angleOuter) * outerRadius);
        } else {
          context.lineTo(Math.cos(angleOuter) * outerRadius, Math.sin(angleOuter) * outerRadius);
        }
        context.lineTo(Math.cos(angleInner) * innerRadius, Math.sin(angleInner) * innerRadius);
      }
      context.closePath();

      // Core diamond glow
      context.fillStyle = `${colorPrefix}${Math.min(1, alpha * 1.15)})`;
      context.shadowColor = 'rgba(251, 191, 36, 0.85)';
      context.shadowBlur = 8;
      context.fill();
      context.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Ambient floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.alpha += p.alphaSpeed;

        if (p.alpha >= 0.85) {
          p.alpha = 0.85;
          p.alphaSpeed = -Math.abs(p.alphaSpeed);
        } else if (p.alpha <= 0.12) {
          p.alpha = 0.12;
          p.alphaSpeed = Math.abs(p.alphaSpeed);
        }

        if (p.y < -30) p.y = height + 30;
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;

        if (p.type === 'bokeh') {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          grad.addColorStop(0, `${p.color}${p.alpha * 0.28})`);
          grad.addColorStop(0.6, `${p.color}${p.alpha * 0.1})`);
          grad.addColorStop(1, `${p.color}0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'gold-dust') {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.shadowColor = 'rgba(251, 191, 36, 0.7)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        } else {
          drawDiamondStar(ctx, p.x, p.y, p.size, p.rotation, p.color, p.alpha);
        }
      }

      // 2. Interactive cursor/touch trail sparkles
      for (let i = trailSparkles.length - 1; i >= 0; i--) {
        const t = trailSparkles[i];
        t.life += 1;
        t.x += t.vx;
        t.y += t.vy;
        const progress = t.life / t.maxLife;
        const alpha = Math.max(0, 1 - progress);
        const currentSize = t.size * (1 - progress * 0.4);

        drawDiamondStar(ctx, t.x, t.y, currentSize, progress * Math.PI, t.color, alpha);

        if (t.life >= t.maxLife) {
          trailSparkles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 w-full h-full"
    />
  );
};
