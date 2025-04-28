
import { useState } from "react";
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
  left: string;
  mantra: string;
  element: string;
  qualities: string[];
  benefits: string[];
}

export function ChakraVisualization() {
  const [hoveredChakra, setHoveredChakra] = useState<string | null>(null);

  const chakraPoints: ChakraPoint[] = [
    {
      name: "crown",
      title: "Crown Chakra (Sahasrara)",
      description: "Connection to divine consciousness and spiritual awakening",
      color: "#9932CC",
      top: "8%",
      left: "50%",
      mantra: "OM",
      element: "Divine Consciousness",
      qualities: ["Enlightenment", "Universal consciousness", "Divine connection"],
      benefits: [
        "Spiritual connection",
        "Higher consciousness",
        "Inner wisdom",
        "Unity awareness"
      ]
    },
    {
      name: "third",
      title: "Third Eye Chakra (Ajna)",
      description: "Center of intuition and inner wisdom",
      color: "#0000FF",
      top: "20%",
      left: "60%",
      mantra: "OM",
      element: "Light",
      qualities: ["Intuition", "Wisdom", "Vision"],
      benefits: [
        "Enhanced intuition",
        "Clear thinking",
        "Spiritual awareness",
        "Inner guidance"
      ]
    },
    {
      name: "throat",
      title: "Throat Chakra (Vishuddha)",
      description: "Expression and communication center",
      color: "#00BFFF",
      top: "32%",
      left: "65%",
      mantra: "HAM",
      element: "Ether",
      qualities: ["Communication", "Expression", "Truth"],
      benefits: [
        "Clear communication",
        "Self-expression",
        "Speaking truth",
        "Creative expression"
      ]
    },
    {
      name: "heart",
      title: "Heart Chakra (Anahata)",
      description: "Center of love and compassion",
      color: "#00FF00",
      top: "44%",
      left: "70%",
      mantra: "YAM",
      element: "Air",
      qualities: ["Love", "Compassion", "Balance"],
      benefits: [
        "Emotional healing",
        "Compassion",
        "Self-love",
        "Harmonious relationships"
      ]
    },
    {
      name: "solar",
      title: "Solar Plexus Chakra (Manipura)",
      description: "Power and self-confidence center",
      color: "#FFFF00",
      top: "56%",
      left: "65%",
      mantra: "RAM",
      element: "Fire",
      qualities: ["Power", "Will", "Confidence"],
      benefits: [
        "Self-confidence",
        "Personal power",
        "Clear intentions",
        "Strong willpower"
      ]
    },
    {
      name: "sacral",
      title: "Sacral Chakra (Svadhishthana)",
      description: "Creativity and emotional center",
      color: "#FF8C00",
      top: "68%",
      left: "60%",
      mantra: "VAM",
      element: "Water",
      qualities: ["Creativity", "Emotion", "Pleasure"],
      benefits: [
        "Enhanced creativity",
        "Emotional balance",
        "Sensual connection",
        "Healthy relationships"
      ]
    },
    {
      name: "root",
      title: "Root Chakra (Muladhara)",
      description: "Foundation and grounding center",
      color: "#FF0000",
      top: "80%",
      left: "50%",
      mantra: "LAM",
      element: "Earth",
      qualities: ["Stability", "Security", "Grounding"],
      benefits: [
        "Feeling grounded",
        "Physical vitality",
        "Sense of security",
        "Material abundance"
      ]
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[800px]">
      {/* Meditation Figure */}
      <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/lovable-uploads/cff3fc06-4b57-47c0-bcf4-c462b8ae1b3e.png')" }}
      />

      {/* Chakra Points */}
      {chakraPoints.map((chakra) => (
        <HoverCard key={chakra.name} openDelay={1000}>
          <HoverCardTrigger asChild>
            <motion.div
              className="absolute cursor-pointer z-20"
              style={{ 
                top: chakra.top,
                left: chakra.left,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredChakra(chakra.name)}
              onHoverEnd={() => setHoveredChakra(null)}
            >
              <ChakraIcon
                chakraName={chakra.name}
                size={48}
                interactive={true}
                pulseIntensity={hoveredChakra === chakra.name ? 2 : 1.2}
              />
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent 
            align="center"
            className="w-80 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-none shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <h3 
                className="text-xl font-semibold"
                style={{ color: chakra.color }}
              >
                {chakra.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {chakra.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Element</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{chakra.element}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Mantra</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{chakra.mantra}</p>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="font-semibold text-sm mb-1">Benefits</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                  {chakra.benefits.map((benefit, index) => (
                    <li key={index} className="ml-2">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
