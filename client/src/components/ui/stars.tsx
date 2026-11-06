"use client";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Star {
  x: string;
  y: string;
  size: number;
  opacity: number;
  color: string;
  twinkleDuration: string;
  twinkleDelay: string;
  glow?: boolean;
}

export const Stars = ({
  count = 140,
  className,
}: {
  count?: number;
  className?: string;
}) => {
  // Deterministic star field pre-generation: no layout shift, no hydration mismatch
  const stars: Star[] = useMemo(() => {
    const starColors = ["#ffffff", "#ffffff", "#ffffff", "#e0f2fe", "#fef3c7"];

    return Array.from({ length: count }).map((_, i) => {
      // Linear congruential pseudo-random generator with fixed seed
      const pseudo = (seed: number) => {
        const x = Math.sin(seed + i * 19.37) * 10000;
        return x - Math.floor(x);
      };

      const x = (pseudo(1) * 100).toFixed(2);
      const y = (pseudo(2) * 100).toFixed(2);
      const sizeVal = pseudo(3);
      
      // Sizes: 70% tiny (1px), 22% medium (1.5px), 8% bright (2px)
      const size = sizeVal < 0.7 ? 1 : sizeVal < 0.92 ? 1.5 : 2;
      const opacity = Number((0.35 + pseudo(4) * 0.55).toFixed(2));
      const color = starColors[Math.floor(pseudo(5) * starColors.length)];
      const twinkleDuration = `${(3 + pseudo(6) * 4).toFixed(1)}s`;
      const twinkleDelay = `${(pseudo(7) * 6).toFixed(1)}s`;
      const glow = size === 2 && pseudo(8) > 0.4;

      return {
        x: `${x}%`,
        y: `${y}%`,
        size,
        opacity,
        color,
        twinkleDuration,
        twinkleDelay,
        glow,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={cn("fixed inset-0 overflow-hidden pointer-events-none z-0", className)}
    >
      {stars.map((star, idx) => (
        <span
          key={`star-${idx}`}
          className="absolute rounded-full pointer-events-none animate-twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: star.glow
              ? `0 0 4px 1px ${star.color === "#fef3c7" ? "rgba(254, 243, 199, 0.6)" : "rgba(224, 242, 254, 0.6)"}`
              : undefined,
            animationDuration: star.twinkleDuration,
            animationDelay: star.twinkleDelay,
          }}
        />
      ))}
    </div>
  );
};
