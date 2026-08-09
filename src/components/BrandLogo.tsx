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
  // Use the top cropped logo for standard light backgrounds
  // Use the bottom cropped logo for dark backgrounds (or vice-versa)
  const logoSrc = isDark ? "/images/chrysalis-logo-bottom.png" : "/images/chrysalis-logo-top.png";

  return (
    <img 
      src={logoSrc} 
      alt="Chrysalis Practice Partners Logo" 
      className={`${className} object-contain transition-transform duration-300 hover:scale-105`}
    />
  );
};
