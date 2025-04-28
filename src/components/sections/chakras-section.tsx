
import { ChakraVisualization } from "@/components/ui/chakra-visualization";
import { motion } from "framer-motion";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/d31ba17c-7d18-4149-b19a-d7783433f89a.png')",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      
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
            emotional, and spiritual well-being. Hover over each chakra to discover its unique properties and significance in your journey 
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
