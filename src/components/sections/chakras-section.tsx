
import { ChakraVisualization } from "@/components/ui/chakra-visualization";
import { motion } from "framer-motion";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title text-center">What Are Chakras?</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Chakras are energy hubs located throughout your body, each influencing various aspects of your life. 
            These energy centers in your body play a crucial role in your physical, emotional, and spiritual health. 💖
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            Hover over each chakra point to learn more about its significance and how it influences your well-being.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
