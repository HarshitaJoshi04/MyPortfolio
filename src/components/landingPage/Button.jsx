import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Button = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.from(buttonRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.8, // comes after hero text
      ease: "power3.out",
    });

    // Subtle floating animation
    gsap.to(buttonRef.current, {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      opacity:2
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={() => navigate("/portfolio")}
      className="
      px-8 py-3
      rounded-full
      text-lg font-semibold
      bg-gradient-to-r from-blue-500 to-blue-500
      text-white
      shadow-lg
      transition-all duration-300
      hover:shadow-[0_0_30px_rgba(0,92,456,0.9)]
      hover:scale-105
      active:scale-95"
    >
      Explore
    </button>
  );
};

export default Button;
