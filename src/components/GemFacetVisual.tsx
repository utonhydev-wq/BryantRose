import React, { useState } from "react";
import { GemstoneSpec } from "../data/gemstonesData";

interface GemFacetVisualProps {
  gemstone: GemstoneSpec;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
}

export const GemFacetVisual: React.FC<GemFacetVisualProps> = ({
  gemstone,
  size = "md",
  interactive = true,
  className = "",
}) => {
  const [glintPos, setGlintPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlintPos({ x, y });
  };

  const handleMouseLeave = () => {
    setGlintPos({ x: 50, y: 50 });
  };

  const sizeStyles = {
    sm: "h-24 w-24",
    md: "h-36 w-36 sm:h-44 sm:w-44",
    lg: "h-56 w-56 sm:h-72 sm:w-72",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none ${sizeStyles[size]} ${className}`}
      aria-label={`${gemstone.name} faceted visualization`}
    >
      {/* Ambient jewel glow backdrop */}
      <div
        className="absolute inset-2 rounded-full opacity-35 blur-xl transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundColor: gemstone.accentColor,
        }}
      />

      {/* Dynamic specular light reflection sheen */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-40 transition-transform duration-100 ease-out"
        style={{
          background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
        }}
      />

      {/* Facet Geometry SVG Rendering based on category */}
      {gemstone.category === "Emeralds" ? (
        /* Octagonal Emerald Step Cut */
        <svg
          viewBox="0 0 100 100"
          className="relative z-10 h-full w-full drop-shadow-[0_8px_24px_rgba(4,120,87,0.35)] transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id={`grad-${gemstone.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gemstone.gradientFrom} />
              <stop offset="60%" stopColor={gemstone.accentColor} />
              <stop offset="100%" stopColor={gemstone.gradientTo} />
            </linearGradient>
            <linearGradient id={`inner-${gemstone.id}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Outer Girdle Polygon */}
          <polygon
            points="28,8 72,8 92,28 92,72 72,92 28,92 8,72 8,28"
            fill={`url(#grad-${gemstone.id})`}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.8"
          />

          {/* First Step Tier */}
          <polygon
            points="33,16 67,16 84,33 84,67 67,84 33,84 16,67 16,33"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.75"
          />

          {/* Second Step Tier */}
          <polygon
            points="38,24 62,24 76,38 76,62 62,76 38,76 24,62 24,38"
            fill={`url(#inner-${gemstone.id})`}
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.7"
          />

          {/* Table Center Facet */}
          <polygon
            points="42,32 58,32 68,42 68,58 58,68 42,68 32,58 32,42"
            fill={gemstone.accentColor}
            fillOpacity="0.85"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.9"
          />

          {/* Corner Step Ray Connectors */}
          <line x1="28" y1="8" x2="42" y2="32" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="72" y1="8" x2="58" y2="32" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="92" y1="28" x2="68" y2="42" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="92" y1="72" x2="68" y2="58" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="72" y1="92" x2="58" y2="68" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="28" y1="92" x2="42" y2="68" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="8" y1="72" x2="32" y2="58" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="8" y1="28" x2="32" y2="42" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
        </svg>
      ) : gemstone.category === "Rubies" || gemstone.category === "Sapphires" ? (
        /* Cushion / Oval Brilliant Mixed Cut */
        <svg
          viewBox="0 0 100 100"
          className="relative z-10 h-full w-full drop-shadow-[0_8px_24px_rgba(225,29,72,0.35)] transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id={`grad-${gemstone.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gemstone.gradientFrom} />
              <stop offset="50%" stopColor={gemstone.accentColor} />
              <stop offset="100%" stopColor={gemstone.gradientTo} />
            </linearGradient>
            <radialGradient id={`glow-${gemstone.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="100%" stopColor={gemstone.gradientTo} stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {/* Cushion Outer Boundary */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="24"
            fill={`url(#grad-${gemstone.id})`}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.8"
          />

          {/* Inner Cushion Tier */}
          <rect
            x="22"
            y="22"
            width="56"
            height="56"
            rx="16"
            fill={`url(#glow-${gemstone.id})`}
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.75"
          />

          {/* Central Table Polygon */}
          <polygon
            points="50,28 72,50 50,72 28,50"
            fill={gemstone.accentColor}
            fillOpacity="0.9"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="0.9"
          />

          {/* Star and Kite Facet Lines */}
          <line x1="50" y1="10" x2="50" y2="28" stroke="rgba(255,255,255,0.6)" strokeWidth="0.7" />
          <line x1="90" y1="50" x2="72" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="0.7" />
          <line x1="50" y1="90" x2="50" y2="72" stroke="rgba(255,255,255,0.6)" strokeWidth="0.7" />
          <line x1="10" y1="50" x2="28" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="0.7" />

          {/* Corner diagonal facets */}
          <line x1="22" y1="22" x2="39" y2="39" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="78" y1="22" x2="61" y2="39" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="78" y1="78" x2="61" y2="61" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="22" y1="78" x2="39" y2="61" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
        </svg>
      ) : (
        /* Round / Radiant Brilliant Diamond Cut */
        <svg
          viewBox="0 0 100 100"
          className="relative z-10 h-full w-full drop-shadow-[0_8px_24px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id={`grad-${gemstone.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gemstone.gradientFrom} />
              <stop offset="50%" stopColor={gemstone.accentColor} />
              <stop offset="100%" stopColor={gemstone.gradientTo} />
            </linearGradient>
            <radialGradient id={`rad-${gemstone.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="70%" stopColor={gemstone.accentColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={gemstone.gradientTo} stopOpacity="0.9" />
            </radialGradient>
          </defs>

          {/* 16-sided Outer Girdle */}
          <polygon
            points="
              50,5 67,8 81,19 92,33 95,50 92,67 81,81 67,92
              50,95 33,92 19,81 8,67 5,50 8,33 19,19 33,8
            "
            fill={`url(#rad-${gemstone.id})`}
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
          />

          {/* Star facets outer ring */}
          <polygon
            points="50,22 69,31 78,50 69,69 50,78 31,69 22,50 31,31"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.75"
          />

          {/* Octagonal Table Facet */}
          <polygon
            points="50,28 65,35 72,50 65,65 50,72 35,65 28,50 35,35"
            fill="rgba(255,255,255,0.4)"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="0.9"
          />

          {/* Kite & Triangular Facet Rays */}
          <line x1="50" y1="5" x2="50" y2="28" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="95" y1="50" x2="72" y2="50" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="50" y1="95" x2="50" y2="72" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="5" y1="50" x2="28" y2="50" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="19" y1="19" x2="35" y2="35" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="81" y1="19" x2="65" y2="35" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="81" y1="81" x2="65" y2="65" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <line x1="19" y1="81" x2="35" y2="65" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
        </svg>
      )}

      {/* Pristine center glint sparkle */}
      <div
        className="pointer-events-none absolute h-2 w-2 rounded-full bg-white opacity-90 blur-[1px] transition-all duration-150"
        style={{
          top: `${glintPos.y * 0.4 + 30}%`,
          left: `${glintPos.x * 0.4 + 30}%`,
        }}
      />
    </div>
  );
};
