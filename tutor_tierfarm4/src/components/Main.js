import React, { useReducer } from "react";
import AnimalCard from "./AnimalCard";
import Controls from "./Controls";

const reducer = (state, action) => {
  if (action.type === "add") {
    return [...state, action.payload.newAnimal];
  }

  if (action.type === "delete") {
    const newArray = [...state];

    newArray.splice(action.payload.index, 1);

    return newArray;
  }
};

const initialState = [];

function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <Controls dispatch={dispatch} />

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
  );
}

export default Main;
