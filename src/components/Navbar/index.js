import logo from "assets/logo.svg";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full box-border fixed top-0 right-0 left-0 z-[999] flex items-center 
                  justify-between px-4 md:px-[60px] 
                   transition-all duration-300 ease-in-out ${
                     isScrolled
                       ? "bg-white shadow-md py-3 md:py-4"
                       : "bg-[#e0e0e0]/50 py-4 md:py-6"
                   } `}
    >
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Univision Logo"
          className={`  ${
            isScrolled ? "w-[34px] md:w-[50px]" : "w-[40px] md:w-[60px]"
          }`}
        />
      </div>

      <div className="flex flex-row items-center gap-8 mr-4">
        <a
          href="#rav4"
          className="text-gray-600 text-[16px] md:text-[20px] hover:text-[#66BC46]"
        >
          3D tour
        </a>
        <a
          href="#slider"
          className="text-gray-600 text-[16px] md:text-[20px] hover:text-[#66BC46]"
        >
          Бэлэгнүүд
        </a>
        <a
          href="#video"
          className="text-gray-600 text-[16px] md:text-[20px] hover:text-[#66BC46]"
        >
          TVC
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
