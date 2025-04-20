
import { useState } from 'react';
import { BookingForm } from "@/components/ui/booking-form";
import { Button } from "@/components/ui/button";

export function Timer() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="glass p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
      <div className="bg-[#f6d4d2] p-3 rounded-lg flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black w-6 h-6">
          <path d="M12 14v7"></path>
          <path d="M12 14v7"></path>
          <path d="M3 15v7"></path>
          <path d="M21 9V3"></path>
          <path d="M3 9V3"></path>
          <path d="M9 18h1"></path>
          <path d="M14 18h1"></path>
          <path d="M13 22H7"></path>
          <path d="M19 22h-2"></path>
          <path d="M3 3h18v6H3z"></path>
        </svg>
      </div>
      <div className="flex-grow">
        <p className="text-xl font-bold text-black">
          Reserve Your Spot Today
        </p>
      </div>
      <Button 
        className="bg-[#f6d4d2] text-black hover:bg-[#f6d4d2]/90 rounded-full"
        onClick={() => setShowBookingForm(true)}
      >
        Join Now
      </Button>
      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </div>
  );
}
