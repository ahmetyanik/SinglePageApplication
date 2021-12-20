import "./App.css";
import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import "./styles/footer.css";
import { Route, Routes } from "react-router-dom";
import Kitap from "./components/assets/Kitap";
import Aramasayfasi from "./components/assets/Aramasayfasi";

function App() {
  return (
    <div className="App">
     

      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/:book" element={<Kitap />} />
        <Route path="/arama/:book" element={<Aramasayfasi />} />
      </Routes>

    </div>
  );
}

export default App;
