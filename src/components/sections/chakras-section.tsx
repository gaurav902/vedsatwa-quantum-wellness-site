
import { motion } from "framer-motion";
import { ChakrasList } from "@/components/ui/chakra-list";

export function ChakrasSection() {
  return (
    <section id="chakras" className="py-16 md:py-20 relative overflow-hidden">
      {/* Chakra Image */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="section-title text-center mb-6 text-ayurveda-forest">The Seven Energy Centers</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img 
            src="/lovable-uploads/435fc680-dc1c-4896-b7e4-eee06dcb5b31.png" 
            alt="The 7 Chakras of the Human Body" 
            className="max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-xl rounded-lg"
          />
        </motion.div>
      </div>

      {/* Chakras List Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-bold text-center mb-8">Understanding the Seven Chakras</h3>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
              In ancient Vedic tradition, chakras are the energy centers within our bodies that influence our physical, 
              mental, and spiritual well-being. When these energy centers are balanced, we experience optimal health and vitality.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-sm mx-auto text-center mb-10">
              <p className="text-white/90 text-sm">
                <span className="font-bold block mb-1">Join Our Chakra Healing Workshop</span>
                30 MAY - 1 JUNE 2025
              </p>
            </div>

            <ChakrasList />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
