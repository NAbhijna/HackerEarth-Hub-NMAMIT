import React, { useRef, useState, useEffect } from "react";
import Typing from "../ui/Typing.jsx";
import Button from "../ui/Button.jsx";
import { ScrollParallax } from "react-just-parallax";
import CountUp from "react-countup";
import "../index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Splinea from "./Splinea.jsx";
import Background from "./Background.tsx";

const Hero = () => {
  const parallaxRef = useRef(null);
  const countUpRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pt-20 sm:pt-32 md:pt-40 lg:pt-48 -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 relative"
      id="hero"
    >
      <Background />
      <div className="container relative z-10 mt-20" ref={parallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          <Typing text="A Coding Hub of NMAMIT" duration={150} />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 text-[#b0aaec] lg:mb-8">
            Explore the exciting world of Competitive Programming with
            Hackerearth
          </p>
          <Button href="/" white>
            Get started
          </Button>

          <div
            ref={countUpRef}
            className="flex justify-center space-x-6 sm:space-x-12 mt-8"
          >
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {isVisible && <CountUp start={0} end={120} duration={2} />}
                <span>+</span>
              </span>
              <span className="block mt-2 text-[#C8C7F7] text-xs sm:text-sm md:text-base">
                Club members
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {isVisible && <CountUp start={0} end={15} duration={2} />}
                <span>+</span>
              </span>
              <span className="block mt-2 text-[#C8C7F7] text-xs sm:text-sm md:text-base">
                Events
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <ScrollParallax>
              <Splinea />
            </ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
