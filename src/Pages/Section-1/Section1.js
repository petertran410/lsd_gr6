import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./Industry.json";

export default function Section1() {
  return (
    <div style={{ marginTop: "200px" }}>
      <div className="text-5xl italic text-center font-bold">
        Khái niệm công nghiệp hóa hiện đại hóa
      </div>
      <div className="flex mt-10 items-center">
        <div className="w-1/2 space-y-4 text-2xl">
          <div className="pl-4 space-y-4">
            <ul className="list-disc space-y-4">
              <li>
                Công nghiệp hóa là quá trình chuyển đổi các hoạt động bằng sức
                lao động truyền thống thủ công sang sử dụng rộng rãi sức lao
                động phổ thông dựa trên cơ sở là sự phát triển mạnh mẽ của nền
                công nghiệp cơ khí
              </li>
              <li>
                Hiện đại hóa là sử dụng các trang thiết bị hiện đại, những
                thành tựu khoa học và công nghệ tiên tiến ứng dụng vào quá trình
                sản xuất và quản lý kinh tế xã hội - Sử dụng sức lao động thủ
                công của con người sang sử dụng sức lao động phổ thông được ứng
                dụng những trang thiết bị công nghệ hiện đại
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <Lottie animationData={animateSrc} loop={true} />
        </div>
      </div>
    </div>
  );
}
