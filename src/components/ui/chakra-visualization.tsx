
import { ChakraIcon } from "./chakra-icon";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

interface ChakraPoint {
  name: string;
  title: string;
  description: string;
  color: string;
  top: string;
}

export function ChakraVisualization() {
  const chakraPoints: ChakraPoint[] = [
    {
      name: "crown",
      title: "Crown Chakra",
      description: "Connects you to your spiritual self and higher consciousness",
      color: "#9932CC",
      top: "5%"
    },
    {
      name: "third",
      title: "Third Eye Chakra",
      description: "Center of intuition and foresight",
      color: "#0000FF",
      top: "15%"
    },
    {
      name: "throat",
      title: "Throat Chakra",
      description: "Center of expression and communication",
      color: "#00BFFF",
      top: "25%"
    },
    {
      name: "heart",
      title: "Heart Chakra",
      description: "Center of love, compassion and connection",
      color: "#00FF00",
      top: "38%"
    },
    {
      name: "solar",
      title: "Solar Plexus Chakra",
      description: "Center of personal power and self-esteem",
      color: "#FFFF00",
      top: "48%"
    },
    {
      name: "sacral",
      title: "Sacral Chakra",
      description: "Center of creativity and emotional balance",
      color: "#FF8C00",
      top: "58%"
    },
    {
      name: "root",
      title: "Root Chakra",
      description: "Foundation of physical and emotional security",
      color: "#FF0000",
      top: "70%"
    },
  ];

  return (
    <div className="relative w-full max-w-[400px] mx-auto h-[600px]">
      {/* Human Body Silhouette */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2lsaG91ZXR0ZXx8fHx8fDE3MDk3NjE5MzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')" 
        }}
      />
      
      {/* Chakra Points */}
      {chakraPoints.map((chakra) => (
        <HoverCard key={chakra.name}>
          <HoverCardTrigger asChild>
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
              style={{ top: chakra.top }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChakraIcon 
                chakraName={chakra.name} 
                size={40} 
                interactive={true}
                pulseIntensity={1.5}
              />
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent 
            className="w-80 backdrop-blur-md bg-white/90 border-none shadow-xl"
            align="center"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold" style={{ color: chakra.color }}>
                {chakra.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {chakra.description}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
