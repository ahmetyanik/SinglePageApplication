import { useState } from 'react';
import './App.css';
import Child from './Child';

function Mother() {

  const [myName,setMyName] = useState("");

  const ismiDegistir = (param)=>{

    setMyName(param);
  }
  
 

  return (
    <div className="App" style={{minHeight:"50vh",backgroundColor:"red",padding:"10px"}}>

    Hier ist Mother
    {myName}

    <Child onButton = {ismiDegistir} />
      
    </div>
  );
}

export default Mother;
