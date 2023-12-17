import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./Clock.json";

export default function Intro() {
  return (
    <div className="mt-28">
      <div className="text-2xl flex flex-col items-center gap-y-10">
        <span>Chiếc 107 cùng Giáo sư Trọng Hưng</span>
        <i className="text-6xl font-semibold">Phân tích Bối cảnh Lịch sử</i>
        <span>Giới thiệu về lớp học</span>
        <div className="w-1/5">
          <Lottie animationData={animateSrc} loop={true} />
        </div>
      </div>
    </div>
  );
}
