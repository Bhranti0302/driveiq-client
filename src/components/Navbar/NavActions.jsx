import { useState } from "react";

import WishlistIcon from "../../assets/icons/Wishlist.svg";
import UserIcon from "../../assets/icons/user.svg";
import CartIcon from "../../assets/icons/Cart.svg";

const NavActions = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {/* Wishlist */}
      <a href="#">
        <img src={WishlistIcon} alt="Wishlist" className="h-10 w-10" />
      </a>

      {/* Cart */}
      <a href="#">
        <img src={CartIcon} alt="Cart" className="h-10 w-10" />
      </a>

      {/* Profile */}
      <div className="relative">
        <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <img src={UserIcon} alt="User" className="h-10 w-10" />
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 top-12 z-50 w-36 rounded-lg bg-white shadow-lg">
            <a href="/login" className="block px-4 py-3 hover:bg-gray-100">
              Login
            </a>

            <a href="/signup" className="block px-4 py-3 hover:bg-gray-100">
              Sign Up
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavActions;
