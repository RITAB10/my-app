import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("black");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("white");
      document.body.style.backgroundColor="#541843";
    } else {
      setMode("light");
      setColor("black");
      document.body.style.backgroundColor="white";
    }
  };
  return (
    <div className="bg-dark" data-bs-theme={mode}>
      <Navbar
        title="my-app"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze below" mode={mode} color={color} />
        <About myStyle={mode} color={color}/>
      </div>
    </div>
  );
}

export default App;
