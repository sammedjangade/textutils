import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import {Routes,Route} from 'react-router';
import React from "react";
// import {
//   BrowserRouter as Router,
// } from "react-router-dom";

function App(){

  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert(
      {msg:message,
      type:type 
    })
    setTimeout(() => {
      showalert(null);
    }, 3000);
  }
  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background="#0e0e0e";
      showalert("Dark mode hai been enabled","success")

    }
    else{
      setMode("light");
      document.body.style.background="white";
      showalert("Light mode hai been enabled","success")

    }
  }
  
  return(
    <>
 {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} alert={alert}toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 <div className="container my-3">
 {/* <Routes>
        <Route path="/" element={} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Textform showaleter={showalert} heading="Enter the text to analyze" mode={mode} />
  </div>
  {/* </Router> */}
 </>
  );
}
export default App;