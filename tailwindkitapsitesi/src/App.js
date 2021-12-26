import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Bookpage from "./components/Bookpage";
import Mainpage from "./components/Mainpage";

function App() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const booksJSON = await fetch("./books.json");

    const books = await booksJSON.json();

    setBooks(books);

    console.log(books);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage books={books} />} />
        <Route path="/book/:bookname" element={<Bookpage books={books} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
