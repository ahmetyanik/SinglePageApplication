import React, { useEffect, useState } from "react";
import TierCard from "./TierCard";

function Main() {
  const [animals, setAnimals] = useState([]);

  async function getAnimals() {
    const animals = await fetch("../Animals.json");
    const animalsJSON = await animals.json();

    setAnimals(animalsJSON);
  }

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container d-flex flex-wrap" style={{ minHeight: "90vh" }}>
      {animals.map((animal,index) => {

        console.log(animal)
        return <TierCard
        key = {index}
        resim = {animal.image}
        baslik = {animal.name}
        icerik = {animal.content}
        link = {animal.vikipedia}        
         />;
      })}
    </div>
  );
}

export default Main;
