
import { ChakraIcon } from "@/components/ui/chakra-icon";
import { StoryCard } from "@/components/ui/story-card";
import { SubmitStoryForm } from "@/components/sections/submit-story-form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Stories = () => {
  const [stories, setStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("stories")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) {
        setStories(data);
      }
      setIsLoading(false);
    };
    fetchStories();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="bg-gradient-to-r from-ayurveda-forest/90 to-[#f6d4d2]/90 text-white py-24 px-4 w-full relative overflow-hidden flex justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-8 text-white/90 hover:text-white transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <ChakraIcon color="#fff" size={28} />
            <h1 className="text-3xl md:text-4xl font-bold">
              Stories of Healing & Harmony
            </h1>
          </div>
          <p className="text-xl max-w-3xl">
            Real People. True Transformations. Inspired by Ayurveda.
          </p>
        </div>
      </div>

      {/* Featured stories */}
      <section className="py-20 px-4 w-full flex justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-ayurveda-forest mb-12 flex items-center">
            <span className="text-[#f6d4d2] mr-2">📖</span> Featured Stories
          </h2>

          {isLoading ? (
            <div className="text-center text-ayurveda-forest">Loading stories...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stories.map((story, idx) => (
                <StoryCard
                  key={story.id || idx}
                  title={story.name}
                  preview={story.story.substring(0, 90) + "..."}
                  fullStory={story.story}
                  author={story.name}
                  authorDetails={story.location || "Ayurvedic Enthusiast"}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Nature's wisdom quote */}
      <section className="py-12 px-4 bg-[#f6d4d2]/10 w-full flex justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            <div className="inline-block mb-4">
              <ChakraIcon size={32} className="text-[#f6d4d2]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ayurveda-forest mb-4">
              🌱 Nature's Wisdom
            </h2>
            <p className="text-xl max-w-3xl mx-auto italic">
              "Ayurveda nurtures the body by restoring balance — not by masking symptoms."
            </p>
          </div>
        </div>
      </section>

      {/* Submit story form */}
      <section className="py-20 px-4 w-full flex justify-center">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-ayurveda-forest mb-6 flex items-center">
            <span className="text-[#f6d4d2] mr-2">✍️</span> Submit Your Ayurvedic Journey
          </h2>
          <p className="text-lg mb-12">
            Your experience can be someone else's turning point.
            Share your story and let the healing continue.
          </p>

          <SubmitStoryForm />
          
          <div className="mt-8 p-4 bg-[#f6d4d2]/10 rounded-lg">
            <h3 className="font-semibold text-ayurveda-forest flex items-center mb-2">
              <span className="mr-2">📬</span> After Submission
            </h3>
            <p className="text-sm text-foreground/80">
              Your story will be sent to our team directly via email and reviewed for publishing.
              We may contact you for additional details or clarification if needed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
