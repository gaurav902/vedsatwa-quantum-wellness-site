import { useState } from "react";
import { MapPin } from "lucide-react";
import { BookingForm } from "@/components/ui/booking-form";

export function LocationSection() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  return (
    <section id="location" className="py-20 px-4 relative bg-gradient-to-b from-background to-ayurveda-sandalwood/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#F6D4D2] text-ayurveda-forest px-4 py-1 rounded-full text-sm font-medium mb-4">
            Join Us in Nature's Paradise
          </span>
          <h2 className="section-title mx-auto">Location & Dates</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="glass p-1 rounded-2xl overflow-hidden">
              <div className="relative h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Jim Corbett National Park" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={20} className="text-ayurveda-saffron" />
                    <span className="font-medium">Jim Corbett National Park</span>
                  </div>
                  <h3 className="text-2xl font-bold">Nainital, Uttarakhand</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-ayurveda-forest mb-4">
              Experience Transformation in the Lap of Nature
            </h3>
            
            <p className="text-foreground/80 mb-6">
              Immerse yourself in the serene beauty of Jim Corbett National Park. The workshop will be held in a peaceful retreat center surrounded by lush forests and the majestic Himalayan foothills.
            </p>
            
            <div className="glass p-6 mb-8">
              <h4 className="font-semibold text-ayurveda-forest mb-3">Workshop Schedule</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-medium min-w-[80px]">Dates:</span>
                  <span>May 23-25, 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-medium min-w-[80px]">Duration:</span>
                  <span>3 days (9:00 AM - 5:00 PM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-medium min-w-[80px]">Includes:</span>
                  <span>All workshop materials, lunch, and refreshments</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="ayurveda-btn bg-[#F6D4D2] text-black"
              >
                Book Your Spot Now
              </button>
              
              <div className="flex items-center bg-white/30 px-4 py-3 rounded-xl backdrop-blur-sm">
                <div className="text-right mr-3">
                  <span className="text-sm text-foreground/70 line-through">₹21,000</span>
                  <div className="text-xl font-bold text-ayurveda-forest">₹9,000</div>
                </div>
                <div className="bg-[#F6D4D2] text-black text-xs font-bold px-2 py-1 rounded">
                  57% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </section>
  );
}
