
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
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-60 h-60 bg-ayurveda-sandalwood/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ChakraIcon className="mx-auto mb-4" />
          <h2 className="section-title mx-auto">About the Workshop</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 mt-4">
            A transformative 3-day immersive experience that combines ancient Ayurvedic wisdom with modern quantum healing techniques.
          </p>
        </div>
        
        <div className="glass p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-ayurveda-forest">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <CircleDot className="chakra-bullet" size={20} />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-ayurveda-forest/20 to-ayurveda-saffron/20 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Ayurvedic Healing" 
                  className="rounded-xl relative z-10 max-h-80 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ayurveda-saffron/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
