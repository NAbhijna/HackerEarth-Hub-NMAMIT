import React from "react";
import aboutUsContent from "../constants/content.json";

const AboutUs = () => {
  const paragraphs = aboutUsContent?.aboutUsContent?.paragraphs || [];
  const title = aboutUsContent?.aboutUsContent?.title || "Default Title";
  const imagePath =
    aboutUsContent?.aboutUsContent?.image || "/assets/default-image.jpg";

  return (
    <div className="mx-4 sm:mx-6 lg:mx-10 xl:mx-20 py-8 sm:py-12 lg:py-16 bg-transparent">
      <div className="flex flex-col gap-20 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h2
            className="h2-style
           text-center lg:text-left"
          >
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="p-style">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-start lg:items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="relative overflow-hidden">
              <img
                src={imagePath}
                alt="About Us"
                className="object-cover w-full h-full rounded-lg mt-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
