
import { CircleDot } from "lucide-react";
import { ChakraIcon } from "@/components/ui/chakra-icon";

export function AboutSection() {
  const benefits = [
    "Experience inner healing and balance through ancient Ayurvedic practices",
    "Resolve emotional blockages and past traumas using quantum healing techniques",
    "Activate your Brahma-Vishnu-Mahesh powers for transformation",
    "Enhance mental clarity and spiritual awareness",
    "Learn practical techniques to apply in daily life",
    "Develop a personalized wellness routine based on your unique constitution",
    "Connect with like-minded individuals on a similar spiritual journey"
  ];

  return (
    <section id="about" className="py-20 px-4 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title mx-auto">About the Workshop</h2>
        <p className="max-w-2xl mx-auto text-foreground/80 mt-4">
          A transformative 3-day immersive experience that combines ancient Ayurvedic wisdom with modern quantum healing techniques.
        </p>
      </div>
      
      <div className="glass p-8 md:p-12 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-[#f6d4d2]/20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-ayurveda-forest font-serif">Key Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="benefit-item group p-4 rounded-lg transition-all duration-300 hover:bg-[#f6d4d2]/10 border border-transparent hover:border-[#f6d4d2]/20"
                >
                  <CircleDot className="text-[#f6d4d2] group-hover:scale-110 transition-transform" size={20} />
                  <p className="group-hover:text-ayurveda-forest font-serif">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f6d4d2]/20 to-[#f6d4d2]/30 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Ayurvedic Healing" 
                className="rounded-xl relative z-10 max-h-[500px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
