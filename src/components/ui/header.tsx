
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full z-30 bg-transparent py-5 px-4 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/vedsatwa.png"
            alt="Vedsatwa Logo"
            className="h-14 w-auto md:h-16 drop-shadow"
            style={{ filter: 'drop-shadow(0 2px 10px #f6d4d2)' }}
          />
          {/* Optional: Project Name or other info */}
        </Link>
      </div>
      {/* Can add navigation or buttons here */}
      <div />
    </header>
  );
}
