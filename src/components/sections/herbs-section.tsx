
import { Plus } from "lucide-react";

const herbs = [
  {
    name: "BRAHMI",
    description: "Known as the herb of enlightenment, Brahmi enhances memory, concentration and cognitive function."
  },
  {
    name: "ASHWAGANDHA",
    description: "The ancient rejuvenating herb that balances the body's energy systems and strengthens the immune system."
  },
  {
    name: "SHANKHPUSHPI",
    description: "A powerful brain tonic that promotes mental clarity, calmness, and enhanced awareness."
  },
  {
    name: "TRIKATU",
    description: "A powerful blend of three spices that kindles digestive fire and clears energy channels in the body."
  }
];

export function HerbsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-ayurveda-forest to-[#f6d4d2] bg-clip-text text-transparent">
            ANCIENT AYURVEDIC WISDOM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the healing power of these sacred herbs, carefully selected to support your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {herbs.map((herb, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f6d4d2] to-black">
              <div className="aspect-square p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{herb.name}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-6 min-h-[200px]">
                <h4 className="text-[#f6d4d2] font-semibold mb-2">{herb.name}</h4>
                <p className="text-gray-300 text-sm">{herb.description}</p>
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#f6d4d2] flex items-center justify-center">
                  <Plus className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
