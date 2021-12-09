import React, { useReducer } from "react";
import AnimalCard from "./AnimalCard";
import Controls from "./Controls";

const reducer = (state, action) => {
  const newAnimal = action.payload.newAnimal;

  if (action.type === "add") {
    const array = [...state];

    array.push(newAnimal);

    return array;
  }

  if (action.type === "delete") {
    const newArray = [...state];

    newArray.splice(action.payload.index, 1);

    return newArray;
  }
};

function Main() {
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="mt-2 ">
      <h1>Animals</h1>
      <Controls dispatch={dispatch} />

      <div className="d-flex justify-content-around flex-wrap ">
        {state.map((animal, index) => {
          return (
            <AnimalCard
              key={index}
              animal={animal}
              dispatch={dispatch}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
