
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { ChakraIcon } from "@/components/ui/chakra-icon";

export function FooterSection() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-ayurveda-forest via-[#f6d4d2]/60 to-[#F2FCE2]/80 overflow-hidden">
      {/* Animated glassy/foggy effect with pink/green colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 w-full h-full animate-[background-pan_22s_linear_infinite] opacity-70"
          style={{
            background: "radial-gradient(circle at 40% 60%, #f6d4d2 30%, transparent 60%), radial-gradient(circle at 70% 20%, #F2FCE2 25%, transparent 70%)"
          }}>
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Glass info */}
          <div className="glass bg-white/60 backdrop-blur-2xl border border-[#f6d4d2]/60 rounded-2xl shadow-lg space-y-8 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ChakraIcon color="#f6d4d2" />
              <span className="text-xl font-semibold">Vedsatwa International</span>
            </div>
            <p className="text-ayurveda-forest/90 mb-6 max-w-md">
              Transform your life through ancient Ayurvedic wisdom and modern quantum healing techniques in a serene natural environment.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-3 transition-transform hover:translate-x-1">
                <Phone size={18} className="text-[#f6d4d2]" />
                <div>
                  <p>+91-9351994312, +91-9119295094</p>
                </div>
              </div>
              <div className="flex items-center gap-3 transition-transform hover:translate-x-1">
                <MapPin size={18} className="text-[#f6d4d2]" />
                <p>Jim Corbett National Park, Nainital, Uttarakhand</p>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink size={18} className="text-[#f6d4d2]" />
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <a href="https://www.vedsatwa.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#f6d4d2] transition-colors">www.vedsatwa.com</a>
                  <a href="https://www.tellmeindia.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#f6d4d2] transition-colors">www.tellmeindia.com</a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://wa.me/919351994312" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#f6d4d2] hover:bg-[#f6d4d2]/90 transition-colors py-3 px-6 rounded-full text-black font-medium w-fit"
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
          {/* Glass map */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f6d4d2]">Our Location</h3>
            <div className="glass h-72 shadow-lg border border-[#f6d4d2]/40 rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/60 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55809.21547038216!2d78.85899339371731!3d29.528268574398788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a24ffffffffff%3A0x3d784267f3577!2sJim%20Corbett%20National%20Park!5e0!3m2!1sen!2sin!4v1650442027315!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'blur(0.5px)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#f6d4d2]/20 text-center glass bg-white/70 backdrop-blur-2xl rounded-xl shadow-sm px-4">
          <p className="text-ayurveda-forest/80 text-sm">
            © {new Date().getFullYear()} Vedsatwa International. All rights reserved.
          </p>
          <p className="text-[#f6d4d2] text-sm mt-2">
            Proudly made by Team TellMeIndia with 💖
          </p>
        </div>
      </div>
    </footer>
  );
}

