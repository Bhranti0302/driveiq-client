import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NavActions from "./NavActions";

import MenuIcon from "../../assets/icons/menu_icon.svg";
import CloseIcon from "../../assets/icons/close_icon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <div className="hidden gap-10 lg:flex">
          <SearchBar />
          <NavActions />
        </div>

        {/* Mobile */}
        <div className="flex gap-6 lg:hidden">
          <SearchBar />
        </div>
        <div className="flex gap-2 lg:hidden">
          <NavActions />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl lg:hidden"
          >
            {isMenuOpen ? (
              <img src={CloseIcon} alt="menuIcon" className="w-10 h-10" />
            ) : (
              <img src={MenuIcon} alt="closeIcon" className="w-10 h-10" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 px-4 py-5 lg:hidden">
          <NavLinks />

          <div className="mt-5"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
