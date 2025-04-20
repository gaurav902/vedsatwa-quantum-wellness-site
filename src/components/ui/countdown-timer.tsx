
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function CountdownTimer() {
  const [isOpen, setIsOpen] = useState(true);
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
    <div className="bg-gray-800/80 rounded-lg p-4 w-24">
      <div className="text-3xl font-bold text-white">{String(value).padStart(2, '0')}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gray-900/95 border-none">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-2">LIMITED SEATS AVAILABLE</h2>
          <p className="text-gray-300">
            Reserve your spot before registration closes. Only a few seats remain.
          </p>
          
          <div className="flex justify-center gap-4 py-4">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>

          <Button 
            className="w-full bg-[#f6d4d2] text-black hover:bg-[#f6d4d2]/90 py-6 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Reserve Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
