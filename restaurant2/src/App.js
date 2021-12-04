import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [urunler, setUrunler] = useState([]);

  async function verileriAl() {
    const veriler = await fetch("./api/allmenu.json");

    const verilerArray = await veriler.json();

    setUrunler(verilerArray);
  }

  useEffect(() => {
    verileriAl();
  }, []);

  return (
    <div className="App container d-flex justify-content-center align-items-center flex-wrap">

  <Link to="/kahvalti">Kahvaltilar</Link>

      {urunler.map((urun, index) => {
        return (
          <div className="card m-2" style={{width:"18rem"}}>
            <img src={urun.photo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{urun.name}</h5>
              <p className="card-text">
                {urun.content}
              </p>
             <h3>{urun.preis}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
