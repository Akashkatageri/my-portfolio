"use client";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

export const Meteors = ({
  number = 18,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  // Pre-generate stable meteor parameters so there is NO hydration flash
  // and NO frozen dots on refresh, with uniform distribution across ultrawide viewports
  const meteors = useMemo(() => {
    return Array.from({ length: number }).map((_, idx) => {
      // Deterministic spread covering full width (-15% to 125%) and height (-15% to 110%)
      const left = ((idx * (140 / number) + (idx % 7) * 4.2) % 140) - 15;
      const top = ((idx * (125 / number) + (idx % 5) * 4.8) % 125) - 15;
      
      // Negative delays ensure meteors are ALREADY mid-flight when the page loads
      const delay = -(((idx * 1.29) % 8) + 0.1).toFixed(2);
      const duration = (((idx * 0.95) % 3.5) + 4.2).toFixed(1);

      return {
        left: `${left}%`,
        top: `${top}%`,
        delay: `${delay}s`,
        duration: `${duration}s`,
      };
    });
  }, [number]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[215deg] rounded-full bg-slate-200 shadow-[0_0_6px_1px_rgba(255,255,255,0.4)] pointer-events-none",
            "before:content-[''] before:absolute before:top-1/2 before:h-[1px] before:w-[85px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-slate-200 before:via-slate-400/50 before:to-transparent",
            className
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
};
