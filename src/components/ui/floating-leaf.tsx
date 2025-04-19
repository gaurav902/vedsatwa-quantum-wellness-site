
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

interface FloatingLeafProps {
  color?: string;
  size?: number;
  delay?: number;
  duration?: number;
  glowIntensity?: number;
  rotationSpeed?: number;
}

export function FloatingLeaf({
  color = "#4CAF50",
  size = 24,
  delay = 0,
  duration = 15,
  glowIntensity = 0.5,
  rotationSpeed = 1,
}: FloatingLeafProps) {
  const [position, setPosition] = useState({
    left: Math.random() * 100,
    top: -10,
    rotation: Math.random() * 360,
  });
  
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    // Set random horizontal position and delayed animation
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setPosition({
          left: Math.random() * 100,
          top: -10,
          rotation: Math.random() * 360,
        });
        
        // Random glow effect
        setIsGlowing(Math.random() > 0.7);
      }, duration * 1000);

      return () => clearInterval(interval);
    }, delay * 1000);

    // Occasional glow effect
    const glowInterval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 3000 + Math.random() * 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(glowInterval);
    };
  }, [delay, duration]);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${position.left}%`,
        top: `${position.top}%`,
        transform: `rotate(${position.rotation}deg)`,
        animation: `float ${duration}s linear forwards`,
        opacity: 0.7,
        filter: isGlowing ? `drop-shadow(0 0 ${glowIntensity * 8}px ${color})` : 'none',
        transition: 'filter 1.5s ease-in-out',
      }}
    >
      <Leaf 
        size={size} 
        color={color} 
        style={{
          animation: `spin ${20 / rotationSpeed}s linear infinite`,
        }}
      />
    </div>
  );
}
