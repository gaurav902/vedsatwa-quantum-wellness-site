
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Ananya Sharma",
      location: "Delhi, India",
      quote: "The workshop was transformative. Dr. Singh's techniques helped me overcome anxiety and discover my life's purpose. The quantum healing sessions were especially powerful."
    },
    {
      name: "Rajiv Mehta",
      location: "Mumbai, India",
      quote: "I've attended many spiritual workshops, but this one was truly unique. The combination of Ayurvedic wisdom and quantum energy work created deep shifts in my consciousness."
    },
    {
      name: "Priya Patel",
      location: "Bangalore, India",
      quote: "After the workshop, I experienced significant improvements in my relationships and career. The subconscious detox techniques helped me release old patterns that were holding me back."
    },
    {
      name: "Arjun Desai",
      location: "Pune, India",
      quote: "The location was perfect for inner work. Being surrounded by nature while learning these ancient techniques amplified the healing experience. I recommend this to anyone seeking genuine transformation."
    },
    {
      name: "Kavita Reddy",
      location: "Hyderabad, India",
      quote: "Dr. Singh has a gift for explaining complex concepts in accessible ways. I left with practical tools that I've integrated into my daily life, and the results have been remarkable."
    }
  ];

  useEffect(() => {
    // Create a more elegant entrance animation when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section is visible
            entry.target.classList.add('animate-fade-in');
            // Start the testimonial rotation
            const interval = setInterval(() => {
              nextCard();
            }, 5000);
            
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
    setCurrentIndex(index);
  };

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToCard(newIndex);
  };

  return (
    <section id="testimonials" className="py-20 px-4 scroll-mt-16 transition-all duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto animate-enter">Success Stories</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hear from those who have experienced profound transformation through our workshops.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[300px] md:min-w-[400px] snap-center transition-all duration-500"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote}
                  className={currentIndex === index 
                    ? "scale-105 shadow-xl bg-white/10 backdrop-blur-sm" 
                    : "opacity-70 hover:opacity-90 hover:scale-102 transition-all"}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={prevCard}
              className="p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-ayurveda-saffron/20 transition-colors transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="text-ayurveda-forest" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? "bg-ayurveda-saffron scale-125" 
                      : "bg-ayurveda-saffron/30 hover:bg-ayurveda-saffron/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCard}
              className="p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-ayurveda-saffron/20 transition-colors transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="text-ayurveda-forest" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
