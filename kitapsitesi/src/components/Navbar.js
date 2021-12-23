import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);

  async function kitaplariAl() {
    const kitaplarJSON = await fetch("/kitaplar.json");
    const kitaplarArray = await kitaplarJSON.json();

    setKitaplar(kitaplarArray);

    const newArray = [];

    kitaplarArray.forEach((kitap) => {
      if (!newArray.includes(kitap.kategori)) {
        newArray.push(kitap.kategori);
      }
    });

    setKategoriler(newArray);
  }

  useEffect(() => kitaplariAl(), []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"}>
            <p className="navbar-brand" href="#">
              KITAP SITESI
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {kategoriler.map((tür, index) => {
                    return (
                      <Link key={index} to={`/kategori/${tür}`}>
                        <li>
                          <div className="dropdown-item" href="#">
                            {tür}
                          </div>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form
              action="/arama"
              id="aranan"
              className="d-flex"
            >
              <input
                name="kitap"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                id="arama"
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
