import logo from './logo.svg';
import './App.css';
import Vergleichungclass from './components/Vergleichung/Vergleichungclass';
import Vergleichungfunc from './components/Vergleichung/Vergleichungfunc';
import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      <Vergleichungclass/>
      <Vergleichungfunc/>
      <Fetch/>
    </div>
  );
}

export default App;
