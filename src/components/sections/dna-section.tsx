
import { Dna } from "lucide-react";

export function DnaSection() {
  return (
    <section id="dna" className="py-20 bg-gradient-to-b from-background to-ayurveda-forest/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">What is DNA?</h2>
            <p className="text-lg mb-6">
              DNA is the base and information coding of our body in the form of genetic code coming from our family tree history.
            </p>
            <p className="text-lg mb-6">
              An interesting fact derived by a modern science branch EPIGENETICS: According to it, DNA can be changed by our:
            </p>
            <ul className="space-y-4">
              {["Life style", "Food habits", "Music", "Magnetic field", "Frequency"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Dna className="text-ayurveda-saffron" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg mt-6">
              You will feel some magical session to detox your DNA with disruptive frequencies and filling with new frequency which you can feel the change within time.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-ayurveda-saffron/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/DNA.png"
                alt="DNA Representation" 
                className="rounded-2xl relative z-10 object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
