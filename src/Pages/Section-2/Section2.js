import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./HeavyIndus.json";

export default function Section2() {
  return (
    <div className="flex flex-col items-center" style={{marginTop: "200px"}}>
      <i className="text-5xl font-bold">
        Quá trình nhận thức của Đảng về công nghiệp hoá, hiện đại hoá
      </i>
      <i className="text-3xl mt-5 font-bold">Trước 1986:</i>
      <div className="flex justify-around items-center">
        <div className="w-1/2 pl-4">
          <ul className="text-3xl font-normal list-disc">
            <li className="py-3">Thiên về phát triển công nghiệp nặng</li>
            <li className="py-3">
              Chủ yếu dựa vào lợi thế về lao động, tài nguyên đất đai và nguồn
              viện trợ của các nước xã hội chủ nghĩa
            </li>
            <li className="py-3">
              Tư duy lãnh đạo nóng vội, giản đơn, chủ quan duy ý chí, ham làm
              nhanh, làm lớn, không quan tâm đến hiệu quả kinh tế xã hội.
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <div className="w-full justify-items-center items-center text-center">
            <Lottie className="w-3/4" animationData={animateSrc} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
