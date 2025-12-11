import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  variant?: 'default' | 'dark';
}

const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = "",
  gradientColor = "rgba(47, 128, 237, 0.15)", // Accent blue with low opacity
  variant = 'default'
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Check if custom background is provided
  // const hasCustomBackground = className && (className.includes('bg-') || className.includes('bg['));

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        "relative overflow-hidden rounded-[32px] border border-black/5 transition-all duration-300 hover:shadow-lg",
        variant === 'dark' ? "" : "bg-white",
        className
      )}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default MagicCard;
