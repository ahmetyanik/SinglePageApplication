import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function Mainpage({ books }) {

    console.log(books);
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />

    <div className="flex">
      {books.map((book, index) => {
        return <Card key={index} book={book} />;
      })}
    </div>
    </div>
    
  );
}

export default Mainpage;
