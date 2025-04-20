
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  preview: string;
  fullStory: string;
  author: string;
  authorDetails: string;
  imageSrc?: string;
  className?: string;
}

export function StoryCard({
  title,
  preview,
  fullStory,
  author,
  authorDetails,
  imageSrc,
  className,
}: StoryCardProps) {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <>
      <div
        className={cn(
          "glass p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full flex flex-col",
          className
        )}
      >
        <h3 className="text-xl font-semibold text-ayurveda-forest mb-3">{title}</h3>
        <div className="mb-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#f6d4d2] opacity-70"
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
        <p className="italic text-foreground/90 mb-4 flex-grow">{preview}</p>
        <button
          onClick={() => setShowFullStory(true)}
          className="text-[#f6d4d2] font-medium flex items-center hover:underline mt-4"
        >
          👉 Read More
        </button>
      </div>

      <Dialog open={showFullStory} onOpenChange={setShowFullStory}>
        <DialogContent className="glass max-w-2xl bg-white/95 border-[#f6d4d2]/30">
          <div className="p-2">
            <h2 className="text-2xl font-bold text-ayurveda-forest mb-6">{title}</h2>
            
            <div className="mb-6">
              <p className="text-foreground/90 leading-relaxed">{fullStory}</p>
            </div>
            
            <div className="flex items-center pt-4 border-t border-[#f6d4d2]/30">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={author}
                  className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-[#f6d4d2]/50"
                />
              ) : (
                <div className="w-12 h-12 rounded-full mr-4 bg-[#f6d4d2] flex items-center justify-center text-white font-medium">
                  {author.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="font-medium text-ayurveda-forest">{author}</h4>
                <p className="text-sm text-foreground/70">{authorDetails}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
