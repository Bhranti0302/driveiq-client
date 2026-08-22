const NavLinks = () => {
  const links = [
    "Home",
    "Cars",
    "AI Compare",
    "Brands",
    "Drive Essentials",
    "Services",
    "About",
    "Contact",
  ];
  return (
    <div className="flex flex-col gap-5 lg:flex-row items-center lg:gap-6">
      {links.map((link) => (
        <a
          href="#"
          key={link}
          className="group relative text-base font-medium text-gray-800 transition-colors duration-300 hover:text-[#6155F5]"
        >
          {link}
          <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-[#6155F5] transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
