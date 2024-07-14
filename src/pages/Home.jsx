import React from "react";
import Typing from "../ui/Typing";
import Button from "../components/Button";
import Section from "../components/Section";
import LogosBanner from "../components/LogosBanner";
import home from "../assets/home.webp";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, Gradient } from "../components/design/Hero";
import { useRef } from "react";
import CountUp from "react-countup";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] relative"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="absolute w-96 h-96 rounded-full bg-blue-300 blur-3xl opacity-30 bottom-[60vh] right-[80vh] animate-pulse"></div>
      <div className="absolute w-72 h-72 rounded-full bg-pink-500 blur-3xl opacity-30 bottom-20 right-90"></div>
      <div className="absolute w-96 h-96 rounded-full bg-purple-300  blur-3xl opacity-30 top-[13vh] right-40"></div>
      <div className="container relative z-10" ref={parallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <Typing
              text="A Coding Hub of NMAMIT"
              duration={150}
              className="text-white mt-20 mb-5 text-5xl"
            />
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Explore the exciting world of Competitive Programming
            with Hackerearth
          </p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-conic-from-purple">
            <LogosBanner className="relative z-10 lg:block" />
            <ScrollParallax isAbsolutelyPositioned>
              <div className="absolute -left-[5.5rem] bottom-[5.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                {" "}
                <span>
                  <CountUp start={0} end={120} duration={2} />
                  <span>+</span>
                </span>
                <span>Club members</span>
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="absolute -right-[5.5rem] bottom-[5.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                {" "}
                <span>
                  <CountUp start={0} end={20} duration={2} />
                  <span>+</span>
                </span>
                <span>Core members</span>
              </div>
            </ScrollParallax>

            <Gradient />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
