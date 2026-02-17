import { useNavigate } from "react-router-dom";

import Orb from "./Orb";
import HeroText from "./HeroText";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center text-black justify-center bg-black overflow-hidden">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={3}
          rotateOnHover
          hue={0}
          forceHoverState={true}
          backgroundColor="#000000"
        />
      </div>

      <div className="absolute flex flex-col items-center gap-10 text-white text-center px-4">
        <HeroText duration={0.5} delay={0.2} stagger={0.1} />

        <Button />
      </div>
    </div>
  );
};

export default Landing;
