import { useReducer } from 'react';
import './App.css';
import Controls from './components/Controls';
import Header from './components/Header';
import Table from './components/Table';
import Viewer from './components/Viewer';

function reducer(state,action){

    if(action.type==="add"){

    
    const newArray = [...state];

    newArray.push(action.payload.card);

    return newArray;
      
    }

    if(action.type==="delete"){

      const newArray = [...state];

      newArray.splice(action.payload.index,1)

      return newArray;
    }

    if(action.type==="toogle"){

     
      state[action.payload.index].isFront = action.payload.isFront;
      
      return [...state]
    }

}


function App() {

  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState)

  

  return (
    <div className="App">
      <Header/>
      <Table state={state} dispatch={dispatch}/>
      <Controls dispatch={dispatch}/>
      <hr/>
      <Viewer state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
