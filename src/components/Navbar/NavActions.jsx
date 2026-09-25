import { useState } from "react";
import { Link } from "react-router-dom";

import WishlistIcon from "../../assets/icons/Wishlist.svg";
import UserIcon from "../../assets/icons/user.svg";
import CartIcon from "../../assets/icons/Cart.svg";

const NavActions = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleNavigation = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Wishlist */}
      <Link to="/wishlist">
        <img src={WishlistIcon} alt="Wishlist" className="h-10 w-10" />
      </Link>

      {/* Cart */}
      <Link to="/cart">
        <img src={CartIcon} alt="Cart" className="h-10 w-10" />
      </Link>

      {/* Profile */}
      <div className="relative">
        <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <img src={UserIcon} alt="User" className="h-10 w-10" />
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 top-12 z-50 w-36 rounded-lg bg-white shadow-lg">
            <Link
              to="/login"
              onClick={handleNavigation}
              className="block px-4 py-3 hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={handleNavigation}
              className="block px-4 py-3 hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavActions;
