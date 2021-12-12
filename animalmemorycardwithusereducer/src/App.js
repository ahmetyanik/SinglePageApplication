import { useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import NewCardsButton from './components/NewCardsButton';

function reducer(state,action){


}

const initialState = [];





function App() {


  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state);

  return (
    <div className="App">
      <Header/>
      <NewCardsButton/>
    </div>
  );
}

export default App;
