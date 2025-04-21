
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
    <div className="bg-gray-800/80 rounded-lg p-3 w-16 sm:p-4 sm:w-24 flex flex-col items-center">
      <div className="text-xl sm:text-3xl font-bold text-white">{String(value).padStart(2, '0')}</div>
      <div className="text-xs sm:text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white/60 border-none max-w-lg w-[95vw] sm:w-[90vw] rounded-3xl shadow-2xl p-0 overflow-hidden relative flex items-center justify-center">
          {/* Cloudy background overlays */}
          <div className="absolute inset-0 z-0 bg-white/30 backdrop-blur-2xl" />
          <div className="absolute -bottom-6 left-6 w-60 h-20 bg-[#dde2ed]/70 rounded-full blur-2xl opacity-40"/>
          <div className="absolute -top-7 -right-8 w-44 h-16 bg-[#bccbde]/50 rounded-full blur-2xl opacity-30"/>
          <div className="relative z-10 w-full">
            <div className="text-center px-4 py-7 sm:py-10 space-y-5 sm:space-y-7">
              <h2 className="text-2xl font-semibold text-ayurveda-forest mb-2">LIMITED SEATS AVAILABLE</h2>
              <p className="text-gray-700 text-sm sm:text-base max-w-xs mx-auto">
                Reserve your spot before registration closes. Only a few seats remain.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4 py-2 sm:py-4">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <TimeBox value={timeLeft.seconds} label="Seconds" />
              </div>
              <Button 
                className="w-full bg-[#f6d4d2] text-black hover:bg-[#f6d4d2]/90 py-3 sm:py-6 text-base sm:text-lg font-semibold rounded-full"
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
