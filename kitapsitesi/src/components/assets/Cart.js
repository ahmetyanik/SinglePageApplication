import React from "react";
import { Link } from "react-router-dom";

function Cart({ reducerState, dispatch }) {
  
  const newObject = reducerState.reduce(function (pre, cur) {
    if (!pre[cur.kitapismi]) {
      pre[cur.kitapismi] = 1;
    } else {
      pre[cur.kitapismi]++;
    }
    console.log(pre);

    return pre;
  }, {});

  function genelToplam() {
    let toplam = 0;

    reducerState.forEach((element) => {
      console.log(element);

      toplam += element.fiyat;
    });

    return toplam;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">CART</div>
        <ul className="list-group list-group-flush">
          {Object.keys(newObject).map((kitap, index) => {
            return (
              <li className="list-group-item d-flex justify-content-lg-between">
              <span>
                <Link to={`/book/${kitap}`}>
                  <span>{kitap}</span>
                </Link>
                <span className="badge bg-info text-dark">
                  {newObject[kitap]}
                </span>
                </span>
                <span className="d-flex">
                <i onClick={()=>{
                  
                  console.log(kitap)
                  dispatch({type:"add", payload:{kitap:kitap}})
                  
                  }} class="fas fa-plus mx-4"/>
                <i class="fas fa-minus"></i>
                </span>
              </li>
            );
          })}

          <li style={{listStyle:"none"}} >Genel Toplam:{genelToplam()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
