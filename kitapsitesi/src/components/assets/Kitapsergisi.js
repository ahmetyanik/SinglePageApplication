import React from "react";
import { Link } from "react-router-dom";

function Kitapsergisi({ kitaplar }) {
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="d-flex justify-content-center flex-wrap border mt-3 p-2"
        style={{ width: "70vw" }}
      >
        {kitaplar.map((kitap, index) => {
          return (
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
                <Link to={`${kitap.kitapismi}`}>
                  
                  <button className="btn btn-primary">{kitap.kitapismi}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kitapsergisi;
