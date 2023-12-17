import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./Merry.json";

export default function Hello() {
  return (
    <div className="items-center">
      <div className="text-2xl flex flex-col items-center">
        <span className="mb-3">Welcome to our presentation</span>
        <span>We Our Group 6</span>
        <div className="w-1/2">
          <Lottie animationData={animateSrc} loop={true} />
        </div>
      </div>
    </div>
  );
}
