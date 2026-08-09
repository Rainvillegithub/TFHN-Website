import React from 'react';

interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "h-12", 
  isDark = false,
  showText = true 
}) => {
  // Always use the top logo (the dominant master logo)
  const logoSrc = "/images/chrysalis-logo-top.png";

  return (
    <img 
      src={logoSrc} 
      alt="Chrysalis Practice Partners Logo" 
      className={`${className} object-contain transition-transform duration-300 hover:scale-105 ${isDark ? 'brightness-0 invert' : ''}`}
    />
  );
};
