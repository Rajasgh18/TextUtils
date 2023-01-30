import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert";
import About from './Components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnCol, setBtnCol] = useState("primary");
  const [alert, setAlert] = useState(null);
  const [textMode, settextMode] = useState("black");
  const [backMode, setbackMode] = useState("white");
  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode1 = () => {
    setMode("danger");
    setBtnCol("danger");
    showAlert("Red Mode has been enabled", "success");
    settextMode("#252525");
    setbackMode("rgb(270, 125, 125)");
    document.body.style.backgroundColor = "rgb(248, 101, 101)";
  };
  const toggleMode2 = () => {
    setMode("primary");
    setBtnCol("info");
    showAlert("Blue Mode has been enabled", "success");
    settextMode("#252525");
    setbackMode("rgb(140, 140, 250)");
    document.body.style.backgroundColor = "rgb(115, 115, 224)";
  };
  const toggleMode3 = () => {
    setMode("dark");
    setBtnCol("success");
    showAlert("Dark Mode has been enabled", "success");
    settextMode("#252525");
    setbackMode("rgb(175,175,175)");
    document.body.style.backgroundColor = "grey";
  };
  return (
    <>
    <Router basename="/TextUtils" >
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3}
      />
      <Alert alert={alert} />
      <div className="container mt-5">
      <Routes>
          <Route exact path="/about" element={ <About textMode = {textMode} backMode = {backMode}/>}></Route>
          <Route exact path="/" element={<TextArea heading="Enter text below" btnCol={btnCol} showAlert={showAlert} backMode={backMode}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
