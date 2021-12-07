import './App.css';
import {useReducer} from "react";


function reducer(state,action){

  switch (action.type) {
    case "green":
      
      return {...state, backgroundColor:"green", color: "yellow", fontSize :"40px", styleName :"green style"}
  
    case "blue" :

    return {...state, backgroundColor:"blue", color :"red" , fontSize :"100px" , styleName :"blue style"}

    default:
      return state;
  }

}


const initialState = {

  backgroundColor :"white",
  color :"black",
  fontSize : "16px",
  styleName :"Ohne style",
  array : [
    {schule: "Hasengrund"}
  ]
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log(state);

  return (
    <div className="App" style={{minHeight:"100vh" , backgroundColor:`${state.backgroundColor}`}}>


    <button onClick={()=>dispatch({type:"green"})}>GREEN STYLE</button>

    <button onClick={()=>dispatch({type:"blue"})}>BLUE STYLE</button>
     
    <h1 style={{fontSize:`${state.fontSize}`, color:`${state.color}`}}>Mein style ist {state.styleName} </h1>


    </div>
  );
}

export default App;
