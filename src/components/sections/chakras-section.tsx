
import { ChakraVisualization } from "@/components/ui/chakra-visualization";
import { motion } from "framer-motion";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Mountain Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-30 dark:opacity-20"
        style={{ 
          backgroundImage: "url('/lovable-uploads/cff3fc06-4b57-47c0-bcf4-c462b8ae1b3e.png')",
          filter: "grayscale(0.5) brightness(1.2)"
        }}
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mb-8">The Seven Energy Centers</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
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
