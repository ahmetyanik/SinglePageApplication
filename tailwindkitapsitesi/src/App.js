import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Mainpage from './components/Mainpage';

function App() {

  const [state, setstate] = useState([])


  async function getBooks(){

    const booksJSON = await fetch("./books.json");

    const books = await booksJSON.json();

    setstate(books)

    console.log(books);
  }

  useEffect(()=>{
    getBooks()
  },[]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
