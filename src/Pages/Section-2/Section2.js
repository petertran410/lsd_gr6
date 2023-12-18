import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./HeavyIndus.json";
import { fadeIn, staggerChildren } from "../../motion/motion";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center"
      style={{ marginTop: "200px" }}>
      <motion.i
        variants={fadeIn("down", "tween", 0.5, 0.5)}
        className="text-5xl font-bold">
        Quá trình nhận thức của Đảng về công nghiệp hoá, hiện đại hoá
      </motion.i>
      <motion.i
        variants={fadeIn("down", "tween", 0.5, 0.7)}
        className="text-3xl mt-5 font-bold">
        Trước 1986:
      </motion.i>
      <motion.div className="flex justify-around items-center">
        <div className="w-1/2 pl-4">
          <motion.ul
            className="text-3xl font-normal list-disc">
            <motion.li variants={fadeIn("right", "tween", 0.8, 0.5)} className="py-3">Thiên về phát triển công nghiệp nặng</motion.li>
            <motion.li variants={fadeIn("right", "tween", 1.1, 0.5)} className="py-3">
              Chủ yếu dựa vào lợi thế về lao động, tài nguyên đất đai và nguồn
              viện trợ của các nước xã hội chủ nghĩa
            </motion.li>
            <motion.li variants={fadeIn("right", "tween", 1.5, 1.5)} className="py-3">
              Tư duy lãnh đạo nóng vội, giản đơn, chủ quan duy ý chí, ham làm
              nhanh, làm lớn, không quan tâm đến hiệu quả kinh tế xã hội.
            </motion.li>
          </motion.ul>
        </div>
        <motion.div
          variants={fadeIn("left", "tween", 2.3, 1.5)}
          className="w-1/2">
          <div className="w-full justify-items-center items-center text-center">
            <Lottie className="w-3/4" animationData={animateSrc} loop={true} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
