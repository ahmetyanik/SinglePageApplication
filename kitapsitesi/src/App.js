import "./App.css";
import Mainpage from "./components/Mainpage";
import "./styles/footer.css";
import { Route, Routes } from "react-router-dom";
import Kitap from "./components/assets/Kitap";
import Aramasayfasi from "./components/assets/Aramasayfasi";
import Kategori from "./components/assets/Kategori";
import { useReducer } from "react";
import alertify from "alertifyjs"


function reducer(state,action){

  if(action.type==="add"){

    alertify.success(action.payload.kitap.kitapismi + " eklendi.",1);
    return [...state,action.payload.kitap]
  }

}


const initialState = [];


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state);

  return (
    <div className="App">
     

      <Routes>
        <Route exact path="/" element={<Mainpage reducerState = {state} dispatch={dispatch} />}/>
        <Route path="/book/:book" element={<Kitap reducerState = {state} dispatch={dispatch} />} />
        <Route path="/arama" element={<Aramasayfasi />} />
        <Route path="/kategori/:tur" element={<Kategori />} />
      </Routes>

    </div>
  );
}

export default App;
