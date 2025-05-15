
import { Brain, Star } from "lucide-react";
import { motion } from "framer-motion";

export function ManifestationSection() {
  return (
    <section id="manifestation" className="py-20 bg-gradient-to-b from-ayurveda-forest/5 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="section-title">What is MANIFESTATION?</h2>
            <p className="text-lg mb-6 glass p-4 rounded-xl">
              A practical approach to Law of attraction. Quantum field & Cosmics energy field is way to manifest your dream life.
            </p>
            <p className="text-lg mb-6 glass p-4 rounded-xl">
              Here you will feel your power of Ancient indian DARSHANA & UPNISHADAS.
            </p>
            <div className="flex flex-col gap-4">
              <motion.div 
                className="flex items-start gap-3 glass p-4 rounded-xl group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <Brain className="text-ayurveda-saffron mt-1 group-hover:scale-110 transition-transform" size={24} />
                <p>Connect with the universal consciousness through ancient wisdom</p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 glass p-4 rounded-xl group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <Star className="text-ayurveda-saffron mt-1 group-hover:scale-110 transition-transform" size={24} />
                <p>Learn to harness the power of quantum field for manifestation</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-ayurveda-forest/20 via-ayurveda-saffron/20 to-ayurveda-forest/20 rounded-2xl"
                animate={{ 
                  rotate: [0, -3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/lovable-uploads/meni.png"
                  alt="Manifestation Concept" 
                  className="rounded-2xl object-cover w-full h-[400px] shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
