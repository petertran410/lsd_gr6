import React from "react";
import { fadeIn, staggerChildren, zoomIn } from "../../motion/motion";
import { motion } from "framer-motion";

export default function Section4() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      style={{ marginTop: "200px" }}>
      <motion.i
        variants={fadeIn("down", "tween", 0.5, 0.5)}
        className="text-5xl flex flex-col items-center font-bold">
        2006 - 2020:
      </motion.i>
      <motion.div variants={zoomIn(0.8, 0.7)} className="flex flex-col">
        <div className="mt-10 flex flex-col space-y-4">
          <span className="text-2xl">
            <strong> - </strong> Thực hiện chủ trương{" "}
            <strong>
              ”ra sức phấn đấu đưa nước ta cơ bản trở thành một nước công
              nghiệp.”
            </strong>
          </span>
          <span className="text-2xl">
            <strong> - </strong> Nâng cao chất lượng, hiệu quả, tính bền vững,
            và phát triển kinh tế tri thức.
          </span>
          <span className="text-2xl">
            <strong> - Nhiệm vụ:</strong> Đẩy mạnh CNH, HĐH gắn với phát triển
            kinh tế tri thức
          </span>
          <span className="text-2xl">
            <strong> - </strong>Phát triển mạnh các ngành và sản phẩm có{" "}
            <strong>giá trị gia tăng cao.</strong>
          </span>
          <span className="text-2xl">
            <strong> - </strong>Phát triển CNH, HĐH gắn với{" "}
            <strong>
              phát triển kinh tế tri thức và bảo vệ tài nguyên, môi trường.
            </strong>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
