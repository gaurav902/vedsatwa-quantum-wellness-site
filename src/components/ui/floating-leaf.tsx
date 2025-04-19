
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

interface FloatingLeafProps {
  color?: string;
  size?: number;
  delay?: number;
  duration?: number;
}

export function FloatingLeaf({
  color = "#4CAF50",
  size = 24,
  delay = 0,
  duration = 15,
}: FloatingLeafProps) {
  const [position, setPosition] = useState({
    left: Math.random() * 100,
    top: -10,
    rotation: Math.random() * 360,
  });

  useEffect(() => {
    // Set random horizontal position and delayed animation
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setPosition({
          left: Math.random() * 100,
          top: -10,
          rotation: Math.random() * 360,
        });
      }, duration * 1000);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
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
      }}
    >
      <Leaf size={size} color={color} />
    </div>
  );
}
