import React, { useContext } from "react";
import Orb from "../components/landingPage/Orb";
import profileImg from "../assets/img2.png";
import HeroText from "../components/landingPage/HeroText";
import { Theme } from "../components/themecontext/ThemeContext";
import Icons from "../components/icons/Icons";
import H1 from "../components/headingAnimation/H1";

const Home = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div className={`relative w-full min-h-screen
`}>
      <section
        id="home"
        className={`relative z-10 lg:top-[10%] md:top-[20%] sm:top=[12%]  flex items-center justify-center h-full w-full font-bold ${
          isDark ? "text-gray-800" : "text-gray-900"
        }`}
      >
        <div
          className={`w-[90%] max-w-7xl flex backdrop-blur-md flex-col p-5 lg:flex-row rounded items-center justify-between gap-10 border ${
            isDark
              ? "bg-white border-white/7"
              : "bg-white border-gray-200 shadow-2xl"
          }`}
        >
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left  lg:px-7 gap-7">
            <div className="flex flex-col gap-3">
              <HeroText />

              <H1
                text="Creative Frontend Engineer"
                duration={0.6}
                delay={2.2}
                isDark={isDark}
                stagger={0.2}
              />
            </div>

            <Icons />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              <Orb
                hoverIntensity={0}
                rotateOnHover
                hue={3}
                forceHoverState={false}
                backgroundColor={isDark ? "#ffffff" : "#ffffff"}
                baseColor1={isDark ? "#2563eb" : "#2563eb"}
                baseColor2={isDark ? "#60a5fa" : "#60a5fa"}
                baseColor3={isDark ? "#1e40af" : "#1e40af"}
              />

              <img
                src={profileImg}
                alt="Harshita"
                className="absolute w-44 h-44 lg:w-81 lg:h-81 md:w-64 md:h-64 rounded-full  object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
