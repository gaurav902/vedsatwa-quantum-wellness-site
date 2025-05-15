
import { useState } from "react";
import { ChakraIcon } from "@/components/ui/chakra-icon";
import { BookingForm } from "@/components/ui/booking-form";
import { FloatingLeaf } from "@/components/ui/floating-leaf";
import { ArrowDown } from "lucide-react";
import logo from "/lovable-uploads/vedsatwa.png";
import { motion } from "framer-motion";

export function HeroSection() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-ayurveda-forest/5 via-[#f6d4d2]/5 to-background pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ayurveda-saffron/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ayurveda-forest/10 rounded-full blur-3xl"></div>
        <FloatingLeaf color="#4CAF50" size={20} delay={0} duration={15} />
        <FloatingLeaf color="#8BC34A" size={16} delay={2} duration={17} />
        <FloatingLeaf color="#2A5934" size={24} delay={4} duration={20} />
        <FloatingLeaf color="#FF9933" size={18} delay={6} duration={18} />
        <FloatingLeaf color="#D2B48C" size={22} delay={8} duration={16} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex justify-center lg:justify-start mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={logo} alt="Vedsatwa Logo" className="h-24 md:h-28" />
            </motion.div>

            <motion.div 
              className="inline-flex items-center gap-2 mb-6 bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ChakraIcon color="#f6d4d2" />
              <span className="text-sm font-medium text-ayurveda-forest">Vedsatwa International</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ayurveda-forest leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Learn to Live a Best Version of Life
            </motion.h1>

            <motion.p 
              className="text-lg text-foreground/80 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Are you struggling with tiredness, anger, depression, anxiety, conflicts, stress, uncertainty, loop of failures or a sense of disconnection? 😕
            </motion.p>

            <motion.p 
              className="text-lg text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              The answer might lie within you—more specifically, in your DNA, CHAKRAS, SUB CONSCIOUSNESS.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.button
                onClick={() => setShowBookingForm(true)}
                className="relative overflow-hidden group bg-[#f6d4d2] text-black font-medium px-8 py-4 rounded-full shadow-lg 
                hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join the 3-Day Workshop</span>
                <div className="absolute inset-0 bg-gradient-to-r from-ayurveda-saffron/20 to-ayurveda-forest/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.button>

              <motion.div 
                className="flex items-center glass p-4 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-right mr-3">
                  <span className="text-sm text-foreground/70 line-through">₹21,000</span>
                  <div className="text-xl font-bold text-ayurveda-forest">₹9,000</div>
                </div>
                <div className="bg-[#f6d4d2] text-black text-xs font-bold px-2 py-1 rounded">
                  57% OFF
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-ayurveda-saffron/20 to-ayurveda-forest/20 rounded-2xl"
                animate={{ rotate: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <div className="glass p-1 rounded-2xl relative">
                <img
                  src="/lovable-uploads/druvsingh.png"
                  alt="Dr. UV Singh"
                  className="rounded-xl h-70 w-full object-cover"
                />
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 glass p-4 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <h3 className="font-bold text-ayurveda-forest">Dr. UV Singh</h3>
                  <p className="text-sm text-foreground/80">
                    M.Sc, P.hd Ayurveda, MARMA & Neurophysiology Coach
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#dna"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#f6d4d2]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm mb-2">Learn More</span>
        <ArrowDown size={20} />
      </motion.a>

      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </section>
  );
}
