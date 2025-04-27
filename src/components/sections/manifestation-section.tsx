
import { Brain, Star } from "lucide-react";

export function ManifestationSection() {
  return (
    <section id="manifestation" className="py-20 bg-gradient-to-b from-ayurveda-forest/5 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">What is MANIFESTATION?</h2>
            <p className="text-lg mb-6">
              A practical approach to Law of attraction. Quantum field & Cosmics energy field is way to manifest your dream life.
            </p>
            <p className="text-lg mb-6">
              Here you will feel your power of Ancient indian DARSHANA & UPNISHADAS.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Brain className="text-ayurveda-saffron mt-1" size={24} />
                <p>Connect with the universal consciousness through ancient wisdom</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="text-ayurveda-saffron mt-1" size={24} />
                <p>Learn to harness the power of quantum field for manifestation</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-ayurveda-forest/20 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                alt="Manifestation Concept" 
                className="rounded-2xl relative z-10 object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
