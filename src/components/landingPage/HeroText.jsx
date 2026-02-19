import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroText = ({ duration = 0.5, delay = 0.3, stagger = 0.25 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 80,
      opacity: 0,
      delay:delay,
      duration: duration,
      stagger: stagger,
      ease: "power3.out",
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-4xl md:text-6xl font-semibold tracking-tight text-center"
    >
      <span className="inline-block">Hi,</span>{" "}
      <span className="inline-block">I’m</span>{" "}
      <span className="inline-block text-blue-400">Harshita</span>
    </h1>
  );
};

export default HeroText;
