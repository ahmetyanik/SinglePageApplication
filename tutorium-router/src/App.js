import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./components/Colors";
import Colorseite from "./components/Colorseite";
import Newcolor from "./components/Newcolor";

function App() {

  const [colors,setColors] = useState([]);

  console.log(colors);

  return <div className="App">

  <Routes>

  <Route exact path="/colors" element={<Colors colors={colors}/>}/>
  <Route path="/colors/new"  element={<Newcolor colors={colors} setColors={setColors}/>}  />

  <Route path="/colors/:colorName" element={<Colorseite/>}/>

  </Routes>


  </div>;
}

export default App;
