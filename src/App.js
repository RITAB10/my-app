import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="my-app" about="About Us"/>
      <div className="container my-5">
      <TextForm heading="Enter the text to analyze below"/>
      <About/>
      </div>
    </>
  );
}

export default App;
