import React, { useEffect, useState } from "react";

function Fetch() {
  const [holidays, setHolidays] = useState([]);
  const [jahr, setJahr] = useState(2021);
  const [country,setCountry]=useState("DE");

  console.log(country);

  useEffect(() => {    

    fetch(`https://date.nager.at/api/v2/publicholidays/${jahr}/${country}`)
      .then((res) => res.json())
      .then((res) => setHolidays(res));
  }, [jahr,country]);

  function getYear(e) {
    e.preventDefault();
    const input1 = document.querySelector("#input1");

    let value = input1.value;

    setJahr(value);
  }

  function getCountry(e) {
    e.preventDefault();
    const input2 = document.querySelector("#input2");

    let value = input2.value;

    console.log(holidays);

    setCountry(value);
  }



  return (
    <div className="bg-info" style={{minHeight:"60vh"}}>
    <h3 className="bg-dark text-light">"state updating with useEffect"</h3>
      <form onSubmit={getYear}>
        <input id="input1" type="text" placeholder="Year" />
      </form>
      <form onSubmit={getCountry}>
        <input id="input2" type="text" placeholder="Write country code like DE..." />
      </form>

      { holidays.map((holiday, index) => {
        return (
          <div className="fs-5" key={index}>
            {holiday.date}.....{holiday.localName}
          </div>
        );
      })}
    </div>
  );
}

export default Fetch;
