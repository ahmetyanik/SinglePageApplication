import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Country from "./components/Country";
import Countrypage from "./components/Countrypage";
import Mainpage from "./components/Mainpage";

function App() {
  const API_URL = "https://restcountries.com/v3.1/all";

  const countryData = async function getData() {
    const data = await fetch(API_URL);
    const dataJson = await data.json();

    return dataJson;
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryData().then((data) => setCountries(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mainpage countries={countries} />} />
        <Route path="/country/:countryname" element={<Countrypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
