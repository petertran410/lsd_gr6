import Lottie from "lottie-react";
import React from "react";
import end from "./End.json";

export default function End() {
  return (
    <div className="flex justify-center" style={{ marginTop: "200px" }}>
      <Lottie className="w-3/4" animationData={end} />
    </div>
  );
}
