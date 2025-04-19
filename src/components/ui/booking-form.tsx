
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface BookingFormProps {
  onClose: () => void;
}

export function BookingForm({ onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the Supabase Edge Function to submit the booking and send email
      const { data, error } = await supabase.functions.invoke('submit-booking', {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || "Failed to submit booking");
      }

      // Show success message
      toast.success("Booking submitted successfully! We'll contact you soon.");
      
      // Close the form after success
      onClose();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : "Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="glass p-6 md:p-8 w-full max-w-md relative z-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-foreground/80 hover:text-foreground"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-semibold mb-6 text-ayurveda-forest">
          Book Your Slot
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/50"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/50"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-white/50"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any questions or special requirements?"
              value={formData.message}
              onChange={handleChange}
              className="bg-white/50 min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            className="w-full ayurveda-btn mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Secure Your Spot Now"}
          </Button>
        </form>
      </div>
    </div>
  );
}
