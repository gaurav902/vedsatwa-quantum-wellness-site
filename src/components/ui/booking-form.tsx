
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { X } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You would typically send this data to a server
    onClose();
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
            />
          </div>
          <Button
            type="submit"
            className="w-full ayurveda-btn mt-6"
          >
            Secure Your Spot Now
          </Button>
        </form>
      </div>
    </div>
  );
}
