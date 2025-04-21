
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/ui/booking-form";

export function CountdownTimer() {
  const [isOpen, setIsOpen] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59, days: prev.days };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-gray-800/80 rounded-lg p-2 w-14 sm:p-3 sm:w-20 md:p-4 md:w-24 flex flex-col items-center">
      <div className="text-lg sm:text-xl md:text-3xl font-bold text-white">{String(value).padStart(2, '0')}</div>
      <div className="text-xs sm:text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="fixed inset-x-0 mx-auto z-50 bg-white/70 border-none max-w-lg w-[90vw] rounded-3xl shadow-2xl p-0 overflow-hidden relative flex items-center justify-center backdrop-blur-xl">
          <DialogTitle className="sr-only">Limited Seats Available</DialogTitle>
          {/* Enhanced cloudy background overlays */}
          <div className="absolute inset-0 z-0 bg-white/50 backdrop-blur-xl" />
          <div className="absolute -bottom-10 left-10 w-64 h-24 bg-[#dde2ed]/70 rounded-full blur-3xl opacity-40"/>
          <div className="absolute -top-12 -right-10 w-48 h-20 bg-[#bccbde]/50 rounded-full blur-3xl opacity-40"/>
          <div className="absolute bottom-10 right-6 w-40 h-16 bg-[#e7eaef]/60 rounded-full blur-2xl opacity-30"/>
          <div className="absolute top-5 left-10 w-32 h-12 bg-[#d4e0f0]/40 rounded-full blur-xl opacity-30"/>
          
          <div className="relative z-10 w-full">
            <div className="text-center px-4 py-5 sm:py-7 md:py-10 space-y-3 sm:space-y-5 md:space-y-7">
              <h2 className="text-xl sm:text-2xl font-semibold text-ayurveda-forest mb-1 sm:mb-2">LIMITED SEATS AVAILABLE</h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-xs mx-auto">
                Reserve your spot before registration closes. Only a few seats remain.
              </p>
              <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 py-2 sm:py-3 md:py-4">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <TimeBox value={timeLeft.seconds} label="Seconds" />
              </div>
              <Button 
                className="w-full bg-[#f6d4d2] text-black hover:bg-[#f6d4d2]/90 py-2 sm:py-3 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-full"
                onClick={() => {
                  setIsOpen(false);
                  setShowBookingForm(true);
                }}
              >
                Reserve Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </>
  );
}
