import "./App.css";
import Hello from "./Pages/Hello/Hello";
import Intro from "./Pages/Intro/Intro";
import Section1 from "./Pages/Section-1/Section1";
import Section2 from "./Pages/Section-2/Section2";
import Section3 from "./Pages/Section-3/Section3";
import Section4 from "./Pages/Section-4/Section4";
import Section5 from "./Pages/Section-5/Section5";
import Section6 from "./Pages/Section-6/Section6";
import Section7 from "./Pages/Section-7/Section7";

function App() {
  return (
    <div className="bg-green-200">
      <div className="container">
        <Hello />
        <Intro />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    </div>
  );
}

export default App;
