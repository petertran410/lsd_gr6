import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../motion/motion";

export default function Section5() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      style={{ marginTop: "200px" }}>
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 0.5)}
        className="text-5xl italic text-center font-bold">
        Nguyên nhân dẫn đến quá trình nhận thức của Đảng về công nghiệp hóa,
        hiện đại hóa.
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 0.8, 0.5)}
        className="flex mt-10 items-center">
        <div className="flex flex-col text-2xl space-y-4">
          <span>
            <strong> - Tình hình chiến tranh còn tồn tại ở Việt Nam</strong> -
            {">"} miền Bắc cần là một hậu phương vững chắc cung ứng nhân lực và
            công cụ.
          </span>
          <span>
            <strong>
              {" "}
              - Là một mục tiêu đã được đề ra trong đại hội Đảng lần III
            </strong>{" "}
            -{">"} xác định quá trình quá độ lên CNXH cần hiện đại hóa, công
            nghiệp hóa để bắt kịp các quốc gia khác. công cụ.
          </span>
          <span>
            <strong> - Nông nghiệp còn lạc hậu, thô sơ </strong> -{">"} hiện đại
            hóa, công nghiệp hóa nhằm nâng cao năng suất canh tác và phát huy
            thế mạnh quốc gia, cũng như cung ứng lương thực cho cả nước.
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
