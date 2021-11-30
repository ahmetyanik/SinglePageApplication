import React, { useEffect, useState } from "react";
import TierCard from "./TierCard";

function Main() {
    
  const [tier, setTier] = useState([]);


  async function getAnimals() {
    const animals = await fetch("./Animals.json");

    const animalsArray = await animals.json();

    setTier(animalsArray);
  }

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div style={{ minHeight: "90vh" }} className="d-flex flex-wrap justify-content-center">
      {tier.map((element) => {
        return (
          <TierCard
            name={element.name}
            image={element.image}
            content={element.content}
            link={element.link}
          />
        );
      })}
    </div>
  );
}

export default Main;
