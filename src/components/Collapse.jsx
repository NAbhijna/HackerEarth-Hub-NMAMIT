import React, { useState, useRef, useEffect } from "react";
import DSAWeb from "../assets/DSAWeb.png";
import { ScrollParallax } from "react-just-parallax";

const CollapsibleValues = () => {
  const [openSection, setOpenSection] = useState(null);
  const contentRefs = useRef([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/src/constants/content.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSections(data.sections);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openSection === index) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
          ref.style.opacity = 1;
          ref.style.transform = "translateY(0)";
        } else {
          ref.style.maxHeight = "0px";
          ref.style.opacity = 0;
          ref.style.transform = "translateY(-10px)";
        }
      }
    });
  }, [openSection]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-16">
      <div className="flex flex-col gap-8 lg:flex-row items-center lg:items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-3">
          <ScrollParallax strength={0.1}>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden pointer-events-none">
              <img
                src={DSAWeb}
                alt="DSA Web"
                className="w-full h-full object-contain"
              />
            </div>
          </ScrollParallax>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8">
          <p className="text-white font-grotesk uppercase tracking-wider mb-2 text-center lg:text-left">
            LEARN
          </p>
          <h2 className="text-white text-2xl sm:text-3xl font-sans font-bold mb-6 text-center lg:text-left">
            DSA
          </h2>

          {sections.map((section, index) => (
            <div className="mb-4 w-full lg:w-3/4" key={section.id}>
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-gray-300 rounded-t-1 group text-dark-500"
                onClick={() => handleToggle(index)}
              >
                <span>{section.title}</span>
                <i
                  className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out transform-gpu"
                style={{
                  maxHeight: "0px",
                  opacity: 0,
                  transform: "translateY(-10px)",
                }}
              >
                <div className="p-4 text-sm leading-normal text-gray-300">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleValues;
