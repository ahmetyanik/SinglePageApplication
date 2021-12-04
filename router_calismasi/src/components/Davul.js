import React from "react";
import { Link } from "react-router-dom";

function Davul() {
  return (
    <div>
      <div style={{ minHeight: "100vh", backgroundColor: "yellow" }}>
        Burasi Davul Sayfasi
        <Link to="/">Anasayfa</Link>
      </div>
    </div>
  );
}

export default Davul;
