import React from "react";
import content from "../constants/content.json";

const LogosBanner = ({ className }) => {
  const { logos, paragraph } = content.logosBanner;

  return (
    <div className={`${className} text-center px-4 sm:px-6 lg:px-8`}>
      <p className="mb-12 p-style max-w-4xl mx-auto">{paragraph}</p>

      <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        {Array.isArray(logos) &&
          logos.map((logo, index) => (
            <li
              className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out hover:scale-110"
              key={index}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LogosBanner;
