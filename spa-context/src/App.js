import { useState } from "react";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import DataStore from "./DataStore";

function App() {
  const [userName, setUserName] = useState("Maxim");

  return (
    <div className="App">
      <DataStore.Provider value={{userName}}>
        <Header />
        <Article />
      </DataStore.Provider>
    </div>
  );
}

export default App;
