
import { cn } from "@/lib/utils";
import { CircleDot } from "lucide-react";

interface ChakraIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export function ChakraIcon({ className, color = "#FF9933", size = 24 }: ChakraIconProps) {
  return (
    <div className={cn("relative", className)}>
      <CircleDot size={size} color={color} className="animate-spin-slow" />
    </div>
  );
}
