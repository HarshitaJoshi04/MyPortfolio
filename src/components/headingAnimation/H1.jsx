import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const H1 = ({
  text = "A Frontend Developer",
  duration = 0.1,
  delay = 0,
  isDark = true,
  stagger = 1,
}) => {
  const h1ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        h1ref.current.children,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h1ref.current,
            start: "-1500%",
            toggleActions: "play none none none",
            
        
            end:"-555"
          },
        }
      );
    }, h1ref);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={h1ref}
      className={`text-xl sm:text-2xl font-bold md:text-3xl ${
        isDark ? "text-gray-500" : "text-gray-500"
      }`}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-2">
          {word}
        </span>
      ))}
    </h1>
  );
};

export default H1;