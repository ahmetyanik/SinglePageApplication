import React from "react";
import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <div className="m-1">
      <div class="card" style={{ width: "18rem" }}>
        <img src={country.flags.png} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{country.capital}</h5>
          <p class="card-text">{country.continents[0]}</p>
          <Link to={country.name.common}>
            <a href="#" class="btn btn-primary">
              {country.name.common}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Country;
