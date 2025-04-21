import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full z-30 h-14 px-4 md:px-8 flex items-center justify-between backdrop-blur-md bg-[#f6d7d5]/30 rounded-xl shadow-md border border-[#f6d7d5]/40 mx-auto mt-3 max-w-[95%]">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/vedsatwa.png"
            alt="Vedsatwa Logo"
            className="h-8 w-auto drop-shadow"
            style={{ filter: "drop-shadow(0 3px 10px #f6d4d2)" }}
          />
        </Link>
      </div>
      <div />
    </header>
  );
}
