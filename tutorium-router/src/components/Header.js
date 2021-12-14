import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h2>Welcome to the color factory</h2>
      <Link to="/colors/new">Add a color</Link>
    </div>
  );
}

export default Header;
