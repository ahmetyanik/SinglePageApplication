import React from "react";

function Controls({dispatch}) {

    function getDataFromInputs(){

        const front = document.querySelector("#front");
        const back = document.querySelector("#back");

        const data = {
            front : front.value,
            back : back.value,
            isFront : true
        }


        front.value = "";
        back.value = "";

        dispatch({type:"add",payload:{card:data}})
    }

  return (
    
      <div>
        <input id="front" placeholder="Front of Card" />
        <input id="back" placeholder="Back of Card" />
        <button onClick={getDataFromInputs}>Add Card</button>
      </div>
   
  );
}

export default Controls;
