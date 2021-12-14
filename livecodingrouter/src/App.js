import "./App.css";
import Start from "./components/Start";
import Products from "./components/Products";
import {  Routes, Route, NavLink } from "react-router-dom";
import Product from "./components/Product";

function App() {

  const products = [
    {title:"Hundefutter", description:"lecker"},
    {title:"Halsband",description:"Schick"}
  ]

  return (
    <div className="App">
     
        <nav>
          <NavLink to="/">Start</NavLink> <br/>
          <NavLink end to="/products">Product</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/products"  element={<Products />} />
          <Route path="/products/hundefutter" element={<Product data={products[0]} />} />
          <Route path="/products/halsband" element={<Product data={products[1]} />} />
        </Routes>
     
    </div>
  );
}

export default App;
