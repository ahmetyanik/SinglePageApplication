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
  
  if(action.type==="plusFromCart"){


    alertify.success(action.payload.kitap[0].kitapismi + " eklendi.",1);
    return [...state,action.payload.kitap[0]]
  }
  
  if(action.type==="minusFromCart"){

    alertify.error(action.payload.kitap[0].kitapismi + " cikarildi.",1)


    const newArray = [...state];

    console.log(action.payload.index);
    console.log(action.payload.kitap);

    const bulunanIndex = [];
    
    for(let i=0;i<state.length;i++){
      
      if(state[i].kitapismi===action.payload.kitap[0].kitapismi){
        
       bulunanIndex.push(i);
       break;

      }
    }

    newArray.splice(bulunanIndex[0],1);
   
    console.log(newArray);
 

    return newArray
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
        <Route path="/kategori/:tur" element={<Kategori reducerState = {state} dispatch={dispatch} />} />
      </Routes>

    </div>
  );
}

export default App;
