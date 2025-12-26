
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
  const accentColor = "#10B981"; // Emerald-500

  // The logo is a grid. 
  // Text on left: The / Foot / Health / Network
  // Squares on right: 4 / 3 / 2 / 1 descending alignment
  
  return (
    <svg 
      viewBox="0 0 310 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="The Foot Health Network Logo"
    >
      {/* Text Group */}
      {showText && (
        <g style={{ fontStyle: 'normal' }}>
          <text x="0" y="45" fill={textColor} fontSize="32" fontFamily="Arial, sans-serif" fontWeight="bold">The</text>
          <text x="0" y="90" fill={textColor} fontSize="42" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="-1">Foot</text>
          <text x="0" y="135" fill={textColor} fontSize="42" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="-1">Health</text>
          <text x="0" y="180" fill={textColor} fontSize="42" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="-1">Network</text>
        </g>
      )}

      {/* 
        Grid Group 
        Assuming a grid of approx 40x40 squares with gaps.
        Right aligned relative to the text block.
        Let's position them to the right of the text.
        Text width is approx 160px for "Network".
        Let's start grid at x=180.
      */}
      <g transform="translate(150, 10)">
        {/* Row 1: 4 Squares */}
        <rect x="0" y="0" width="35" height="35" fill={accentColor} />
        <rect x="40" y="0" width="35" height="35" fill={accentColor} />
        <rect x="80" y="0" width="35" height="35" fill={accentColor} />
        <rect x="120" y="0" width="35" height="35" fill={accentColor} />

        {/* Row 2: 3 Squares */}
        <rect x="40" y="45" width="35" height="35" fill={accentColor} />
        <rect x="80" y="45" width="35" height="35" fill={accentColor} />
        <rect x="120" y="45" width="35" height="35" fill={accentColor} />

        {/* Row 3: 2 Squares */}
        <rect x="80" y="90" width="35" height="35" fill={accentColor} />
        <rect x="120" y="90" width="35" height="35" fill={accentColor} />

        {/* Row 4: 1 Square */}
        <rect x="120" y="135" width="35" height="35" fill={accentColor} />
      </g>
    </svg>
  );
};
