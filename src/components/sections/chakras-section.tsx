
import { ChakraVisualization } from "@/components/ui/chakra-visualization";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-20 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/66e1fc90-05aa-42d6-8e8b-8865e1dabad4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 backdrop-blur-[2px]" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="section-title text-center mb-6 text-white">The Seven Energy Centers</h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto text-white/90">
            Explore the mystical energy centers of your body - the Chakras. Each center represents different aspects of your physical, 
            emotional, and spiritual well-being. Click on each chakra to discover its unique properties and significance in your journey 
            to wholeness. 🕉️
          </p>

          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <CardContent className="p-4">
              <p className="text-white/90 text-center text-sm">
                <span className="font-bold block mb-1">Join Our Chakra Healing Workshop</span>
                23, 24, 25 MAY 2025
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <ChakraVisualization />
        </motion.div>
      </div>
    </section>
  );
}
