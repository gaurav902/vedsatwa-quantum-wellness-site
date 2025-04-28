
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
  symbol: string;
  benefits: string[];
  element: string;
}

export function ChakraVisualization() {
  const chakraPoints: ChakraPoint[] = [
    {
      name: "crown",
      title: "Crown Chakra (Sahasrara)",
      description: "The gateway to cosmic consciousness and enlightenment",
      color: "#9932CC",
      top: "5%",
      symbol: "Thousand-petaled lotus",
      benefits: [
        "Enhanced spiritual awareness",
        "Deep meditation experiences",
        "Connection to higher consciousness",
        "Mental clarity and wisdom"
      ],
      element: "Thought"
    },
    {
      name: "third",
      title: "Third Eye Chakra (Ajna)",
      description: "Your center of intuition and foresight",
      color: "#0000FF",
      top: "15%",
      symbol: "Two-petaled lotus",
      benefits: [
        "Improved intuition",
        "Enhanced visualization abilities",
        "Better decision making",
        "Clear thinking"
      ],
      element: "Light"
    },
    {
      name: "throat",
      title: "Throat Chakra (Vishuddha)",
      description: "Your voice of truth and self-expression",
      color: "#00BFFF",
      top: "25%",
      symbol: "Sixteen-petaled lotus",
      benefits: [
        "Clear communication",
        "Authentic self-expression",
        "Creative expression",
        "Speaking your truth"
      ],
      element: "Ether"
    },
    {
      name: "heart",
      title: "Heart Chakra (Anahata)",
      description: "The bridge between body and spirit",
      color: "#00FF00",
      top: "38%",
      symbol: "Twelve-petaled lotus",
      benefits: [
        "Unconditional love",
        "Compassion for all beings",
        "Emotional healing",
        "Deep relationships"
      ],
      element: "Air"
    },
    {
      name: "solar",
      title: "Solar Plexus Chakra (Manipura)",
      description: "Your center of personal power and self-esteem",
      color: "#FFFF00",
      top: "48%",
      symbol: "Ten-petaled lotus",
      benefits: [
        "Strong willpower",
        "Self-confidence",
        "Personal boundaries",
        "Achievement orientation"
      ],
      element: "Fire"
    },
    {
      name: "sacral",
      title: "Sacral Chakra (Svadhishthana)",
      description: "The wellspring of creativity and emotion",
      color: "#FF8C00",
      top: "58%",
      symbol: "Six-petaled lotus",
      benefits: [
        "Emotional balance",
        "Creative expression",
        "Healthy relationships",
        "Sexual wellness"
      ],
      element: "Water"
    },
    {
      name: "root",
      title: "Root Chakra (Muladhara)",
      description: "Your foundation of physical and emotional security",
      color: "#FF0000",
      top: "70%",
      symbol: "Four-petaled lotus",
      benefits: [
        "Grounding and stability",
        "Physical health and vitality",
        "Security and safety",
        "Connection to Earth"
      ],
      element: "Earth"
    },
  ];

  return (
    <div className="relative w-full max-w-[400px] mx-auto h-[600px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 via-blue-100/20 to-green-100/20 rounded-xl" />
      
      {/* Meditation Figure */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/1d7eff67-e3c4-4c04-be23-82cd04e47b88.png')",
          filter: "brightness(0.1)",
          opacity: 0.8
        }}
      />
      
      {/* Chakra Points */}
      {chakraPoints.map((chakra) => (
        <HoverCard key={chakra.name} openDelay={1000}>
          <HoverCardTrigger asChild>
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
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
            <div className="flex flex-col gap-3 relative overflow-hidden p-2">
              {/* Background Chakra Symbol */}
              <div 
                className="absolute right-0 top-0 opacity-5 w-40 h-40 transform translate-x-1/4 -translate-y-1/4"
                style={{
                  backgroundImage: `url('/lovable-uploads/1d7eff67-e3c4-4c04-be23-82cd04e47b88.png')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold" style={{ color: chakra.color }}>
                  {chakra.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {chakra.description}
                </p>
                <div className="mt-3">
                  <h4 className="font-semibold text-sm mb-1">Element: {chakra.element}</h4>
                  <h4 className="font-semibold text-sm mb-1">Symbol: {chakra.symbol}</h4>
                  <h4 className="font-semibold text-sm mb-1">Benefits:</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {chakra.benefits.map((benefit, index) => (
                      <li key={index} className="ml-2">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
