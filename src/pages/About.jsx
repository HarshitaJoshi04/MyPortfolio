import React, { useContext } from "react";
import { Theme } from "../components/themecontext/ThemeContext";
import H1 from "../components/headingAnimation/H1";
import HeroText from "../components/landingPage/HeroText";
import Para from "../components/About/Para";
import gif from "../assets/web-design.gif"
const About = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Content */}
      <section
        id="about"
        className="relative z-10 flex items-center justify-center h-full w-full text-white text-4xl font-bold"
      >
        <div
          className={`w-[90%] max-w-7xl flex backdrop-blur-md flex-col p-5 lg:flex-row rounded items-center justify-between gap-13 border ${
            isDark
              ? "bg-white border-white/7"
              : "bg-white border-gray-200 shadow-2xl"
          }`}
        >
          <div className="w-full top-[5%] lg:w-1/2 flex flex-wrap flex-col lg:items-start text-center lg:text-left  lg:px-7 gap-7">
            <div className="flex flex-col gap-8 lg:p-12 p-1">
              <H1
                text="About Me"
                duration={0.7}
                delay={0}
                isDark={isDark}
                stagger={0.2}
              />
              <Para isDark={isDark}/>
            </div>
          </div>
                  <div className="w-full top-[5%] lg:w-1/2 flex flex-wrap flex-col lg:items-start text-center ">
          <img src={gif} alt="" />
        </div>
        </div>

      </section>
    </div>
  );
};

export default About;
