import { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import bag from "../../assets/icons/bag.png";
import flowericon from "../../assets/navicon/flowericon.png";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Plants Types", href: "#", hasDropdown: true },
  { name: "More", href: "#" },
  { name: "Contact", href: "#" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white py-4 relative z-[100]">
      <div className="mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
            <img src={flowericon} alt="FloraVision Logo" />
          </div>
          <h1 className="text-lg sm:text-xl lg:text-[28px] font-black opacity-75">
            FloraVision.
          </h1>
        </div>

        {/* Center - Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-18 font-indie-flower text-lg xl:text-[24px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-green-400 transition-colors flex items-center gap-2"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={18} fill="white" />}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-12">
          <button className="">
            <Search size={28} className="opacity-75" />
          </button>
          <button className=" opacity-75 scale-90">
            <img src={bag} alt="shopping-bag" />
          </button>

          <div className="lg:flex hidden opacity-75  flex-col gap-1.5 w-7 items-end">
            <div className="h-1 rounded-full bg-white w-full"></div>
            <div className="h-1 rounded-full bg-white w-5"></div>
          </div>

          {/* Menu button */}
          <button
            className="lg:hidden hover:text-green-400 transition-all active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={32} />
            ) : (
              <div className="flex  opacity-75 flex-col gap-1.5 w-7 items-end">
                <div className="h-1 rounded-full bg-white w-full"></div>
                <div className="h-1 rounded-full bg-white w-5"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          absolute top-full right-0 mt-2 w-64 blur-style border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 origin-top-right
          ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          lg:hidden
        `}
      >
        <div className="flex flex-col p-4 gap-4 font-indie-flower text-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

