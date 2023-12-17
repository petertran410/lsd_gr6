import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./Industry.json";

export default function Section1() {
  return (
    <div className="flex justify-around items-center mt-28">
      <div className="text-2xl flex flex-col gap-y-10 w-50">
        <header className="text-5xl">I. Khái niệm công nghiệp hóa hiện đại hóa</header>
        <span className="text-4xl">
          Công nghiệp hóa là quá trình chuyển đổi các hoạt động bằng sức lao
          động truyền thống thủ công sang sử dụng rộng rãi sức lao động phổ
          thông dựa trên cơ sở là sự phát triển mạnh mẽ của nền công nghiệp cơ
          khí
        </span>
        <span  className="text-4xl">
          - Hiện đại hóa là sử dụng các trang thiết bị hiện đại, những thành tựu
          khoa học và công nghệ tiên tiến ứng dụng vào quá trình sản xuất và
          quản lý kinh tế xã hội - Sử dụng sức lao động thủ công của con người
          sang sử dụng sức lao động phổ thông được ứng dụng những trang thiết bị
          công nghệ hiện đại
        </span>
      </div>
      <div className="w-1/2">
        <Lottie animationData={animateSrc} loop={true} />
      </div>
    </div>
  );
}
