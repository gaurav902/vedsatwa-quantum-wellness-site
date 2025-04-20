
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });
  const [seatsLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass p-4 rounded-xl flex items-center gap-4 max-w-md mx-auto">
      <div className="bg-[#f6d4d2] p-3 rounded-lg">
        <Clock className="text-black w-6 h-6" />
      </div>
      <div>
        <p className="text-xl font-bold text-black">
          Only {seatsLeft} seats remaining!
        </p>
        <p className="text-ayurveda-forest">
          Offer ends in: {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </p>
      </div>
    </div>
  );
};
