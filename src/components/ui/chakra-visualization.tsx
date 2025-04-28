
import { useState } from "react";
import { ChakraIcon } from "./chakra-icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [selectedChakra, setSelectedChakra] = useState<ChakraPoint | null>(null);

  const chakraPoints: ChakraPoint[] = [
    {
      name: "crown",
      title: "Crown Chakra (Sahasrara)",
      description: "The gateway to higher consciousness and spiritual connection",
      color: "#9932CC",
      top: "15%",
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
      description: "The center of intuition and inner vision",
      color: "#0000FF",
      top: "25%",
      left: "50%",
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
      <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/lovable-uploads/cff3fc06-4b57-47c0-bcf4-c462b8ae1b3e.png')" }}
      />

      {/* Chakra Points */}
      {chakraPoints.map((chakra) => (
        <motion.button
          key={chakra.name}
          className="absolute cursor-pointer z-20"
          style={{ 
            top: chakra.top,
            left: chakra.left,
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => setSelectedChakra(chakra)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChakraIcon
            chakraName={chakra.name}
            size={48}
            interactive={true}
            pulseIntensity={1.2}
          />
        </motion.button>
      ))}

      {/* Chakra Dialog */}
      <Dialog open={!!selectedChakra} onOpenChange={() => setSelectedChakra(null)}>
        <DialogContent className="max-w-2xl glass">
          <DialogHeader>
            <DialogTitle 
              className="text-2xl font-bold"
              style={{ color: selectedChakra?.color }}
            >
              {selectedChakra?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-foreground/90">{selectedChakra?.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Sacred Sound (Mantra)</h4>
                    <p className="text-lg font-medium">{selectedChakra?.mantra}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Element</h4>
                    <p>{selectedChakra?.element}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Qualities</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedChakra?.qualities.map((quality, index) => (
                        <li key={index}>{quality}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedChakra?.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
