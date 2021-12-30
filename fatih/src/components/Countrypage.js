import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Countrypage() {

    const [country, setCountry] = useState({});


   const params= useParams();
   console.log(params);

   const Country_API_URL = `https://restcountries.com/v2/name/${params.countryname}`;

   async function  countryApi(){

    const countryData = await fetch(Country_API_URL);
    const countryDataJSON = await countryData.json();
    setCountry(countryDataJSON[0]);


   }
   
   useEffect(()=>{
    countryApi(); 
   },[])

   console.log(country);

  return (
    <div >
      <Navbar  />
      <div style={{ minHeight: "90vh" }}  className="d-flex justify-content-center align-items-center">
        <div class="card mb-3" style={{height:"50vh", maxWidth: "1840px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={country.flag} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{country.name}</h5>
                <p class="card-text">
                  {country.nativeName}
                </p>
                <p class="card-text">
                  <small class="text-muted">{country.population}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countrypage;
