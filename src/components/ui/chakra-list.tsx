
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChakraIcon } from "@/components/ui/chakra-icon";

interface Chakra {
  name: string;
  sanskritName: string;
  color: string;
  element: string;
  location: string;
  mantra: string;
  description: string;
  benefits: string[];
}

export function ChakrasList() {
  const chakras: Chakra[] = [
    {
      name: "crown",
      sanskritName: "Sahasrara",
      color: "#9932CC", // Violet
      element: "Divine Consciousness",
      location: "Top of the head",
      mantra: "OM",
      description: "The Crown chakra represents your connection to the divine and higher consciousness. It governs spiritual awareness and enlightenment.",
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
      color: "#0000FF", // Indigo
      element: "Light",
      location: "Between the eyebrows",
      mantra: "OM",
      description: "The Third Eye chakra is the center of intuition and inner vision. It governs intuition, imagination, and clarity of thought.",
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
      color: "#00BFFF", // Blue
      element: "Ether",
      location: "Throat",
      mantra: "HAM",
      description: "The Throat chakra is the center of expression and communication. It governs self-expression, communication, and truth.",
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
      color: "#00FF00", // Green
      element: "Air",
      location: "Center of the chest",
      mantra: "YAM",
      description: "The Heart chakra is the center of love and compassion. It governs love, compassion, and emotional balance.",
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
      color: "#FFFF00", // Yellow
      element: "Fire",
      location: "Solar plexus",
      mantra: "RAM",
      description: "The Solar Plexus chakra is the center of personal power and self-confidence. It governs personal power, will, and confidence.",
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
      color: "#FF8C00", // Orange
      element: "Water",
      location: "Lower abdomen",
      mantra: "VAM",
      description: "The Sacral chakra is the center of creativity and emotions. It governs creativity, passion, and emotional well-being.",
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
      color: "#FF0000", // Red
      element: "Earth",
      location: "Base of spine",
      mantra: "LAM",
      description: "The Root chakra is the foundation and grounding center. It governs stability, security, and basic needs.",
      benefits: [
        "Feeling grounded",
        "Physical vitality",
        "Sense of security",
        "Material abundance"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {chakras.map((chakra) => (
          <AccordionItem 
            key={chakra.name} 
            value={chakra.name}
            className="backdrop-blur-md border border-white/10 mb-4 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline bg-black/20 text-white">
              <div className="flex items-center gap-3">
                <ChakraIcon chakraName={chakra.name} size={24} />
                <span className="font-medium text-lg">
                  {chakra.sanskritName} - {chakra.location}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-4 text-white/90">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">{chakra.description}</p>
                  
                  <div className="mb-4">
                    <span className="font-semibold block mb-1">Element:</span>
                    <span>{chakra.element}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold block mb-1">Sacred Sound:</span>
                    <span className="text-lg">{chakra.mantra}</span>
                  </div>
                </div>
                
                <div>
                  <span className="font-semibold block mb-2">Benefits:</span>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {chakra.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 p-3 bg-black/20 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold">Balance this chakra</span>: Join our workshop on May 23-25, 2025 to learn 
                      techniques for balancing and activating your {chakra.sanskritName} chakra.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
