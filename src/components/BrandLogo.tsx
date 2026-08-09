import React from 'react';

interface BrandLogoProps {
  className?: string;
  isDark?: boolean; // If true, text is white (for dark backgrounds). If false, text is slate-900.
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "h-12", 
  isDark = false,
  showText = true 
}) => {
  const textColor = isDark ? "#FFFFFF" : "#0F172A"; // White or Slate-900
  const subtextColor = isDark ? "#94A3B8" : "#64748B"; // Slate-400 or Slate-500

  return (
    <svg 
      viewBox="0 0 420 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Chrysalis Practice Partners Logo"
    >
      {/* Modern, elegant, transition-inspired geometric chrysalis/wing graphic */}
      <g transform="translate(15, 10)">
        {/* Inner core/transition path */}
        <path 
          d="M20 90 C 15 65, 30 35, 55 20 C 45 45, 45 70, 30 90 Z" 
          fill="#047857" 
          opacity="0.85" 
        />
        <path 
          d="M35 95 C 30 70, 48 40, 75 25 C 62 52, 62 78, 48 95 Z" 
          fill="#10B981" 
          opacity="0.95" 
        />
        <path 
          d="M50 100 C 45 75, 66 45, 95 30 C 80 60, 80 85, 65 100 Z" 
          fill="#34D399" 
        />
        {/* Dynamic accents representing motion / emergence */}
        <circle cx="82" cy="20" r="4" fill="#34D399" />
        <circle cx="98" cy="38" r="3" fill="#6EE7B7" />
      </g>
      
      {/* Brand Text */}
      {showText && (
        <g transform="translate(130, 20)">
          <text 
            x="0" 
            y="35" 
            fill={textColor} 
            fontSize="36" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            letterSpacing="-1"
          >
            Chrysalis
          </text>
          <text 
            x="0" 
            y="65" 
            fill="#10B981" 
            fontSize="18" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="800" 
            letterSpacing="2.5"
          >
            PRACTICE PARTNERS
          </text>
          <text 
            x="0" 
            y="85" 
            fill={subtextColor} 
            fontSize="10" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="700" 
            letterSpacing="1.5"
          >
            A PRACTICE TRANSITION ADVISORY
          </text>
        </g>
      )}
    </svg>
  );
};
