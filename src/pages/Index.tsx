import { useState, useEffect } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { LocationSection } from "@/components/sections/location-section";
import { FooterSection } from "@/components/sections/footer-section";
import { WhatsappFloat } from "@/components/whatsapp-float";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-ayurveda-saffron/30 border-t-ayurveda-saffron rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-ayurveda-forest/10 rounded-full"></div>
            </div>
          </div>
          <p className="mt-4 text-ayurveda-forest font-medium">Loading Vedsatwa Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <FooterSection />
      <WhatsappFloat />
    </div>
  );
};

export default Index;
