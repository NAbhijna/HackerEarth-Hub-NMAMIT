import React from "react";
import { AnimatedIcons } from "./AnimatedIcons.jsx";

export default function WebDev() {
  return (
    <div className="m-4 mt-20 md:ml-20 md:my-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <p className="h6-style text-center lg:text-left">LEARN</p>
          <h2 className="h2-style text-center lg:text-left">Web Development</h2>
          <p className="p-style">
            Master the essential technologies for modern web development. From
            HTML and CSS to React and Node.js, we've got you covered.
          </p>
        </div>
        <div className=" sm:h-3/4 w-full md:w-1/2">
          <AnimatedIcons />
        </div>
      </div>
    </div>
  );
}
