import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import profile from "../image/pngegg.png"

function App() {
  return <>
  <div className="container_hight">
  <img src={profile} alt="oops" className="znak"/>
  </div>
  <div className="container_low">
  
  </div>
  </>
  ;
}

export default App;
