import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Cars from "../pages/Cars/Cars";
import AICompare from "../pages/AiCompare/AiCompare";
import DriveEssentials from "../pages/DriveEssentials/DriveEssentials";
import Services from "../pages/Services/Services";
import Brands from "../pages/Brands/Brands";

import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/ai-compare" element={<AICompare />} />
      <Route path="/drive-essentials" element={<DriveEssentials />} />
      <Route path="/services" element={<Services />} />
      <Route path="/brands" element={<Brands />} />

      {/* User */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default AppRoutes;
