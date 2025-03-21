import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const CardSlider = ({ events }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextCard = () => {
    if (startIndex < events.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevCard = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-12">
        <h2 className="h2-style text-center lg:text-left">Events By HackerEarth Hub NMAMIT</h2>
        <div className="flex gap-2">
          <button
            onClick={prevCard}
            className="bg-transparent rounded-full p-2 shadow-md focus:outline-none"
            disabled={startIndex === 0}
          >
            <BsFillArrowLeftCircleFill className="h-6 w-6 text-[#bcbce7]" />
          </button>
          <button
            onClick={nextCard}
            className="bg-transparent rounded-full p-2 shadow-md focus:outline-none"
            disabled={startIndex === events.length - 1}
          >
            <BsFillArrowRightCircleFill className="h-6 w-6 text-[#bcbce7]" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-4 sm:px-6 lg:px-12" {...handlers}>
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <a
              key={index}
              href={event.registrationLink}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2 transition-transform duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <div className="text-sm leading-normal text-gray-300">
                    {event.name}
                  </div>
                  <p className="text-xs text-gray-500">{event.timings}</p>
                  <p className="text-sm mt-1 text-[#828282]">
                    {event.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;