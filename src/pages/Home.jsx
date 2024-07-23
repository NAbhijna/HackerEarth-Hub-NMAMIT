import React, { useState, useEffect } from "react";
import Section from "../ui/Section.jsx";
import Spinner from "../ui/Spinner";
import content from "../constants/content.json";
import Hero from "../components/Hero";
import LogosBanner from "../components/LogosBanner";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import DSA from "../components/DSA.jsx";
import WebDev from "../components/WebDev.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Footer from "../components/Footer.jsx";

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
        <DSA />
        <WebDev />
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
