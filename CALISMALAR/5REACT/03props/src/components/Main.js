import React, { useEffect, useState } from "react";
import Not from "./Not";

function Main() {
  const [notlar, setNotlar] = useState([]);
  const [tekNot, setTekNot] = useState("1");

  async function notlariAl() {
    const veriler = await fetch("./Notlar.json");

    const jsonlar = await veriler.json();

    console.log("Notlari al calisti!");

    setNotlar(jsonlar);
  }

  async function tekNotuAl(e) {
    let value = document.querySelector("#bidi").value;

    value = value === "" ? (value = "1") : value;

    const veri = await fetch(`http://localhost:3000/Not${value}.json`);
    const jsonOlarak = await veri.json();

    console.log("tek notu al calisiyor");
   
    jsonOlarak.map(e=>{

       return setTekNot(e);
    })


  }

  useEffect(() => {
    tekNotuAl();
  }, []);

  useEffect(() => {
    notlariAl();
  },[]);



  return (
    <div style={{ minHeight: "90vh" }}>
      <div className="d-flex justify-content-center flex-wrap">
        {notlar.map((not, index) => {
          return (
            <Not
              key={index}
              resim={not.resim}
              baslik={not.baslik}
              icerik={not.icerik}
              link={not.link}
            />
          );
        })}
      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
        SORGUYLA GELEN
        <input id="bidi" onChange={tekNotuAl} className="input" />
      
     
           <Not
              key={100}
              resim={tekNot.resim}
              baslik={tekNot.baslik}
              icerik={tekNot.icerik}
              link={tekNot.links}
           />
       

      </div>
    </div>
  );
}

export default Main;
