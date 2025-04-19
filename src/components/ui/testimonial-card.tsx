
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  imageSrc?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  location,
  quote,
  imageSrc,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "glass p-6 rounded-2xl transition-all duration-300 h-full flex flex-col",
        className
      )}
    >
      <div className="mb-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-ayurveda-saffron opacity-70"
        >
          <path
            d="M10.667 13.333H5.33366C5.33366 8 10.667 6.66667 10.667 6.66667C10.667 6.66667 9.33366 10.6667 10.667 13.333Z"
            fill="currentColor"
          />
          <path
            d="M21.333 13.333H16C16 8 21.333 6.66667 21.333 6.66667C21.333 6.66667 20 10.6667 21.333 13.333Z"
            fill="currentColor"
          />
          <path
            d="M5.33366 13.333H10.667V24C10.667 25.333 9.33366 26.6667 8.00033 26.6667C6.66699 26.6667 5.33366 25.333 5.33366 24V13.333Z"
            fill="currentColor"
          />
          <path
            d="M16 13.333H21.333V24C21.333 25.333 20 26.6667 18.667 26.6667C17.333 26.6667 16 25.333 16 24V13.333Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="italic text-foreground/90 mb-4 flex-grow">{quote}</p>
      <div className="flex items-center mt-auto">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full mr-4 bg-ayurveda-sandalwood flex items-center justify-center text-white font-medium">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium text-ayurveda-forest">{name}</h4>
          <p className="text-sm text-foreground/70">{location}</p>
        </div>
      </div>
    </div>
  );
}
