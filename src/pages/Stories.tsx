
import { ChakraIcon } from "@/components/ui/chakra-icon";
import { StoryCard } from "@/components/ui/story-card";
import { SubmitStoryForm } from "@/components/sections/submit-story-form";
import { Link } from "react-router-dom";

const stories = [
  {
    title: "The Balance Within",
    preview: "After years of stress and imbalance, Ayurveda helped me rediscover inner peace through diet...",
    fullStory: "After years of stress and imbalance, Ayurveda helped me rediscover inner peace through diet, routine, and herbs. Following a Vata-pacifying regimen, I incorporated warm meals, regular sleep, and ashwagandha tea. Within weeks, my anxiety and insomnia eased naturally.",
    author: "Aanya R.",
    authorDetails: "34, Yoga Instructor"
  },
  {
    title: "Healing Through Nature",
    preview: "Ashwagandha and meditation changed the way I deal with anxiety. I feel grounded...",
    fullStory: "Ashwagandha and daily meditation reshaped my life. I went from panic attacks and overthinking to calm, steady energy. I follow a morning routine based on my dosha, and I've never felt more mentally clear.",
    author: "Siddharth P.",
    authorDetails: "28, Software Engineer"
  },
  {
    title: "Journey to Gut Health",
    preview: "Triphala cured my chronic digestion issues when nothing else worked...",
    fullStory: "Years of bloating, acidity, and poor digestion led me to try Triphala powder. Within a month, my digestion improved drastically. Now I follow a seasonal diet and avoid processed foods, guided by Ayurvedic principles.",
    author: "Meera S.",
    authorDetails: "42, Entrepreneur"
  },
  {
    title: "Skin Reborn",
    preview: "Turmeric and neem were my go-to treatments — no more chemicals...",
    fullStory: "Persistent acne and dry skin had plagued me for years. I ditched commercial products and followed a Neem + Turmeric routine suggested by an Ayurvedic practitioner. Along with detox teas, my skin transformed in 3 months.",
    author: "Rajiv M.",
    authorDetails: "31, Photographer"
  }
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header section */}
      <div className="bg-gradient-to-r from-ayurveda-forest/90 to-[#f6d4d2]/90 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-ayurveda-forest mb-12 flex items-center">
            <span className="text-[#f6d4d2] mr-2">📖</span> Featured Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, index) => (
              <StoryCard
                key={index}
                title={story.title}
                preview={story.preview}
                fullStory={story.fullStory}
                author={story.author}
                authorDetails={story.authorDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nature's wisdom quote */}
      <section className="py-12 px-4 bg-[#f6d4d2]/10">
        <div className="max-w-6xl mx-auto">
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
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
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
