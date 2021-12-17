import { useState } from "react";
import "./App.scss";
import TodoInput from "./TodoInput";

function App() {

  const [appName,setAppName] = useState("");


  const addTodo = (name) => {
    
    setAppName(name);

 
    // TODO -> füge die Aufgabe hinzu
  };

  return (
    <div className="App" style={{backgroundColor:"red", padding:"50px"}}>
    {appName}
      <TodoInput text="Add Todo" onButton={addTodo} />
    </div>
  );
}

export default App;
