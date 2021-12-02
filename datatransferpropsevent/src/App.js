import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {

  const [myName,setMyName] = useState();

  function ismiDegistir(param){

    setMyName(param);
  }
  
 

  return (
    <div className="App" style={{minHeight:"50vh",backgroundColor:"red",padding:"10px"}}>

    Hier ist Mother

    <Child onButton = {ismiDegistir} />
      
    </div>
  );
}

export default App;
