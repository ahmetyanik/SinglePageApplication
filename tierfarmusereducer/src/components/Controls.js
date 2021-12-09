import React, { useState } from "react";

function Controls({dispatch}) {
  const [animalState, setAnimalState] = useState({
    name: "",
    content: "",
    image: "",
    link: ""
  });

  function inputChange(e) {
    const dataVonInput = e.target.value;

    setAnimalState({ ...animalState, [e.target.name]: dataVonInput });
  }

  function sendDataToMain() {

    dispatch({type:"add",payload:{newAnimal:animalState}})
    console.log(animalState);
  }


  return (
    <div>
      <div >
        <div>
          <input name="name" 
          onChange={inputChange} 
          placeholder="Animal Name" />
        </div>
        <div>
          <input
            name="content"
            onChange={inputChange}
            placeholder="Animal Content"
          />
          <label></label>
        </div>
        <div>
          <input
            name="image"
            onChange={inputChange}
            placeholder="Animal Image"
          />
        </div>
        <div>
          <input name="link" onChange={inputChange} placeholder="Animal Link" />
        </div>

        <button onClick={sendDataToMain}  className="btn btn-success mt-2">SAVE THE ANIMAL</button>
      </div>
    </div>
  );
}

export default Controls;
