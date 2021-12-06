import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [name,setName] = useState("");

  const inputChange = (e)  =>{

    const val = e.target.value;
    setName(val);
  }

  return (
    <div className="App">
      
      <h1>Hallo {name}</h1>

      <input onChange={inputChange} type="text"/>

    </div>
  );
}

export default App;
