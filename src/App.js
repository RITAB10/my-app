import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("black");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000); //auto-removed after 2s
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("white");
      document.body.style.backgroundColor = "#541843";
      showAlert("Dark mode has been enabled", "success");
      document.title = `my-app - Dark Mode`;
    } else {
      setMode("light");
      setColor("black");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "danger");
      document.title = `my-app - Light Mode`;
    }
  };
  return (
    <>
      {/* <Router> */}
      <div className="bg-dark" data-bs-theme={mode}>
        <Navbar
          title="my-app"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-5">
          {/* <Routes>
            <Route exact path="/about" element={<About myStyle={mode} color={color} />} />
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                  color={color}
                />
              }
            />
          </Routes> */}
          <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
            color={color}
          />
        </div>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
