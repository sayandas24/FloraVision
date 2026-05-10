import { Search,  ChevronDown } from "lucide-react";
import bag from '../../assets/icons/bag.png'
import flowericon from '../../assets/navicon/flowericon.png'

const Navbar = () => {
  return (
    <nav className="] text-white py-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-16">
            <img src={flowericon} alt="FloraVision Image" />
          </div>
          <h1 className="text-[28px] font-black opacity-75">FloraVision.</h1>
        </div>

        {/* Center - Navigation Links */}
        <div className="items-center flex gap-18 font-indie-flower text-[24px]">
          <a href="#" className="hover:text-green-400">
            Home
          </a>
          <button className="flex items-center gap-1 hover:text-green-400">
            Plants Types
            <ChevronDown size={18} />
          </button>
          <a href="#" className="hover:text-green-400">
            More
          </a>
          <a href="#" className="hover:text-green-400">
            Contact
          </a>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-12">
          <button
            className="hover:text-green-400"
            aria-label="Search"
          >
            <Search size={28} className="opacity-75"/>
          </button>
          <button
            className="hover:text-green-400 opacity-75 scale-90"
            aria-label="Shopping bag"
          >
            <img src={bag} alt="shopping-bag" />
          </button>
          <button
            className="hover:text-green-400"
            aria-label="Menu"
          > 
            <div className="flex flex-col gap-1.5 w-7 items-end">
              <div className="h-1 rounded-full bg-white w-full"></div>
              <div className="h-1 rounded-full bg-white w-5"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
