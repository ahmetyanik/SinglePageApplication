
import './App.css';
import {useReducer} from "react";


function reducer(state,action){

  switch (action.type) {
    case "green":
    
    return {...state, backgroundColor:"green", fontSize : "30px", color:"yellow"};

    case "blue":

    return {...state, backgroundColor:"blue", fontSize:"40px", color:"black"}
  
    default:
      return state;
  }

}


const initialState =  {

  backgroundColor :"white",
  fontSize : "16px",
  color : "black",
  array : []
}
 


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state);

  return (
    <div className="App d-flex justify-content-center align-items-center flex-column" style={{minHeight:"100vh",backgroundColor:`${state.backgroundColor}`}}>


    <button onClick={()=>dispatch({type:"green"})}>MAKE GREEN STYLE</button>


    
    <button onClick={()=>dispatch({type:"blue"})}>MAKE BLUE STYLE</button>
     
    <h1 style={{color:`${state.color}` ,fontSize:`${state.fontSize}`}}>I'M {state.backgroundColor} STYLE </h1>


    </div>
  );
}

export default App;
