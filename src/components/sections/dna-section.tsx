
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
                src="https://sdmntprwestus.oaiusercontent.com/files/00000000-22d0-6230-9724-7c9ba58df5f7/raw?se=2025-05-15T07%3A58%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=ea1de0bc-0467-43d6-873a-9a5cf0a9f835&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T06%3A31%3A55Z&ske=2025-05-16T06%3A31%3A55Z&sks=b&skv=2024-08-04&sig=b6l22phqgl%2BJ2EOZyFuEPLDWFKyOt3HJXygGNBN8A4s%3D"
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
