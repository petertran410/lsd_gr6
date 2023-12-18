import React from "react";
import { motion } from "framer-motion";
import { staggerChildren, textVariant } from "../../motion/motion";

export default function Section7() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}>
      <motion.div
        variants={textVariant(0.5)}
        className="text-center text-4xl font-bold italic"
        style={{ marginTop: "200px" }}>
        Kết luận:
      </motion.div>
      <motion.div variants={textVariant(0.8)} className="m-10">
        <div className="text-2xl font-normal italic">
          Công nghiệp hóa, hiện đại hóa đất nước là một vấn đề có phạm vi nghiên
          cứu rộng. Lãnh đạo sự nghiệp CNH, HĐH là quá trình khó khăn, lâu dài
          đòi hỏi Đảng luôn tổng kết thực tiễn, học hỏi kinh nghiệm của các
          nước... để bổ sung cho lý luận và vận dụng vào thực tiễn, sớm đưa nước
          ta cơ bản trở thành nước công nghiệp.
        </div>
      </motion.div>
    </motion.div>
  );
}
