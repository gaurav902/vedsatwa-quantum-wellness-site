
import { ChakraVisualization } from "@/components/ui/chakra-visualization";
import { motion } from "framer-motion";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-20 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/ec40d8d3-ffb4-4e2a-a220-e2b748849608.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mb-8 text-white">The Seven Energy Centers</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-white/90">
            Explore the mystical energy centers of your body - the Chakras. Each center represents different aspects of your physical, 
            emotional, and spiritual well-being. Click on each chakra to discover its unique properties and significance in your journey 
            to wholeness. 🕉️
          </p>
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
