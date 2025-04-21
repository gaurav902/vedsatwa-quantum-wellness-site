import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/ui/booking-form";

export function CountdownTimer() {
  const [isOpen, setIsOpen] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2025-05-21T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const totalSeconds = Math.max(0, Math.floor(difference / 1000));
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-gray-800/80 rounded-lg p-4 w-20 sm:w-24">
      <div className="text-2xl sm:text-3xl font-bold text-white">{String(value).padStart(2, '0')}</div>
      <div className="text-xs sm:text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-900/95 border-none max-w-[90vw] sm:max-w-md w-full mx-2 sm:mx-0 p-4 sm:p-6 rounded-xl">
          <div className="text-center space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">LIMITED SEATS AVAILABLE</h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Reserve your spot before registration closes. Only a few seats remain.
            </p>

            <div className="flex flex-wrap justify-center gap-4 py-4">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>

            <Button 
              className="w-full bg-[#f6d4d2] text-black hover:bg-[#f6d4d2]/90 py-5 sm:py-6 text-base sm:text-lg"
              onClick={() => {
                setIsOpen(false);
                setShowBookingForm(true);
              }}
            >
              Reserve Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </>
  );
}
