
import { useState } from "react";
import { ChakraIcon } from "./chakra-icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ChakraPoint {
  name: string;
  title: string;
  description: string;
  color: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  mantra: string;
  element: string;
  qualities: string[];
  benefits: string[];
  sanskritName: string;
}

export function ChakraVisualization() {
  const [selectedChakra, setSelectedChakra] = useState<ChakraPoint | null>(null);

  const chakraPoints: ChakraPoint[] = [
    {
      name: "crown",
      sanskritName: "Sahasrara",
      title: "Crown Chakra (Sahasrara)",
      description: "The gateway to higher consciousness and spiritual connection",
      color: "#9932CC",
      position: { left: "15%", top: "15%" },
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
      sanskritName: "Ajna",
      title: "Third Eye Chakra (Ajna)",
      description: "The center of intuition and inner vision",
      color: "#0000FF",
      position: { right: "15%", top: "15%" },
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
      sanskritName: "Vishuddha",
      title: "Throat Chakra (Vishuddha)",
      description: "Expression and communication center",
      color: "#00BFFF",
      position: { left: "15%", top: "35%" },
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
      sanskritName: "Anahata",
      title: "Heart Chakra (Anahata)",
      description: "Center of love and compassion",
      color: "#00FF00",
      position: { right: "15%", top: "35%" },
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
      sanskritName: "Manipura",
      title: "Solar Plexus Chakra (Manipura)",
      description: "Power and self-confidence center",
      color: "#FFFF00",
      position: { left: "15%", top: "55%" },
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
      sanskritName: "Svadhishthana",
      title: "Sacral Chakra (Svadhishthana)",
      description: "Creativity and emotional center",
      color: "#FF8C00",
      position: { right: "15%", top: "55%" },
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
      sanskritName: "Muladhara",
      title: "Root Chakra (Muladhara)",
      description: "Foundation and grounding center",
      color: "#FF0000",
      position: { left: "45%", bottom: "10%" },
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
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-4xl mx-auto h-[700px] mb-8">
        {/* Meditation Figure */}
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/lovable-uploads/cff3fc06-4b57-47c0-bcf4-c462b8ae1b3e.png')" }}
        />

        {/* Chakra Points */}
        {chakraPoints.map((chakra) => (
          <motion.button
            key={chakra.name}
            className="absolute cursor-pointer z-20"
            style={{ 
              top: chakra.position.top,
              left: chakra.position.left,
              right: chakra.position.right,
              bottom: chakra.position.bottom,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setSelectedChakra(chakra)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-center">
              <ChakraIcon
                chakraName={chakra.name}
                size={48}
                interactive={true}
                pulseIntensity={1.2}
              />
              <span className="text-white text-xs mt-1 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                {chakra.sanskritName}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Chakra Description Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Understanding the Seven Chakras</h3>
            <p className="mb-4">
              In ancient Vedic tradition, chakras are the energy centers within our bodies that influence our physical, 
              mental, and spiritual well-being. When these energy centers are balanced, we experience optimal health and vitality.
            </p>
            <p>
              Click on each chakra symbol to learn more about its unique properties and how it affects your life journey. 
              Join our upcoming workshop to experience guided chakra healing and balancing techniques.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Chakra Dialog */}
      <Dialog open={!!selectedChakra} onOpenChange={() => setSelectedChakra(null)}>
        <DialogContent className="max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white">
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
              <p className="text-lg text-white/90">{selectedChakra?.description}</p>
              
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
