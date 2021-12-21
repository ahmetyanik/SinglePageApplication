import React, { useEffect, useState } from "react";
import Aramasayfasi from "./assets/Aramasayfasi";
import Carousel from "./assets/Carousel";
import Cart from "./assets/Cart";
import Kitapsergisi from "./assets/Kitapsergisi";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Mainpage({ reducerState, dispatch }) {
  const [kitaplar, setKitaplar] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  async function kitaplariAl() {
    const kitaplarJSON = await fetch("/kitaplar.json");
    const kitaplarArray = await kitaplarJSON.json();

    setKitaplar(kitaplarArray);
  }

  useEffect(() => kitaplariAl(), []);

  console.log(kitaplar);

  return (
    <div style={{ minHeight: "80vh" }} className="">
      <Navbar />
      <Carousel kitaplar={kitaplar} />
      <Kitapsergisi
        kitaplar={kitaplar}
        reducerState={reducerState}
        dispatch={dispatch}
      />
      <Footer />
      <div style={{ position: "absolute", top: "72px", right: "0" }}>
        <Cart reducerState={reducerState} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Mainpage;
