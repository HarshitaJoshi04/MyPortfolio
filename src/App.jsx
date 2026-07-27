import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import PortfolioPage from "./components/PortfolioPage";

import { Theme } from "./components/themecontext/ThemeContext";
import ParticlesBackground from "./components/background/ParticlesBackground";
const App = () => {
  const [theme] = useContext(Theme);
  return (
    <div
      className={`${theme} min-h-screen font-sans transition-colors duration-500`}
    >
      
      <ParticlesBackground />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

    </div>
  );
};

export default App;
