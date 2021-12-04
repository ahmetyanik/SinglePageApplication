import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Davul from "./components/Davul";

ReactDOM.render(
  <Router>
  <Routes>
  
    <Route exact path="/" element={<Anasayfa/>}>

    
    </Route>
    <Route path="/davul" element={<Davul/>}>
      
    </Route>
   
    </Routes>
  </Router>,
  document.getElementById("root")
);
