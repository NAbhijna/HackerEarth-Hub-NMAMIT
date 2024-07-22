import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import LogosBanner from "../components/LogosBanner";
import Section from "../ui/Section.jsx";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import Collapse from "../components/Collapse.jsx";
import { AnimatedIcons } from "../components/AnimatedIcons.jsx";
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Spinner from "../ui/Spinner";
import content from "../constants/content.json";
import Team from "./Team.jsx";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(content.upcomingEvents || []);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] relative bg-radial-gradient"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <Hero />
      <LogosBanner className="relative z-10 lg:block mb-20" />
      <UpcomingEvents events={events} />
      <Section
        className="pt-[7rem] -mt-[0.25rem] relative items-center "
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="home"
      >
        <Collapse />
        <div className="m-4 mt-20 md:ml-20 md:my-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <p className="text-white font-grotesk uppercase tracking-wider mb-2 text-center lg:text-left">
                LEARN
              </p>
              <h2 className="text-white text-2xl sm:text-3xl font-sans font-bold mb-6 text-center lg:text-left">
                Web Development
              </h2>
              <p className="mt-3 text-justify text-sm sm:text-base text-gray-500 dark:text-gray-300 sm:mt-4">
                Master the essential technologies for modern web development.
                From HTML and CSS to React and Node.js, we've got you covered.
              </p>
            </div>
            <div className=" sm:h-3/4 w-full md:w-1/2">
              <AnimatedIcons />
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="pt-[7rem] -mt-[0.25rem] relative items-center "
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="home"
      >
        <AboutUs />
      </Section>
      <Section
        className="pt-[7rem] -mt-[0.25rem] relative items-center "
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="home"
      >
        <Footer />
      </Section>
    </Section>
  );
}
