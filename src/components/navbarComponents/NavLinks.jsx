import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavLinks = () => {
  const scrollTo = (id) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="flex flex-wrap gap-1 items:center text-center justify-center lg:gap-8 border border-gray-800/50 px-4 py-2 rounded-full">
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
    </div>
  );
};

export default NavLinks;
