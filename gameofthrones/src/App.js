import { useEffect, useState } from 'react';
import './App.css';
import Mainpage from './components/Mainpage';
import { Route, Routes } from "react-router-dom";
import Book from './components/Book';

function App() {

  const [state, setState] = useState([])
  const [images,setImages] = useState([]);

  async function getData(){

    const imagesJSON = await fetch("./images.json");
    const kitaplarJSON = await fetch("https://www.anapioficeandfire.com/api/books");

    const images = await imagesJSON.json();
    const kitaplar = await kitaplarJSON.json();


    setImages(images)
    setState(kitaplar);
  }
  
  useEffect(()=>getData(),[])

  
  

  return (
    <div className="App">

    <Routes>
    <Route exact path="/" element={<Mainpage state={state} images={images}/>}/>
    <Route path="/book/:bookname" element={<Book/>}/>

    

    </Routes>
     
    </div>
  );
}

export default App;
