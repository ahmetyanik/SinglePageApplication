import React, { useState } from "react";

function Controls({ dispatch }) {
  const [animalState, setAnimalState] = useState({
    name: "",
    content: "",
    image: "",
    link: ""
  });

  function inputChange(e) {
    let dataVonInput = e.target.value;

    setAnimalState({ ...animalState, [e.target.name]: dataVonInput });
  }

  function sendDataToMain() {
    dispatch({ type: "add", payload: { newAnimal: animalState } });

    deleteAllInputArea();
  }

  function deleteAllInputArea(e) {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((element) => {
      element.value = "";
    });
  }

  return (
    <div>
      <div>
        <div>
          <input
            name="name"
            onChange={inputChange}
            placeholder="Animal Name"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            name="content"
            onChange={inputChange}
            placeholder="Animal Content"
            autocomplete="off"
          />
          <label></label>
        </div>
        <div>
          <input
            name="image"
            onChange={inputChange}
            placeholder="Animal Image"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            name="link"
            onChange={inputChange}
            placeholder="Animal Link"
            autocomplete="off"
          />
        </div>

        <button onClick={sendDataToMain} className="btn btn-success mt-2">
          SAVE THE ANIMAL
        </button>
      </div>
    </div>
  );
}

export default Controls;
