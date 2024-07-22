import React from "react";
import react from "../assets/React.png";
import Node from "../assets/Node.png";
import JS from "../assets/JS.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";

export function AnimatedIcons() {
  return (
    <>
      <style>{styles}</style>
      <div className="p-4 sm:p-8 overflow-hidden relative flex items-center justify-center bg-transparent">
        <div className="flex flex-row flex-wrap justify-center items-center gap-2">
          <Container className="h-8 w-8 circle-1 hover-animation">
            <img src={HTML} alt="HTML Logo" className="h-4 w-4" />
          </Container>
          <Container className="h-12 w-12 circle-2 hover-animation">
            <img src={CSS} alt="CSS Logo" className="h-8 w-8 dark:text-white" />
          </Container>
          <Container className="circle-3 hover-animation">
            <img
              src={react}
              alt="React Logo"
              className="h-8 w-8 dark:text-white"
            />
          </Container>
          <Container className="h-12 w-12 circle-4 hover-animation">
            <img src={Node} alt="Node.js Logo" className="h-6 w-6" />
          </Container>
          <Container className="h-8 w-8 circle-5 hover-animation">
            <img src={JS} alt="JavaScript Logo" className="h-4 w-4" />
          </Container>
        </div>
      </div>
    </>
  );
}

const Container = ({ className, children }) => {
  return (
    <div
      className={`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    transform transition-transform duration-200 hover:scale-110 ${className}`}
    >
      {children}
    </div>
  );
};

const styles = `
@keyframes hover {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hover-animation {
  animation: hover 3s ease-in-out infinite;
}

.circle-1 { animation-delay: 0s; }
.circle-2 { animation-delay: 0.5s; }
.circle-3 { animation-delay: 1s; }
.circle-4 { animation-delay: 1.5s; }
.circle-5 { animation-delay: 2s; }
`;
