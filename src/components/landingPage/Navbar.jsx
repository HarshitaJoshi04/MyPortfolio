import { useContext, useState } from "react";
import NavLinks from "../navbarComponents/NavLinks";
import Themetoggle from "./Themetoggle/Themetoggle";
import { Theme } from "../themecontext/ThemeContext";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { FiMenu, FiX } from "react-icons/fi";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({ open, onClose }) => {
  const scrollTo = (id) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power3.inOut",
    });
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";
  return (
    <>
      <nav
        className={`fixed  ${theme} top-0 left-0 w-full text-black font-bold text-[19px]  z-50 flex p-4 justify-between`}
      >
        <Themetoggle />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <FiMenu size={28} />
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 pt-9   py-7 gap-2 text-black flex flex-col right-0   w-40 ${
          isDark ? "bg-[#dce9ee]" : "bg-blue-200"
        } z-50
   transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="px-3 py-1 hover:bg-white  hover:text-black  rounded"
          onClick={() => scrollTo("home")}
        >
          Home
        </button>

        <button
          className="px-3 py-1 hover:bg-white  hover:text-black rounded"
          onClick={() => scrollTo("about")}
        >
          About
        </button>

        <button
          className="px-3 py-1 hover:bg-white  hover:text-black  rounded"
          onClick={() => scrollTo("projects")}
        >
          Projects
        </button>

        <button
          className="px-3 py-1 hover:bg-white  hover:text-black  rounded"
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl absolute top-1 pt-3 right-5"
        >
          <FiX />
        </button>
      </div>
    </>
  );
};
export default Navbar;
