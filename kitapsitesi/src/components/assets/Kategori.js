import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Cart from "./Cart";

function Kategori({ reducerState, dispatch }) {
  const params = useParams();

  console.log(params);

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
    <div>
      <Navbar />

      <div className="row">
        <div className="col-9 d-flex justify-content-center flex-wrap">
          {kitaplar.map((kitap, index) => {
            console.log(kitap, params.tur);
            return kitap.kategori === params.tur ? (
              <div
                key={index}
                className="card m-1"
                style={{ width: "18rem", height: "30rem" }}
              >
                <img
                  src={kitap.resimlinki}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "50%" }}
                />
                <div id="card-body" className="card-body">
                  <h5 className="card-title">{kitap.kitapismi}</h5>
                  <p className="card-text">{kitap.yayinevi}</p>
                  <Link to={`/book/${kitap.kitapismi}`}>
                    <button className="btn btn-primary">
                      {kitap.kitapismi}
                    </button>
                  </Link>
                  <div></div>
                  <button
                    onClick={() => {
                      dispatch({ type: "add", payload: { kitap: kitap } });
                    }}
                    className="btn btn-success mt-2"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ) : null;
          })}
        </div>
        <div className="col-3">
          <Cart
            reducerState={reducerState}
            dispatch={dispatch}
            kitaplar={kitaplar}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kategori;
