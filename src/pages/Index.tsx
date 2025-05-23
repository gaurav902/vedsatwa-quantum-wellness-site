
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { DnaSection } from "@/components/sections/dna-section";
import { ChakrasSection } from "@/components/sections/chakras-section";
import { ManifestationSection } from "@/components/sections/manifestation-section";
import { LocationSection } from "@/components/sections/location-section";
import { FooterSection } from "@/components/sections/footer-section";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { CountdownTimer } from "@/components/ui/countdown-timer";

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
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-ayurveda-forest/90 to-black">
        <div className="flex flex-col items-center glass px-8 py-10 rounded-2xl border border-white/20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-[#f6d4d2]/30 border-t-[#f6d4d2] rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#f6d4d2]/10 rounded-full"></div>
            </div>
          </div>
          <p className="mt-6 text-[#f6d4d2] font-medium">Loading Vedsatwa Experience...</p>
          <p className="mt-2 text-white/70 text-sm">Chakra Healing Workshop • 30 MAY - 1 JUNE 2025</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed z-20 top-4 right-4">
        <Link 
          to="/stories" 
          className="bg-[#f6d4d2] text-black hover:bg-[#f6d4d2]/90 py-2 px-4 rounded-full text-sm font-medium flex items-center gap-1 shadow-md hover:shadow-lg transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/>
            <path d="M8 7h6"/>
            <path d="M8 11h8"/>
            <path d="M8 15h5"/>
          </svg>
          Success Stories
        </Link>
      </div>
      
      <CountdownTimer 
        targetDate="May 30, 2025" 
        eventTitle="Chakra Healing Workshop" 
      />
      <HeroSection />
      <DnaSection />
      <ChakrasSection />
      <ManifestationSection />
      <LocationSection />
      <FooterSection />
      <WhatsappFloat />
    </div>
  );
};

export default Index;
