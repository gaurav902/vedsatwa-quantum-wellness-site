
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full z-30 bg-transparent py-4 px-4 md:px-10">
      <div className="flex flex-col items-center">
        <Link to="/" className="flex flex-col items-center gap-1">
          <img
            src="/lovable-uploads/vedsatwa.png"
            alt="Vedsatwa Logo"
            className="h-24 md:h-32 w-auto drop-shadow-lg transition-all duration-300"
            style={{ filter: 'drop-shadow(0 2px 20px #eee8)' }}
          />
          <span className="text-xl md:text-2xl font-semibold text-ayurveda-forest tracking-wide mt-1">Vedsatwa International</span>
        </Link>
      </div>
    </header>
  );
}
