
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { ChakraIcon } from "@/components/ui/chakra-icon";

export function FooterSection() {
  return (
    <footer className="bg-ayurveda-forest text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-ayurveda-saffron/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-ayurveda-sandalwood/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <ChakraIcon color="#FF9933" />
              <span className="text-xl font-semibold">Vedsatwa International</span>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Transform your life through ancient Ayurvedic wisdom and modern quantum healing techniques in a serene natural environment.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-ayurveda-saffron" />
                <div>
                  <p>+91-9351994312, +91-9119295094</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-ayurveda-saffron" />
                <p>Jim Corbett National Park, Nainital, Uttarakhand</p>
              </div>
              
              <div className="flex items-center gap-3">
                <ExternalLink size={18} className="text-ayurveda-saffron" />
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <a href="https://www.vedsatwa.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.vedsatwa.com</a>
                  <a href="https://www.tellmeindia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.tellmeindia.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-white/80 mb-6 text-center md:text-right">
              Have questions about the workshop? Reach out to us directly on WhatsApp for quick assistance.
            </p>
            
            <a 
              href="https://wa.me/919351994312" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors py-3 px-6 rounded-full"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-message-circle"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Chat Now on WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Vedsatwa International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
