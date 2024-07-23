import React from "react";
import spinner from "../assets/Spinner.svg";

const Spinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  >
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "8rem", height: "8rem" }}
    />
  </div>
);

export default Spinner;
