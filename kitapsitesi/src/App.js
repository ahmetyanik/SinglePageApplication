import './App.css';
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import "./styles/footer.css";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Mainpage/>
     <Footer/>
    </div>
  );
}

export default App;
