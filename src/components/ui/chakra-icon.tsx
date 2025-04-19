
import { cn } from "@/lib/utils";
import { CircleDot } from "lucide-react";
import { useState, useEffect } from "react";

interface ChakraIconProps {
  className?: string;
  color?: string;
  size?: number;
  pulseIntensity?: number;
  interactive?: boolean;
  chakraName?: string;
}

const chakraColors = {
  root: "#FF0000",    // Red - Muladhara
  sacral: "#FF8C00",  // Orange - Svadhisthana
  solar: "#FFFF00",   // Yellow - Manipura
  heart: "#00FF00",   // Green - Anahata
  throat: "#00BFFF",  // Blue - Vishuddha
  third: "#0000FF",   // Indigo - Ajna
  crown: "#9932CC",   // Violet - Sahasrara
};

export function ChakraIcon({ 
  className, 
  color = "#FF9933", 
  size = 24, 
  pulseIntensity = 1,
  interactive = false,
  chakraName
}: ChakraIconProps) {
  const [isActive, setIsActive] = useState(false);
  const [pulseSize, setPulseSize] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  // Use predefined chakra color if chakraName is provided
  const iconColor = chakraName ? chakraColors[chakraName as keyof typeof chakraColors] || color : color;
  
  useEffect(() => {
    // Create pulsing effect
    const interval = setInterval(() => {
      setPulseSize(prev => isActive ? (prev === 1 ? 1.1 * pulseIntensity : 1) : 1);
      
      if (!interactive) {
        setIsActive(prev => !prev);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [interactive, isActive, pulseIntensity]);

  const handleInteraction = () => {
    if (interactive) {
      setIsActive(prev => !prev);
    }
  };

  return (
    <div 
      className={cn(
        "relative transition-all duration-1000", 
        interactive && "cursor-pointer",
        className
      )}
      onClick={handleInteraction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 rounded-full transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${iconColor}40 10%, transparent 70%)`,
          transform: `scale(${isActive || isHovered ? 1.8 : 1.2})`,
          opacity: isActive || isHovered ? 0.8 : 0.3,
        }}
      />
      
      <CircleDot 
        size={size} 
        color={iconColor} 
        className="animate-spin-slow relative z-10"
        style={{
          transform: `scale(${pulseSize})`,
          transition: 'transform 0.5s ease-in-out',
          filter: `drop-shadow(0 0 ${isActive || isHovered ? 6 : 2}px ${iconColor})`,
        }}
      />
      
      {(interactive && isHovered && chakraName) && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {chakraName.charAt(0).toUpperCase() + chakraName.slice(1)} Chakra
        </div>
      )}
    </div>
  );
}
