import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import animateSrc from "./Merry.json";

function Welcome() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Welcome to our presentation", "We are group 6"];
  const [text, setText] = useState("");
  const [Delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, Delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, Delta, tick]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-5xl font-bold italic">
        <span>{text}</span>
      </div>
      <div className="w-3/5">
        <Lottie animationData={animateSrc} />
      </div>
    </div>
  );
}

export default Welcome;
