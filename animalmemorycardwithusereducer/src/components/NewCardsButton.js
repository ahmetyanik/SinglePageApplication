import React from 'react'

function NewCardsButton({dispatch}) {

async function getDataFromApi(){

    const animals = await fetch("./animal.json");
  
    const animalsArray = await animals.json();
  
    dispatch({type:"init", payload:{animals: animalsArray}})
  }


    return (
        <div>
            <button onClick={getDataFromApi} className='btn btn-info text-light'>New Game</button>
        </div>
    )
}

export default NewCardsButton
