import { useReducer } from 'react';
import './App.css';
import GameArea from './components/GameArea';
import Header from './components/Header';
import NewCardsButton from './components/NewCardsButton';

function reducer(state,action){

  if(action.type==="init"){

    return action.payload.animals;
  }

  if(action.type==="setCard"){

    const newArray = [...state];

  

    console.log(newArray);
    
    return newArray;
  }

}

const initialState = [];





function App() {


  const [state, dispatch] = useReducer(reducer, initialState)



  console.log(state);

  return (
    <div className="App">
      <Header/>
      <NewCardsButton state={state} dispatch={dispatch}/>
      <GameArea state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
