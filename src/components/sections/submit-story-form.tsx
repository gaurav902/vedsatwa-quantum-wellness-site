
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabaseClient } from "@/integrations/supabase/client";

export function SubmitStoryForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    story: "",
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.story || !formData.consent) {
      toast({
        title: "Invalid submission",
        description: "Please fill in all required fields and consent to share your story.",
        variant: "destructive"
      });
      return;
    }

    if (formData.story.length < 200) {
      toast({
        title: "Story too short",
        description: "Your story should be at least 200 characters long.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to supabase edge function
      const response = await fetch(`${supabaseClient.supabaseUrl}/functions/v1/submit-story`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${supabaseClient.supabaseKey}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit story");
      }

      toast({
        title: "Story submitted successfully",
        description: "Thank you for sharing your Ayurvedic journey. We'll review your story for publishing.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        location: "",
        story: "",
        consent: false
      });
    } catch (error) {
      console.error("Error submitting story:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your story. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold text-ayurveda-forest mb-6">Share Your Ayurvedic Journey</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-foreground/90 mb-2">Full Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Priya Mehta"
            className="border-[#f6d4d2]/30 focus:border-[#f6d4d2] focus:ring-[#f6d4d2]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-foreground/90 mb-2">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., priya@example.com"
            className="border-[#f6d4d2]/30 focus:border-[#f6d4d2] focus:ring-[#f6d4d2]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-foreground/90 mb-2">
            Location (City, Country) <span className="text-foreground/60 text-sm">(optional)</span>
          </label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Mumbai, India"
            className="border-[#f6d4d2]/30 focus:border-[#f6d4d2] focus:ring-[#f6d4d2]"
          />
        </div>
        
        <div>
          <label htmlFor="story" className="block text-foreground/90 mb-2">Your Story</label>
          <Textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleChange}
            placeholder="Tell us how Ayurveda has impacted your health and well-being. Minimum 200 characters."
            className="border-[#f6d4d2]/30 focus:border-[#f6d4d2] focus:ring-[#f6d4d2] min-h-[200px]"
            required
          />
          <div className="mt-1 text-sm text-foreground/60">
            {formData.story.length < 200 ? (
              <span className="text-red-500">
                {200 - formData.story.length} more characters needed
              </span>
            ) : (
              <span className="text-green-600">✓ Minimum length reached</span>
            )}
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={handleConsentChange}
            className="mt-1 data-[state=checked]:bg-[#f6d4d2] data-[state=checked]:border-[#f6d4d2]"
          />
          <label htmlFor="consent" className="text-sm text-foreground/80">
            I allow this story to be featured publicly on the website.
          </label>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[#f6d4d2] hover:bg-[#f6d4d2]/90 text-black font-medium px-6 py-3 rounded-full"
        >
          🌿 Submit My Story
        </Button>
      </form>
    </div>
  );
}
