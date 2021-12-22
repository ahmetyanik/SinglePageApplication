import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Cart from "./Cart"
import { useParams } from "react-router-dom";

function Kitap({ reducerState, dispatch }) {
  const params = useParams();
  const [kitaplar, setKitaplar] = useState([]);

  async function kitaplariAl() {
    const kitaplarJSON = await fetch("/kitaplar.json");
    const kitaplarArray = await kitaplarJSON.json();

    setKitaplar(kitaplarArray);
  }

  useEffect(() => kitaplariAl(), []);

  console.log(kitaplar);

  console.log(params);

  return (
    <div>
      <Navbar />
      <div className="row">
      <div className="mt-3 col-9" style={{ minHeight: "50vh" }}>

        <div className="row">
          {kitaplar.map((kitap, index) => {
            return kitap.kitapismi === params.book ? (
              <div key={index} className="col-5">
                <img
                  src={kitap.resimlinki}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "40vh",
                    maxWidth: "40vh",
                  }}
                />
              </div>
            ) : null;
          })}

          <div className="col-7">

          {kitaplar.map((kitap, index) => {
            return kitap.kitapismi === params.book ? (
              <div key={index} className="col-5" style={{width:"90%"}} >
                
                <div className="border">

                <h3>{kitap.kitapismi}</h3>
                <p>Yazar: {kitap.yazar}</p>
                <p>Yayinevi: {kitap.yayinevi}</p>
                <p>Aciklama: {kitap.aciklama}</p>

                </div>

              </div>
            ) : null;
          })}


          </div>
        </div>
        
      </div>
      <div className="col-3 d-flex justify-content-end">
      <Cart reducerState={reducerState} dispatch={dispatch} />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kitap;
