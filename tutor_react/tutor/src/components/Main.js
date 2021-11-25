import React, { useState } from "react";

export default function Main() {
  const [personnen, setPersonnen] = useState(["ahmet", "siddik", "muhaned"]);

  function showPersonnen() {
    const main = document.querySelector("#main");
    main.innerText = "";

    personnen.forEach((e) => {
      const h2 = document.createElement("h2");

      h2.innerText = e;
      main.appendChild(h2);
    });
  }

  function addNewOne() {
    const input = document.querySelector("#input");

    const value = input.value;

    const newArray = [];

    personnen.forEach((e) => {
      newArray.push(e);
    });

    newArray.push(value);

    setPersonnen(newArray);
  }

  return (
    <div className="bg-info text-white p-5" style={{ minHeight: "80vh" }}>
      <button onClick={showPersonnen} className="btn btn-dark mx-2">
        SHOW ALL PERSONNEN
      </button>

      <input id="input" />
      <button onClick={addNewOne} className="btn btn-success mx-2">
        ADD NEW PERSON
      </button>

      <div id="main"></div>
    </div>
  );
}
