
import React from 'react';

interface BrandLogoProps {
  className?: string;
  isDark?: boolean; // If true, text is white (for dark backgrounds). If false, text is black.
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "h-12", 
  isDark = false,
  showText = true 
}) => {
  const textColor = isDark ? "#FFFFFF" : "#0F172A"; // White or Slate-900
  
  // Emerald colors from brightest to darkest for the gradient
  const colors = [
    "#6EE7B7", // Emerald 300
    "#34D399", // Emerald 400
    "#10B981", // Emerald 500
    "#059669", // Emerald 600
    "#047857"  // Emerald 700
  ];

  return (
    <svg 
      viewBox="0 0 320 190" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="The Foot Health Network Logo"
    >
      {/* Text Group */}
      {showText && (
        <g style={{ fontStyle: 'normal' }}>
          <text x="0" y="38" fill={textColor} fontSize="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800">The</text>
          <text x="0" y="82" fill={textColor} fontSize="48" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" letterSpacing="-1.5">Foot</text>
          <text x="0" y="126" fill={textColor} fontSize="48" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" letterSpacing="-1.5">Health</text>
          <text x="0" y="170" fill={textColor} fontSize="48" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" letterSpacing="-1.5">Network</text>
        </g>
      )}

      {/* 
        Grid Group - Refactored to match reference
        Row 1: 4 Squares (Starts after "The")
        Row 2: 3 Squares (Starts after "Foot")
        Row 3: 2 Squares (Starts after "Health")
        Row 4: 1 Square  (Starts after "Network")
      */}
      <g transform="translate(0, 0)">
        {/* Row 1: 4 Squares */}
        <rect x="70" y="5" width="38" height="38" rx="2" fill={colors[0]} />
        <rect x="115" y="5" width="38" height="38" rx="2" fill={colors[1]} />
        <rect x="160" y="5" width="38" height="38" rx="2" fill={colors[1]} />
        <rect x="205" y="5" width="38" height="38" rx="2" fill={colors[2]} />

        {/* Row 2: 3 Squares */}
        <rect x="115" y="49" width="38" height="38" rx="2" fill={colors[1]} />
        <rect x="160" y="49" width="38" height="38" rx="2" fill={colors[2]} />
        <rect x="205" y="49" width="38" height="38" rx="2" fill={colors[2]} />

        {/* Row 3: 2 Squares */}
        <rect x="160" y="93" width="38" height="38" rx="2" fill={colors[2]} />
        <rect x="205" y="93" width="38" height="38" rx="2" fill={colors[3]} />

        {/* Row 4: 1 Square */}
        <rect x="205" y="137" width="38" height="38" rx="2" fill={colors[4]} />
      </g>
    </svg>
  );
};
