import React, { useEffect, useState } from "react";

function Main() {
  const [sayi, setSayi] = useState(0);

  const [isim, setIsim] = useState("Adinizi giriniz!");

  const [arabalar, setArabalar] = useState(["mercedes", "bmw", "audi"]);

  function artir() {
    setSayi(sayi + 1);
  }

  function azalt() {
    setSayi(sayi - 1);
  }

  function isimDegistir() {
    const input = document.querySelector("#input");

    let value = input.value;

    setIsim(value);
  }

  function arabaEkle(){
      const inputAraba = document.querySelector("#inputAraba");

        let yeniArabalar = arabalar;
        yeniArabalar.push(inputAraba.value);

      setArabalar(yeniArabalar);

      console.log(arabalar);
  }
  
 

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-dark" onClick={artir}>
          ARTIR
        </button>
        <button className="btn btn-dark" onClick={azalt}>
          AZALT
        </button>
        SAYI = {sayi}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <input id="input" />
        <button onClick={isimDegistir} className="btn btn-success">
          ISIM
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3">ISIM : {isim}</div>

      <div className="d-flex flex-column align-items-center">
      <hr/>
        <input id="inputAraba" placeholder="araba ekle" />
        <button onClick = {arabaEkle} id="arababtn" className="btn btn-warning">ARABA EKLE</button>
      </div>
      <div className="d-flex justify-content-center">
        <div id="arabalar" className=" mt-3">
          <h3>ARABALAR</h3>

          {arabalar.map((araba) => {
            return <h6>{araba}</h6>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
