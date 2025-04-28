
import { ChakraVisualization } from "@/components/ui/chakra-visualization";
import { motion } from "framer-motion";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-20 relative overflow-hidden">
      {/* Natural Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ayurveda-cream via-white to-ayurveda-cream opacity-50" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-ayurveda-forest/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title text-center mb-8">The Seven Energy Centers</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-ayurveda-forest/80">
            Chakras are the vital energy centers of your body, acting as gateways between your physical and spiritual self. 
            Each chakra influences different aspects of your well-being, from your basic survival needs to your highest spiritual aspirations. 
            Explore each chakra to understand its unique role in your journey to wholeness. 🕉️
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover over each chakra point to discover its deeper meaning and how it influences your physical, emotional, and spiritual well-being. 
            Understanding and balancing these energy centers is key to achieving holistic wellness. ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
