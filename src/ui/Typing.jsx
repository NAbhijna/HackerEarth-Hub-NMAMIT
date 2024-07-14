import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text, duration = 200, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const lines = text.split("\n");
    const totalLines = lines.length;

    const typingEffect = setInterval(() => {
      if (currentLine < totalLines) {
        const line = lines[currentLine];
        if (currentChar < line.length) {
          setDisplayedText((prevText) => prevText + line.charAt(currentChar));
          setCurrentChar((prevChar) => prevChar + 1);
        } else {
          setDisplayedText((prevText) => prevText + "\n");
          setCurrentChar(0);
          setCurrentLine((prevLine) => prevLine + 1);
        }
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [duration, text, currentLine, currentChar]);

  return (
    <h1
      className={`font-display text-center text-4xl font-bold leading-20 tracking-wide drop-shadow-sm ${className}`}
    >
      {displayedText}
    </h1>
  );
};

export default TypingAnimation;
