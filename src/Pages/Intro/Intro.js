import React from "react";
import Lottie from "lottie-react";
import animateSrc from "./History.json";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerChildren,
  staggerContainer,
  textVariant,
} from "../../motion/motion";

export default function Intro() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      style={{ marginTop: "200px" }}>
      <div className="text-2xl flex flex-col items-center gap-y-10">
        <motion.span
          variants={textVariant(0.2)}
          className="text-3xl font-semibold italic">
          Chiếc 107 cùng Giáo sư Trọng Hưng
        </motion.span>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          className="text-6xl font-semibold italic">
          Phân tích Bối cảnh Lịch sử
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 2, 0.5)} className="w-1/5">
          <Lottie animationData={animateSrc} loop={true} />
        </motion.div>
      </div>
    </motion.div>
  );
}
