import React from "react";
import develop from "./Develop.json";
import goDown from "./GoDown.json";
import Lottie from "lottie-react";
import solution from "./Solution.json";

export default function Section6() {
  return (
    <div style={{marginTop: "200px"}}>
      <div className="text-5xl italic text-center font-bold">
        Ý nghĩa của sự nhận thức của Đảng về công nghiệp hóa, hiện đại hóa.
      </div>
      <div className="flex mt-10 items-center">
        <div className="w-1/2 space-y-4 text-2xl">
          <div className="pl-4 space-y-4">
            <span className="text-3xl font-bold italic">Ý nghĩa:</span>
            <ul className="list-disc space-y-4">
              <li>
                Đường lối đúng đắn, toàn diện và ngày càng sáng tỏ cả về quan
                điểm chỉ đạo, mục tiêu, bước đi… tuy vẫn còn một số hạn chế nhất
                định.
              </li>
              <li>
                Là cơ sở lý luận cho quá trình đưa đất nước ra khỏi khủng hoảng
                kinh tế - xã hội, tạo dựng những tiền đề để đẩy mạnh CNH, HĐH.
              </li>
            </ul>
          </div>
          <div className="pl-4 mt-5">
            <span className="text-3xl font-bold italic">Về đường lối:</span>
            <ul className="list-disc">
              <li>
                “Tiêu chí chưa được xác định cụ thể; các bước đi của cả quá
                trình chưa được làm rõ; chậm cụ thể hóa mô hình, dẫn đến còn
                nhiều lúng túng trong thực hiện CNH, HĐH nông nghiệp, nông thôn”
              </li>
            </ul>
          </div>
          <div className="pl-4 space-y-4 mt-5">
            <span className="text-3xl font-bold italic">Về hạn chế: </span>
            <ul className="list-disc space-y-4">
              <li>
                Nhận thức chưa đầy đủ và sâu sắc về vị trí, vai trò của CNH,
                HĐH.
              </li>
              <li>Chỉ đạo và tổ chức thực hiện còn yếu kém.</li>
              <li>
                Tốc độ tăng trưởng kinh tế thấp; cơ cấu kinh tế - lao động vẫn
                còn lạc hậu.
              </li>
              <li>Vùng kinh tế trọng điểm chưa phát huy được thế mạnh.</li>
              <li>Thị trường KH&CN vẫn còn phát triện chậm.</li>
              <li>Nhiều chính sách chưa đủ mạnh để huy động mọi nguồn lực.</li>
            </ul>
          </div>
          <div className="pl-4 space-y-4 mt-5">
            <span className="text-3xl font-bold italic">
              Giải pháp đưa ra:{" "}
            </span>
            <ul className="list-disc space-y-4">
              <li>Cần đầu tư hơn nữa cho khoa học, công nghệ.</li>
              <li>
                Nâng cao năng lực nghiên cứu khoa học, đào tạo nhân lực cho kinh
                tế tri thức.
              </li>
              <li>Hoàn thiện thể chế kinh tế thị trường định hướng XHCN.</li>
              <li>
                Tái cấu trúc nền kinh tế, chuyển đổi mô hình tăng trưởng kinh
                tế.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full flex flex-col justify-items-center items-center">
            <Lottie className="w-1/3 " animationData={develop} />
            <Lottie className="w-1/2" animationData={goDown} />
            <Lottie className="w-1/3 pt-5" animationData={solution} />
          </div>
        </div>
      </div>
    </div>
  );
}
