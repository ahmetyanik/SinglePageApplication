import React, { useEffect, useState } from "react";
import Carousel from "./assets/Carousel";
import Kitapsergisi from "./assets/Kitapsergisi";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Mainpage() {
  const [kitaplar, setKitaplar] = useState([{},{},{},{},{},{},{},{},{}]);

  async function kitaplariAl() {
    const kitaplarJSON = await fetch("/kitaplar.json");
    const kitaplarArray = await kitaplarJSON.json();

    setKitaplar(kitaplarArray);
  }

  useEffect(() => kitaplariAl(), []);

  console.log(kitaplar);

  return (
    <div style={{ minHeight: "80vh" }} className="">
      <Navbar/>
      <Carousel kitaplar = {kitaplar} />
      <Kitapsergisi kitaplar = {kitaplar}/>
      <Footer/>
    </div>
  );
}

export default Mainpage;
