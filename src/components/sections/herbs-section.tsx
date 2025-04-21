import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const herbs = [
  {
    name: "BRAHMI",
    description: "Known as the herb of enlightenment, Brahmi enhances memory, concentration and cognitive function.",
    detailedDescription: "Brahmi (Bacopa monnieri) is one of Ayurveda's most powerful brain tonics. It enhances cognitive function by improving nerve impulse transmission and has been used for thousands of years to support memory, focus, and longevity. Regular consumption of Brahmi helps balance the nervous system, reduce anxiety, and promote mental clarity. In traditional Ayurveda, it's classified as a Medhya Rasayana – an herb that rejuvenates the mind and intellect.",
    benefits: [
      "Enhances memory retention and recall",
      "Reduces anxiety and stress levels",
      "Improves focus and concentration",
      "Supports overall brain health and neuroplasticity",
      "Balances Vata and Pitta doshas"
    ],
    usage: "Typically consumed as a powder mixed with warm milk or honey, or as an herbal tea. Can also be applied as medicated oil for head massage."
  },
  {
    name: "ASHWAGANDHA",
    description: "The ancient rejuvenating herb that balances the body's energy systems and strengthens the immune system.",
    detailedDescription: "Ashwagandha (Withania somnifera) is considered one of the most powerful herbs in Ayurvedic healing. It's classified as an adaptogen, helping the body resist physiological and psychological stress. Known as 'Indian Ginseng', this herb has been used for over 3,000 years to promote energy, endurance and longevity while addressing conditions related to weakness and debility.",
    benefits: [
      "Reduces cortisol levels and stress",
      "Improves thyroid function",
      "Enhances physical strength and endurance",
      "Supports healthy sleep patterns",
      "Boosts immunity and vitality"
    ],
    usage: "Can be taken as a powder with warm milk and honey, or in capsule form. Often used in rejuvenating formulations for daily consumption."
  },
  {
    name: "SHANKHPUSHPI",
    description: "A powerful brain tonic that promotes mental clarity, calmness, and enhanced awareness.",
    detailedDescription: "Shankhpushpi (Convolvulus pluricaulis) is renowned in Ayurveda as a brain tonic that enhances all aspects of mental functioning. It's one of the prime Medhya Rasayanas (mind rejuvenators) that has been used for centuries to improve memory, intellect, and consciousness. Its name comes from its flower shape which resembles a conch shell (shankh).",
    benefits: [
      "Improves memory and concentration",
      "Alleviates mental fatigue",
      "Reduces anxiety and nervous tension",
      "Enhances meditation practices",
      "Promotes tranquility and mental balance"
    ],
    usage: "Traditionally consumed as a herbal tea or powder mixed with warm milk and honey. Also available in extract and capsule form."
  },
  {
    name: "TRIKATU",
    description: "A powerful blend of three spices that kindles digestive fire and clears energy channels in the body.",
    detailedDescription: "Trikatu is a potent Ayurvedic formulation combining equal parts of three powerful spices: black pepper (Piper nigrum), long pepper (Piper longum), and ginger (Zingiber officinale). The name literally means 'three pungents' in Sanskrit. Trikatu is highly regarded for its ability to kindle Agni (digestive fire) and clear Ama (toxins) from the system.",
    benefits: [
      "Enhances digestion and metabolism",
      "Clears respiratory congestion",
      "Improves absorption of nutrients and herbs",
      "Reduces Ama (toxins) in the system",
      "Balances Kapha dosha"
    ],
    usage: "Typically taken before meals as a powder with honey or warm water. Often used as a pre-treatment in panchakarma detoxification protocols."
  }
];

export function HerbsSection() {
  const [selectedHerb, setSelectedHerb] = useState<(typeof herbs)[0] | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f6d4d2]/30 via-white to-ayurveda-forest/10 relative">
      <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-[#f6d4d2]/30 via-[#F2FCE2]/30 to-ayurveda-forest/10 animate-[background-pan_10s_linear_infinite] rounded-3xl blur-3xl pointer-events-none"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-ayurveda-forest to-[#f6d4d2] bg-clip-text text-transparent drop-shadow">
            ANCIENT AYURVEDIC WISDOM
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience the healing power of these sacred herbs, carefully selected to support your spiritual journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {herbs.map((herb, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f6d4d2] to-ayurveda-forest/30 backdrop-blur-md border border-ayurveda-forest/15 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-square p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-ayurveda-forest">{herb.name}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 min-h-[200px] rounded-b-2xl shadow-sm">
                <h4 className="text-[#f6d4d2] font-semibold mb-2">{herb.name}</h4>
                <p className="text-ayurveda-forest text-sm">{herb.description}</p>
                <button 
                  className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#f6d4d2] flex items-center justify-center transition-transform hover:scale-110 border border-ayurveda-forest"
                  onClick={() => setSelectedHerb(herb)}
                  aria-label={`Learn more about ${herb.name}`}
                >
                  <Plus className="w-5 h-5 text-ayurveda-forest" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedHerb} onOpenChange={() => setSelectedHerb(null)}>
        <DialogContent className="glass max-w-2xl bg-gradient-to-br from-[#f6d4d2]/90 to-[#F2FCE2]/95 border-ayurveda-forest/20 text-ayurveda-forest backdrop-blur-md shadow-2xl">
          {selectedHerb && (
            <div className="p-2">
              <DialogTitle className="text-2xl font-extrabold text-ayurveda-forest text-center mb-4 tracking-widest drop-shadow">
                {selectedHerb.name}
              </DialogTitle>
              <div className="space-y-6">
                <p className="leading-relaxed font-serif text-lg">
                  {selectedHerb.detailedDescription}
                </p>
                <div>
                  <h4 className="text-[#f6d4d2] font-semibold mb-2">Key Benefits</h4>
                  <ul className="ml-5 space-y-2">
                    {selectedHerb.benefits.map((benefit, idx) => (
                      <li key={idx} className="list-disc text-ayurveda-forest font-medium">{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#f6d4d2] font-semibold mb-2">Traditional Usage</h4>
                  <p className="text-ayurveda-forest">{selectedHerb.usage}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f6d4d2]/30">
                  <p className="text-sm text-ayurveda-forest/60 italic">
                    "The intelligence of the body exists within each plant. Nature provides the perfect remedies for balance."
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
