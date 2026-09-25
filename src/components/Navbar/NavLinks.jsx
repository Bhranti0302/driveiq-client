import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "AI Compare", path: "/ai-compare" },
    { name: "Brands", path: "/brands" },
    { name: "Drive Essentials", path: "/drive-essentials" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col gap-5 lg:flex-row items-center lg:gap-6">
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.name}
          className="group relative text-base font-medium text-gray-800 transition-colors duration-300 hover:text-[#6155F5]"
        >
          {link.name}

          <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-[#6155F5] transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
