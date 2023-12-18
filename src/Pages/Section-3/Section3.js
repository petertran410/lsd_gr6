import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../../motion/motion";

export default function Section3() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center"
      style={{ marginTop: "200px" }}>
      <motion.i variants={fadeIn("down", "tween", 0.5, 0.5)}>
        <header className="text-5xl font-bold">Sau 1986 đến nay:</header>
      </motion.i>
      <motion.div variants={zoomIn(0.8, 0.7)} className="mt-10">
        <dl className="space-y-4">
          <dt className="text-3xl">Đại hội VI (1986):</dt>
          <dd className="text-2xl">
            <strong> - Nhiệm vụ:</strong> chuyển hướng chiến lược CNH từ mô hình
            hướng nội sang mô hình hỗn hợp (xuất khẩu và thay thế nhập khẩu).
          </dd>
          <dd className="text-2xl">
            <strong> - Chương trình thực hiện:</strong> Lương thực, thực phẩm,
            hàng tiêu dùng và hàng xuất khẩu.
          </dd>
          <dd className="text-2xl">
            <strong> - Đổi mới cơ cấu kinh tế:</strong> Chuyển từ kế hoạch hóa
            tập trung sang cơ chế thị trường, mở cửa kinh tế và phát triển kinh
            tế nhiều thành phần.
          </dd>
          <dt className="text-3xl">1991 - 2001:</dt>
          <dd className="text-2xl">
            <strong> - </strong>Chủ trương
            <strong> "Mở mang kinh tế dịch vụ." (1991)</strong> tới
            <strong> “kinh tế dịch vụ” (1994)</strong> và
            <strong> “phát triển kinh tế trí thức” (2001)</strong>
          </dd>
          <dd className="text-2xl">
            <strong> - </strong> Chuyển từ
            <strong> cơ chế kế hoạch hóa tập trung</strong> sang
            <strong> cơ chế thị trường.</strong>
          </dd>
          <dd className="text-2xl">
            <strong> - </strong> Công nghiệp hóa và hiện đại hóa là
            <strong> con đường thoát khỏi tụt hậu.</strong>
          </dd>
        </dl>
      </motion.div>
    </motion.div>
  );
}
