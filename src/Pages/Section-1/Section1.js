import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./Industry.json";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../../motion/motion";

export default function Section1() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      style={{ marginTop: "200px" }}>
      <motion.div
        variants={fadeIn("down", "tween", 0.5, 1.5)}
        className="text-5xl italic text-center font-bold">
        Khái niệm công nghiệp hóa hiện đại hóa
      </motion.div>
      <motion.div className="flex mt-10 items-center">
        <div className="w-1/2 space-y-4 text-2xl">
          <div className="pl-4 space-y-4">
            <motion.ul variants={zoomIn(2, 1)} className="list-disc space-y-4">
              <motion.li variants={fadeIn("down", "tween", 2, 1.5)}>
                Công nghiệp hóa là quá trình chuyển đổi các hoạt động bằng sức
                lao động truyền thống thủ công sang sử dụng rộng rãi sức lao
                động phổ thông dựa trên cơ sở là sự phát triển mạnh mẽ của nền
                công nghiệp cơ khí
              </motion.li>
              <li>
                Hiện đại hóa là sử dụng các trang thiết bị hiện đại, những thành
                tựu khoa học và công nghệ tiên tiến ứng dụng vào quá trình sản
                xuất và quản lý kinh tế xã hội - Sử dụng sức lao động thủ công
                của con người sang sử dụng sức lao động phổ thông được ứng dụng
                những trang thiết bị công nghệ hiện đại
              </li>
            </motion.ul>
          </div>
        </div>
        <motion.div variants={zoomIn(3, 0.7)} className="w-1/2">
          <Lottie animationData={animateSrc} loop={true} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
