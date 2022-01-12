import logo from './logo.svg';
import './App.css';
import Vergleichungclass from './components/Vergleichung/Vergleichungclass';
import Vergleichungfunc from './components/Vergleichung/Vergleichungfunc';
import Fetch from './components/Fetch';
import Counter from './components/Vergleichung/Counter';
import { useState } from 'react';

function App() {

  const [isVisible,setIsVisible] = useState(true);

  


  return (
    <div className="App">
      <Vergleichungclass/>
      <Vergleichungfunc/>

      {isVisible && <Counter/>}
      <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
      <Fetch/>
    </div>
  );
}

export default App;
