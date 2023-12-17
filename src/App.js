import "./App.css";
import Hello from "./Pages/Hello/Hello";
import Intro from "./Pages/Intro/Intro";
import Section1 from "./Pages/Section-1/Section1";
import Section2 from "./Pages/Section-2/Section2";
import Section3 from "./Pages/Section-3/Section3";

function App() {
  return (
    <div className="bg-green-600">
      <div className="container">
        <Hello />
        <Intro />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

export default App;
