
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full z-30 bg-transparent py-6 px-4 md:px-10 flex flex-col items-center">
      <Link to="/" className="flex flex-col items-center gap-2">
        <img
          src="/lovable-uploads/vedsatwa.png"
          alt="Vedsatwa Logo"
          className="h-20 md:h-28 w-auto drop-shadow-lg transition-all duration-300"
          style={{ filter: 'drop-shadow(0 2px 20px #eee8)' }}
        />
        <span className="text-xl md:text-2xl font-semibold text-ayurveda-forest tracking-wide mt-2">Vedsatwa International</span>
      </Link>
    </header>
  );
}
