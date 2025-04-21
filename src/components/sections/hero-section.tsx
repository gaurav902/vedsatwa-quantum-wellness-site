import { useState } from "react";
import { ChakraIcon } from "@/components/ui/chakra-icon";
import { BookingForm } from "@/components/ui/booking-form";
import { FloatingLeaf } from "@/components/ui/floating-leaf";
import { ArrowDown } from "lucide-react";
import logo from "/public/lovable-uploads/vedsatwa.png";

export function HeroSection() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-ayurveda-forest/10 to-[#f6d4d2]/10 pt-14">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Vedsatwa Logo" className="h-16 md:h-20" />
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-ayurveda-saffron/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-ayurveda-forest/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingLeaf color="#4CAF50" size={20} delay={0} duration={15} />
        <FloatingLeaf color="#8BC34A" size={16} delay={2} duration={17} />
        <FloatingLeaf color="#2A5934" size={24} delay={4} duration={20} />
        <FloatingLeaf color="#FF9933" size={18} delay={6} duration={18} />
        <FloatingLeaf color="#D2B48C" size={22} delay={8} duration={16} />
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
            <ChakraIcon color="#f6d4d2" />
              <span className="text-sm font-medium text-ayurveda-forest">Vedsatwa International</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ayurveda-forest leading-tight mb-6">
              Learn to Live a Best Version of Life
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
              Activate your success code & money code through DNA, Chakras & Subconscious Quantum Healing
            </p>
            
            
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-8">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-[#f6d4d2] text-black font-medium px-6 py-3 rounded-full shadow-lg 
                hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              >
                Join the 3-Day Workshop
              </button>
              
              <div className="flex items-center bg-white/30 px-4 py-3 rounded-xl backdrop-blur-sm">
                <div className="text-right mr-3">
                  <span className="text-sm text-foreground/70 line-through">₹21,000</span>
                  <div className="text-xl font-bold text-ayurveda-forest">₹9,000</div>
                </div>
                <div className="bg-[#f6d4d2] text-black text-xs font-bold px-2 py-1 rounded">
                  57% OFF
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-ayurveda-saffron/20 to-ayurveda-forest/20 rounded-2xl transform rotate-6"></div>
              <div className="glass p-1 rounded-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                  alt="Dr. UV Singh" 
                  className="rounded-xl h-80 w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold text-ayurveda-forest">Dr. UV Singh</h3>
                  <p className="text-sm text-foreground/80">Neuro Psychology Coach, Ph.D. in Ayurveda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#f6d4d2]"
      >
        <span className="text-sm mb-2">Learn More</span>
        <ArrowDown size={20} />
      </a>

      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </section>
  );
}
