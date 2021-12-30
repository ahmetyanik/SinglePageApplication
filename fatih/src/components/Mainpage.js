import React from "react";
import Country from "./Country";
import Navbar from "./Navbar";

function Mainpage({ countries }) {
  console.log(countries);

  return (
    <div>
      <Navbar   />
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {countries.map((country, index) => {
          return <Country key={index} country={country}  />;
        })}
      </div>
    </div>
  );
}

export default Mainpage;
