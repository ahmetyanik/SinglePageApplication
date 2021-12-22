import React, { useEffect, useState } from "react";
import Cart from "./assets/Cart";
import Kitapsergisi from "./assets/Kitapsergisi";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Mainpage({ reducerState, dispatch }) {
  const [kitaplar, setKitaplar] = useState([]);

  async function kitaplariAl() {
    const kitaplarJSON = await fetch("/kitaplar.json");
    const kitaplarArray = await kitaplarJSON.json();

    setKitaplar(kitaplarArray);
  }

  useEffect(() => kitaplariAl(), []);


  return (
    <div style={{ minHeight: "80vh" }} className="">
      <Navbar />
      <div className="row">
      <div className="col-10">
      <Kitapsergisi
        kitaplar={kitaplar}
        reducerState={reducerState}
        dispatch={dispatch}
      />
      </div>
      <div className="col-2">
        <Cart reducerState={reducerState} dispatch={dispatch} kitaplar={kitaplar} />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
