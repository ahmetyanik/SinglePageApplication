import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react'



// funktion die fürs Updaten des Satet verantwortlich
//                      aktueller state,  object mit infos zur Aktion

function counterReducer(state, action){

    const newCount = state.count + (action.type === "add" ? 1 : -1);
    const newState = {...state,count: newCount}    
    newState.limitReached = newCount >= state.limit  
    return newState; 

} 

function App() {

  const [state,dispatch] = useReducer(counterReducer,{
    count : 0,
    limit : 20,
    limitReached : false
  });

 

  return (
    <div className={`App ${state.limitReached ? "bg-danger" : null}`}>

    <div>{state.count}</div>

    <div>
    {/*                    Reducer verwenden - Infos zur Aktion übergeben */}
    <button onClick={() => dispatch({type:"add"})}>+</button>
    <button onClick={() => dispatch({type:"subtract"})}>-</button>
    
    </div>     
    </div>
  );
}

export default App;
