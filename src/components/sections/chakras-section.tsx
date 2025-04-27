
import { ChakraIcon } from "@/components/ui/chakra-icon";

export function ChakrasSection() {
  const chakras = [
    { name: "root", title: "Root Chakra", description: "Affects your sense of security", color: "#FF0000" },
    { name: "sacral", title: "Sacral Chakra", description: "Impacts your ability to enjoy life", color: "#FF8C00" },
    { name: "solar", title: "Solar Plexus Chakra", description: "Governs confidence", color: "#FFFF00" },
    { name: "heart", title: "Heart Chakra", description: "Influences your relationships", color: "#00FF00" },
    { name: "throat", title: "Throat Chakra", description: "Affects communication", color: "#00BFFF" },
    { name: "third", title: "Third Eye Chakra", description: "Shapes your intuition", color: "#0000FF" },
    { name: "crown", title: "Crown Chakra", description: "Connects you to your spiritual self", color: "#9932CC" },
  ];

  return (
    <section id="chakras" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What Are Chakras?</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Chakras are energy hubs located throughout your body, each influencing various aspects of your life. 
          These energy centers in your body play a crucial role in your physical, emotional, and spiritual health. 💖
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {chakras.map((chakra) => (
            <div 
              key={chakra.name}
              className="p-6 rounded-xl glass hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <ChakraIcon 
                  chakraName={chakra.name as any} 
                  size={32} 
                  interactive={true} 
                />
                <h3 className="text-xl font-semibold">{chakra.title}</h3>
              </div>
              <p className="text-foreground/80">{chakra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
